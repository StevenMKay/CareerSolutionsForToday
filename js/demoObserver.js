/**
 * Global Demo Observer - Automatically reinitializes interactive demos after filtering
 * This handles all demos that use event listeners and would break when content is dynamically replaced
 */

(function() {
  'use strict';
  
  // Global namespace for demo management
  window.DemoManager = window.DemoManager || {
    initialized: {},
    reinitializers: {},
    observer: null
  };
  
  /**
   * Register a demo reinitializer function
   * @param {string} demoId - Unique identifier for the demo
   * @param {Function} initFunction - Function to initialize/reinitialize the demo
   */
  function registerDemo(demoId, initFunction) {
    window.DemoManager.reinitializers[demoId] = initFunction;
    console.log(`📝 Registered demo: ${demoId}`);
  }
  
  /**
   * Initialize a specific demo by ID
   * @param {string} demoId - The demo to initialize
   */
  function initDemo(demoId) {
    const initFunction = window.DemoManager.reinitializers[demoId];
    if (initFunction && typeof initFunction === 'function') {
      try {
        const result = initFunction();
        if (result) {
          window.DemoManager.initialized[demoId] = true;
          console.log(`✅ Initialized demo: ${demoId}`);
        } else {
          console.log(`⏳ Demo not ready: ${demoId}`);
        }
        return result;
      } catch (error) {
        console.error(`❌ Error initializing demo ${demoId}:`, error);
        return false;
      }
    }
    return false;
  }
  
  /**
   * Scan for demos in the DOM and initialize any that are found
   */
  function scanAndInitializeDemos() {
    const demoSelectors = [
      '#ddPreview',                           // Drag & Drop
      '#imgMagDemo-wd',                       // Image Magnifier
      '#cosmicDemo',                          // Cosmic Button
      '#website-design-electric-border-effect', // Electric Border
      '#website-design-photo-text-overlay',  // Photo Text Overlay
      '#website-design-photo-video-hover',   // Photo Video Hover
      '#website-design-professional-login-form', // Login Form
      '#website-design-9dot-nav-menu',       // 9 Dot Nav Menu
      '.nav-item',                           // Navigation items (fallback)
      '.img-magnifier-container',            // Magnifier (fallback)
      '.cosmic-button',                      // Cosmic button (fallback)
      '.electric-border-container',          // Electric border (fallback)
      '.photo-section',                      // Photo section (fallback)
      '.media-wrapper',                      // Media wrapper (fallback)
      '#loginForm'                           // Login form (fallback)
    ];
    
    let foundDemos = [];
    
    demoSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        // Try to determine demo type from selector or parent elements
        let demoId = null;
        
        if (selector === '#ddPreview') demoId = 'dragDrop';
        else if (selector === '#imgMagDemo-wd') demoId = 'imageMagnifier';
        else if (selector === '#cosmicDemo') demoId = 'cosmicButton';
        else if (selector.includes('electric-border')) demoId = 'electricBorder';
        else if (selector.includes('photo-text-overlay')) demoId = 'photoTextOverlay';
        else if (selector.includes('photo-video-hover')) demoId = 'photoVideoHover';
        else if (selector.includes('login-form') || selector === '#loginForm') demoId = 'loginForm';
        else if (selector.includes('9dot-nav-menu')) demoId = 'nineDotNav';
        else if (selector === '.nav-item') demoId = 'nineDotNav';
        else if (selector === '.img-magnifier-container') demoId = 'imageMagnifier';
        else if (selector === '.cosmic-button') demoId = 'cosmicButton';
        else if (selector === '.electric-border-container') demoId = 'electricBorder';
        else if (selector === '.photo-section') demoId = 'photoTextOverlay';
        else if (selector === '.media-wrapper') demoId = 'photoVideoHover';
        
        if (demoId && !foundDemos.includes(demoId)) {
          foundDemos.push(demoId);
          console.log(`🔍 Found demo: ${demoId} (${selector})`);
          
          // Small delay to ensure DOM is fully rendered
          setTimeout(() => {
            initDemo(demoId);
          }, 100);
        }
      }
    });
    
    if (foundDemos.length > 0) {
      console.log(`🚀 Scanning complete. Found ${foundDemos.length} demo(s):`, foundDemos);
    }
  }
  
  /**
   * Set up the global MutationObserver to watch for content changes
   */
  function setupGlobalObserver() {
    if (window.DemoManager.observer) {
      window.DemoManager.observer.disconnect();
    }
    
    const resultsContainers = [
      document.getElementById('learnResults'),
      document.getElementById('toolsResults'), 
      document.getElementById('practiceResults'),
      document.getElementById('videosResults'),
      document.body // fallback
    ].filter(Boolean);
    
    if (resultsContainers.length === 0) {
      console.log('⚠️ No results containers found, using document.body');
      resultsContainers.push(document.body);
    }
    
    const observer = new MutationObserver(function(mutations) {
      let shouldScan = false;
      
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) { // Element node
              // Check if this is likely demo content
              const hasInteractiveContent = node.querySelector && (
                node.querySelector('[id*="demo"]') ||
                node.querySelector('[class*="demo"]') ||
                node.querySelector('button') ||
                node.querySelector('input') ||
                node.querySelector('form') ||
                node.querySelector('[draggable]') ||
                node.querySelector('canvas') ||
                node.querySelector('video') ||
                node.classList?.contains('content-item') ||
                node.id?.includes('demo')
              );
              
              if (hasInteractiveContent) {
                shouldScan = true;
              }
            }
          });
        }
      });
      
      if (shouldScan) {
        console.log('🔄 Content change detected, scanning for demos...');
        // Reset initialization flags since content was replaced
        window.DemoManager.initialized = {};
        
        // Delay to ensure content is fully rendered
        setTimeout(scanAndInitializeDemos, 150);
      }
    });
    
    // Observe all results containers
    resultsContainers.forEach(container => {
      observer.observe(container, {
        childList: true,
        subtree: true
      });
    });
    
    window.DemoManager.observer = observer;
    console.log('👀 Global demo observer active, monitoring', resultsContainers.length, 'container(s)');
  }
  
  /**
   * Initialize the global demo management system
   */
  function initializeDemoManager() {
    console.log('🎯 Initializing Global Demo Manager');
    
    // Set up the observer
    setupGlobalObserver();
    
    // Do initial scan
    setTimeout(scanAndInitializeDemos, 200);
    
    // Expose global functions
    window.DemoManager.register = registerDemo;
    window.DemoManager.init = initDemo;
    window.DemoManager.scan = scanAndInitializeDemos;
    window.DemoManager.setup = setupGlobalObserver;
    
    console.log('✅ Global Demo Manager ready');
  }
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDemoManager);
  } else {
    initializeDemoManager();
  }
  
  // Also initialize on window load as backup
  window.addEventListener('load', function() {
    if (!window.DemoManager.observer) {
      initializeDemoManager();
    }
  });
  
})();
