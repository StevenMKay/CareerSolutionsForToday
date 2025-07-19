// Map page names to background images
const backgrounds = {
  "index.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0786e5f3335fd538557bd2f731a5447697137168/photos/videosection2.png')",
  "learn.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8e0bcb89c429b415b157553ec88792eabb3099c9/photos/LearnSectionPhoto.jpg')",
  "videos.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0786e5f3335fd538557bd2f731a5447697137168/photos/videosection2.png')",
  "templates.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/da19106f72f1e65b1251a02913a85dd58a98eff2/photos/ResumeSectionPhoto.jpg')"
  // Add more as needed
};

// Get current page name and set background
const page = location.pathname.split('/').pop().toLowerCase();
if (backgrounds[page]) {
  document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.1) 20%, #7F7F7F 99%), ${backgrounds[page]}`;
}