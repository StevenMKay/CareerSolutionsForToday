window.PROGRAM_ICONS = {
  "Outlook": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/outlookicon.png",
  "Windows": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/windowsicon.png",
  "HTML": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
  "SharePoint": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/sharepointicon.png",
  "Word": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/word.png",
  "Google Sheets": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/googlesheetsicon.png",
  "JavaScript": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/javaicon.png",
  "CSS": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png",
  "Teams": "https://github.com/StevenMKay/CareerSolutionsForToday/raw/35f9470d4f4daceda899cf41727b04a740a93f92/icons/teamsicon.png",
    "Excel": "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png",
  "PowerPoint": "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png",
  "Word": "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/your_word_icon.png",
  "YouTube": "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
      // Add more as needed
};


// 1) First declare your static items:
window.contentItems = [
 
   {
    section: 'Learning', // <--- Add this
    program: { name: 'Excel', image: '...' },
    title: 'Excel Beginner Guide',
    description: 'A complete beginner guide for Excel.',
    thumbnail: '...',
    link: '...',
    // ...other fields...
  },
 
  {
    section: 'Practice Documents',
    program: {
      name: 'Excel',
      image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png'
    },
    title: 'Cleaning Excel Spreadsheets',
    description: 'Learn how to clean, format, and organize messy spreadsheet data efficiently.',
    thumbnail: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2b848924357fae50ad8b97a184b023721eb27c65/Thumbnails/Thumbnail%20Image%20Cleaning%20Spreadsheets.png',
    hoverVideo: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2b848924357fae50ad8b97a184b023721eb27c65/Thumbnails/Excel%20-%20Cleaning%20Spreadsheets%20Thumbnail%20Video.mp4',
    link: 'https://docs.google.com/spreadsheets/d/1nKJyR_6HYp-Spdruv048tgdeXU3_f3CB/export?format=xlsx'
  },
  {
    section: 'Practice Documents',
    program: {
      name: 'Excel',
      image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png'
    },
    title: 'Practice Workbook - Dynamic Text Filter',
    description: 'A downloadable spreadsheet to practice the dynamic text filter capability.',
    thumbnail: 'https://img.icons8.com/color/96/000000/microsoft-excel-2019--v1.png',
    link: 'https://docs.google.com/spreadsheets/d/1taPzeomXBu-O1G-FmmVhlBmBYNeqMTu5/export?format=xlsx',
    related: {
      text: 'Video explaining function',
      url: 'https://youtu.be/sdall4s4_RY'
    }
  },
  {
    section: 'Videos',
    program: {
      name: 'YouTube',
      image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png'
    },
    title: 'Modern Resume Tips',
    description: 'Step-by-step guide to resume writing strategies and a provided template.',
    thumbnail: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8f7a31e22e2ef623ad6b605b1f8d06a0c71b24a3/Thumbnail%20Modern%20Resume%20Video.png',
    link: 'https://youtu.be/0YgpqxPWmoc',
    related: {
      text: 'Modern resume template',
      url: 'https://docs.google.com/presentation/d/1q56RDcpNKYnM69j6ElT9LfV04faAcRDu/export?format=pptx'
    }
  },
  {
    section: 'Templates',
    program: {
      name: 'PowerPoint',
      image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png'
    },
    title: 'Modern Resume Template',
    description: 'Fillable modern resume template with sections including skills, education, and more.',
    thumbnail: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/Thumbnail%20-%20Modern%20Resume%20Template.png',
    link: 'https://docs.google.com/presentation/d/1q56RDcpNKYnM69j6ElT9LfV04faAcRDu/export?format=pptx'
  },
  {
    section: 'Templates',
    program: {
      name: 'PowerPoint',
      image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png'
    },
    title: 'Modern Resume Template with Photo',
    description: 'A PowerPoint resume layout that includes a space for your photo and personalized details.',
    thumbnail: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/6bcca2d9951dd2fa2acfdd7037e3da74f59f025f/Thumbnail%20-%20Modern%20Resume%20Template%20with%20Photo.png',
    link: 'https://docs.google.com/presentation/d/1hnGjNDEAXbPqIY6b_9niedbhqE8wJFdG/export?format=pptx'
  }
];  // <-- close the array here

// 2) Then run your IIFE separately, pushing new items into contentItems
;(async function() {
  const API_KEY     = 'AIzaSyAsoqLIWCHLTCs35HsqDgbZuhgnymwjuKY';
  const CHANNEL_ID  = 'UCY_eFbgvDBsEmY10mtFNLNw';
  const UPLOADS_PLAYLIST_ID = 'UU' + CHANNEL_ID.slice(2);

async function fetchAllPlaylistItems(playlistId, apiKey) {
  let items = [];
  let pageToken = '';
  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}` +
      (pageToken ? `&pageToken=${pageToken}` : '');
    const res = await fetch(url).then(r => r.json());
    items = items.concat(res.items);
    pageToken = res.nextPageToken;
  } while (pageToken);
  return items;
}

// ...inside your IIFE...
const plResItems = await fetchAllPlaylistItems(UPLOADS_PLAYLIST_ID, API_KEY);
const videoIdList = plResItems.map(i => i.snippet.resourceId.videoId);
let allVidItems = [];
for (let i = 0; i < videoIdList.length; i += 50) {
  const batchIds = videoIdList.slice(i, i + 50).join(',');
  const batchRes = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${batchIds}&key=${API_KEY}`
  ).then(r => r.json());
  allVidItems = allVidItems.concat(batchRes.items);
}

// ...rest of your dynamicItems code...

const dynamicItems = allVidItems
  .filter(v => {
    const d = v.contentDetails.duration;
    const m = (d.match(/(\d+)M/)||[])[1]||0;
    const s = (d.match(/(\d+)S/)||[])[1]||0;
    return (+m*60 + +s) >= 60;
  })
  .map(v => ({
    section: ['Learning', 'Videos'],
    program: {
      name: 'YouTube',
      image: 'https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png'
    },
    title: v.snippet.title,
    description: v.snippet.description,
    thumbnail: v.snippet.thumbnails.high.url,
    link: `https://youtu.be/${v.id}`,
    related: {
      text: 'Check it out on YouTube',
      url: `https://youtu.be/${v.id}`
    }
  }));

  // THIS IS THE KEY PART:
  window.contentItems = (window.contentItems || []).concat(dynamicItems);
  window.dispatchEvent(new Event('contentItemsLoaded'));
})();
