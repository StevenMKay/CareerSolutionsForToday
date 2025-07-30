document.addEventListener('DOMContentLoaded', () => {
  let pageType = null;
  let sidebar, searchInput, resultsContainer, getAllItems, groupByProgramAndTopic, placeholderText;

  // Scroll detection variables
  let lastScrollTop = 0;
  let scrollDirection = 'up';
  const stickyFilter = document.querySelector('.sticky-filter');

  // Section collapse state
  let sectionCollapseState = {};

  if (document.getElementById('learnSidebar')) {
    pageType = 'learn';
    sidebar = document.getElementById('learnSidebar');
    searchInput = document.getElementById('learnSearch');
    resultsContainer = document.getElementById('learnResults');
    getAllItems = () => window.contentItems || [];
    groupByProgramAndTopic = groupContentByProgramAndTopic;
    placeholderText = 'Use the sidebar to select a program/topic, or type in the filter box to find learning resources.';
  } else if (document.getElementById('videosSidebar')) {
    pageType = 'videos';
    sidebar = document.getElementById('videosSidebar');
    searchInput = document.getElementById('videosSearch');
    resultsContainer = document.getElementById('videosResults');
    getAllItems = () => (window.contentItems || []).filter(item =>
      (Array.isArray(item.section) && item.section.includes('Videos')) || item.section === 'Videos'
    );
    groupByProgramAndTopic = groupVideosByProgramAndTopic;
    placeholderText = 'Use the sidebar to select a program/topic, or type in the filter box to find instructional videos.';
  } else if (document.getElementById('templatesSidebar')) {
    pageType = 'templates';
    sidebar = document.getElementById('templatesSidebar');
    searchInput = document.getElementById('templateSearch');
    resultsContainer = document.getElementById('templateResults');
    getAllItems = () => (window.contentItems || []).filter(item =>
      (Array.isArray(item.section) && item.section.includes('Templates')) || item.section === 'Templates'
    );
    groupByProgramAndTopic = groupTemplatesByProgramAndTopic;
    placeholderText = 'Use the sidebar to select a program/topic, or type in the filter box to find templates.';
  }

  if (!sidebar) return;

  let sidebarState = {};
  let currentProgram = null;
  let currentTopic = null;
  let lastScrollTopic = null;

  // Scroll detection for search bar visibility
  function initScrollDetection() {
    if (!stickyFilter) return;

    window.addEventListener('scroll', () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scrolling down
        if (scrollDirection !== 'down') {
          scrollDirection = 'down';
          stickyFilter.classList.add('scroll-hidden');
        }
      } else if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        if (scrollDirection !== 'up') {
          scrollDirection = 'up';
          stickyFilter.classList.remove('scroll-hidden');
        }
      }
      
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
  }

  function isMobile() {
    return window.innerWidth <= 700;
  }

  function groupContentByProgramAndTopic(items) {
    const groups = {};
    items.forEach(item => {
      const program = item.program?.name || 'Other';
      const topic = item.topic || 'General';
      if (!groups[program]) groups[program] = { image: item.program?.image || '', topics: {} };
      if (!groups[program].topics[topic]) groups[program].topics[topic] = [];
      groups[program].topics[topic].push(item);
    });
    return groups;
  }
  function groupVideosByProgramAndTopic(items) { return groupContentByProgramAndTopic(items); }
  function groupTemplatesByProgramAndTopic(items) { return groupContentByProgramAndTopic(items); }

  function highlightMatches(text, filter) {
    if (!filter) return text;
    const regex = new RegExp(`(${filter.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight-match">$1</span>');
  }

  // NEW: Function to render related links (supports both array and single object)
  function renderRelatedLinks(related, filter = '') {
    if (!related) return '';
    
    // Handle both array and single object formats
    const relatedArray = Array.isArray(related) ? related : [related];
    
    return relatedArray.map(item => 
      `<p><a href="${item.url}" target="_blank">${highlightMatches(item.text, filter)}</a></p>`
    ).join('');
  }

  // Section order and sort helper
  const SECTION_ORDER = ['Videos', 'Templates', 'Practice', 'Documents', 'Other', 'Learning'];
  function sectionSort(a, b) {
    // Remove "Learning," and ",Learning" for sorting
    const cleanA = a.replace(/^Learning,/, '').replace(/,Learning$/, '').trim();
    const cleanB = b.replace(/^Learning,/, '').replace(/,Learning$/, '').trim();
    const idxA = SECTION_ORDER.indexOf(cleanA) === -1 ? 999 : SECTION_ORDER.indexOf(cleanA);
    const idxB = SECTION_ORDER.indexOf(cleanB) === -1 ? 999 : SECTION_ORDER.indexOf(cleanB);
    return idxA - idxB;
  }

  // Section collapse functionality
  function toggleSection(sectionId) {
    const isCollapsed = sectionCollapseState[sectionId] || false;
    sectionCollapseState[sectionId] = !isCollapsed;
    
    const header = document.querySelector(`[data-section-id="${sectionId}"]`);
    const content = document.querySelector(`[data-section-content="${sectionId}"]`);
    
    if (header && content) {
      if (sectionCollapseState[sectionId]) {
        header.classList.add('collapsed');
        content.classList.add('collapsed');
        content.style.maxHeight = '0px';
      } else {
        header.classList.remove('collapsed');
        content.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // Reset to auto after animation
        setTimeout(() => {
          if (!content.classList.contains('collapsed')) {
            content.style.maxHeight = 'auto';
          }
        }, 400);
      }
    }
  }

  // Add section collapse handlers
  function addSectionCollapseHandlers() {
    document.querySelectorAll('.section-header[data-section-id]').forEach(header => {
      header.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = header.getAttribute('data-section-id');
        toggleSection(sectionId);
      });
    });
  }

  // Render all cards for a program, grouped by topic, with topic anchors
  function renderProgramCards(program, filter = '') {
    const groups = groupByProgramAndTopic(getAllItems());
    const topics = groups[program]?.topics || {};

    // 1. Gather all filtered items and group by section, then by topic
    const sectionGroups = {};
    Object.keys(topics).forEach(topic => {
      const filteredItems = topics[topic].filter(item => {
        // UPDATED: Support array of related items for search
        const searchText = [item.title, item.description, ...(Array.isArray(item.related) ? item.related.map(r => r.text) : item.related?.text ? [item.related.text] : [])].filter(Boolean).join(' ').toLowerCase();
        return !filter || searchText.includes(filter.toLowerCase());
      });
      filteredItems.forEach(item => {
        const section = item.section || 'Learning';
        if (!sectionGroups[section]) sectionGroups[section] = {};
        if (!sectionGroups[section][topic]) sectionGroups[section][topic] = [];
        sectionGroups[section][topic].push(item);
      });
    });

    let html = '';
    Object.keys(sectionGroups).sort(sectionSort).forEach(section => {
      let displaySection = section;
      if (displaySection.startsWith('Learning,')) {
        displaySection = displaySection.replace(/^Learning,/, '').trim();
      }
      if (displaySection.endsWith(',Learning')) {
        displaySection = displaySection.replace(/,Learning$/, '').trim();
      }
      if (displaySection === 'Learning' || displaySection === '') return; // skip header for pure Learning or empty

      const sectionId = `section-${displaySection.replace(/\\s+/g, '-').toLowerCase()}`;
      const isCollapsed = sectionCollapseState[sectionId] || false;
      
      html += `<h4 class="section-header${isCollapsed ? ' collapsed' : ''}" data-section-id="${sectionId}">
        ${displaySection}
        <span class="collapse-icon">${isCollapsed ? '▶' : '▼'}</span>
      </h4>`;
      html += `<div class="section-divider"></div>`;
      
      // Create section content wrapper
      let sectionContent = '';
      
      // Now, for each topic in this section:
      Object.keys(sectionGroups[section]).sort().forEach(topic => {
        const items = sectionGroups[section][topic];
        if (items.length > 0) {
          const topicId = `topic-${program.replace(/\\s+/g, '_')}-${topic.replace(/\\s+/g, '_')}`;
          sectionContent += `<div class="topic-anchor" id="${topicId}" style="padding-top: 1px; margin-top: -1px;"></div>`;
          sectionContent += `<h3 class="topic-header" data-topic="${topic}">${topic}</h3>`;
          items.forEach(item => {
            // UPDATED: Support array of related items for search
            const searchText = [item.title, item.description, ...(Array.isArray(item.related) ? item.related.map(r => r.text) : item.related?.text ? [item.related.text] : [])].filter(Boolean).join(' ').toLowerCase();
            
            // Check if this is a CSS item with demo code
            if (item.demoHtml && item.demoCss) {
              const uniqueId = Date.now() + Math.random();
              sectionContent += `
                <div class="css-interactive-card" data-search="${searchText}" data-topic="${topic ? topic : ''}">
                  <div class="css-demo-container">
                    <div class="css-demo-header">
                      <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                      <div class="info">
                        <h4>${highlightMatches(item.title, filter)}</h4>
                        <p>${highlightMatches(item.description, filter)}</p>
                        ${renderRelatedLinks(item.related, filter)}
                      </div>
                    </div>
                    
                    <div class="css-demo-content">
                      <!-- Live Preview -->
                      <div class="css-preview-section">
                        <h5>✨ Live Preview (Hover the card below):</h5>
                        <div class="css-live-preview" id="preview-${uniqueId}">
                          ${item.demoHtml}
                        </div>
                      </div>
                      
                      <!-- Code Editors -->
                      <div class="css-code-section">
                        <div class="css-code-buttons">
                          <button class="copy-btn" onclick="copyCode('html-${uniqueId}')">📋 Copy HTML</button>
                          <button class="copy-btn" onclick="copyCode('css-${uniqueId}')">📋 Copy CSS</button>
                          <button class="copy-btn" onclick="copyCode('both-${uniqueId}')">📋 Copy Both</button>
                        </div>
                        
                        <div class="code-editors">
                          <div class="code-editor-section">
                            <h6>HTML:</h6>
                            <textarea class="code-editor html-editor" id="html-${uniqueId}" oninput="updatePreview()">${item.demoHtml}</textarea>
                          </div>
                          
                          <div class="code-editor-section">
                            <h6>CSS:</h6>
                            <textarea class="code-editor css-editor" id="css-${uniqueId}" oninput="updatePreview()">${item.demoCss}</textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style>${item.demoCss}</style>
                </div>
              `;
            } else {
              // Regular card for non-CSS items
              sectionContent += `
                <div class="frosted-card" data-search="${searchText}" data-topic="${topic ? topic : ''}">
                  <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                  <div class="info">
                    <h4>${highlightMatches(item.title, filter)}</h4>
                    <p>${highlightMatches(item.description, filter)}</p>
                    ${renderRelatedLinks(item.related, filter)}
                  </div>
                </div>
              `;
            }
          });
        }
      });
      
      // Wrap section content with collapsible container
      html += `<div class="section-content${isCollapsed ? ' collapsed' : ''}" data-section-content="${sectionId}" style="max-height: ${isCollapsed ? '0px' : 'auto'}">
        ${sectionContent}
      </div>`;
    });

    resultsContainer.innerHTML = html || `<div style="color:#0b4f6c;font-size:20px;text-align:center;margin-top:40px;">No results found.</div>`;
    
    // Add collapse handlers after rendering
    setTimeout(() => {
      addSectionCollapseHandlers();
    }, 100);
    
    setupScrollTopicHighlight(program);
  }

  // Render all cards for the page (all programs), with highlight support
  function renderAllCards(items, filter = '') {
    let html = '';
    // Group items by section (default to 'Learning' if missing)
    const sectionGroups = {};
    items.forEach(item => {
      const section = item.section || 'Learning';
      if (!sectionGroups[section]) sectionGroups[section] = [];
      sectionGroups[section].push(item);
    });

    Object.keys(sectionGroups).sort(sectionSort).forEach(section => {
      let displaySection = section;
      if (displaySection.startsWith('Learning,')) {
        displaySection = displaySection.replace(/^Learning,/, '').trim();
      }
      if (displaySection.endsWith(',Learning')) {
        displaySection = displaySection.replace(/,Learning$/, '').trim();
      }
      if (displaySection === 'Learning' || displaySection === '') return; // skip header for pure Learning or empty
      
      const sectionId = `section-${displaySection.replace(/\\s+/g, '-').toLowerCase()}`;
      const isCollapsed = sectionCollapseState[sectionId] || false;
      
      html += `<h3 class="section-header${isCollapsed ? ' collapsed' : ''}" data-section-id="${sectionId}">
        ${displaySection}
        <span class="collapse-icon">${isCollapsed ? '▶' : '▼'}</span>
      </h3>`;
      html += `<div class="section-divider"></div>`;
      
      let sectionContent = '';
      sectionGroups[section].forEach(item => {
        // UPDATED: Support array of related items for search
        const searchText = [item.title, item.description, ...(Array.isArray(item.related) ? item.related.map(r => r.text) : item.related?.text ? [item.related.text] : [])].filter(Boolean).join(' ').toLowerCase();
        
        // Check if this is a CSS item with demo code
        if (item.demoHtml && item.demoCss) {
          const uniqueId = Date.now() + Math.random();
          sectionContent += `
            <div class="css-interactive-card" data-search="${searchText}">
              <div class="css-demo-container">
                <div class="css-demo-header">
                  <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                  <div class="info">
                    <h4>${highlightMatches(item.title, filter)}</h4>
                    <p>${highlightMatches(item.description, filter)}</p>
                    ${renderRelatedLinks(item.related, filter)}
                  </div>
                </div>
                
                <div class="css-demo-content">
                  <!-- Live Preview -->
                  <div class="css-preview-section">
                    <h5>✨ Live Preview (Hover the card below):</h5>
                    <div class="css-live-preview" id="preview-${uniqueId}">
                      ${item.demoHtml}
                    </div>
                  </div>
                  
                  <!-- Code Editors -->
                  <div class="css-code-section">
                    <div class="css-code-buttons">
                      <button class="copy-btn" onclick="copyCode('html-${uniqueId}')">📋 Copy HTML</button>
                      <button class="copy-btn" onclick="copyCode('css-${uniqueId}')">📋 Copy CSS</button>
                      <button class="copy-btn" onclick="copyCode('both-${uniqueId}')">📋 Copy Both</button>
                    </div>
                    
                    <div class="code-editors">
                      <div class="code-editor-section">
                        <h6>HTML:</h6>
                        <textarea class="code-editor html-editor" id="html-${uniqueId}" oninput="updatePreview()">${item.demoHtml}</textarea>
                      </div>
                      
                      <div class="code-editor-section">
                        <h6>CSS:</h6>
                        <textarea class="code-editor css-editor" id="css-${uniqueId}" oninput="updatePreview()">${item.demoCss}</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style>${item.demoCss}</style>
            </div>
          `;
        } else {
          // Regular card for non-CSS items
          sectionContent += `
            <div class="frosted-card" data-search="${searchText}">
              <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
              <div class="info">
                <h4>${highlightMatches(item.title, filter)}</h4>
                <p>${highlightMatches(item.description, filter)}</p>
                ${renderRelatedLinks(item.related, filter)}
              </div>
            </div>
          `;
        }
      });
      
      // Wrap section content with collapsible container
      html += `<div class="section-content${isCollapsed ? ' collapsed' : ''}" data-section-content="${sectionId}" style="max-height: ${isCollapsed ? '0px' : 'auto'}">
        ${sectionContent}
      </div>`;
    });

    resultsContainer.innerHTML = html || `<div style="color:#0b4f6c;font-size:20px;text-align:center;margin-top:40px;">No results found.</div>`;
    
    // Add collapse handlers after rendering
    setTimeout(() => {
      addSectionCollapseHandlers();
    }, 100);
  }

  function filterAndHighlightCards(filter) {
    if (currentProgram) {
      renderProgramCards(currentProgram, filter);
    } else {
      const filtered = getAllItems().filter(item => {
        // UPDATED: Support array of related items for search
        const searchText = [item.title, item.description, ...(Array.isArray(item.related) ? item.related.map(r => r.text) : item.related?.text ? [item.related.text] : [])].filter(Boolean).join(' ').toLowerCase();
        return !filter || searchText.includes(filter.toLowerCase());
      });
      renderAllCards(filtered, filter);
    }
  }

  function renderSidebar(groups) {
    if (isMobile()) return;
    let html = '<h2>Programs</h2>';
    Object.keys(groups).sort((a, b) => a.localeCompare(b)).forEach(program => {
      const expanded = sidebarState[program]?.expanded || false;
      html += `
        <div class="sidebar-program${currentProgram === program ? ' active-program' : ''}" data-program="${program}">
         ${window.PROGRAM_ICONS && window.PROGRAM_ICONS[program] ? `<img src="${window.PROGRAM_ICONS[program]}" alt="${program}">` : ''}
          <span>${program}</span>
          <span style="margin-left:auto;">${expanded ? '▼' : '▶'}</span>
        </div>
        <ul class="sidebar-topics${expanded ? ' expanded' : ''}" data-program="${program}" style="display:${expanded ? 'block' : 'none'};">
          ${Object.keys(groups[program].topics).sort((a, b) => a.localeCompare(b)).map(topic => {
            return `
              <li class="sidebar-topic" data-program="${program}" data-topic="${topic}">
                <a href="#program=${encodeURIComponent(program)}&topic=${encodeURIComponent(topic)}">${topic}</a>
              </li>
            `;
          }).join('')}
        </ul>
      `;
    });
    document.getElementById('desktopSidebar').innerHTML = html;
  }

  function setupScrollTopicHighlight(program) {
    window.removeEventListener('scroll', scrollTopicListener);
    window.addEventListener('scroll', scrollTopicListener);

    function scrollTopicListener() {
      const topicHeaders = Array.from(resultsContainer.querySelectorAll('.topic-header'));
      let found = null;
      const scrollY = window.scrollY || window.pageYOffset;
      const buffer = 80;
      for (let i = topicHeaders.length - 1; i >= 0; i--) {
        const rect = topicHeaders[i].getBoundingClientRect();
        if (rect.top + window.scrollY - buffer <= scrollY) {
          found = topicHeaders[i].getAttribute('data-topic');
          break;
        }
      }
      if (found && found !== lastScrollTopic) {
        lastScrollTopic = found;
        document.querySelectorAll('.sidebar-topic').forEach(el => {
          el.classList.toggle('active-topic', el.getAttribute('data-topic') === found && el.getAttribute('data-program') === program);
        });
      }
    }
  }

  function renderMobileSidebar(groups) {
    const programsRow = document.getElementById('programsRow');
    const topicsRow = document.getElementById('topicsRow');
    if (!programsRow || !topicsRow) return;
    if (!isMobile()) {
      programsRow.style.display = 'none';
      topicsRow.style.display = 'none';
      return;
    }
    programsRow.style.display = '';
    topicsRow.style.display = '';

    // Render program buttons
    programsRow.innerHTML = Object.keys(groups).sort().map((program) => `
      <button class="sidebar-program${currentProgram === program ? ' active' : ''}" data-program="${program}">
        ${window.PROGRAM_ICONS && window.PROGRAM_ICONS[program] ? `<img src="${window.PROGRAM_ICONS[program]}" alt="${program}" style="height:20px;vertical-align:middle;margin-right:6px;">` : ''}
        ${program}
      </button>
    `).join('');

    // Helper to show topics for a program
    function showTopicsFor(program) {
      topicsRow.innerHTML = Object.keys(groups[program].topics).sort().map(topic => `
        <button class="sidebar-topic${currentTopic === topic ? ' active' : ''}" data-program="${program}" data-topic="${topic}">${topic}</button>
      `).join('');
      // Topic click handlers
      topicsRow.querySelectorAll('.sidebar-topic').forEach(topicBtn => {
        topicBtn.onclick = function() {
          currentProgram = program;
          currentTopic = this.getAttribute('data-topic');
          searchInput.value = '';
          const items = getItemsByProgramAndTopic(program, currentTopic);
          renderAllCards(items);
          showTopicsFor(program); // update highlight
        };
      });
    }

    // Program click handlers
    programsRow.querySelectorAll('.sidebar-program').forEach(btn => {
      btn.onclick = function() {
        programsRow.querySelectorAll('.sidebar-program').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentProgram = this.getAttribute('data-program');
        currentTopic = null;
        renderProgramCards(currentProgram);
        showTopicsFor(currentProgram);
      };
    });

    // Show topics for the selected or first program by default
    const firstProgram = currentProgram || Object.keys(groups)[0];
    showTopicsFor(firstProgram);
  }

  function getItemsByProgramAndTopic(program, topic) {
    return getAllItems().filter(item => {
      const prog = item.program?.name || 'Other';
      const top = item.topic || 'General';
      return prog === program && top === topic;
    });
  }

  function showPlaceholder() {
    resultsContainer.innerHTML = `<div class="placeholder">${placeholderText}</div>`;
  }

  function handleSidebarClick(e) {
    const progEl = e.target.closest('.sidebar-program');
    const topicEl = e.target.closest('.sidebar-topic');
    if (progEl) {
      const program = progEl.getAttribute('data-program');
      sidebarState[program] = sidebarState[program] || { expanded: false, topics: {} };
      sidebarState[program].expanded = !sidebarState[program].expanded;
      currentProgram = program;
      currentTopic = null;
      renderSidebar(groupByProgramAndTopic(getAllItems()));
      renderProgramCards(program);
      searchInput.value = '';
      return;
    }
    if (topicEl) {
      const program = topicEl.getAttribute('data-program');
      const topic = topicEl.getAttribute('data-topic');
      sidebarState[program] = sidebarState[program] || { expanded: true, topics: {} };
      sidebarState[program].topics = sidebarState[program].topics || {};
      sidebarState[program].topics[topic] = !(sidebarState[program].topics[topic] ?? true);
      if (sidebarState[program].topics[topic]) {
        currentProgram = program;
        currentTopic = topic;
        searchInput.value = '';
        const items = getItemsByProgramAndTopic(program, topic);
        renderAllCards(items);
      } else {
        showPlaceholder();
      }
      renderSidebar(groupByProgramAndTopic(getAllItems()));
      setTimeout(() => {
        document.querySelectorAll('.sidebar-topic').forEach(el => {
          el.classList.toggle('active',
            el.getAttribute('data-program') === program && el.getAttribute('data-topic') === topic && sidebarState[program].topics[topic]
          );
        });
      }, 0);
      return;
    }
  }

  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function handleFilterInput() {
    const filter = searchInput.value.trim();
    const expandedPrograms = Object.keys(sidebarState).filter(p => sidebarState[p].expanded);
    if (expandedPrograms.length === 0) {
      currentProgram = null;
      filterAndHighlightCards(searchInput.value.trim());
    }

    if (expandedPrograms.length === 1) {
      // Only one program open: filter within that program
      currentProgram = expandedPrograms[0];
      renderProgramCards(currentProgram, filter);
    } else {
      // None or multiple open: filter all programs
      currentProgram = null;
      filterAndHighlightCards(filter);
    }
    document.querySelectorAll('.sidebar-topic').forEach(el => el.classList.remove('active'));
  }

  function initializePage() {
    sidebarState = {};
    currentProgram = null;
    currentTopic = null;
    renderSidebar(groupByProgramAndTopic(getAllItems()));
    renderAllCards(getAllItems());
    sidebar.addEventListener('click', handleSidebarClick);
    searchInput.addEventListener('input', debounce(handleFilterInput, 120));
    
    // Initialize scroll detection
    initScrollDetection();
  }

  function loadSectionFromHash() {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash.replace(/&/g, '&'));
    const program = params.get('program');
    const topic = params.get('topic');
    if (program && topic) {
      sidebarState[program] = sidebarState[program] || { expanded: true, topics: {} };
      sidebarState[program].expanded = true;
      sidebarState[program].topics = sidebarState[program].topics || {};
      sidebarState[program].topics[topic] = true;
      currentProgram = program;
      currentTopic = topic;
      renderSidebar(groupByProgramAndTopic(getAllItems()));
      searchInput.value = '';
      const items = getItemsByProgramAndTopic(program, topic);
      renderAllCards(items);
      setTimeout(() => {
        document.querySelectorAll('.sidebar-topic').forEach(el => {
          el.classList.toggle('active',
            el.getAttribute('data-program') === program && el.getAttribute('data-topic') === topic
          );
        });
      }, 0);
    }
  }

  window.addEventListener('hashchange', loadSectionFromHash);

  function tryInit() {
    if (window.contentItems && window.contentItems.length) {
      initializePage();
      const items = getAllItems();
      const groups = groupByProgramAndTopic(items);
      renderMobileSidebar(groups);
      window.addEventListener('resize', () => {
        const items = getAllItems();
        const groups = groupByProgramAndTopic(items);
        renderMobileSidebar(groups);
      });
      loadSectionFromHash();
    } else {
      setTimeout(tryInit, 50);
    }
  }
  tryInit();

  // Hamburger menu toggle (if present)
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
});

// Add this CSS to your site.css for topic highlight:
/*
.highlight-match {
  background: rgba(11,79,108,0.25);
  border-radius: 4px;
  padding: 0 2px;
}
.sidebar-topic.active-topic {
  background: rgba(11,79,108,0.18);
  border-radius: 6px;
}

// Add this CSS to your site.css for topic highlight:
/*
.sidebar-topic.active-topic {
  background: rgba(11,79,108,0.18);
  border-radius: 6px;
}
*/
