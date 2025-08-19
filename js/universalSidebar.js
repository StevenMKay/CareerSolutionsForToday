document.addEventListener('DOMContentLoaded', () => {
  let pageType = null;
  let sidebar, searchInput, resultsContainer, getAllItems, groupByProgramAndTopic, placeholderText;

  // Scroll detection variables
  let lastScrollTop = 0;
  let scrollDirection = 'up';
  const stickyFilter = document.querySelector('.sticky-filter');

  // Section collapse state
  let sectionCollapseState = {};

  // Debug page type detection
  console.log('=== PAGE TYPE DETECTION ===');
  console.log('learnSidebar element:', document.getElementById('learnSidebar'));
  console.log('toolsSidebar element:', document.getElementById('toolsSidebar'));
  console.log('practiceSidebar element:', document.getElementById('practiceSidebar'));

  if (document.getElementById('learnSidebar')) {
    pageType = 'learn';
    sidebar = document.getElementById('learnSidebar');
    searchInput = document.getElementById('learnSearch');
    resultsContainer = document.getElementById('learnResults');
    getAllItems = () => window.contentItems || [];
    groupByProgramAndTopic = groupContentByProgramAndTopic;
    placeholderText = 'Use the sidebar to select a program/topic, or type in the filter box to find learning resources.';
    console.log('✅ Detected Learn page');
  } else if (document.getElementById('toolsSidebar')) {
    pageType = 'tools';
    sidebar = document.getElementById('toolsSidebar');
    searchInput = document.getElementById('toolsSearch');
    resultsContainer = document.getElementById('toolsResults');
    getAllItems = () => (window.contentItems || []).filter(item =>
      (Array.isArray(item.section) && item.section.includes('Tools')) || item.section === 'Tools'
    );
    groupByProgramAndTopic = groupToolsByProgramAndTopic;
    placeholderText = 'Use the sidebar to select a program/topic, or type in the filter box to find tools and simulations.';
    console.log('✅ Detected Tools page');
  } else if (document.getElementById('practiceSidebar')) {
    pageType = 'practice';
    sidebar = document.getElementById('practiceSidebar');
    searchInput = document.getElementById('practiceSearch');
    resultsContainer = document.getElementById('practiceResults');
    getAllItems = () => window.practiceProblems || [];
    groupByProgramAndTopic = groupPracticeByProgram;
    placeholderText = 'Select a programming language from the sidebar to start practicing coding challenges.';
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

  // Function to handle mobile description truncation
  function addMobileDescriptionTruncation() {
    if (!isMobile()) return; // Only apply on mobile
    
    const descriptionTexts = document.querySelectorAll('.description-text');
    descriptionTexts.forEach(descText => {
      const fullText = descText.textContent;
      if (fullText.length > 200) {
        const truncatedText = fullText.substring(0, 200);
        const remainingText = fullText.substring(200);
        
        descText.innerHTML = `
          <span class="truncated-text">${truncatedText}...</span>
          <span class="full-text" style="display: none;">${fullText}</span>
          <button class="see-more-btn" onclick="toggleDescription(this)" style="
            background: none;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            padding: 0;
            margin-left: 5px;
            text-decoration: underline;
            font-size: 14px;
          ">See More</button>
        `;
      }
    });
  }

  // Global function to toggle description
  window.toggleDescription = function(button) {
    const container = button.parentElement;
    const truncatedText = container.querySelector('.truncated-text');
    const fullText = container.querySelector('.full-text');
    const isExpanded = fullText.style.display !== 'none';
    
    if (isExpanded) {
      // Collapse
      truncatedText.style.display = 'inline';
      fullText.style.display = 'none';
      button.textContent = 'See More';
    } else {
      // Expand
      truncatedText.style.display = 'none';
      fullText.style.display = 'inline';
      button.textContent = 'See Less';
    }
  };

  function isMobile() {
    return window.innerWidth <= 700;
  }
  
  function getCurrentDifficulty() {
    const difficultyInput = document.querySelector('input[name="difficulty"]:checked');
    return difficultyInput ? difficultyInput.value : 'all';
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
  function groupToolsByProgramAndTopic(items) { return groupContentByProgramAndTopic(items); }
  
  function groupPracticeByProgram(items) {
    const groups = {};
    
    // Group problems by programming language (like SQL, Python, JavaScript)
    items.forEach(item => {
      const program = item.language || 'Other';
      if (!groups[program]) {
        groups[program] = { 
          image: window.practicePrograms?.[program]?.image || '', 
          topics: { 'Coding Problems': [] }
        };
      }
      groups[program].topics['Coding Problems'].push(item);
    });
    
    return groups;
  }

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
      // Find the collapse icon within the header
      const collapseIcon = header.querySelector('.collapse-icon');
      
      if (sectionCollapseState[sectionId]) {
        header.classList.add('collapsed');
        content.classList.add('collapsed');
        content.style.maxHeight = '0px';
        
        // Update arrow icon to collapsed state (right arrow)
        if (collapseIcon) {
          collapseIcon.textContent = '▶';
        }
      } else {
        header.classList.remove('collapsed');
        content.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 'px';
        
        // Update arrow icon to expanded state (down arrow)
        if (collapseIcon) {
          collapseIcon.textContent = '▼';
        }
        
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
        <span class="collapse-icon">${isCollapsed ? '▶' : '▼'}</span>
        ${displaySection}
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
              // Extract anchor ID from item.link or item.related.url if they exist
              let anchorId = '';
              if (item.link) {
                // Check if link contains an anchor (either #anchor or page.html#anchor)
                const hashIndex = item.link.indexOf('#');
                if (hashIndex !== -1) {
                  anchorId = item.link.substring(hashIndex + 1);
                }
              } else if (item.related && item.related.url) {
                const hashIndex = item.related.url.indexOf('#');
                if (hashIndex !== -1) {
                  anchorId = item.related.url.substring(hashIndex + 1);
                }
              }

              // Check if this item also has JavaScript
              const hasJavaScript = item.demoJs;

              sectionContent += `
                <div class="css-interactive-card" data-search="${searchText}" data-topic="${topic ? topic : ''}"${anchorId ? ` id="${anchorId}"` : ''}>
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
                          ${hasJavaScript ? `<button class="copy-btn" onclick="copyCode('js-${uniqueId}')">📋 Copy JavaScript</button>` : ''}
                          <button class="copy-btn" onclick="copyCode('${hasJavaScript ? 'all' : 'both'}-${uniqueId}')">📋 Copy ${hasJavaScript ? 'All' : 'Both'}</button>
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
                          
                          ${hasJavaScript ? `
                          <div class="code-editor-section">
                            <h6>JavaScript:</h6>
                            <textarea class="code-editor js-editor" id="js-${uniqueId}" oninput="updatePreview()">${item.demoJs}</textarea>
                          </div>
                          ` : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                  <style>${item.demoCss}</style>
                  ${hasJavaScript ? `<script>
                    // DIRECT 3D TILT EXECUTION - Simple approach
                    setTimeout(() => {
                      const containers = document.querySelectorAll('.card-container-3d');
                      const cards = document.querySelectorAll('.card-3d');
                      
                      containers.forEach((container, index) => {
                        const card = cards[index];
                        if (card && container) {
                          container.onmousemove = function(e) {
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                            const rotateX = (centerY - y) / 10;
                            const rotateY = (x - centerX) / 10;
                            card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                            card.style.boxShadow = (-rotateY) + 'px ' + rotateX + 'px 20px rgba(0, 255, 255, 0.5)';
                          };
                          container.onmouseleave = function() {
                            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
                          };
                        }
                      });
                    }, 1000);
                  </script>` : ''}
                </div>
              `;
            } else if (item.simulationType || item.calculatorType) {
              // Handle Tools page simulations and calculators
              const uniqueId = Date.now() + Math.random();
              let anchorId = '';
              if (item.link) {
                const hashIndex = item.link.indexOf('#');
                if (hashIndex !== -1) {
                  anchorId = item.link.substring(hashIndex + 1);
                }
              }

              // Check if we're on Learn page - if so, show redirect card instead of iframe
              if (pageType === 'learn') {
                sectionContent += `
                  <div class="css-interactive-card" data-search="${searchText}" data-topic="${item.topic ? item.topic : ''}"${anchorId ? ` id="${anchorId}"` : ''}>
                    <div class="css-demo-container">
                      <div class="css-demo-header">
                        <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                        <div class="info">
                          <h4>${highlightMatches(item.title, filter)}</h4>
                          <p>${highlightMatches(item.description, filter)}</p>
                          <div style="margin-top: 15px;">
                            <a href="${item.link}" class="tools-redirect-btn" style="
                              display: inline-block;
                              background: linear-gradient(135deg, #ff6b35, #f7931e);
                              color: white !important;
                              text-decoration: none;
                              padding: 12px 24px;
                              border-radius: 25px;
                              font-size: 16px;
                              font-weight: 600;
                              margin-top: 10px;
                              transition: all 0.3s ease;
                              box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
                            ">🛠️ Use Interactive Tool</a>
                          </div>
                          ${renderRelatedLinks(item.related, filter)}
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              } else {
                // On Tools page - show full iframe content
                let simulationContent = '';
                if (item.simulationType === 'callcenter') {
                  // Embed call center simulation - direct iframe
                  simulationContent = `
                    <iframe class="simulation-iframe" 
                            src="Simulations/CallCenter.html" 
                            title="Call Center Training Simulation"
                            style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">
                      Your browser does not support iframes. Please use a modern browser to view this simulation.
                    </iframe>
                  `;
                } else if (item.simulationType === 'vlookup') {
                  // Embed VLOOKUP simulation - direct iframe
                  simulationContent = `
                    <iframe class="simulation-iframe" 
                            src="Simulations/VLOOKUPSimulation.html" 
                            title="Excel VLOOKUP Master Training"
                            style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">
                      Your browser does not support iframes. Please use a modern browser to view this simulation.
                    </iframe>
                  `;
                } else if (item.calculatorType === 'businesscase') {
                  // Embed business case calculator - direct iframe
                  simulationContent = `
                    <iframe class="simulation-iframe" 
                            src="businesscase.html" 
                            title="Business Case Development Calculator"
                            style="width: 100%; height: 1200px; border: none; border-radius: 8px; background: white;">
                      Your browser does not support iframes. Please use a modern browser to view this simulation.
                    </iframe>
                  `;
                } else if (item.calculatorType === 'amortization') {
                  // Embed amortization calculator - direct iframe
                  simulationContent = `
                    <iframe class="simulation-iframe" 
                            src="amortization.html" 
                            title="Amortization Calculator"
                            style="width: 100%; height: 1000px; border: none; border-radius: 8px; background: white;">
                      Your browser does not support iframes. Please use a modern browser to view this simulation.
                    </iframe>
                  `;
                }

                const toolId = anchorId || 'tool-' + Date.now();
                sectionContent += `
                  <div class="tools-interactive-card clickable-tool-card" data-search="${searchText}" data-topic="${item.topic ? item.topic : ''}"${anchorId ? ` id="${anchorId}"` : ''}>
                    <div class="tools-demo-header">
                      <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                      <div class="info">
                        <h4>${highlightMatches(item.title, filter)}</h4>
                        <p>${highlightMatches(item.description, filter)}</p>
                        <div style="margin-top: 15px;">
                          <button onclick="toggleToolContent('${toolId}')" class="expand-tool-btn" style="
                            background: linear-gradient(135deg, #00ffa6, #00d285);
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 25px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            box-shadow: 0 4px 15px rgba(0, 255, 166, 0.3);
                            margin-bottom: 10px;
                            display: inline-block;
                          " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">🛠️ Use This Tool</button>
                        </div>
                        ${renderRelatedLinks(item.related, filter)}
                      </div>
                    </div>
                    
                    <div class="simulation-container" id="content-${toolId}" style="display: none; margin-top: 20px;">
                      <div class="tool-header">
                        <h3>${item.title}</h3>
                        <p>Interactive tool - try the features below</p>
                      </div>
                      <div class="simulation-content">
                        ${simulationContent}
                      </div>
                    </div>
                  </div>
                `;
              }
            } else if (item.section?.includes('HTML')) {
              // ALL HTML items should use HTML interactive card format
              const uniqueId = Date.now() + Math.random();
              // Extract anchor ID from item.link or item.related.url if they exist
              let anchorId = '';
              if (item.link) {
                const hashIndex = item.link.indexOf('#');
                if (hashIndex !== -1) {
                  anchorId = item.link.substring(hashIndex + 1);
                }
              } else if (item.related && item.related.url) {
                const hashIndex = item.related.url.indexOf('#');
                if (hashIndex !== -1) {
                  anchorId = item.related.url.substring(hashIndex + 1);
                }
              }
              sectionContent += `
                <div class="html-interactive-card" data-search="${searchText}" data-topic="${item.topic ? item.topic : ''}"${anchorId ? ` id="${anchorId}"` : ''}>
                  <div class="html-demo-container">
                    <div class="html-demo-header">
                      <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                      <div class="info">
                        <h4>${highlightMatches(item.title, filter)}</h4>
                        <p>${highlightMatches(item.description, filter)}</p>
                        ${renderRelatedLinks(item.related, filter)}
                      </div>
                    </div>
                    
                    <div class="html-demo-content">
                      <!-- Live Preview -->
                      <div class="html-preview-section">
                        <h5>📄 Live HTML Preview:</h5>
                        <div class="html-live-preview" id="html-preview-${uniqueId}">
                          ${item.demoHtml}
                        </div>
                      </div>
                      
                      <!-- Code Section -->
                      <div class="html-code-section">
                        <div class="html-code-buttons">
                          <button class="copy-btn" onclick="copyHtmlCode('html-code-${uniqueId}')">📋 Copy HTML</button>
                        </div>
                        
                        <h6>HTML Code:</h6>
                        <textarea class="html-code-editor" id="html-code-${uniqueId}" spellcheck="false" autocorrect="off" autocapitalize="off" oninput="updateHtmlPreview('${uniqueId}')">${item.demoHtml}</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            } else {
              // Regular card for non-CSS items
              sectionContent += `
                <div class="frosted-card" data-search="${searchText}" data-topic="${item.topic ? item.topic : ''}">
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
    // Special handling for practice page
    if (pageType === 'practice') {
      if (!items || items.length === 0) {
        resultsContainer.innerHTML = placeholderText;
        return;
      }
      
      // For practice, we directly render problems instead of using sections
      renderPracticeProblems(currentProgram || items[0]?.language, getCurrentDifficulty());
      return;
    }
    
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
        <span class="collapse-icon">${isCollapsed ? '▶' : '▼'}</span>
        ${displaySection}
      </h3>`;
      html += `<div class="section-divider"></div>`;
      
      let sectionContent = '';
      sectionGroups[section].forEach(item => {
        // UPDATED: Support array of related items for search
        const searchText = [item.title, item.description, ...(Array.isArray(item.related) ? item.related.map(r => r.text) : item.related?.text ? [item.related.text] : [])].filter(Boolean).join(' ').toLowerCase();
        
        // Check if this is a simulation or calculator tool FIRST
        if (item.simulationType || item.calculatorType) {
          // Handle Tools page simulations and calculators
          const uniqueId = Date.now() + Math.random();
          let anchorId = '';
          if (item.link) {
            const hashIndex = item.link.indexOf('#');
            if (hashIndex !== -1) {
              anchorId = item.link.substring(hashIndex + 1);
            }
          }

          // Check if we're on Learn page - if so, show redirect card instead of iframe
          if (pageType === 'learn') {
            sectionContent += `
              <div class="css-interactive-card" data-search="${searchText}" data-topic="${item.topic ? item.topic : ''}"${anchorId ? ` id="${anchorId}"` : ''}>
                <div class="css-demo-container">
                  <div class="css-demo-header">
                    <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                    <div class="info">
                      <h4>${highlightMatches(item.title, filter)}</h4>
                      <p>${highlightMatches(item.description, filter)}</p>
                      <div style="margin-top: 15px;">
                        <a href="${item.link}" class="tools-redirect-btn" style="
                          display: inline-block;
                          background: linear-gradient(135deg, #ff6b35, #f7931e);
                          color: white !important;
                          text-decoration: none;
                          padding: 12px 24px;
                          border-radius: 25px;
                          font-size: 16px;
                          font-weight: 600;
                          margin-top: 10px;
                          transition: all 0.3s ease;
                          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
                        ">🛠️ Use Interactive Tool</a>
                      </div>
                      ${renderRelatedLinks(item.related, filter)}
                    </div>
                  </div>
                </div>
              </div>
            `;
          } else {
            // On Tools page - show full iframe content
            let simulationContent = '';
            if (item.simulationType === 'callcenter') {
              // Embed call center simulation - direct iframe
              simulationContent = `
                <iframe class="simulation-iframe" 
                        src="Simulations/CallCenter.html" 
                        title="Call Center Training Simulation"
                        style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">
                  Your browser does not support iframes. Please use a modern browser to view this simulation.
                </iframe>
              `;
            } else if (item.simulationType === 'vlookup') {
              // Embed VLOOKUP simulation - direct iframe
              simulationContent = `
                <iframe class="simulation-iframe" 
                        src="Simulations/VLOOKUPSimulation.html" 
                        title="Excel VLOOKUP Master Training"
                        style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">
                  Your browser does not support iframes. Please use a modern browser to view this simulation.
                </iframe>
              `;
            } else if (item.calculatorType === 'businesscase') {
              // Embed business case calculator - direct iframe
              simulationContent = `
                <iframe class="simulation-iframe" 
                        src="businesscase.html" 
                        title="Business Case Development Calculator"
                        style="width: 100%; height: 1200px; border: none; border-radius: 8px; background: white;">
                  Your browser does not support iframes. Please use a modern browser to view this simulation.
                </iframe>
              `;
            } else if (item.calculatorType === 'amortization') {
              // Embed amortization calculator - direct iframe
              simulationContent = `
                <iframe class="simulation-iframe" 
                        src="amortization.html" 
                        title="Amortization Calculator"
                        style="width: 100%; height: 1000px; border: none; border-radius: 8px; background: white;">
                  Your browser does not support iframes. Please use a modern browser to view this simulation.
                </iframe>
              `;
            }
          }
        } else if (item.demoHtml && item.demoCss) {
          
          const uniqueId = Date.now() + Math.random();
          // Extract anchor ID from item.link or item.related.url if they exist
          let anchorId = "";
          if (item.link) {
            // Check if link contains an anchor (either #anchor or page.html#anchor)
            const hashIndex = item.link.indexOf("#");
            if (hashIndex !== -1) {
              anchorId = item.link.substring(hashIndex + 1);
            }
          } else if (item.related && item.related.url) {
            const hashIndex = item.related.url.indexOf("#");
            if (hashIndex !== -1) {
              anchorId = item.related.url.substring(hashIndex + 1);
            }
          }
          
          // Check if this item also has JavaScript
          const hasJavaScript = item.demoJs;
          
          sectionContent += `
            <div class="css-interactive-card" data-search="${searchText}"${anchorId ? ` id="${anchorId}"` : ''}>
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
                      ${hasJavaScript ? `<button class="copy-btn" onclick="copyCode('js-${uniqueId}')">📋 Copy JavaScript</button>` : ''}
                      <button class="copy-btn" onclick="copyCode('${hasJavaScript ? 'all' : 'both'}-${uniqueId}')">📋 Copy ${hasJavaScript ? 'All' : 'Both'}</button>
                    </div>
                    
                    <div class="code-editors">
                      <div class="code-editor-section">
                        <h6>HTML:</h6>
                        <textarea class="code-editor html-editor" id="html-${uniqueId}" spellcheck="false" autocorrect="off" autocapitalize="off" oninput="updatePreview()">${item.demoHtml}</textarea>
                      </div>
                      
                      <div class="code-editor-section">
                        <h6>CSS:</h6>
                        <textarea class="code-editor css-editor" id="css-${uniqueId}" spellcheck="false" autocorrect="off" autocapitalize="off" oninput="updatePreview()">${item.demoCss}</textarea>
                      </div>
                      
                      ${hasJavaScript ? `
                      <div class="code-editor-section">
                        <h6>JavaScript:</h6>
                        <textarea class="code-editor js-editor" id="js-${uniqueId}" spellcheck="false" autocorrect="off" autocapitalize="off" oninput="updatePreview()">${item.demoJs}</textarea>
                      </div>
                      ` : ''}
                    </div>
                  </div>
                </div>
              </div>
              <style>${item.demoCss}</style>
              ${hasJavaScript ? `<script>
                // DIRECT 3D TILT EXECUTION - Simple approach
                setTimeout(() => {
                  const containers = document.querySelectorAll('.card-container-3d');
                  const cards = document.querySelectorAll('.card-3d');
                  
                  containers.forEach((container, index) => {
                    const card = cards[index];
                    if (card && container) {
                      container.onmousemove = function(e) {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (centerY - y) / 10;
                        const rotateY = (x - centerX) / 10;
                        card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                        card.style.boxShadow = (-rotateY) + 'px ' + rotateX + 'px 20px rgba(0, 255, 255, 0.5)';
                      };
                      container.onmouseleave = function() {
                        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
                      };
                    }
                  });
                }, 1000);
              </script>` : ''}
            </div>
          `;
        } else if (item.section?.includes('HTML')) {
          // ALL HTML items should use HTML interactive card format
          const uniqueId = Date.now() + Math.random();
          // Extract anchor ID from item.link or item.related.url if they exist
          let anchorId = "";
          if (item.link) {
            // Check if link contains an anchor (either #anchor or page.html#anchor)
            const hashIndex = item.link.indexOf("#");
            if (hashIndex !== -1) {
              anchorId = item.link.substring(hashIndex + 1);
            }
          } else if (item.related && item.related.url) {
            const hashIndex = item.related.url.indexOf("#");
            if (hashIndex !== -1) {
              anchorId = item.related.url.substring(hashIndex + 1);
            }
          }
          sectionContent += `
            <div class="html-interactive-card" data-search="${searchText}"${anchorId ? ` id="${anchorId}"` : ''}>
              <div class="html-demo-container">
                <div class="html-demo-header">
                  <img src="${item.thumbnail}" alt="${item.title}" class="thumbnail" loading="lazy">
                  <div class="info">
                    <h4>${highlightMatches(item.title, filter)}</h4>
                    <p>${highlightMatches(item.description, filter)}</p>
                    ${renderRelatedLinks(item.related, filter)}
                  </div>
                </div>
                
                <div class="html-demo-content">
                  <!-- Live Preview -->
                  <div class="html-preview-section">
                    <h5>📄 Live HTML Preview:</h5>
                    <div class="html-live-preview" id="html-preview-${uniqueId}">
                      ${item.demoHtml}
                    </div>
                  </div>
                  
                  <!-- Code Section -->
                  <div class="html-code-section">
                    <div class="html-code-buttons">
                      <button class="copy-btn" onclick="copyHtmlCode('html-code-${uniqueId}')">📋 Copy HTML</button>
                    </div>
                    
                    <h6>HTML Code:</h6>
                    <textarea class="html-code-editor" id="html-code-${uniqueId}" spellcheck="false" autocorrect="off" autocapitalize="off" oninput="updateHtmlPreview('${uniqueId}')">${item.demoHtml}</textarea>
                  </div>
                </div>
              </div>
            </div>
          `;
        } else {
          // Regular card for non-CSS items
          sectionContent += `
            <div class="frosted-card" data-search="${searchText}">
              <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
              <div class="info">
                <h4>${highlightMatches(item.title, filter)}</h4>
                <div class="description-container">
                  <p class="description-text">${highlightMatches(item.description, filter)}</p>
                </div>
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
    
    // Add mobile description truncation after rendering
    addMobileDescriptionTruncation();
    
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
        <div class="practice-language-btn${currentProgram === program && expanded ? ' active' : ''}" data-program="${program}">
         ${window.PROGRAM_ICONS && window.PROGRAM_ICONS[program] ? `<img src="${window.PROGRAM_ICONS[program]}" alt="${program}">` : ''}
          <span>${program}</span>

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
        topicBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const topic = this.getAttribute('data-topic');
          const wasActive = this.classList.contains('active');
          
          if (wasActive) {
            // Clicking active topic - deselect it and show all program content
            topicsRow.querySelectorAll('.sidebar-topic').forEach(btn => btn.classList.remove('active'));
            currentProgram = program;
            currentTopic = null;
            searchInput.value = '';
            renderProgramCards(program); // Show all program content
          } else {
            // Clicking inactive topic - select it
            topicsRow.querySelectorAll('.sidebar-topic').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentProgram = program;
            currentTopic = topic;
            searchInput.value = '';
            const items = getItemsByProgramAndTopic(program, topic);
            renderAllCards(items);
          }
          
          // Small delay before updating highlight to ensure DOM is updated
          setTimeout(() => {
            showTopicsFor(program);
          }, 50);
        });
      });
    }

    // Program click handlers
    programsRow.querySelectorAll('.sidebar-program').forEach(programBtn => {
      programBtn.addEventListener('click', function() {
        const program = this.getAttribute('data-program');
        
        // Special handling for practice page
        if (pageType === 'practice') {
          console.log('Clicked program:', program);
          
          currentProgram = program;
          currentTopic = null;
          searchInput.value = '';
          
          // Direct rendering of practice problems
          const resultsContainer = document.getElementById('practiceResults');
          const problems = window.practiceProblems || [];
          const filteredProblems = problems.filter(p => p.language === program);
          
          console.log('Total problems:', problems.length);
          console.log('Filtered problems for', program, ':', filteredProblems.length);
          
          if (filteredProblems.length === 0) {
            resultsContainer.innerHTML = `<div style="color: white; text-align: center; margin-top: 50px;"><h3>No problems found for ${program}</h3></div>`;
          } else {
            let html = `<h2 style="color: white; text-align: center; margin-bottom: 30px;">${program} Coding Challenges</h2>`;
            
            filteredProblems.forEach(problem => {
              const uniqueId = problem.id;
              html += `
                <div class="practice-problem-card">
                  <div class="problem-header">
                    <h3>${problem.title}</h3>
                    <span class="difficulty-badge difficulty-${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>
                  </div>
                  <div class="problem-description">
                    <h4>Problem:</h4>
                    <p>${problem.description}</p>
                  </div>
                  <div class="coding-section">
                    <h4>Your Solution:</h4>
                    <textarea class="code-editor" id="code-${uniqueId}" placeholder="Write your ${problem.language} code here...">${problem.starterCode || ''}</textarea>
                    <div class="action-buttons">
                      <button class="submit-btn" onclick="submitCode('${uniqueId}')">Submit Code</button>
                      <button class="hint-btn" onclick="showSolution('${uniqueId}')">Show Solution</button>
                    </div>
                    <div id="result-${uniqueId}" class="result-display"></div>
                    <div id="solution-${uniqueId}" class="solution-display" style="display: none;"></div>
                  </div>
                </div>
              `;
            });
            
            resultsContainer.innerHTML = html;
          }
          
          // Update sidebar to show this program as active
          programsRow.querySelectorAll('.sidebar-program').forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          return;
        }
        
        // MOBILE TOGGLE LOGIC - Allow clicking same program to collapse topics
        const wasActive = this.classList.contains('active');
        
        if (wasActive && currentProgram === program) {
          // Clicking the same active program - collapse topics and show all content
          currentProgram = null;
          currentTopic = null;
          topicsRow.innerHTML = ''; // Clear topics
          programsRow.querySelectorAll('.sidebar-program').forEach(b => b.classList.remove('active'));
          renderAllCards(getAllItems()); // Show all content
          searchInput.value = '';
        } else {
          // Clicking different program or inactive program - show its topics
          programsRow.querySelectorAll('.sidebar-program').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentProgram = program;
          currentTopic = null;
          renderProgramCards(currentProgram);
          showTopicsFor(currentProgram);
        }
      });
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
    const progEl = e.target.closest('.practice-language-btn');
    const topicEl = e.target.closest('.sidebar-topic');
    if (progEl) {
      const program = progEl.getAttribute('data-program');
      sidebarState[program] = sidebarState[program] || { expanded: false, topics: {} };
      
      // DESKTOP TOGGLE LOGIC - Allow clicking same program to collapse and show all content
      const wasExpanded = sidebarState[program].expanded;
      const wasCurrentProgram = currentProgram === program;
      
      if (wasExpanded && wasCurrentProgram) {
        // Clicking the same expanded program - collapse it and show all content
        sidebarState[program].expanded = false;
        currentProgram = null;
        currentTopic = null;
        renderSidebar(groupByProgramAndTopic(getAllItems()));
        renderAllCards(getAllItems()); // Show all content
        searchInput.value = '';
      } else {
        // Clicking different program or collapsed program - expand and show its content
        sidebarState[program].expanded = !sidebarState[program].expanded;
        currentProgram = program;
        currentTopic = null;
        renderSidebar(groupByProgramAndTopic(getAllItems()));
        renderProgramCards(program);
        searchInput.value = '';
      }
      return;
    }
    if (topicEl) {
      const program = topicEl.getAttribute('data-program');
      const topic = topicEl.getAttribute('data-topic');
      sidebarState[program] = sidebarState[program] || { expanded: true, topics: {} };
      sidebarState[program].topics = sidebarState[program].topics || {};
      
      // TOPIC TOGGLE LOGIC - Allow deselecting topics to show all program content
      const wasTopicActive = sidebarState[program].topics[topic] ?? true;
      sidebarState[program].topics[topic] = !wasTopicActive;
      
      if (sidebarState[program].topics[topic]) {
        // Topic selected - show topic content
        currentProgram = program;
        currentTopic = topic;
        searchInput.value = '';
        const items = getItemsByProgramAndTopic(program, topic);
        renderAllCards(items);
      } else {
        // Topic deselected - check if any topics are still active
        const activeTopics = Object.values(sidebarState[program].topics).some(active => active);
        if (!activeTopics) {
          // No topics active - show all program content
          currentProgram = program;
          currentTopic = null;
          renderProgramCards(program);
        } else {
          // Some topics still active - show placeholder
          showPlaceholder();
        }
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
    
    // If search is empty, show all content and reset filters
    if (!filter) {
      currentProgram = null;
      currentTopic = null;
      // Reset all sidebar states when search is cleared
      Object.keys(sidebarState).forEach(program => {
        sidebarState[program].expanded = false;
        if (sidebarState[program].topics) {
          Object.keys(sidebarState[program].topics).forEach(topic => {
            sidebarState[program].topics[topic] = false;
          });
        }
      });
      renderSidebar(groupByProgramAndTopic(getAllItems()));
      renderAllCards(getAllItems()); // Show all content when search is empty
      return;
    }
    
    if (expandedPrograms.length === 0) {
      currentProgram = null;
      filterAndHighlightCards(filter);
    } else if (expandedPrograms.length === 1) {
      // Only one program open: filter within that program
      currentProgram = expandedPrograms[0];
      renderProgramCards(currentProgram, filter);
    } else {
      // Multiple open: filter all programs
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
    
    // Don't auto-render for practice page, let user select a language
    if (pageType !== 'practice') {
      renderAllCards(getAllItems());
    }
    
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
      
      // For Tools page - automatically show all tools content by default  
      if (pageType === 'tools') {
        console.log('🛠️ Auto-loading all tools content for Tools page');
        
        // Bypass section grouping and render tools directly
        setTimeout(() => {
          console.log('🛠️ Rendering tools directly without section grouping');
          
          // Get tools items and render them directly
          const toolsItems = items.filter(item => 
            (Array.isArray(item.section) && item.section.includes('Tools')) || item.section === 'Tools'
          );
          
          console.log('Tools items to render:', toolsItems.length);
          
          // Clear the results container and render tools directly
          if (resultsContainer) {
            resultsContainer.innerHTML = '<div class="tools-content-direct"></div>';
            
            let toolsHTML = '';
            toolsItems.forEach(item => {
              const uniqueId = Date.now() + Math.random();
              let anchorId = '';
              if (item.link) {
                const hashIndex = item.link.indexOf('#');
                if (hashIndex !== -1) {
                  anchorId = item.link.substring(hashIndex + 1);
                }
              }
              
              // Generate simulation content using simple concatenation
              let simulationContent = '';
              if (item.simulationType === 'callcenter') {
                simulationContent = '<iframe class="simulation-iframe" src="Simulations/CallCenter.html" title="Call Center Training Simulation" style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">Your browser does not support iframes.</iframe>';
              } else if (item.simulationType === 'vlookup') {
                simulationContent = '<iframe class="simulation-iframe" src="Simulations/VLOOKUPSimulation.html" title="Excel VLOOKUP Master Training" style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">Your browser does not support iframes.</iframe>';
              } else if (item.calculatorType === 'businesscase') {
                simulationContent = '<iframe class="simulation-iframe" src="businesscase.html" title="Business Case Development Calculator" style="width: 100%; height: 1200px; border: none; border-radius: 8px; background: white;">Your browser does not support iframes.</iframe>';
              } else if (item.calculatorType === 'amortization') {
                simulationContent = '<iframe class="simulation-iframe" src="amortization.html" title="Amortization Calculator" style="width: 100%; height: 1000px; border: none; border-radius: 8px; background: white;">Your browser does not support iframes.</iframe>';
              }
              
              const toolId = anchorId || 'tool-' + uniqueId;
              
              toolsHTML += '<div class="tools-interactive-card clickable-tool-card" id="' + anchorId + '" data-search="' + item.title.toLowerCase() + ' ' + item.description.toLowerCase() + '">' +
                '<div class="tools-demo-header">' +
                  '<img src="' + item.thumbnail + '" alt="' + item.title + '" class="thumbnail" loading="lazy">' +
                  '<div class="info">' +
                    '<h4>' + item.title + '</h4>' +
                    '<p>' + item.description + '</p>' +
                    '<div style="margin-top: 15px;">' +
                      '<button onclick="toggleToolContent(\'' + toolId + '\')" class="expand-tool-btn" style="background: linear-gradient(135deg, #00ffa6, #00d285); color: white; border: none; padding: 12px 24px; border-radius: 25px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0, 255, 166, 0.3); margin-bottom: 10px; display: inline-block;" onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'translateY(0)\'">🛠️ Use This Tool</button>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="simulation-container" id="content-' + toolId + '" style="display: none; margin-top: 20px;">' +
                  '<div class="tool-header">' +
                    '<h3>' + item.title + '</h3>' +
                    '<p>Interactive tool - try the features below</p>' +
                  '</div>' +
                  '<div class="simulation-content">' +
                    simulationContent +
                  '</div>' +
                '</div>' +
              '</div>';
            });
            
            resultsContainer.querySelector('.tools-content-direct').innerHTML = toolsHTML;
            console.log('✅ Tools rendered directly with HTML concatenation');
          }
        }, 2000);
      }
      
      // Handle direct anchor navigation for CSS items
      handleDirectAnchorNavigation();
    } else {
      setTimeout(tryInit, 50);
    }
  }
  
  // Listen for contentItemsLoaded event
  window.addEventListener('contentItemsLoaded', () => {
    console.log('contentItemsLoaded event received, trying init...');
    tryInit();
  });
  
  tryInit();
  
  // Function to handle direct anchor navigation to CSS items
  function handleDirectAnchorNavigation() {
    const hash = window.location.hash;
    if (hash) {
      // Wait a bit for content to be rendered, then scroll to the element
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add a highlight effect to draw attention
          targetElement.style.boxShadow = '0 0 20px rgba(11, 79, 108, 0.5)';
          setTimeout(() => {
            targetElement.style.boxShadow = '';
          }, 3000);
        }
      }, 500);
    }
  }
  
  // Handle hash changes for navigation within the page
  window.addEventListener('hashchange', handleDirectAnchorNavigation);

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
