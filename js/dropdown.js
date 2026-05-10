// Universal Tools Dropdown Functionality
// This file handles the Tools dropdown menu behavior for both desktop and mobile

document.addEventListener('DOMContentLoaded', function() {
  // Wire up any .dropdown nav item that has a .dropdown-toggle inside.
  const dropdowns = document.querySelectorAll('.nav-links .dropdown');

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function (e) {
      // Only handle clicks on mobile (screen width <= 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();

        dropdown.classList.toggle('active');

        if (dropdown.classList.contains('active')) {
          setTimeout(function () {
            document.addEventListener('click', function closeDropdown(event) {
              if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
                document.removeEventListener('click', closeDropdown);
              }
            });
          }, 10);
        }
      }
    });
  });

  // Close dropdowns when window is resized to desktop view
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('active');
      });
    }
  });
});
