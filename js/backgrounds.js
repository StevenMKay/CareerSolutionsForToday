// Map page names to background images
const backgrounds = {
  "index.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0786e5f3335fd538557bd2f731a5447697137168/photos/videosection2.png')",
  "learn.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8e0bcb89c429b415b157553ec88792eabb3099c9/photos/LearnSectionPhoto.jpg')",
  "videos.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0786e5f3335fd538557bd2f731a5447697137168/photos/videosection2.png')",
  "templates.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/da19106f72f1e65b1251a02913a85dd58a98eff2/photos/ResumeSectionPhoto.jpg')",
  "resume.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/965f4340d871fd36de40d605531c2d3b3a82707d/photos/resumebackgroudn.jpg')",
  "practice.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/5d98685a09d577a114908c9770a48196edce63eb/photos/codingbackground.jpg')",
   "businesscase.html": "url('https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/bace7364d2f524356dbc1042b8d74f323848b5a9/photos/BusinessCaseBackground.jpg')",
    // Add more as needed
};

// Get current page name and set background
const page = location.pathname.split('/').pop().toLowerCase();
if (backgrounds[page]) {
  document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.6) 20%, #7F7F7F 99%), ${backgrounds[page]}`;
}



