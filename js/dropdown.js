// Universal Tools Dropdown Functionality
// This file handles the Tools dropdown menu behavior for both desktop and mobile

document.addEventListener('DOMContentLoaded', function() {
  const toolsToggle = document.getElementById('toolsToggle');
  const toolsDropdown = document.getElementById('toolsDropdown');
  
  if (toolsToggle && toolsDropdown) {
    toolsToggle.addEventListener('click', function(e) {
      // Only handle clicks on mobile (screen width <= 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        toolsDropdown.classList.toggle('active');
        
        // Close dropdown when clicking outside (only add listener if dropdown is open)
        if (toolsDropdown.classList.contains('active')) {
          setTimeout(() => {
            document.addEventListener('click', function closeDropdown(event) {
              if (!toolsDropdown.contains(event.target)) {
                toolsDropdown.classList.remove('active');
                document.removeEventListener('click', closeDropdown);
              }
            });
          }, 10); // Small delay to prevent immediate closing
        }
      }
    });
    
    // Close dropdown when window is resized to desktop view
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        toolsDropdown.classList.remove('active');
      }
    });
  }
});
