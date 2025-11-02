function renderLearnItems(items) {
  const results = document.getElementById('learnResults');
  if (!results) return;
  if (!items.length) {
    results.innerHTML = `<div id="learnPlaceholder">No learning resources found.</div>`;
    return;
  }
  let html = '';
  for (const item of items) {
    html += `
      <div class="learn-card">
        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
        <div class="learn-card-content">
          <h4>${item.title}</h4>
          <p>${item.description || ''}</p>
          <a href="${item.link}" target="_blank">View Resource</a>
        </div>
      </div>
    `;
  }
  results.innerHTML = html;
}

function filterLearnItems(query, allItems) {
  query = query.trim().toLowerCase();
  if (!query) return allItems;
  return allItems.filter(item =>
    (item.title && item.title.toLowerCase().includes(query)) ||
    (item.description && item.description.toLowerCase().includes(query))
  );
}

function setupLearnPage() {
  // Get all learning items
  const allLearnItems = (window.contentItems || []).filter(item =>
    Array.isArray(item.section)
      ? item.section.includes('Learning')
      : item.section === 'Learning'
  );

  // Initial render
  renderLearnItems(allLearnItems);

  // Filter on input
  const search = document.getElementById('learnSearch');
  if (search) {
    search.addEventListener('input', () => {
      const filtered = filterLearnItems(search.value, allLearnItems);
      renderLearnItems(filtered);
    });
  }
}

// Wait for DOM and contentItems
function ready(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}
function onContentItemsLoaded(fn) {
  if (window.contentItems) fn();
  else window.addEventListener('contentItemsLoaded', fn, { once: true });
}
ready(() => onContentItemsLoaded(setupLearnPage));
