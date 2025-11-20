(function () {
  const CONFIG_SELECTOR = '[data-supabase-config]';
  const eventName = 'csft-auth-change';
  const readyEventName = 'csft-auth-ready';
  const configNode = document.querySelector(CONFIG_SELECTOR);

  if (!configNode) {
    console.warn('Supabase config node not found. Add an element with data-supabase-config attributes.');
    return;
  }

  const supabaseUrl = (configNode.dataset.supabaseUrl || '').trim();
  const supabaseAnonKey = (configNode.dataset.supabaseAnonKey || '').trim();
  const redirectPath = (configNode.dataset.supabaseRedirect || '/products.html').trim();

  if (!window.supabase) {
    console.warn('Supabase library not loaded. Include @supabase/supabase-js before auth.js.');
    return;
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or anon key missing. Populate data-supabase-url and data-supabase-anon-key on the config node.');
    return;
  }

  const client = window.supabase.createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });

  const state = {
    ready: false,
    session: null,
    user: null,
    memberships: [],
    lastError: null,
  };

  const listeners = new Set();

  function snapshot() {
    return {
      ready: state.ready,
      session: state.session,
      user: state.user,
      memberships: Array.isArray(state.memberships) ? [...state.memberships] : [],
      lastError: state.lastError,
    };
  }

  function dispatch(detail) {
    try {
      window.dispatchEvent(new CustomEvent(eventName, { detail }));
    } catch (err) {
      console.warn('CustomEvent dispatch failed', err);
    }
  }

  function notify() {
    const detail = snapshot();
    listeners.forEach((cb) => {
      try {
        cb(detail);
      } catch (err) {
        console.error('csftAuth listener error', err);
      }
    });
    dispatch(detail);
  }

  function emitReady() {
    const detail = snapshot();
    try {
      window.dispatchEvent(new CustomEvent(readyEventName, { detail }));
    } catch (err) {
      console.warn('csft-auth-ready dispatch failed', err);
    }
  }

  async function fetchMemberships(accessToken) {
    if (!accessToken) {
      state.memberships = [];
      return;
    }
    try {
      const res = await fetch('/api/membership-status', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) {
        state.memberships = [];
        return;
      }
      const payload = await res.json();
      state.memberships = Array.isArray(payload.memberships) ? payload.memberships : [];
    } catch (err) {
      state.lastError = err;
      console.error('Membership fetch failed', err);
    }
  }

  async function syncSession(session) {
    state.session = session || null;
    state.user = session?.user || null;
    if (session?.access_token) {
      await fetchMemberships(session.access_token);
    } else {
      state.memberships = [];
    }
    notify();
  }

  function extractRedirectUrl() {
    const origin = window.location.origin;
    return origin + redirectPath;
  }

  async function init() {
    const { data, error } = await client.auth.getSession();
    if (!error) {
      await syncSession(data.session || null);
    } else {
      state.lastError = error;
      console.error('Supabase session fetch failed', error);
    }
    state.ready = true;
    emitReady();
  }

  client.auth.onAuthStateChange(async (_event, session) => {
    await syncSession(session);
  });

  const api = {
    client,
    onChange(callback) {
      if (typeof callback === 'function') {
        listeners.add(callback);
        if (state.ready) {
          callback(snapshot());
        }
      }
      return () => listeners.delete(callback);
    },
    getState: snapshot,
    isReady: () => state.ready,
    getAccessToken: () => state.session?.access_token || null,
    async refreshMemberships() {
      if (!state.session?.access_token) {
        state.memberships = [];
        notify();
        return;
      }
      await fetchMemberships(state.session.access_token);
      notify();
    },
    async signInWithGoogle() {
      return client.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: extractRedirectUrl(),
          skipBrowserRedirect: false,
        },
      });
    },
    async signOut() {
      await client.auth.signOut();
      await syncSession(null);
    },
  };

  window.csftAuth = api;
  init();
})();
