
window.PROGRAM_ICONS = {
  Outlook:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/outlookicon.png",
 'Google Chrome':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/a4f299d05ef28e41160723f72b439f29a3868b0a/chromeicon.png",
 'Windows Edge':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/a4f299d05ef28e41160723f72b439f29a3868b0a/edgeicon.png",
 Firefox:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/a4f299d05ef28e41160723f72b439f29a3868b0a/firefoxicon.png",
General:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/5081bef9abd3db6fb93b96a3f0441e9db909aebb/icons/generalicon.png",
SQL:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/ae90f4fb10d0211b5042bfcd3b072a41dc9ce917/icons/sqlicon.png",


'Helpful Websites':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/ccb7bdd06de647ea39a8a8644798db5d7c790525/icons/interneticon.png",

  Windows:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/windowsicon.png",
  HTML:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
  SharePoint:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/sharepointicon.png",
  Word:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/word.png",
  'Google Sheets': "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/googlesheetsicon.png",
  JavaScript:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/javaicon.png",
  CSS:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png",
  Teams:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/35f9470d4f4daceda899cf41727b04a740a93f92/icons/teamsicon.png",
    Excel:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png",
  PowerPoint:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png",
  Word:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/38c9ee90243b3cfb0980c5e76beae6639dc815c5/icons/word.png",
  YouTube:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
      // Add more as needed
};




// 1) First declare your static items:
window.contentItems = [





{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Holographic Hover Effect",
    description: "Learn how to create a stunning holographic hover effect using pure CSS. This modern effect uses gradients, transforms, and transitions to create an eye-catching holographic shine animation on hover. Perfect for cards, buttons, or any interactive elements. Includes complete HTML and CSS code examples that you can copy and use in your projects.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "#css-holographic-demo",
    related: {
        text: "Try the Live Demo",
        url: "#css-holographic-demo"
    },
    topic: "CSS Hover Effects",
    demoHtml: `<div class="holographic-container" style="height:220px;">
  <div class="holographic-card">
    <h2>Hover Here</h2>
  </div>
</div>`,
    demoCss: `/* CSS Holographic Hover Effect */
.holographic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  background: #000;
  border-radius: 10px;
  margin: 20px 0;
}

.holographic-card {
  width: 300px;
  height: 200px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.5s ease;
  cursor: pointer;
}

.holographic-card h2 {
  color: #0ff;
  font-size: 2rem;
  position: relative;
  z-index: 2;
  margin: 0;
  text-shadow: 0 0 10px rgba(0,255,255,0.5);
}

.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg, 
    transparent, 
    transparent 30%, 
    rgba(0,255,255,0.3)
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.holographic-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0,255,255,0.5);
}

.holographic-card:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}`
},






    {
        section:"Templates",
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/38c9ee90243b3cfb0980c5e76beae6639dc815c5/icons/word.png"
        },
        title:"Classic Resume Template",
        description:"Fillable classic resume template with sections including skills, education, and more.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d97222d8f6cc3918f38eae975d176c6776eb4e5b/Thumbnails/classicres.png",
        link:"https://docs.google.com/document/d/10qH5epMz5GTIDCll2VBeHhtUhKlRCx4I/export?format=docx",
          related:{
            text:"Classic resume template",
            url:"https://docs.google.com/document/d/10qH5epMz5GTIDCll2VBeHhtUhKlRCx4I/export?format=docx"
        },
        topic:"Resumes"
    },





















{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9f730021fd7377dacb53672b2f8d7c68063fcec8/Thumbnails/highlightL.png",
https:"https://youtu.be/r4iBjEWwZ74",
 title:"Highlight Every Other Row",
        description:"In this quick video we cover how to highlight every other even or odd numbered row in Excel without needing to make a table.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9f730021fd7377dacb53672b2f8d7c68063fcec8/Thumbnails/highlightL.png",
       link:"https://youtu.be/r4iBjEWwZ74",
    related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/r4iBjEWwZ74"
        },
        topic:"Highlight Every Other Row"
    },




{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9f730021fd7377dacb53672b2f8d7c68063fcec8/Thumbnails/highlightS.png",
https:"https://www.youtube.com/shorts/fzTXUBWDCA4",
 title:"Shorts - Highlight Every Other Row",
        description:"In this quick video we cover how to highlight every other even or odd numbered row in Excel without needing to make a table.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9f730021fd7377dacb53672b2f8d7c68063fcec8/Thumbnails/highlightS.png",
       link:"https://www.youtube.com/shorts/fzTXUBWDCA4",
        topic:"Highlight Every Other Row",
    },












{
       section:"Practice Documents",
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/329d27ef16a905996d29baccf591e144de649067/Thumbnails/dependentdropdowns.png"
        },
        title:"Practice Workbook - Dependent Dropdown Lists",
        description:"Step-by-step guide to creating dependent dropdown lists in Excel using data validation for up to 3 levels and multi-word scenarios.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/329d27ef16a905996d29baccf591e144de649067/Thumbnails/dependentdropdowns.png",
        link:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/329d27ef16a905996d29baccf591e144de649067/Thumbnails/dependentdropdowns.png",
  related:[
    {
            text:"Dependent Dropdown Lists",
            url:"https://docs.google.com/spreadsheets/d/1V6aiXCT9yt8mpSfaMsUY4gMSu3B7xASq/export?format=xlsx"
        },
        {text:"Video explaining function",
            url: "https://youtu.be/pl6pn_UBp-c"
        }
    ],
        topic:"Dependent Dropdown Lists"
    },


{
  
        section:"Templates",
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png"
        },
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d4a5c2c46650f1e958e1a38996ea4216181edddf/Thumbnails/biotemplatethumb.png",
        link:"https://youtube.com/shorts/TCMYpQUytOM",
        title:"Professional Bio Template",
        description:"This is a professional bio template you can download and fill out for your needs.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d4a5c2c46650f1e958e1a38996ea4216181edddf/Thumbnails/biotemplatethumb.png",
       link:"https://docs.google.com/presentation/d/1N4Y0_lHoGTOLTuVEqnRUeGGwD190aB2P/export/pptx",
        topic:"Professional Bio Template",
    },





  
{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png"
        },
https:"//raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0e0ec2ada2651814c81dbd95b529c93ad76a3bff/Thumbnails/Screenshot%202025-07-21%20170749.png",
https:"//youtube.com/shorts/TCMYpQUytOM",
 title:"Hiding All Columns and Rows",
        description:"This quick video will show you how to hide or remove all unused columns or rows in Excel to create a clean view for your users. We will also cover how to unhide or restore the hidden columns and rows.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0e0ec2ada2651814c81dbd95b529c93ad76a3bff/Thumbnails/Screenshot%202025-07-21%20170749.png",
       link:"https://youtube.com/shorts/TCMYpQUytOM",
        topic:"Hiding All Columns and Rows",
    },


    {
        section:"Practice Documents",
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png"
        },
        title:"Cleaning Excel Spreadsheets",
        description:"Learn how to clean, format, and organize messy spreadsheet data efficiently.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2b848924357fae50ad8b97a184b023721eb27c65/Thumbnails/Thumbnail%20Image%20Cleaning%20Spreadsheets.png",
        hoverVideo:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2b848924357fae50ad8b97a184b023721eb27c65/Thumbnails/Excel%20-%20Cleaning%20Spreadsheets%20Thumbnail%20Video.mp4",
        link:"https://docs.google.com/spreadsheets/d/1nKJyR_6HYp-Spdruv048tgdeXU3_f3CB/export?format=xlsx",
        topic:"Cleaning Spreadsheets",
    },
    {
        section:"Practice Documents",
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/49aed2c6942f98e51c322cfcbe304f249faebc60/Excel%20Icon.png"
        },
        title:"Practice Workbook - Dynamic Text Filter",
        description:"A downloadable spreadsheet to practice the dynamic text filter capability.",
        thumbnail:"https://i.ytimg.com/vi/sdall4s4_RY/hqdefault.jpg",
        link:"https://docs.google.com/spreadsheets/d/1taPzeomXBu-O1G-FmmVhlBmBYNeqMTu5/export?format=xlsx",
        related:{
            text:"Video explaining function",
            url:"https://youtu.be/sdall4s4_RY"
        },
        topic:"Dynamic Text Filter"
    },
    {
         section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Modern Resume Tips",
        description:"Step-by-step guide to resume writing strategies and a provided template.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8f7a31e22e2ef623ad6b605b1f8d06a0c71b24a3/Thumbnail%20Modern%20Resume%20Video.png",
        link:"https://youtu.be/b-UlEXG_msU",
        related:{
            text:"Modern resume template",
            url:"https://docs.google.com/presentation/d/1q56RDcpNKYnM69j6ElT9LfV04faAcRDu/export?format=pptx"
        },
        topic:"Resumes"
    },
    {
        section:"Templates",
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png"
        },
        title:"Modern Resume Template",
        description:"Fillable modern resume template with sections including skills, education, and more.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/Thumbnail%20-%20Modern%20Resume%20Template.png",
        link:"https://docs.google.com/presentation/d/1q56RDcpNKYnM69j6ElT9LfV04faAcRDu/export?format=pptx",
          related:{
            text:"Modern resume template",
            url:"https://docs.google.com/presentation/d/1q56RDcpNKYnM69j6ElT9LfV04faAcRDu/export?format=pptx"
        },
        topic:"Resumes"
    },
    {
        section:"Templates",
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/43b55f504d147fe575506b0ad439d4b363b3613c/PowerPoint%20Image.png"
        },
        title:"Modern Resume Template with Photo",
        description:"A PowerPoint resume layout that includes a space for your photo and personalized details.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/6bcca2d9951dd2fa2acfdd7037e3da74f59f025f/Thumbnail%20-%20Modern%20Resume%20Template%20with%20Photo.png",
        link:"https://docs.google.com/presentation/d/1hnGjNDEAXbPqIY6b_9niedbhqE8wJFdG/export?format=pptx",
        related:{
            text:"Modern resume template with Photo",
            url:"https://docs.google.com/presentation/d/1hnGjNDEAXbPqIY6b_9niedbhqE8wJFdG/export?format=pptx"
        },
        topic:"Resumes"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Short Tips - Dynamic Sheet List Function | No VBA or Code",
        description:"Hey team,\n\nIn this video we cover how to create a function that gives you a full dynamic list of all sheet names in your Excel workbook, including hidden tabs. This function will update when you rename, add, or remove a tab.\n\nFull Video Explanation: https://youtu.be/X6if1vTKeSk",
        thumbnail:"https://i.ytimg.com/vi/tjtS3Ja_SP4/hqdefault.jpg",
        link:"https://youtu.be/tjtS3Ja_SP4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/tjtS3Ja_SP4"
        },
        topic:"Sheet List"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Dynamic Sheet List Function | No VBA or Code",
        description:"Hey team,\n\nIn this video we cover how to create a function that gives you a full dynamic list of all sheet names in your Excel workbook, including hidden tabs. This function will update when you rename, add, or remove a tab.\n\nChapters:\n0:00 Introduction\n0:24 Creating the Function\n0:57 Explaining the Function\n1:11 Skip Explanation\n1:38 Final Reminders and #BLOCK! Error",
        thumbnail:"https://i.ytimg.com/vi/X6if1vTKeSk/hqdefault.jpg",
        link:"https://youtu.be/X6if1vTKeSk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/X6if1vTKeSk"
        },
        topic:"Sheet List"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - One Click to Highlight Active Row and Column | Focus Cell",
        description:"In this video we cover how to highlight the entire active row in Excel based on your cell selection with a new Excel feature called Focus Cell.\n\nThis new feature is available in the latest versions of Excel.\n\nAvailability: Please ensure you are using Version 2410 (Build 18118.20000) or later for Windows and Version 16.91 (Build 24109300) or later for Mac. Support for Focus Cell with Freeze Panes has officially rolled out to all users.\n\nFor new features, video on the Free Insider Program: https://youtu.be/z2O4ZDOo5Y8",
        thumbnail:"https://i.ytimg.com/vi/KRFFp6QdsQQ/hqdefault.jpg",
        link:"https://youtu.be/KRFFp6QdsQQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/KRFFp6QdsQQ"
        },
        topic:"Highlight Active Row and Column"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Short Tips - Dynamically Clean Spreadsheets in One Click",
        description:"Hey team, \n\nIn this video we cover how to quickly clean any data in Excel.\n\nDynamic Script Used in Excel: \n\nfunction main(workbook: ExcelScript.Workbook) {\n  const sheet = workbook.getActiveWorksheet();\n  const usedRange = sheet.getUsedRange();\n  // Exit if no data\n  if (!usedRange || usedRange.getRowCount() === 0 || usedRange.getColumnCount() === 0) {\n    console.log(\"No data found on the worksheet.\");\n    return;\n  }\n  // Auto fit used range\n  usedRange.getFormat().autofitColumns();\n  usedRange.getFormat().autofitRows();\n  // Clear formatting and set alignment\n  usedRange.getFormat().getFill().clear();\n  usedRange.getFormat().setHorizontalAlignment(ExcelScript.HorizontalAlignment.left);\n  usedRange.getFormat().setVerticalAlignment(ExcelScript.VerticalAlignment.bottom);\n  usedRange.getFormat().setIndentLevel(0);\n  usedRange.getFormat().setWrapText(false);\n  usedRange.getFormat().setTextOrientation(0);\n  // Apply date format to column A, rows 2 through last used row\n  const lastRow = usedRange.getRowCount();\n  const dateRange = sheet.getRangeByIndexes(1, 0, lastRow - 1, 1); // row 1 = A2, col 0 = column A\n  dateRange.setNumberFormatLocal(\"m/d/yyyy\");\n  // Create table from used range\n  const rangeAddress = usedRange.getAddress();\n  try {\n    const table = sheet.addTable(rangeAddress, true);\n    table.setName(\"AutoTable_\" + Date.now());\n    console.log(`Table created at range: ${rangeAddress}`);\n  } catch (e) {\n    console.log(\"Error creating table: \" + e);\n  }\n}",
        thumbnail:"https://i.ytimg.com/vi/Ph1Gqj1CqWY/hqdefault.jpg",
        link:"https://youtu.be/Ph1Gqj1CqWY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Ph1Gqj1CqWY"
        },
        topic:"Scripts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Excel's Most Powerful Tool | Flash Fill",
        description:"This quick video shows you how powerful the Flash Fill or Ctrl + E combination can be in Excel with some examples.\n\nCtrl + E is a keyboard shortcut for flash fill that recognizes patterns in adjacent columns and fills the current column.\n\nChapters:\n0:00 Introduction\n1:10 Reversing Names\n1:31 Company Name From Email Address\n1:52 Custom Format\n2:25 Creating Acronyms\n2:41 Extracting Data From Text String\n3:07 Redacting Sensitive Data",
        thumbnail:"https://i.ytimg.com/vi/FCfOr0ztIBg/hqdefault.jpg",
        link:"https://youtu.be/FCfOr0ztIBg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/FCfOr0ztIBg"
        },
        topic:"Flash Fill"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Separate Lines in a Cell | Bullet Points",
        description:"Hey team,\n\nThis quick video will show you not only how to create multiple lines of text within cells, but also how to add bullet points in Excel.",
        thumbnail:"https://i.ytimg.com/vi/aWBFwCf7O9Q/hqdefault.jpg",
        link:"https://youtu.be/aWBFwCf7O9Q",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/aWBFwCf7O9Q"
        },
        topic:"Separating Lines"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Cleaning Data Quickly | Shortcuts Included",
        description:"Hey team, \n\nIn this video we cover how to quickly clean any data in Excel.",
        thumbnail:"https://i.ytimg.com/vi/R70Yl525oE0/hqdefault.jpg",
        link:"https://youtu.be/R70Yl525oE0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/R70Yl525oE0"
        },
        topic:"Cleaning Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Addition with SUM and AUTOSUM",
        description:"Hey team,\n\nThis video shows you how to easily sum up data in excel using a variety of easy methods.",
        thumbnail:"https://i.ytimg.com/vi/h5H9ZBU4HXI/hqdefault.jpg",
        link:"https://youtu.be/h5H9ZBU4HXI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/h5H9ZBU4HXI"
        },
        topic:"SUM and AUTOSUM Functions"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Separate Data In Rows Into Columns",
        description:"Hey team,\n\nIn this video we cover how to separate strings of text data in rows into columns.",
        thumbnail:"https://i.ytimg.com/vi/e-YkzESGL3A/hqdefault.jpg",
        link:"https://youtu.be/e-YkzESGL3A",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/e-YkzESGL3A"
        },
        topic:"Separating Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Change Image to Any Shape",
        description:"Hey team,\n\nIn this video we cover how to change any image to any shape in PowerPoint.",
        thumbnail:"https://i.ytimg.com/vi/n5mDgSyTfyY/hqdefault.jpg",
        link:"https://youtu.be/n5mDgSyTfyY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/n5mDgSyTfyY"
        },
        topic:"Change Image Shape"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Essential Tips for Creating Professional Slides",
        description:"Hey team,\n\nIn this video we cover how to create professional slides in PowerPoint.\n\nChapters\n0:00 Introduction\n0:49 Text Formatting\n1:29 Alignment and Spacing\n3:39 Emphasis and Simplicity\n5:49 Aligning Colors\n6:45 Pro Tip - Gradient Fill\n\nLink to video on changing images to any shape: https://youtu.be/n5mDgSyTfyY",
        thumbnail:"https://i.ytimg.com/vi/Ymu6KYe9iwk/hqdefault.jpg",
        link:"https://youtu.be/Ymu6KYe9iwk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Ymu6KYe9iwk"
        },
        topic:"Professional Slides"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - XLOOKUP Multiple Criteria",
        description:"Hey team,\n\nIn this video we cover how to use XLOOKUP to return values using multiple criteria to search.\n\nXLOOKUP Video: https://youtu.be/Bcm7LB5ZyMY",
        thumbnail:"https://i.ytimg.com/vi/HxTNSkemz0Y/hqdefault.jpg",
        link:"https://youtu.be/HxTNSkemz0Y",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/HxTNSkemz0Y"
        },
        topic:"XLOOKUP Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Word",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Word Tips - Multi Level Lists | Creation and Customization",
        description:"Hey team,\n\nIn this video we cover how to create and customize multi-level lists.\n\nChapters\n0:00 Introduction\n0:17 Multi-Level List Basics\n1:28 List Customization\n3:55 Adjusting Spacing",
        thumbnail:"https://i.ytimg.com/vi/XvBHMHOpdP0/hqdefault.jpg",
        link:"https://youtu.be/XvBHMHOpdP0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/XvBHMHOpdP0"
        },
        topic:"Multi Level Lists"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Compare Tabs Side by Side from Same Workbook",
        description:"Hey team,\n\nIn this video we cover how to review separate tabs for the same workbook side by side in Excel.",
        thumbnail:"https://i.ytimg.com/vi/r4YhBzpa-so/hqdefault.jpg",
        link:"https://youtu.be/r4YhBzpa-so",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/r4YhBzpa-so"
        },
        topic:"Compare Tabs"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Custom Date Filter Dropdowns Using FILTER Function",
        description:"Hey team,\n\nIn this video we cover how to create an awesome dynamic date filter that is customizable in Excel. This filter can be created for any timeframes you need in your role.\n\nChapters\n0:00 Introduction\n0:35 Setting Up Timeframes\n3:14 Using VLOOKUP For Timeframes\n3:58 Setting Up The FILTER Function\n\nVideo Help:\n\nVLOOKUP Tutorial: https://youtu.be/HBIphAYLvfU\n\nFILTER Function: https://youtu.be/fNVSIowXGec",
        thumbnail:"https://i.ytimg.com/vi/bvSKXhOZiDM/hqdefault.jpg",
        link:"https://youtu.be/bvSKXhOZiDM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/bvSKXhOZiDM"
        },
        topic:"Customer Date Filters"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Split Cells",
        description:"Hey team,\n\nIn this video we cover how to split data in an Excel cell or column into multiple cells or columns.",
        thumbnail:"https://i.ytimg.com/vi/nvdDiwkaIWM/hqdefault.jpg",
        link:"https://youtu.be/nvdDiwkaIWM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/nvdDiwkaIWM"
        },
        topic:"Split Cells"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Dynamic Calendars",
        description:"Hey team,\n\nIn this video we cover how to create a dynamic calendar in Excel.",
        thumbnail:"https://i.ytimg.com/vi/7fPOHl8-LeM/hqdefault.jpg",
        link:"https://youtu.be/7fPOHl8-LeM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/7fPOHl8-LeM"
        },
        topic:"Calendar Creation"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Get Data from Photo or Image",
        description:"Hey team, \n\nIn this video we cover how to gather data from a photo or image and place it into Excel.\n\nImage: Flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/7I0HTYe8Cbo/hqdefault.jpg",
        link:"https://youtu.be/7I0HTYe8Cbo",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/7I0HTYe8Cbo"
        },
        topic:"Data Extraction"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Best Way to Create Circle Images",
        description:"Hey team,\n\nIn this video we cover the best way to make a picture round or any other shape in PowerPoint.",
        thumbnail:"https://i.ytimg.com/vi/-DAH69fESn4/hqdefault.jpg",
        link:"https://youtu.be/-DAH69fESn4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/-DAH69fESn4"
        },
        topic:"Circle Images"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Dynamic Row Sequences | Basic and Advanced",
        description:"Hey team,\n\nIn this video we cover how to use the SEQUENCE function to create dynamic row sequences in Excel.\n\nChapters\n0:00 Introduction\n0:23 Basic SEQUENCE Function\n0:49 Sequence Based on Column\n1:32 Sequence With Text\n2:06 Sequence With Date",
        thumbnail:"https://i.ytimg.com/vi/DIf7uuLJnd8/hqdefault.jpg",
        link:"https://youtu.be/DIf7uuLJnd8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/DIf7uuLJnd8"
        },
        topic:"Row Sequences"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Word",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Word Tips - Delete Pages | Specific Pages | Extra Blank Pages",
        description:"Hey team,\n\nIn this short video we cover how to delete specific pages in Word. We also cover how to delete extra blank pages in your Word documents.",
        thumbnail:"https://i.ytimg.com/vi/ZhoWngQOgJg/hqdefault.jpg",
        link:"https://youtu.be/ZhoWngQOgJg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ZhoWngQOgJg"
        },
        topic:"Delete Pages"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Inserting Clickable Documents",
        description:"Hey team,\n\nIn this video we cover how to load documents such as Word, PowerPoint, or PDF files into your Excel workbooks.",
        thumbnail:"https://i.ytimg.com/vi/1XpLmGzu0_U/hqdefault.jpg",
        link:"https://youtu.be/1XpLmGzu0_U",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/1XpLmGzu0_U"
        },
        topic:"Inserting Documents"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Helpful Websites",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Helpful Websites - Learn Coding and Programming | HackerRank",
        description:"Hey team,\n\nIn this video we cover a very helpful website called HackerRank which can be used to learn various coding and programming languages. This website also shows you job roles within the field you may be looking for.\n\nHackerRank Website Link: https://www.hackerrank.com/",
        thumbnail:"https://i.ytimg.com/vi/d7hxVTAbG4k/hqdefault.jpg",
        link:"https://youtu.be/d7hxVTAbG4k",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/d7hxVTAbG4k"
        },
        topic:"Coding"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Removing Multiple Filters | Pro Tip",
        description:"Hey team,\n\nIn this video we cover some pro tips for quickly removing filters from multiple columns within your Excel spreadsheets.",
        thumbnail:"https://i.ytimg.com/vi/3wvkVOj4m00/hqdefault.jpg",
        link:"https://youtu.be/3wvkVOj4m00",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/3wvkVOj4m00"
        },
        topic:"Filter Removal"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Move Formulas Without Changing Cell References",
        description:"Hey team,\n\nIn this video we cover how to move formulas in Excel without changing the cell references and without the need to use the dollar sign to create absolute cell references.\n\nChapters\n0:00 Introduction\n0:13 Moving Formula | One Cell\n0:40 Moving Formula | Multiple Cells",
        thumbnail:"https://i.ytimg.com/vi/y6D2LQb-qEE/hqdefault.jpg",
        link:"https://youtu.be/y6D2LQb-qEE",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/y6D2LQb-qEE"
        },
        topic:"Moving Formulas"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Compare Columns | Match and Exact Match",
        description:"Hey team,\n\nIn this video we look at 2 easy methods to compare columns in Excel. This will help you look for matches and exact matches.\n\nChapters:\n0:00 Introduction\n0:18 Simple Match\n1:07 Exact Match",
        thumbnail:"https://i.ytimg.com/vi/ZNSlE2kS2NQ/hqdefault.jpg",
        link:"https://youtu.be/ZNSlE2kS2NQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ZNSlE2kS2NQ"
        },
        topic:"Compare Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Combine Workbooks | Easy Method",
        description:"Hey team,\n\nIn this video we cover how to combine multiple Excel workbooks using an easy method.\n\nLink to longer video on using Power Query to combine tabs or workbooks: https://youtu.be/V62lPmdVEsY",
        thumbnail:"https://i.ytimg.com/vi/QrtlHWP3a0s/hqdefault.jpg",
        link:"https://youtu.be/QrtlHWP3a0s",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/QrtlHWP3a0s"
        },
        topic:"Combining Workbooks"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - 5 Ways to Clean Your Spreadsheets",
        description:"Hey team,\n\nIn this video we cover 5 vital tips you can utilize to help clean the data in your Excel spreadsheets.\n\nChapters\n0:00 Introduction\n0:16 Remove Extra Spaces\n0:55 Remove Duplicates\n2:23 Fill in Blank Cells\n3:02 Remove Formula Errors\n3:39 Split Data in Columns\n\n\nVideo on Flash Fill (Ctrl + E): https://youtu.be/rIGWgROMV5A\n\nImage: Flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/cUUdtC8xVfE/hqdefault.jpg",
        link:"https://youtu.be/cUUdtC8xVfE",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/cUUdtC8xVfE"
        },
        topic:"Cleaning Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Track Any Changes Made to Your Workbook | No VBA",
        description:"Hey team,\n\nThis video will show you how to track changes in an Excel workbook using conditional formatting.\n\nVideo on how to protect your workbook: https://youtu.be/FhpkLchk3L8",
        thumbnail:"https://i.ytimg.com/vi/b7nR4sse6O8/hqdefault.jpg",
        link:"https://youtu.be/b7nR4sse6O8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/b7nR4sse6O8"
        },
        topic:"Track Changes"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Group Email Link",
        description:"Hey team,\n\nIn this video we cover how to set up a group email link in Excel to help you with managing your projects.\n\nLink to long form email video to set up the body, subject, and more here: https://youtu.be/HNvxK3mYXug?si=QzYilFo99-6RIT3V",
        thumbnail:"https://i.ytimg.com/vi/fpKmgDwLgOc/hqdefault.jpg",
        link:"https://youtu.be/fpKmgDwLgOc",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/fpKmgDwLgOc"
        },
        topic:"Email Group Link"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Inserts Watermarks into Your Spreadsheet",
        description:"Hey team,\n\nThis quick video will show you how to add, format, recolor and delete watermarks from your Excel spreadsheets.",
        thumbnail:"https://i.ytimg.com/vi/pxb7q7TLJho/hqdefault.jpg",
        link:"https://youtu.be/pxb7q7TLJho",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/pxb7q7TLJho"
        },
        topic:"Watermarks"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Windows Tips - Screenshot Active Application",
        description:"Hey team,\n\nIn this video we cover an amazing tip for capturing screenshots of your active application in Windows.\n\nImage: Flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/VN8Y4l0_4Ys/hqdefault.jpg",
        link:"https://youtu.be/VN8Y4l0_4Ys",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/VN8Y4l0_4Ys"
        },
        topic:"Screenshot Tips"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Career Tips - Professional Modern Resume Template and Tips",
        description:"Hey team,\n\nIn this video we cover how to create a modern and professional resume. Remember to always tailor your resume to the job you are seeking by adjusting the skills and accomplishments you display based on your experience. \n\nLink to Iconfinder LinkedIn icon: https://www.iconfinder.com/search?q=linkedin",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8f7a31e22e2ef623ad6b605b1f8d06a0c71b24a3/Thumbnail%20Modern%20Resume%20Video.png",
        link:"https://youtu.be/b-UlEXG_msU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/b-UlEXG_msU"
        },
        topic:"Resumes"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Find and Remove Duplicate Data and Utilize the UNIQUE Function for Unique Lists",
        description:"Hey team,\n\nIn this video I cover how to visually find duplicates in your data and remove them using the remove duplicates tool on the data tab. Additionally, I cover how the UNIQUE function can be used to remove duplicates from your data and create unique lists. \n\nChapters:\n0:00 Introduction\n1:01 View Duplicates with Conditional Formatting\n1:47 Remove Duplicates\n3:04 Using Remove Duplicates to Find Unique Lists\n4:19 UNIQUE Formula\n4:47 Bonus Tip - Conditional Formatting",
        thumbnail:"https://i.ytimg.com/vi/lcVWz9exVkE/hqdefault.jpg",
        link:"https://youtu.be/lcVWz9exVkE",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/lcVWz9exVkE"
        },
        topic:"Remove Duplicates"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - FILTER Function Basics and Multiple Criteria with Column Select",
        description:"Hey team,\n\nThis video will show you how to use the FILTER function in Excel. We start off with the basics but there are examples of adding \"and\" and \"or\" criteria to the filter as well. At the end I also show how to return only the columns you want to see.\n\nChapters:\n0:00 Introduction\n0:38 FILTER Basics\n1:29 FILTER with AND Criteria\n2:43 FILTER with OR including AND Criteria\n4:17 FILTER with OR including multiple AND criteria\n5:05 Choose Columns to Include in Filter Results",
        thumbnail:"https://i.ytimg.com/vi/fNVSIowXGec/hqdefault.jpg",
        link:"https://youtu.be/fNVSIowXGec",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/fNVSIowXGec"
        },
        topic:"FILTER Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Word",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Word Tips - Remove Extra Spaces",
        description:"Hey team,\n\nIn this video we cover how to remove extra spaces from Word documents using the Find and Replace feature in Microsoft Word.\n\nImage: Flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/0TiDOZ9tBIY/hqdefault.jpg",
        link:"https://youtu.be/0TiDOZ9tBIY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/0TiDOZ9tBIY"
        },
        topic:"Removing Extra Spaces"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Removes Extra Spaces | TRIM Function",
        description:"Hey team,\n\nThis video will help you see why the TRIM function can be so helpful in Excel. I will show you a real-life scenario for how this function can help and show you how the TRIM function works.",
        thumbnail:"https://i.ytimg.com/vi/NGCifPT7wRY/hqdefault.jpg",
        link:"https://youtu.be/NGCifPT7wRY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/NGCifPT7wRY"
        },
        topic:"Removing Extra Spaces"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Fast Chart Options | Quick Analysis Tool",
        description:"Hey team,\n\nIn this video we cover how to use the quick analysis tool for Excel's recommended options to format or add charts (data visualizations) to your spreadsheet.",
        thumbnail:"https://i.ytimg.com/vi/cDgl1Nm46Z0/hqdefault.jpg",
        link:"https://youtu.be/cDgl1Nm46Z0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/cDgl1Nm46Z0"
        },
        topic:"Charts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Calendars | No Formulas Needed",
        description:"Hey team, \n\nIn this video we cover how you can easily create various calendars in Excel without the need for functions or formulas.",
        thumbnail:"https://i.ytimg.com/vi/T1d3w3hLw6g/hqdefault.jpg",
        link:"https://youtu.be/T1d3w3hLw6g",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/T1d3w3hLw6g"
        },
        topic:"Calendar Creation"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Date Sorting | Multiple Methods Included",
        description:"Hey team,\n\nIn this video we cover multiple ways to sort dates in Excel with various tips and best practices included.",
        thumbnail:"https://i.ytimg.com/vi/pyRKPNpfmow/hqdefault.jpg",
        link:"https://youtu.be/pyRKPNpfmow",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/pyRKPNpfmow"
        },
        topic:"Date Sorting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"SharePoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"SharePoint 365 Tips - Create Sections and Columns in Your List Form",
        description:"This video details how to create sections and columns in a list form.\n\nLink to guide for list, form, and column formatting: https://learn.microsoft.com/en-us/sharepoint/dev/declarative-customization/list-form-configuration\n\nJSON used in example so you can practice:\n\n{\n    \"sections\": [\n        {\n            \"displayname\": \"Project Information\",\n            \"fields\": [\n                \"Project Title\",\n                \"Project Details\",\n                \"Project Start Date\",\n                \"Project End Date\"\n            ]\n        },\n        {\n            \"displayname\": \"Applicant 1 Information\",\n            \"fields\": [\n                \"Project Applicant 1\",\n                \"Applicant 1 Qualifications\"\n            ]\n        },\n        {\n            \"displayname\": \"Applicant 2 Information\",\n            \"fields\": [\n                \"Project Applicant 2\",\n                \"Applicant 2 Qualifications\"\n            ]\n        }\n    ]\n}\n\nExample JSON imported from Microsoft site:\n\n{\n    \"sections\": [\n        {\n            \"displayname\": \"\",\n            \"fields\": [\n                \"Title\"\n            ]\n        },\n        {\n            \"displayname\": \"Details\",\n            \"fields\": [\n                \"Department\",\n                \"Email\",\n                \"Country\"\n            ]\n        },\n        {\n            \"displayname\": \"Application\",\n            \"fields\": [\n                \"Application Id\",\n                \"Approver\",\n                \"Reviewer\"\n            ]\n        }\n    ]\n}",
        thumbnail:"https://i.ytimg.com/vi/dQWwjyRwSbA/hqdefault.jpg",
        link:"https://youtu.be/dQWwjyRwSbA",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/dQWwjyRwSbA"
        },
        topic:"List Sections"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Search Box with Conditional Formatting",
        description:"Hey team,\n\nThis quick video will show you how to create a search box in Excel so that you can type in text and have the entire row highlighted in your data when your text is found in that row.",
        thumbnail:"https://i.ytimg.com/vi/nuYWqOWO59Y/hqdefault.jpg",
        link:"https://youtu.be/nuYWqOWO59Y",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/nuYWqOWO59Y"
        },
        topic:"Custom Search Box"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - SUBTOTAL Function Details and How it Can Help",
        description:"Hey team,\n\nThis video will show you how to use the SUBTOTAL function in Excel and how it can help you with your spreadsheets.",
        thumbnail:"https://i.ytimg.com/vi/Awlb8aLvosw/hqdefault.jpg",
        link:"https://youtu.be/Awlb8aLvosw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Awlb8aLvosw"
        },
        topic:"SUBTOTAL FUNCTION"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Custom Tabs and Groups",
        description:"Hey team,\n\nIn this short video we cover how to create custom tabs and custom tab groups in Excel and your other Microsoft applications.",
        thumbnail:"https://i.ytimg.com/vi/eFJJXGoQGDU/hqdefault.jpg",
        link:"https://youtu.be/eFJJXGoQGDU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/eFJJXGoQGDU"
        },
        topic:"Custom Tabs and Groups"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - For Autofitting Columns and Rows | Multiple Methods",
        description:"Hey team,\n\nIn this video we cover multiple ways to autofit columns and rows in Excel.\n\nChapters:\n0:00 Introduction\n0:14 First Method | Using Cursor\n0:44 Second Method | Keyboard Shortcuts\n1:07 Third Method | Format Menu\n\nVideo on using VBA code to Autofit Column Width: https://youtu.be/A8TYqvf05GU\n\nVideo on using VBA code to Autofit Row Height: https://youtu.be/vwQ7ebaZTmM",
        thumbnail:"https://i.ytimg.com/vi/aPAc4XHKn2A/hqdefault.jpg",
        link:"https://youtu.be/aPAc4XHKn2A",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/aPAc4XHKn2A"
        },
        topic:"Autofit Rows and Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Filling in Dates | Different Fill Types",
        description:"Hey team,\n\nIn this video we cover how to easily fill in a range of dates in Excel and show you how to utilize different fill options.",
        thumbnail:"https://i.ytimg.com/vi/S_uGHrkv0_s/hqdefault.jpg",
        link:"https://youtu.be/S_uGHrkv0_s",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/S_uGHrkv0_s"
        },
        topic:"Date Filling"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Autofit Column Width | Apply to Specified Range Example",
        description:"Hey team,\n\nIn this video we cover how to set up your Excel files to autofit the column width to fit cell contents for both the whole spreadsheet and just a certain range.\n\nChapters:\n0:00 Introduction\n0:17 Apply Autofit to Full Spreadsheet\n0:43 Apply Autofit to Certain Range\n\nVBA Code examples\n\nFull spreadsheet:\nCells.EntireColumn.AutoFit\n\nSelected Range:\nSet Rng = Range(\"A2:A10\")\nRng.EntireColumn.AutoFit",
        thumbnail:"https://i.ytimg.com/vi/A8TYqvf05GU/hqdefault.jpg",
        link:"https://youtu.be/A8TYqvf05GU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/A8TYqvf05GU"
        },
        topic:"Autofit Column Width"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - TEXTSPLIT Function to Separate Strings with Multiple Delimiters into Columns and Rows",
        description:"Hey team,\n\nThis video covers the TEXTSPLIT function in detail with 5 unique examples.\n\nText to Columns video: https://youtu.be/6rVKY2Z19Fk\n\nChapters:\n0:00 Introduction\n0:45 Basic Example | One Delimiter\n1:39 Multiple Delimiters\n2:40 Unique Delimiters\n4:02 Handling Missing Data\n4:58 Split Data into Rows and Columns",
        thumbnail:"https://i.ytimg.com/vi/37l9gngeQOg/hqdefault.jpg",
        link:"https://youtu.be/37l9gngeQOg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/37l9gngeQOg"
        },
        topic:"TEXTSPLIT"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Display Image When Hovering Over A Cell",
        description:"Hey team,\n\nIn this video we cover how to set up a note in Excel that displays an image so that when you hover over the cell, the image appears.",
        thumbnail:"https://i.ytimg.com/vi/q8EX0IAW9HU/hqdefault.jpg",
        link:"https://youtu.be/q8EX0IAW9HU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/q8EX0IAW9HU"
        },
        topic:"Display Image on Hover"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Calculating Average | 3 Easy Methods",
        description:"Hey team,\n\nIn this video we cover three easy ways to calculate averages in Excel.\n\nChapters:\n0:00 Introduction\n0:13 Average Function\n0:25 Quick Analysis Tool\n0:48 Status Bar Averages",
        thumbnail:"https://i.ytimg.com/vi/ixIR0ZP414A/hqdefault.jpg",
        link:"https://youtu.be/ixIR0ZP414A",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ixIR0ZP414A"
        },
        topic:"Averages"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Calculating Percent of Total | Quick Analysis Shortcut",
        description:"Hey team,\n\nIn this video we cover how to calculate the percent of total and share a few examples of how to do this in Excel.\n\nChapters:\n0:00 Introduction\n0:13 Calculating Percent of Total\n0:47 Quick Analysis Tool",
        thumbnail:"https://i.ytimg.com/vi/J2POjkEkPnI/hqdefault.jpg",
        link:"https://youtu.be/J2POjkEkPnI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/J2POjkEkPnI"
        },
        topic:"Percent of Total Quick Analysis"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - Dropdown Lists | Custom or From a Range | Selecting Colors",
        description:"Hey team,\n\nIn this quick video we cover how to create dropdown lists in Google Sheets.\n\nChapters:\n0:00 Introduction\n0:10 Custom Dropdown Lists\n0:26 Dropdown List from Range | Colors",
        thumbnail:"https://i.ytimg.com/vi/1vMW1x8UiC8/hqdefault.jpg",
        link:"https://youtu.be/1vMW1x8UiC8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/1vMW1x8UiC8"
        },
        topic:"Dropdown Lists"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Installing New Languages | Text or Speech to Text | Windows 11",
        description:"Hey team,\n\nIn this video we cover how to add additional languages into Windows 11 for typing and speech to text.",
        thumbnail:"https://i.ytimg.com/vi/lKMFbOEcT-E/hqdefault.jpg",
        link:"https://youtu.be/lKMFbOEcT-E",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/lKMFbOEcT-E"
        },
        topic:"Installing New Languages"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Email Hyperlinks that Dynamically Include Recipient, CC Line, Subject and Body",
        description:"Hey team,\n\nThis video explains how to use the hyperlink function in Excel to create dynamic hyperlinks that can include who the email is going to, the CC line, subject line and the body of the email.\n\nChapters:\n0:00 Introduction\n0:26 Email Hyperlink Basics\n1:16 Adding a CC Line to the Email\n2:00 Adding Subject Line\n2:41 Adding Body to the Email\n3:26 Creating Link to Email a Group",
        thumbnail:"https://i.ytimg.com/vi/XteFDykFGH4/hqdefault.jpg",
        link:"https://youtu.be/XteFDykFGH4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/XteFDykFGH4"
        },
        topic:"Email Hyperlinks"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - GOOGLETRANSLATE Helps You Translate Text | Other Languages",
        description:"Hey team,\n\nIn this video we cover how to use GOOGLETRANSLATE to translate text into different languages.\n\nLink to language codes for function: https://developers.google.com/admin-sdk/directory/v1/languages",
        thumbnail:"https://i.ytimg.com/vi/CwPyt2skqmw/hqdefault.jpg",
        link:"https://youtu.be/CwPyt2skqmw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/CwPyt2skqmw"
        },
        topic:"GOOGLETRANSLATE Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Autofit Row Height to Cell Contents | Auto Text Wrap | Apply to Specified Range Example",
        description:"Hey team,\n\nIn this video I show you how to autofit row height and text wrap using basic VBA for both the entire worksheet and only a certain range, if desired.\n\nChapters:\n0:00 Introduction\n0:36 Autofit Row Height | Entire Workbook\n1:06 Autofit Row Height | Specified Range\n\n\nVBA Code for applying autofit row height to entire worksheet:\nCells.WrapText = True\nCells.EntireRow.AutoFit\n\nVBA Code example for applying autofit row height to specified range (Remember to adjust first row of code to specify your desired range):\nSet Rng = Range(\"A1:B100\") \nRng.Cells.WrapText = True \nRng.EntireRow.AutoFit",
        thumbnail:"https://i.ytimg.com/vi/vwQ7ebaZTmM/hqdefault.jpg",
        link:"https://youtu.be/vwQ7ebaZTmM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/vwQ7ebaZTmM"
        },
        topic:"Autofit Row Height"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - IMPORTRANGE Function | Add or Combine Data",
        description:"Hey team,\n\nIn this video we cover how to add or combine data in Google Sheets using the IMPORTRANGE function.\n\nChapters:\n0:00 Introduction\n0:20 IMPORTRANGE Basics\n2:05 Cleaning Up the Function\n3:02 Importing Multiple Spreadsheets",
        thumbnail:"https://i.ytimg.com/vi/HR4juvAkAgE/hqdefault.jpg",
        link:"https://youtu.be/HR4juvAkAgE",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/HR4juvAkAgE"
        },
        topic:"IMPORTRANGE Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Text Search Box | Dynamic Filtering | One or Multiple Columns",
        description:"This video will show you how to create a text search box in Excel that can dynamically filter one or multiple columns.",
        thumbnail:"https://i.ytimg.com/vi/sdall4s4_RY/hqdefault.jpg",
        link:"https://youtu.be/sdall4s4_RY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/sdall4s4_RY"
        },
        topic:"Dynamic Text Filter"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - Freeze Columns and Rows",
        description:"Hey team,\n\nIn this video we cover how to freeze columns and rows in Google Sheets.",
        thumbnail:"https://i.ytimg.com/vi/4Xtd_Wzr6H8/hqdefault.jpg",
        link:"https://youtu.be/4Xtd_Wzr6H8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/4Xtd_Wzr6H8"
        },
        topic:"Freeze Columns and Rows"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - INDEX And MATCH Functions | Simple and Complex Examples",
        description:"Hey team,\n\nIn this video we cover how to use the INDEX and MATCH functions in Excel and how to combine them to perform some powerful lookups.\n\nChapters:\n0:00 Introduction\n0:18 INDEX Function Explained\n1:30 MATCH Function Explained\n2:40 INDEX And MATCH Together\n\n#Excel\n\nImage: flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/lSU0Nf2y154/hqdefault.jpg",
        link:"https://youtu.be/lSU0Nf2y154",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/lSU0Nf2y154"
        },
        topic:"INDEX and MATCH Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - 10 Important Functions and Formulas",
        description:"This video shows you ten important formulas and functions in Excel with real life examples provided. The examples start of basic then get more advanced. \n\nTime chapters are included in the video.\n\nChapters:\n0:00 Introduction\n0:28 Upper / Lower / Proper\n3:12 SUM / AutoSum\n5:30 SUMIF / SUMIFS\n7:30 UNIQUE\n8:37 TRIM\n10:53 TEXTJOIN\n12:15 VLOOKUP\n17:06 XLOOKUP\n20:14 IF\n\n#Excel",
        thumbnail:"https://i.ytimg.com/vi/K4eIUNwejcM/hqdefault.jpg",
        link:"https://youtu.be/K4eIUNwejcM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/K4eIUNwejcM"
        },
        topic:"Important Formulas"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - Dynamic Search Box Creation | One or Multiple Columns",
        description:"Hey team,\n\nIn this video we cover how to create a dynamic search box in Google Sheets for one or multiple columns.\n\nChapters:\n0:00 Introduction\n0:21 Search Box | Single Column\n1:22 Search Box | Multiple Columns\n\n#google \n#google sheets",
        thumbnail:"https://i.ytimg.com/vi/6rWE9mygXPA/hqdefault.jpg",
        link:"https://youtu.be/6rWE9mygXPA",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/6rWE9mygXPA"
        },
        topic:"Dynamic Search Box"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Combine First and Last Names | Two Methods Shared",
        description:"Hey team,\n\nIn this video we cover how to combine first and last names in Excel using two methods.\n\nChapters:\n0:00 Introduction\n0:16 Dynamic | Combine Names Using Formulas\n1:03 Static | Combine Names Using Flash Gill\n\n#Excel",
        thumbnail:"https://i.ytimg.com/vi/tEAw-J6fKcE/hqdefault.jpg",
        link:"https://youtu.be/tEAw-J6fKcE",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/tEAw-J6fKcE"
        },
        topic:"Combining Names"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Restore Previous Save Files or Versions | Microsoft Applications",
        description:"Hey team,\n\nIn this video we cover how to restore a previous version of your Microsoft documents (Excel in this example) using Version History.\n\n#Excel",
        thumbnail:"https://i.ytimg.com/vi/H21LSC1V36s/hqdefault.jpg",
        link:"https://youtu.be/H21LSC1V36s",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/H21LSC1V36s"
        },
        topic:"Restore Previous Versions"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Creating a Pie Chart in Excel | Formatting Tips and Tricks",
        description:"Hey team, \n\nThis video will help you set up your pie charts in Excel and show you how to format your pie chart using a variety of options.\n\nChapters:\n0:00 Introduction\n0:15 Creating the Pie Chart\n0:53 Sorting or Updating Your Data View\n1:28 Formatting Your Pie Chart",
        thumbnail:"https://i.ytimg.com/vi/VXMzh7p8k-U/hqdefault.jpg",
        link:"https://youtu.be/VXMzh7p8k-U",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/VXMzh7p8k-U"
        },
        topic:"Pie Charts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - Find and Remove Duplicates",
        description:"Hey team,\n\nIn this video we cover how to find and remove duplicates in Google Sheets.\n\nChapters:\n0:00 Introduction\n0:11 Find Duplicates\n1:30 Remove Duplicates",
        thumbnail:"https://i.ytimg.com/vi/iZIeDN8m86k/hqdefault.jpg",
        link:"https://youtu.be/iZIeDN8m86k",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/iZIeDN8m86k"
        },
        topic:"Find and Remove Duplicates"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Calculating Time Difference | Hours Worked",
        description:"Hey team,\n\nIn this video we cover how to calculate the time difference in Excel.\n\nMake sure to format your times with both the date and time to allow the function to work correctly for situations where you are calculating the difference between multiple days or overnight.",
        thumbnail:"https://i.ytimg.com/vi/U2QAEGZrdvI/hqdefault.jpg",
        link:"https://youtu.be/U2QAEGZrdvI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/U2QAEGZrdvI"
        },
        topic:"Calculating Time Differences | Hours Worked"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - IF Function Explained | Multiple Examples | AND/OR Statements | Nested IF Function",
        description:"Hey team,\n\nIn this video we fully explore the IF function in Excel with various examples.\n\nChapters:\n0:00 Introduction\n0:25 IF Function Basics\n1:35 IF Function | Nested Formulas\n2:45 IF Function with \"AND\" | \"OR\" Functions\n5:27 IF Function with Nested IF Function",
        thumbnail:"https://i.ytimg.com/vi/EIigls5Vp0M/hqdefault.jpg",
        link:"https://youtu.be/EIigls5Vp0M",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/EIigls5Vp0M"
        },
        topic:"IF Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Remove Blank Rows | 3 Methods Included",
        description:"Hey team,\n\nIn this video we cover how to remove blank rows from your Excel spreadsheets.\n\nChapters:\n0:00 Introduction\n0:12 Go to Special Method\n0:28 Power Query Method\n1:07 VBA Method\n\nVBA code:\nSub DeleteBlankRows()\n    Dim rng As Range\n    Dim row As Range\n        Set rng = ActiveSheet.UsedRange\n          For Each row In rng.Rows\n               If WorksheetFunction.CountA(row) = 0 Then\n            row.Delete\n        End If\n    Next row\nEnd Sub",
        thumbnail:"https://i.ytimg.com/vi/ngMbmmKYMnM/hqdefault.jpg",
        link:"https://youtu.be/ngMbmmKYMnM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ngMbmmKYMnM"
        },
        topic:"Remove Blank Rows"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Sheets",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Sheets - Checkboxes That Insert Current Date and Time",
        description:"Hey team,\n\nIn this video we cover how to add checkboxes in Google Sheets that input the current date and time.",
        thumbnail:"https://i.ytimg.com/vi/gLV30MN76ds/hqdefault.jpg",
        link:"https://youtu.be/gLV30MN76ds",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/gLV30MN76ds"
        },
        topic:"Checkboxes to Insert Date and Time"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Unhide Columns | Ctrl + Shift + 0 Not Working | Windows 11",
        description:"Hey team,\n\nCheck out this video if the keyboard shortcut Ctrl + Shift + 0 is not working in your Excel spreadsheets. This solution shows how to resolve in Windows 11.",
        thumbnail:"https://i.ytimg.com/vi/JpMyIZxHAS0/hqdefault.jpg",
        link:"https://youtu.be/JpMyIZxHAS0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/JpMyIZxHAS0"
        },
        topic:"Unhide Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Progress Bars That Dynamically Update | Easy",
        description:"Hey team,\n\nIn this video we cover how to add progress bars to your Excel workbook.",
        thumbnail:"https://i.ytimg.com/vi/4XHeMp-wS7E/hqdefault.jpg",
        link:"https://youtu.be/4XHeMp-wS7E",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/4XHeMp-wS7E"
        },
        topic:"Progress"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Building Interactive Dashboards",
        description:"Hey team,\n\nIn this video we cover how to create interactive dashboards in Excel.\n\nPivot Table Video: https://youtu.be/GkA65PB3rnM\nSlicer Button Formatting: https://youtu.be/2ImKoLtd9Dw",
        thumbnail:"https://i.ytimg.com/vi/2aZSmWzwM6I/hqdefault.jpg",
        link:"https://youtu.be/2aZSmWzwM6I",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/2aZSmWzwM6I"
        },
        topic:"Dashboard"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Use Timeline Filters to Make Date Filtering Simple",
        description:"Hey team,\n\nIn this short video we cover how to add and use Timeline filters in Excel.\n\nVideo on Pivot Tables: https://youtu.be/GkA65PB3rnM\n\nVideo on Slicer Button Formatting: https://youtu.be/2ImKoLtd9Dw",
        thumbnail:"https://i.ytimg.com/vi/Ua4RMos3dYA/hqdefault.jpg",
        link:"https://youtu.be/Ua4RMos3dYA",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Ua4RMos3dYA"
        },
        topic:"Filter"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - IF Function with Nested VLOOKUP",
        description:"Hey team,\n\nThis video gives a detailed explanation of how to use the IF and VLOOKUP functions together in a real-life application.",
        thumbnail:"https://i.ytimg.com/vi/WsymXlWhXSU/hqdefault.jpg",
        link:"https://youtu.be/WsymXlWhXSU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/WsymXlWhXSU"
        },
        topic:"VLOOKUP"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Find and Fill All Blank Cells",
        description:"Hey team,\n\nIn this quick Excel video we cover how to find and fill all the blank cells within your spreadsheet.",
        thumbnail:"https://i.ytimg.com/vi/fM20Xt7UIFk/hqdefault.jpg",
        link:"https://youtu.be/fM20Xt7UIFk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/fM20Xt7UIFk"
        },
        topic:"Excel"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Format Entire Row Based on Cell Criteria",
        description:"Hey team,\n\nIn this video we cover how to format an entire row in Excel when a certain cell meets your selected criteria. In this example it is for when an item is out of stock, but you could use this method to mark a row with formatting for other scenarios as well.",
        thumbnail:"https://i.ytimg.com/vi/6ZxTay91Fbw/hqdefault.jpg",
        link:"https://youtu.be/6ZxTay91Fbw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/6ZxTay91Fbw"
        },
        topic:"Formatting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Combine Multiple Tabs or Worksheets into One | Power Query",
        description:"Hey team,\n\nIn this video we cover how to combine multiple Excel tabs into one workbook dynamically for future updates.\n\nChapters:\n0:00 Introduction\n0:32 Combine Separate Tabs\n2:21 Combine Separate Workbooks",
        thumbnail:"https://i.ytimg.com/vi/V62lPmdVEsY/hqdefault.jpg",
        link:"https://youtu.be/V62lPmdVEsY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/V62lPmdVEsY"
        },
        topic:"Sheets"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Automatically Highlight Active Row and Column | Based on Cell Selection",
        description:"In this video we cover how to highlight the entire active row in Excel based on your cell selection.\n\nVideo showing one click feature for highlighting active row and column: https://youtu.be/u2st2KyjneE\n\nFormula used in conditional formatting: =OR(CELL(\"ROW\")=ROW(),CELL(\"COL\")=COLUMN())\n\nVBA code used: Target.Calculate",
        thumbnail:"https://i.ytimg.com/vi/8uWSMVSl9FA/hqdefault.jpg",
        link:"https://youtu.be/8uWSMVSl9FA",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/8uWSMVSl9FA"
        },
        topic:"Highlighting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Free Background Remover Tool | Remove Photo Background | Adobe",
        description:"Hey team,\n\nIn this video we cover the Adobe Express Free Background Remover tool. \n\nLink to tool: https://www.adobe.com/express/feature/image/remove-background",
        thumbnail:"https://i.ytimg.com/vi/iv5hF6jdwJw/hqdefault.jpg",
        link:"https://youtu.be/iv5hF6jdwJw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/iv5hF6jdwJw"
        },
        topic:"Background"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Automatically Highlight Active Row | Based on Cell Selection",
        description:"Hey team,\n\nIn this video we cover how to highlight the entire active row in Excel based on your cell selection.\n\nFormula used in conditional formatting: =row()=cell(\"row\")\n\nVBA code used: Target.Calculate",
        thumbnail:"https://i.ytimg.com/vi/fDukNAJSgpk/hqdefault.jpg",
        link:"https://youtu.be/fDukNAJSgpk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/fDukNAJSgpk"
        },
        topic:"Highlighting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"How to Hide Folders on Your Desktop | Windows",
        description:"Hey team,\n\nIn this video we cover how to hide a folder on your windows desktop and how to locate it after being hidden.",
        thumbnail:"https://i.ytimg.com/vi/uhSAJk1ydD4/hqdefault.jpg",
        link:"https://youtu.be/uhSAJk1ydD4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/uhSAJk1ydD4"
        },
        topic:"Windows"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Best Way to Create Row Numbers | Include Text",
        description:"Hey team,\n\nThis video will show you how to create dynamic sequences in your Excel rows that will automatically update when new fields are added or when a row is deleted. I will also cover how to add text before the sequence.",
        thumbnail:"https://i.ytimg.com/vi/wrBstcCWNds/hqdefault.jpg",
        link:"https://youtu.be/wrBstcCWNds",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/wrBstcCWNds"
        },
        topic:"Rows"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"How to Convert PDF to Excel | Excel 365",
        description:"Hey team,\n\nIn this video we cover how to convert a PDF document into an Excel file in Excel 365.",
        thumbnail:"https://i.ytimg.com/vi/rcnRuadAqz4/hqdefault.jpg",
        link:"https://youtu.be/rcnRuadAqz4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/rcnRuadAqz4"
        },
        topic:"PDF"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Sorting Data in Excel | Sorting by Multiple Columns",
        description:"Hey team,\n\nThis video will show you best practices and tips for sorting data in Excel. Additionally, the video covers sorting by one column or multiple and how to sort by color.\n\nChapters:\n0:00 Introduction\n0:21 Sorting by One Column and Sort Tips\n3:00 Sorting by Multiple Columns",
        thumbnail:"https://i.ytimg.com/vi/Y6E40GfiF_s/hqdefault.jpg",
        link:"https://youtu.be/Y6E40GfiF_s",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Y6E40GfiF_s"
        },
        topic:"Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Clear Cache, Cookies, and Search History | Chrome | Firefox | Edge",
        description:"Hey team,\n\nIn this video we cover how to clear your cache, cookies, and search history for the three major browsers. Check the time stamps below for the browser you are using.\n\nChapters:\n0:00 Introduction\n0:19 Chrome\n0:44 Firefox\n1:19 Windows Edge",
        thumbnail:"https://i.ytimg.com/vi/xi4hmohLTq4/hqdefault.jpg",
        link:"https://youtu.be/xi4hmohLTq4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/xi4hmohLTq4"
        },
        topic:"Clear Cache and History"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Google Chrome",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Google Chrome - Clear Cache, Cookies, and Search History",
        description:"Hey team,\n\nIn this video we cover how to clear your cache, cookies, and search history for Google Chrome.",
        thumbnail:"https://i.ytimg.com/vi/MlI51ct2qLc/hqdefault.jpg",
        link:"https://youtu.be/MlI51ct2qLc",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/MlI51ct2qLc"
        },
        topic:"Chrome"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows Edge",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Windows Edge - Clear Cache, Cookies, and Search History",
        description:"Hey team,\n\nIn this video we cover how to clear your cache, cookies, and search history for Windows Edge.",
        thumbnail:"https://i.ytimg.com/vi/FsCCwhiLD6E/hqdefault.jpg",
        link:"https://youtu.be/FsCCwhiLD6E",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/FsCCwhiLD6E"
        },
        topic:"Clear Cache and History"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Firefox",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Firefox - Clear Cache, Cookies, and Search History",
        description:"Hey team,\n\nIn this video we cover how to clear your cache, cookies, and search history for Firefox.",
        thumbnail:"https://i.ytimg.com/vi/9CPcIKlRdD8/hqdefault.jpg",
        link:"https://youtu.be/9CPcIKlRdD8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/9CPcIKlRdD8"
        },
        topic:"Clear Cache and History"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Apply Conditional Formatting When You Select a Checkbox",
        description:"Hey team,\n\nIn this video we cover how to set up a checkbox so that when it is selected it applies your selected conditional formatting.\n\nVideo on new Excel features (new checkbox): https://youtu.be/z2O4ZDOo5Y8",
        thumbnail:"https://i.ytimg.com/vi/JNecRNTDkJQ/hqdefault.jpg",
        link:"https://youtu.be/JNecRNTDkJQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/JNecRNTDkJQ"
        },
        topic:"Formatting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Pull In Data From Another Report",
        description:"Hey team,\n\nIn this video we cover how to pull in data from a separate report using the VLOOKUP function.\n\nVideo on VLOOKUP: https://youtu.be/HBIphAYLvfU",
        thumbnail:"https://i.ytimg.com/vi/AjY5Qt_j_DI/hqdefault.jpg",
        link:"https://youtu.be/AjY5Qt_j_DI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/AjY5Qt_j_DI"
        },
        topic:"Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Randomize Your Data | RAND Function | Easy",
        description:"Hey team,\n\nIn this video we look at how to randomize your data using the RAND function in Excel.",
        thumbnail:"https://i.ytimg.com/vi/ynhqsSwfrnk/hqdefault.jpg",
        link:"https://youtu.be/ynhqsSwfrnk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ynhqsSwfrnk"
        },
        topic:"Random"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - SUM and AutoSum Tips for Addition | Keyboard Shortcuts",
        description:"Hey team,\n\nIn this video we take a look at how to use Excel to add values. We cover manual formulas, the SUM function, and the AutoSum features in Excel.",
        thumbnail:"https://i.ytimg.com/vi/pftA78Peku8/hqdefault.jpg",
        link:"https://youtu.be/pftA78Peku8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/pftA78Peku8"
        },
        topic:"SUM"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - FILTER Function Using Cell Range Instead of Multiple OR Statements",
        description:"Hey team,\n\nIn this video we cover an Excel formula that can help you filter your data using a selected range of cells instead of needing to enter multiple OR statements into your FILTER function.\n\nThis can be very helpful for larger data sets in which you have certain requirements for the data you are looking to target.\n\nFor more detail on the FILTER function check out this video: https://youtu.be/mdZ2eMEk2ic",
        thumbnail:"https://i.ytimg.com/vi/1oBadIqDgwM/hqdefault.jpg",
        link:"https://youtu.be/1oBadIqDgwM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/1oBadIqDgwM"
        },
        topic:"Filter"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Creating Pivot Tables",
        description:"Hey team,\n\nIn this video we cover how to get started in creating a pivot table. Make sure to check out my extended video below for much more information on how to create and design your pivot tables.\n\nExtended Pivot Table Video: https://youtu.be/GkA65PB3rnM",
        thumbnail:"https://i.ytimg.com/vi/3DfmCxEposM/hqdefault.jpg",
        link:"https://youtu.be/3DfmCxEposM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/3DfmCxEposM"
        },
        topic:"Pivot Table"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Highlight Dates Coming Soon or Past Due | Project Due Dates",
        description:"Hey team,\n\nIn this Excel video we cover how to use conditional formatting to highlight due dates so that it is easier to tell when a due date is approaching, or you have plenty of time before the due date arrives.\n\nVideo on email hyperlinks: https://youtu.be/zL8uaqhM4EU",
        thumbnail:"https://i.ytimg.com/vi/iCoxR4hMT3w/hqdefault.jpg",
        link:"https://youtu.be/iCoxR4hMT3w",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/iCoxR4hMT3w"
        },
        topic:"Highlighting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Creating Your Professional Bio | Guidelines and Example Included | Executive Bio",
        description:"Hey team,\n\nIn this video we cover how to create your professional bio using PowerPoint as a tool. We discuss why your bio is important, guidelines, and formatting.\n\nChapters:\n0:00 Introduction\n0:33 Basic Info and Contact Information\n1:31 Bio Structure and Example\n\nLink to bio template: https://drive.google.com/file/d/184x4lmysvArjqVQ-g7mJ8jPCK6yskZzT/view?usp=drive_link\n\nLink to Iconfinder LinkedIn icon: https://www.iconfinder.com/search?q=linkedin\n\nLink to video on removing photo brackgrounds using PowerPoint: https://youtu.be/M1BBLkHT9b4\n\nYou can also use Adobe Express to remove the background of a photo for free.",
        thumbnail:"https://i.ytimg.com/vi/WTKrNNkQvDM/hqdefault.jpg",
        link:"https://youtu.be/WTKrNNkQvDM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/WTKrNNkQvDM"
        },
        topic:"Bio"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Best Way to Create Dynamic Dropdown Lists | No Spaces | Alphabetized | Excel 365",
        description:"Hey team,\n\nIn this video we cover the best way to create dropdown lists in Excel 365 that are automatically alphabetized and remove any spaces from the list data.",
        thumbnail:"https://i.ytimg.com/vi/DyP6UTQMoL4/hqdefault.jpg",
        link:"https://youtu.be/DyP6UTQMoL4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/DyP6UTQMoL4"
        },
        topic:"Dropdown"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Word",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"How to Convert PDF to Word | Edit PDF File",
        description:"Hey team,\n\nIn this video we cover how to convert a PDF document into a Word document so it can be edited.",
        thumbnail:"https://i.ytimg.com/vi/_YfnJb0hZnY/hqdefault.jpg",
        link:"https://youtu.be/_YfnJb0hZnY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/_YfnJb0hZnY"
        },
        topic:"Word"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Find and Remove Duplicate Values | UNIQUE Function",
        description:"Hey team,\n\nIn this video we cover how to find and remove duplicate entries in your Excel data.\n\nChapters:\n0:00 Introduction\n0:17 Visually Finding Duplicate Values\n0:43 Removing Duplicate Entries | Multiple Columns\n1:21 Removing Duplicate Entries | Single Column\n1:54 Using the UNIQUE Function",
        thumbnail:"https://i.ytimg.com/vi/ImWcIV6hvM0/hqdefault.jpg",
        link:"https://youtu.be/ImWcIV6hvM0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ImWcIV6hvM0"
        },
        topic:"Unique"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Speech to Text - Free Windows Feature",
        description:"Hey team,\n\nIn this video we cover the free Windows 10 and 11 speech to text feature. Save time by having Microsoft's speech to text feature help you with your notes and meeting minutes.\n\nLink to Microsoft site with voice command prompts: https://support.microsoft.com/en-us/windows/use-voice-typing-to-talk-instead-of-type-on-your-pc-fec94565-c4bd-329d-e59a-af033fa5689f#WindowsVersion=Windows_11\n\nThanks for watching. Please leave comments about additional tips you would like to see covered.",
        thumbnail:"https://i.ytimg.com/vi/AY3mcNEFSS4/hqdefault.jpg",
        link:"https://youtu.be/AY3mcNEFSS4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/AY3mcNEFSS4"
        },
        topic:"Windows"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Reveal Formulas in Your Workbook",
        description:"Hey team,\n\nIn this quick video we cover how to show formulas used in your Excel workbook. \n\nChapters:\n0:00 Introduction\n0:12 Show Formulas\n0:32 Keyboard Shortcut to Display Formulas",
        thumbnail:"https://i.ytimg.com/vi/Uh8553uec4U/hqdefault.jpg",
        link:"https://youtu.be/Uh8553uec4U",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Uh8553uec4U"
        },
        topic:"Formula"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"How to Create Electronic or Digital Signature with No Background | Easy | Free",
        description:"Hey team,\n\nThis video will show you how to create a digital copy of your signature you can use for emails, photos and more. This method will allow you to also easily remove the background for a professional look.\n\nLink to Adobe Express Background Remover: https://www.adobe.com/express/feature/image/remove-background\n\nImage: flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/a8ERi7ABJhM/hqdefault.jpg",
        link:"https://youtu.be/a8ERi7ABJhM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/a8ERi7ABJhM"
        },
        topic:"Signature"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Adding Music | Audio to Your Presentation | Formatting Audio Icon",
        description:"Hey team,\n\nIn this video we cover how to add audio to the background of your PowerPoint presentations. I will also cover some tips on how to format the audio icon.\n\nChapters:\n0:00 Introduction\n0:12 Adding Audio to Presentation\n2:28 Formatting the Audio Icon",
        thumbnail:"https://i.ytimg.com/vi/DQlD1kbgQq8/hqdefault.jpg",
        link:"https://youtu.be/DQlD1kbgQq8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/DQlD1kbgQq8"
        },
        topic:"PowerPoint"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Compare Columns to Find Matches | Exact Matches | Any Match in Other Column",
        description:"Hey team,\n\nIn this video we look at 3 methods to compare columns in Excel. This will help you look for matches, exact matches and any match in another column in any row.\n\nChapters:\n0:00 Introduction\n0:35 Column Match by Rows\n1:12 Exact Column Match by Rows\n1:56 Any Match in Another Column | Regardless of Row",
        thumbnail:"https://i.ytimg.com/vi/OyiEz3On3AI/hqdefault.jpg",
        link:"https://youtu.be/OyiEz3On3AI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/OyiEz3On3AI"
        },
        topic:"Compare Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Word",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Word Tips - Insert Page Numbers Starting on Specific Page",
        description:"Hey team,\n\nThis video will show you how to insert specific page numbers starting on the page of your choice in Word.",
        thumbnail:"https://i.ytimg.com/vi/DPtIoKo8by0/hqdefault.jpg",
        link:"https://youtu.be/DPtIoKo8by0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/DPtIoKo8by0"
        },
        topic:"Insert Page Numbers on Specific Pages"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Count Number of Times Text Appears | COUNTIF Function | Count Times Name Appears",
        description:"Hey team,\n\nIn this video we take a look at how to count the number of times a text value appears within an Excel list.",
        thumbnail:"https://i.ytimg.com/vi/8IAGnME2-Sc/hqdefault.jpg",
        link:"https://youtu.be/8IAGnME2-Sc",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/8IAGnME2-Sc"
        },
        topic:"COUNTIF Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Adding an Average Line to Charts",
        description:"Hey team,\n\nThis video will show you how to add an average line to your Excel charts.",
        thumbnail:"https://i.ytimg.com/vi/KeuzVkzzpv4/hqdefault.jpg",
        link:"https://youtu.be/KeuzVkzzpv4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/KeuzVkzzpv4"
        },
        topic:"Chart Average Lines"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Copy Text from Images | Redact Sensitive Data | Free Windows 11 App the Snipping Tool",
        description:"Hey team,\n\nIn this video we cover features of the Snipping Tool that allow you to copy text from images as well as quickly redact sensitive information.",
        thumbnail:"https://i.ytimg.com/vi/9-79atiaZyY/hqdefault.jpg",
        link:"https://youtu.be/9-79atiaZyY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/9-79atiaZyY"
        },
        topic:"Get Text from Images"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - New Checkbox Feature | Formatting Cells | Add Current Date and Time",
        description:"Hey team,\n\nIn this video I cover the new checkbox feature added into Excel on the Insert tab. During the video we cover how to add the new checkboxes, use them for conditional formatting, and how to use them to add the current date and time.\n\nCheck out the video link below if you don't yet have the checkbox feature in your Excel.\n\nChapters:\n0:00 Introduction\n0:34 Adding New Checkboxes\n1:10 Checkbox Conditional Formatting\n2:16 Checkbox to Add Current Date | Time\n\n\nLink to video explaining how to get new checkbox feature: https://youtu.be/z2O4ZDOo5Y8",
        thumbnail:"https://i.ytimg.com/vi/LS-oDxDal_Y/hqdefault.jpg",
        link:"https://youtu.be/LS-oDxDal_Y",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/LS-oDxDal_Y"
        },
        topic:"New Checkbox"

    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Early Access to New Features | 365 Insider Program",
        description:"Hey team,\n\nIn this video we cover how to get early access to new features in Excel and other Microsoft applications by signing up for the Microsoft Insider Program. Signing up is free and easy to do.\n\nChapters:\n0:00 Introduction\n0:12 Current New Features\n1:04 Enrolling in Insider Program\n\nHelpful links:\nBeta release notes: https://learn.microsoft.com/en-us/officeupdates/beta-channel\nMicrosoft 365 Blog: https://techcommunity.microsoft.com/t5/microsoft-365/ct-p/microsoft365",
        thumbnail:"https://i.ytimg.com/vi/z2O4ZDOo5Y8/hqdefault.jpg",
        link:"https://youtu.be/z2O4ZDOo5Y8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/z2O4ZDOo5Y8"
        },
        topic:"Early Access to Features"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Slicer Button Formatting | Color | Size | Number of Columns",
        description:"Hey team,\n\nIn this video we cover how to format and adjust your slicer buttons in Excel.\n\nChapters:\n0:00 Introduction\n0:24 Creating Slicer Buttons\n0:48 Slicer Settings\n1:23 Slicer Color Settings and Custom Options\n2:49 Adding Slicer Columns and Resizing",
        thumbnail:"https://i.ytimg.com/vi/2ImKoLtd9Dw/hqdefault.jpg",
        link:"https://youtu.be/2ImKoLtd9Dw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/2ImKoLtd9Dw"
        },
        topic:"Slicer Button Formatting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Link to Other Slides | Quiz Creation Example",
        description:"Hey team,\n\nIn this video I cover how you can link to other slides within your PowerPoint presentation. In this example we also see how you can use this functionality to create quizzes in PowerPoint.\n\nThanks for watching,\n\n-Career Solutions",
        thumbnail:"https://i.ytimg.com/vi/H2y_wOUi4h4/hqdefault.jpg",
        link:"https://youtu.be/H2y_wOUi4h4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/H2y_wOUi4h4"
        },
        topic:"Linking Slides"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Split Data Into Different Columns | Split Names",
        description:"Hey team,\n\nIn this quick video we will take a look at how to split data in a column into different columns.\n\nAlso check out my video on the TEXTSPLIT function for more advanced scenarios: https://youtu.be/T-fgoVyCxgg",
        thumbnail:"https://i.ytimg.com/vi/DOLlH38Btf0/hqdefault.jpg",
        link:"https://youtu.be/DOLlH38Btf0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/DOLlH38Btf0"
        },
        topic:"Splitting Data in Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Random Groups Using WRAPROWS | Excel 365 | Excel for Web",
        description:"Hey team,\n\nIn this video we take a look at how to create random teams using the WRAPROWS function available in Excel 365 or Excel for Web. I also cover how to randomize these teams using the RAND function.\n\nChapters:\n0:00 Introduction\n0:21 Creating Groups Using WRAPROWS\n1:03 Randomize Groups Using RAND Function",
        thumbnail:"https://i.ytimg.com/vi/10smNfz4OXc/hqdefault.jpg",
        link:"https://youtu.be/10smNfz4OXc",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/10smNfz4OXc"
        },
        topic:"WRAPROWS Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Outlook",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Outlook Tips - Schedule or Delay an Email | App or Web Version",
        description:"Hey team,\n\nIn this video you will see how to delay or schedule an email in Outlook using both the web version and application version.\n\nChapters:\n0:00 Introduction\n0:15 Delay Email - Application Version\n1:16 Delay Email - Web Version",
        thumbnail:"https://i.ytimg.com/vi/hIvhKNMJV6o/hqdefault.jpg",
        link:"https://youtu.be/hIvhKNMJV6o",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/hIvhKNMJV6o"
        },
        topic:"Schedule or Delay Email"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Tips for Entering Dates and Times | Auto-Updating Functions and Static Options",
        description:"Hey team, \n\nThis video covers how to easily enter dates and times into your Excel spreadsheets using both static functions and keyboard shortcuts as well as functions that update based on the current date or time.\n\nLink to NETWORKDAYS function video: https://youtu.be/oy6gEPsI5ko\n\nChapters:\n0:00 Introduction\n0:14 Auto-Updating Functions | Example Scenario\n1:18 Keyboard Shortcuts for Date and Time",
        thumbnail:"https://i.ytimg.com/vi/563ZhSJQVJg/hqdefault.jpg",
        link:"https://youtu.be/563ZhSJQVJg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/563ZhSJQVJg"
        },
        topic:"Date and Time Tips"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Windows",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Screenshot and Record Screen Tips and Shortcuts | Windows PC | Free",
        description:"Hey team,\n\nIn this video I cover the various ways you can take screenshots of your Windows PC and record video of your screen using the free installed Windows app called the Snipping Tool.",
        thumbnail:"https://i.ytimg.com/vi/fFN8c38-tY8/hqdefault.jpg",
        link:"https://youtu.be/fFN8c38-tY8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/fFN8c38-tY8"
        },
        topic:"Screenshot and Record Screen Tips"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - NETWORKDAYS Function | Calculate Working Days Between Two Dates",
        description:"Hey team,\n\nThis video will show you how to calculate the number of working days or business days between two date values in Excel. This can be helpful for project plans to calculate the number of working days remaining before the project end date.\n\nChapters:\n0:00 Introduction\n0:17 NETWORKDAYS Explained\n1:18 Adding Optional Holidays Argument",
        thumbnail:"https://i.ytimg.com/vi/oy6gEPsI5ko/hqdefault.jpg",
        link:"https://youtu.be/oy6gEPsI5ko",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/oy6gEPsI5ko"
        },
        topic:"NETWORKDAYS Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - VSTACK Function | Combine Data | One or Multiple Tabs or Worksheets",
        description:"Hey team,\n\nIn this video we review the VSTACK function available in Excel 365 or Excel for Web. This function can help you quickly combine data from your existing worksheet or other Excel worksheets.\n\nChapters:\n0:00 Introduction\n0:22 VSTACK Basics\n0:49 Option to Add Column Headers\n1:20 Combining Data from Multiple Tabs",
        thumbnail:"https://i.ytimg.com/vi/Wu-Qx7SaUAg/hqdefault.jpg",
        link:"https://youtu.be/Wu-Qx7SaUAg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Wu-Qx7SaUAg"
        },
        topic:"VSTACK Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"How to Link Excel to PowerPoint | Tables and Charts",
        description:"Hey team,\n\nThis video will cover how to link your Excel data to PowerPoint so as you update data in Excel it automatically updates in PowerPoint as well.\n\nChapters:\n0:00 Introduction\n0:23 Linking Excel Data to PowerPoint\n1:34 Linking Excel Charts to PowerPoint",
        thumbnail:"https://i.ytimg.com/vi/T62rdLmoMSg/hqdefault.jpg",
        link:"https://youtu.be/T62rdLmoMSg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/T62rdLmoMSg"
        },
        topic:"Link Excel to PowerPoint"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - TOCOL Function | Combine Multiple Columns | Nested Functions",
        description:"Hey team,\n\nThe TOCOL function in Excel 365 and Excel for Web can help you combine multiple columns into a single column. Check out how in this video.\n\nChapters:\n0:00 Introduction\n0:16 TOCOL Function Explained\n1:30 Nested Functions in the TOCOL Function",
        thumbnail:"https://i.ytimg.com/vi/EVr0qXi-rGw/hqdefault.jpg",
        link:"https://youtu.be/EVr0qXi-rGw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/EVr0qXi-rGw"
        },
        topic:"TOCOL Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Word",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Word Tips - Inserting Horizontal Lines | Different Line Types | 3 Methods | Easy",
        description:"Hey team,\n\nThis quick video will show you three easy ways to insert different types of horizontal lines into Microsoft Word.",
        thumbnail:"https://i.ytimg.com/vi/Vh7yz9oimvs/hqdefault.jpg",
        link:"https://youtu.be/Vh7yz9oimvs",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Vh7yz9oimvs"
        },
        topic:"Insert Horizontal Lines"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Free Professional Icons Without Backgrounds",
        description:"Hey team,\n\nThis quick video will show you how to get free icons without backgrounds for your business or professional presentations.\n\nIcon Website: https://www.flaticon.com/\n\nimages from: Flaticon.com",
        thumbnail:"https://i.ytimg.com/vi/9LVk8bWElhs/hqdefault.jpg",
        link:"https://youtu.be/9LVk8bWElhs",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/9LVk8bWElhs"
        },
        topic:"Professional Icons"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Generate Barcodes | Free | Link to Barcode Font Included",
        description:"Hey team,\n\nThis quick video will show you how to generate barcodes in Excel.\n\nLink to ID Automation site for free barcode font: https://www.idautomation.com/free-barcode-products/code39-font/#Download_Free_Barcode_Font\n\nChapters:\n0:00 Introduction\n0:10 Adding Barcode Font\n0:43 Generating Barcodes in Excel",
        thumbnail:"https://i.ytimg.com/vi/t4oH_i5SYHs/hqdefault.jpg",
        link:"https://youtu.be/t4oH_i5SYHs",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/t4oH_i5SYHs"
        },
        topic:"Barcode Creation"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Creating and Understanding Pareto Charts | 80/20 Rule",
        description:"Hey team,\n\nIn this video we cover how to create and understand Pareto charts using Excel.\n\nChapters:\n0:00 Introduction\n0:18 Creating Pareto Charts\n1:16 Reading and Understanding Pareto Charts",
        thumbnail:"https://i.ytimg.com/vi/xy7Hp3KWRbk/hqdefault.jpg",
        link:"https://youtu.be/xy7Hp3KWRbk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/xy7Hp3KWRbk"
        },
        topic:"Pareto Charts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Calculating Percent Change Formula | Excel Example Included",
        description:"Hey team,\n\nThis video shows you how to calculate the percentage change between two values. We use Excel to demonstrate how to use this formula, but you can apply this in any program or manual calculation as well.",
        thumbnail:"https://i.ytimg.com/vi/mycMvoSN7D8/hqdefault.jpg",
        link:"https://youtu.be/mycMvoSN7D8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/mycMvoSN7D8"
        },
        topic:"Percent Change Formula"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Quick Formatting Tips | Keyboard Shortcut",
        description:"Hey team,\n\nThis quick video will show you how to format your data using a keyboard shortcut in seconds in Excel. We also cover an additional tip by formatting your data as a table.",
        thumbnail:"https://i.ytimg.com/vi/1DaiVdEw3Y4/hqdefault.jpg",
        link:"https://youtu.be/1DaiVdEw3Y4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/1DaiVdEw3Y4"
        },
        topic:"Formatting Tips"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Adding a Target Line to Your Charts",
        description:"Hey team,\n\nThis quick video will show you how to add a target line to your Excel charts.",
        thumbnail:"https://i.ytimg.com/vi/Hn4ETYXf-0I/hqdefault.jpg",
        link:"https://youtu.be/Hn4ETYXf-0I",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Hn4ETYXf-0I"
        },
        topic:"Chart Target Lines"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Calculating Months, Years, or Days Remaining on a Loan | DATEDIF Function",
        description:"Hey team,\n\nThis video will show you how to use the DATEDIF function in Excel to quickly calculate the months remaining on a loan from the loan end date.",
        thumbnail:"https://i.ytimg.com/vi/jmdCpWCQzmY/hqdefault.jpg",
        link:"https://youtu.be/jmdCpWCQzmY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/jmdCpWCQzmY"
        },
        topic:"Time Remaining on Loan"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"SQL",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"SQL Tips - SUM Function",
        description:"Hey team,\n\nThis video will share how to use the SUM function in SQL and will also show an example of how to filter your results using the WHERE clause. We will also cover how to add basic math operators in the SUM function.",
        thumbnail:"https://i.ytimg.com/vi/DwK2qKxwYoo/hqdefault.jpg",
        link:"https://youtu.be/DwK2qKxwYoo",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/DwK2qKxwYoo"
        },
        topic:"SUM Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Adding Trendlines | One or Multiple Chart Elements | Selecting a Specific Series",
        description:"Hey team,\n\nThis quick video will show you how to add trendlines to your Excel charts.\n\nChapters:\n0:00 Introduction\n1:04 Adding Multiple Trendlines\n1:17 Selecting from Multiple Datasets for Trendlines",
        thumbnail:"https://i.ytimg.com/vi/eZJ5UJxLLGw/hqdefault.jpg",
        link:"https://youtu.be/eZJ5UJxLLGw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/eZJ5UJxLLGw"
        },
        topic:"Chart Trendlines"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Calculating Age from Date of Birth | DATEDIF Function",
        description:"Hey team,\n\nThis video will show you how to use the DATEDIF function in Excel to quickly calculate the date of birth.",
        thumbnail:"https://i.ytimg.com/vi/ift11KrFlLo/hqdefault.jpg",
        link:"https://youtu.be/ift11KrFlLo",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ift11KrFlLo"
        },
        topic:"DATEDIF Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - How to Insert QR Codes | Free",
        description:"Hey team,\n\nThis quick video will show you how to insert QR codes into Excel for free.",
        thumbnail:"https://i.ytimg.com/vi/lhhCPvYkYA8/hqdefault.jpg",
        link:"https://youtu.be/lhhCPvYkYA8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/lhhCPvYkYA8"
        },
        topic:"Insert QR Codes"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Any Size Circular Infographic | Easy",
        description:"Hey team,\n\nThis quick video will show you how to create a circular infographic of any size or number of shapes in PowerPoint.",
        thumbnail:"https://i.ytimg.com/vi/UF046T2fGLk/hqdefault.jpg",
        link:"https://youtu.be/UF046T2fGLk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/UF046T2fGLk"
        },
        topic:"Any Size Circular Infographic"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - ROUNDUP Function | How to Round Up in Excel",
        description:"Hey team,\n\nThis quick video in Excel will show you how to round up numbers using the ROUNDUP function. Multiple examples are provided for how the function can be used to help you round up numbers.",
        thumbnail:"https://i.ytimg.com/vi/eDct1bwa3b0/hqdefault.jpg",
        link:"https://youtu.be/eDct1bwa3b0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/eDct1bwa3b0"
        },
        topic:"ROUNDUP Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Move Rows and Columns",
        description:"Hey team,\n\nThis quick video will show you how to easily move columns and rows in Excel.",
        thumbnail:"https://i.ytimg.com/vi/XZ3eanIpxF8/hqdefault.jpg",
        link:"https://youtu.be/XZ3eanIpxF8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/XZ3eanIpxF8"
        },
        topic:"Move Rows and Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Title Slide Template | Rounded Rectangles",
        description:"Hey team,\n\nThis quick video shares how to create one template idea you can utilize for your presentations.",
        thumbnail:"https://i.ytimg.com/vi/BGA1xlTZiLg/hqdefault.jpg",
        link:"https://youtu.be/BGA1xlTZiLg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/BGA1xlTZiLg"
        },
        topic:"Title Slide Templates"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Split Cells Diagonally",
        description:"Hey team,\n\nThis quick video will show you how to split cells diagonally in Excel.",
        thumbnail:"https://i.ytimg.com/vi/4syhFdIJJeQ/hqdefault.jpg",
        link:"https://youtu.be/4syhFdIJJeQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/4syhFdIJJeQ"
        },
        topic:"Split Cells Diagonally"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Title Slide Template | Angled Bars",
        description:"Hey team,\n\nThis quick video shares how to create one template idea you can utilize for your presentations.",
        thumbnail:"https://i.ytimg.com/vi/ygKXwybo6HI/hqdefault.jpg",
        link:"https://youtu.be/ygKXwybo6HI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/ygKXwybo6HI"
        },
        topic:"Title Slide Templates"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Remove Formulas AND Keep Your Data",
        description:"Hey team,\n\nThis quick video will show you how you can remove formulas in Excel and keep the result of the formula.",
        thumbnail:"https://i.ytimg.com/vi/6aHFl3OBin8/hqdefault.jpg",
        link:"https://youtu.be/6aHFl3OBin8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/6aHFl3OBin8"
        },
        topic:"Removing Formulas and Keep Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Text Search Box | Dynamic Filtering | One or Multiple Columns",
        description:"Hey team,\n\nThis video will show you how to create a text search box in Excel that can dynamically filter one or multiple columns.\n\nChapters:\n0:00 Introduction\n0:34 Getting Started and Single Column Filtering\n2:34 Setting Up Multiple Columns",
        thumbnail:"https://i.ytimg.com/vi/7N9oNNg3bXo/hqdefault.jpg",
        link:"https://youtu.be/7N9oNNg3bXo",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/7N9oNNg3bXo"
        },
        topic:"Dynamic Text Search Box"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Remove Photo Backgrounds Using PowerPoint | Easy Method",
        description:"Hey team,\n\nThis video shows you how to remove the backgrounds from photos using PowerPoint.",
        thumbnail:"https://i.ytimg.com/vi/NgVcWKSE94g/hqdefault.jpg",
        link:"https://youtu.be/NgVcWKSE94g",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/NgVcWKSE94g"
        },
        topic:"Remove Photo Background"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Autofit Row Height to Cell Contents | Auto Text Wrap | Easy Method",
        description:"Hey team,\n\nIn this quick video I will show you how to set up Excel so that it automatically adjusts row height to match the content size in your cell based on what you entered.",
        thumbnail:"https://i.ytimg.com/vi/FRu9CVnDICU/hqdefault.jpg",
        link:"https://youtu.be/FRu9CVnDICU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/FRu9CVnDICU"
        },
        topic:"Autofit Row Height"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Split Columns into Tables | Lists",
        description:"Hey team,\n\nThis quick video will show you how to use the FILTER function in Excel to split data in columns to lists or tables without needing to manually type out the data.\n\nLink to video of the FILTER function in full detail: https://youtu.be/mdZ2eMEk2ic",
        thumbnail:"https://i.ytimg.com/vi/3k-hamJzRlI/hqdefault.jpg",
        link:"https://youtu.be/3k-hamJzRlI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/3k-hamJzRlI"
        },
        topic:"Split Columns Into Tables"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Autofit Column Width to Cell Contents",
        description:"Hey team,\n\nIn this quick video I will show you how to set up Excel so that it automatically adjusts column width to match the content size in your cell based on what you entered.",
        thumbnail:"https://i.ytimg.com/vi/TZR021Bv2Lc/hqdefault.jpg",
        link:"https://youtu.be/TZR021Bv2Lc",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/TZR021Bv2Lc"
        },
        topic:"Autofit Column Width"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Hide or Remove All Unused Rows and Columns in Excel",
        description:"Hey team,\n\nThis quick video will show you how to hide or remove all unused columns or rows in Excel to create a clean view for your users. We will also cover how to unhide or restore the hidden columns and rows.",
        thumbnail:"https://i.ytimg.com/vi/O9P6CfO6394/hqdefault.jpg",
        link:"https://youtu.be/O9P6CfO6394",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/O9P6CfO6394"
        },
        topic:"Hide All Unused Rows and Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"SQL",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"SQL Tips - WHERE Clause Explained | Basic, AND/OR, Between, Like and Wildcard Characters",
        description:"Chapters:\n0:00 Introduction\n0:27 Basic WHERE example\n1:15 Greater Than | Less Than Operators\n1:57 Between Operator\n2:27 AND/OR Operators\n3:50 Like Operator and Wildcard Characters",
        thumbnail:"https://i.ytimg.com/vi/u9OxwQTpP5M/hqdefault.jpg",
        link:"https://youtu.be/u9OxwQTpP5M",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/u9OxwQTpP5M"
        },
        topic:"WHERE Clause"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"SQL",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"SQL Tips - Adding Single or Multiple Line Comments | Ignore SQL Statements",
        description:"Hey team,\n\nThis quick video will show you how to add single or multiple line comments in SQL.\n\nChapters:\n0:00 Introduction\n0:12 Single Line Comments\n0:36 Multiple Line Comments",
        thumbnail:"https://i.ytimg.com/vi/rbKYw6tZTLI/hqdefault.jpg",
        link:"https://youtu.be/rbKYw6tZTLI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/rbKYw6tZTLI"
        },
        topic:"Comments"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Track Any Changes Made to Your Workbook | No VBA",
        description:"Hey team,\n\nThis video will show you how to track changes in an Excel workbook using conditional formatting.\n\nVideo on how to protect your workbook: https://youtu.be/FhpkLchk3L8",
        thumbnail:"https://i.ytimg.com/vi/cnq3JHifAko/hqdefault.jpg",
        link:"https://youtu.be/cnq3JHifAko",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/cnq3JHifAko"
        },
        topic:"Tracking Changes"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Waffle Chart Basics",
        description:"Hey team,\n\nThis quick video will show you how to create a waffle chart in Excel.",
        thumbnail:"https://i.ytimg.com/vi/pyhgD4ON_mw/hqdefault.jpg",
        link:"https://youtu.be/pyhgD4ON_mw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/pyhgD4ON_mw"
        },
        topic:"Waffle Charts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Flash Fill | The Best Excel Feature | Use Instead of Formulas",
        description:"This quick video shows you how powerful the Flash Fill or Ctrl + E combination can be in Excel with some examples.\n\nCtrl + E is a keyboard shortcut for flash fill that recognizes patterns in adjacent columns and fills the current column.\n\nChapters:\n0:00 Introduction\n0:26 Flash Fill Explained | Combine or Separate Examples\n1:50 Quickly Generate Emails\n2:10 Additional Separating Examples\n2:26 Formatting Examples\n3:36 Limitations of Flash Fill",
        thumbnail:"https://i.ytimg.com/vi/gvDHGsfwGxM/hqdefault.jpg",
        link:"https://youtu.be/gvDHGsfwGxM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/gvDHGsfwGxM"
        },
        topic:"Flash Fill"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Basic Math Functions | Add | Subtract | Multiply | Divide | Bonus Tips Included",
        description:"Hey team,\n\nThis quick video will show you how to perform basic math functions in Excel using manual formulas and Excel's built in functions. I included some additional quick tips to help you be more efficient in performing these functions.\n\nChapters: \n0:00 Introduction\n0:21 Addition (SUM)\n1:13 Subtraction\n1:47 Multiplication (Product)\n2:14 Division",
        thumbnail:"https://i.ytimg.com/vi/YbZGN4Bm4j8/hqdefault.jpg",
        link:"https://youtu.be/YbZGN4Bm4j8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/YbZGN4Bm4j8"
        },
        topic:"Basic Math Functions"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Delete Blank Rows | The Best Way",
        description:"Hey team,\n\nThis quick video will show you a few methods for deleting blank rows in Excel and we will also cover how to handle partially blank rows.",
        thumbnail:"https://i.ytimg.com/vi/2MVAMoDHpTc/hqdefault.jpg",
        link:"https://youtu.be/2MVAMoDHpTc",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/2MVAMoDHpTc"
        },
        topic:"Delete Blank Rows"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Insert Pictures into Cells | The Best Way",
        description:"Hey team,\n\nThis video will show you a feature of Excel 365 and Excel for Web that allows you to use the IMAGE function to insert pictures directly into cells.",
        thumbnail:"https://i.ytimg.com/vi/dLboAn2Wfh0/hqdefault.jpg",
        link:"https://youtu.be/dLboAn2Wfh0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/dLboAn2Wfh0"
        },
        topic:"Insert Pictures in Cells"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"PowerPoint Tips - Create Custom Icons",
        description:"How to create custom icons in PowerPoint for your presentations or logos.",
        thumbnail:"https://i.ytimg.com/vi/wiMlm9K2cKg/hqdefault.jpg",
        link:"https://youtu.be/wiMlm9K2cKg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/wiMlm9K2cKg"
        },
        topic:"Custom Icons"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Dynamically Updating Circle Charts | Progress Charts",
        description:"Hey team,\n\nThis video will show you how to create circle charts in Excel that update based on your data.",
        thumbnail:"https://i.ytimg.com/vi/MmlgzYcRhKg/hqdefault.jpg",
        link:"https://youtu.be/MmlgzYcRhKg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/MmlgzYcRhKg"
        },
        topic:"Dynamic Circle Charts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Repeat Actions Shortcuts",
        description:"Hey team,\n\nthis quick video will show you how to repeat previous actions in Excel to help you save time.",
        thumbnail:"https://i.ytimg.com/vi/AEEvnKioZ18/hqdefault.jpg",
        link:"https://youtu.be/AEEvnKioZ18",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/AEEvnKioZ18"
        },
        topic:"Repeat Actions"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Creating Heat Maps",
        description:"Hey team,\n\nChapters:\n0:00 Introduction\n0:15 Heat Map Basics\n0:38 Heat Map Advanced Tips",
        thumbnail:"https://i.ytimg.com/vi/8KeJyb1W4UQ/hqdefault.jpg",
        link:"https://youtu.be/8KeJyb1W4UQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/8KeJyb1W4UQ"
        },
        topic:"Heat Map"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - XLOOKUP and Nested XLOOKUP Explained",
        description:"Hey team,\n\nThis video explains how to use the XLOOKUP function in detail with three examples.\n\nChapters:\n0:00 Introduction\n0:30 XLOOKUP Explanation\n3:17 XLOOKUP Array \n4:12 Nested XLOOKUP Example",
        thumbnail:"https://i.ytimg.com/vi/Bcm7LB5ZyMY/hqdefault.jpg",
        link:"https://youtu.be/Bcm7LB5ZyMY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/Bcm7LB5ZyMY"
        },
        topic:"XLOOKUP Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - XLOOKUP Basics | Returning an Array of Data",
        description:"Hey team,\n\nThis quick video will show you how to use XLOOKUP starting with the basics. We also show you how to return an array using XLOOKUP.\n\nDetailed explanation of XLOOKUP and Nested XLOOKUP: https://youtu.be/Bcm7LB5ZyMY",
        thumbnail:"https://i.ytimg.com/vi/8N-Y8idSw80/hqdefault.jpg",
        link:"https://youtu.be/8N-Y8idSw80",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/8N-Y8idSw80"
        },
        topic:"XLOOKUP Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Add or Remove Columns and Rows | Helpful Tips and Tricks Included",
        description:"Hey team,\n\nThis quick video will show you tips and shortcuts for adding and deleting rows and columns from your Excel spreadsheets.\n\nChapters:\n0:00 Introduction\n0:12 Basics - Adding Rows and Columns\n0:35 Adding Multiple Rows and Columns\n1:16 Keyboard Shortcut for Adding Rows and Columns\n1:40 Adding Non-Adjacent Rows and Columns\n2:06 Deleting Rows and Columns\n2:27 Keyboard Shortcut for Deleting Rows and Columns",
        thumbnail:"https://i.ytimg.com/vi/GSCz5_uy_5c/hqdefault.jpg",
        link:"https://youtu.be/GSCz5_uy_5c",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/GSCz5_uy_5c"
        },
        topic:"Add and Remove Rows and Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Move or Copy Spreadsheet Tabs | Existing Workbook or Separate Workbook",
        description:"This video shows you how to move or copy tabs within your Excel spreadsheet or to another spreadsheet in just a few clicks.\n\nChapters:\n0:00 Introduction\n0:19 Copy Tab | Basic Example\n0:44 Copy Tab Shortcut\n1:11 Copy Multiple Tabs | Separate Workbook",
        thumbnail:"https://i.ytimg.com/vi/J4p1NoQYyVA/hqdefault.jpg",
        link:"https://youtu.be/J4p1NoQYyVA",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/J4p1NoQYyVA"
        },
        topic:"Move and Copy Tabs"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - How to Protect Your Worksheet | How to Protect Certain Cells",
        description:"Hey team,\n\nIn this video we explore how to protect your worksheet and unprotect it. We will also cover how you can leave certain selected cells editable for your users to input data.\n\nChapters:\n0:00 Introduction\n0:20 Protect Your Worksheet from Edits\n1:16 Protect Certain Cells from Edits | Leave Some Editable",
        thumbnail:"https://i.ytimg.com/vi/FhpkLchk3L8/hqdefault.jpg",
        link:"https://youtu.be/FhpkLchk3L8",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/FhpkLchk3L8"
        },
        topic:"Protect Sheets and Cells"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Searchable Dropdown Lists | No VBA or Formulas Required | Latest Excel Versions",
        description:"Hey team,\n\nThis quick video shows you how the latest versions of Excel for desktop and Excel 365 online allows for searchable dropdown lists without any VBA or formulas.",
        thumbnail:"https://i.ytimg.com/vi/AwI25W3kiVM/hqdefault.jpg",
        link:"https://youtu.be/AwI25W3kiVM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/AwI25W3kiVM"
        },
        topic:"Searchable Dropdowns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Checkboxes to Format Cells and Insert Current Date and Time",
        description:"Hey team,\n\nThis video shows you how to create checkboxes and how to use those checkboxes to format cells and input current date and time.\n\nChapters:\n0:00 Introduction\n0:21 Insert Developer Tab\n0:37 Adding and Formatting Checkboxes\n0:57 How to Setup Checkboxes to Format Cells\n2:47 How to Setup Checkboxes to Insert Current Date/Time",
        thumbnail:"https://i.ytimg.com/vi/mQ17upNkBzM/hqdefault.jpg",
        link:"https://youtu.be/mQ17upNkBzM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/mQ17upNkBzM"
        },
        topic:"Checkbox Formatting"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Teams",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Microsoft Teams Tips - How to Create an Announcement",
        description:"Hey team,\n\nthis quick video will show you how to create an announcement in Microsoft Teams for your channel.",
        thumbnail:"https://i.ytimg.com/vi/TnXErltmYAE/hqdefault.jpg",
        link:"https://youtu.be/TnXErltmYAE",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/TnXErltmYAE"
        },
        topic:"Announcements"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Combine Emails | Create Group Email Hyperlink",
        description:"Hey team,\n\nThis quick video will show you how to easily combine emails in Excel so you can paste them into your email program. I will also cover how to create a hyperlink in Excel that will launch an email to your full list.\n\nChapters:\n0:00 Introduction\n0:24 Combine Emails\n1:12 Create Group Email Hyperlink",
        thumbnail:"https://i.ytimg.com/vi/HNvxK3mYXug/hqdefault.jpg",
        link:"https://youtu.be/HNvxK3mYXug",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/HNvxK3mYXug"
        },
        topic:"Combine Emails"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Find and Replace Explained with Various Examples | Replace Data, Wildcard and Formats",
        description:"Hey team,\n\nThis video explains the find and replace function in Excel and how you can utilize it to adjust and clean up your data.\n\nChapters:\n0:00 Introduction\n0:20 Basic Example of Find and Replace\n1:03 Wildcard Character Replace | Multiple Tabs\n2:15 Find and Replace Cell Formatting",
        thumbnail:"https://i.ytimg.com/vi/MIa89DYjBds/hqdefault.jpg",
        link:"https://youtu.be/MIa89DYjBds",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/MIa89DYjBds"
        },
        topic:"Find and Replace"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Import Data from Pictures into Excel",
        description:"Hey team,\n\nThis quick video will show you how to import data from photos into Excel.",
        thumbnail:"https://i.ytimg.com/vi/5Y-aZKSU-Yo/hqdefault.jpg",
        link:"https://youtu.be/5Y-aZKSU-Yo",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/5Y-aZKSU-Yo"
        },
        topic:"Data Import from Pictures"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Text to Columns | Split Up Data Strings from One Column into Multiple Columns",
        description:"Hey team,\n\nThis video will show you how to split data from one column into multiple. Additionally, the video covers some of the overlooked capabilities of text to columns and hidden features.\n\nTEXTSPLIT function video: https://youtu.be/T-fgoVyCxgg\n\nChapters:\n0:00 Introduction\n0:30 Split Up Data with a Delimiter\n1:50 Correct Date Formatting\n2:34 Split Data without a Delimiter",
        thumbnail:"https://i.ytimg.com/vi/6rVKY2Z19Fk/hqdefault.jpg",
        link:"https://youtu.be/6rVKY2Z19Fk",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/6rVKY2Z19Fk"
        },
        topic:"Text to Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Email Hyperlinks that Dynamically Include Recipient, CC Line, Subject and Body",
        description:"Hey team,\n\nThis video explains how to use the hyperlink function in Excel to create dynamic hyperlinks that can include who the email is going to, the CC line, subject line and the body of the email.\n\nChapters:\n0:00 Introduction\n0:45 Email Hyperlink Basics\n1:56 Adding a CC Line to the Email\n3:03 Adding Subject Line\n4:02 Adding Body to the Email\n4:36 Creating Link to Email a Group",
        thumbnail:"https://i.ytimg.com/vi/zL8uaqhM4EU/hqdefault.jpg",
        link:"https://youtu.be/zL8uaqhM4EU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/zL8uaqhM4EU"
        },
        topic:"Email Hyperlinks"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - COUNTIF and COUNTIFS Explained | Basic and Advanced Examples",
        description:"Hey team,\n\nIn this video we take a close look at both the COUNTIF and COUNTIFS functions in Excel. Multiple examples are provided to assist.\n\nChapters:\n0:00 Introduction\n0:29 Basic COUNTIF Function\n1:20 COUNTIF Partial Match\n2:09 COUNTIFS Basics\n3:16 COUNTIFS Advanced - Multiple Criteria with OR Statement",
        thumbnail:"https://i.ytimg.com/vi/9zC2qIG8c48/hqdefault.jpg",
        link:"https://youtu.be/9zC2qIG8c48",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/9zC2qIG8c48"
        },
        topic:"COUNTIF and COUNTIFS Functions"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Count Cells with Text | Count Cells with Text Excluding Empty Strings",
        description:"Hey team,\n\nIn this quick video we look at how to count all cells that contain a text value and we also look at a formula for calculating all cells with a text value, excluding empty strings.\n\nChapters:\n0:00 Introduction\n0:30 Count All Cells Containing Text Values\n1:23 Count Text Cells Excluding Empty Strings",
        thumbnail:"https://i.ytimg.com/vi/TeSM2hMYlV4/hqdefault.jpg",
        link:"https://youtu.be/TeSM2hMYlV4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/TeSM2hMYlV4"
        },
        topic:"Count Cells with Text"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Combine Data in Columns without Losing Data | Multiple Examples Included",
        description:"Hey team,\n\nIn this video you will see how to combine columns in Excel. I show different methods for performing this function. Additionally, we start with a basic example and then get more advanced.\n\nChapters:\n0:00 Introduction\n0:30 Basic Combine Examples\n2:44 Advanced Combine Example",
        thumbnail:"https://i.ytimg.com/vi/GlY1mTPDrmg/hqdefault.jpg",
        link:"https://youtu.be/GlY1mTPDrmg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/GlY1mTPDrmg"
        },
        topic:"Combining Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - VLOOKUP Function with Multiple Columns | Multiple Values",
        description:"Hey team.\n\nThis video covers in detail how to resolve the issue VLOOKUP is known to have where only the first result is returned in a column. You can combine two columns to create a unique identifier that VLOOKUP can utilize to return the result you need.",
        thumbnail:"https://i.ytimg.com/vi/KPpKATZInNs/hqdefault.jpg",
        link:"https://youtu.be/KPpKATZInNs",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/KPpKATZInNs"
        },
        topic:"VLOOKUP Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - VLOOKUP Tutorial | Limitations | Multiple Spreadsheet Example",
        description:"Hey team,\n\nThis video tutorial will show you how to use VLOOKUP in Excel. During the video I cover how to use VLOOKUP on one spreadsheet and across multiple spreadsheets. I also show you some of the limitations of VLOOKUP and how to work around them.\n\nXLOOKUP Video: https://youtu.be/o-9JtqdH-vE\n\nVLOOKUP to Match Multiple Columns (Workaround for limitation where VLOOKUP will only return the first match): https://youtu.be/KPpKATZInNs\n\nChapters:\n0:00 Introduction\n0:30 VLOOKUP Function Tutorial\n2:00 Limitations and Workarounds\n3:14 Multiple Spreadsheet Example",
        thumbnail:"https://i.ytimg.com/vi/HBIphAYLvfU/hqdefault.jpg",
        link:"https://youtu.be/HBIphAYLvfU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/HBIphAYLvfU"
        },
        topic:"VLOOKUP Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Using the Format Painter to Clean Up Data",
        description:"Hey team,\n\nThis video will show you how format painter can assist you with quickly aligning formatting in your Excel spreadsheets.\n\nChapters:\n0:00 Introduction\n0:21 Updating Formatting One Cell at a Time\n0:57 Updating Formatting in Multiple Cells at Once\n2:22 Advanced Feature - Formatting an Entire Row\n3:14 Format Painter Across Multiple Tabs",
        thumbnail:"https://i.ytimg.com/vi/dbXECVDviEA/hqdefault.jpg",
        link:"https://youtu.be/dbXECVDviEA",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/dbXECVDviEA"
        },
        topic:"Format Painter"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - SUMIFS Function | Add with Multiple Variables | Dropdowns",
        description:"Hey team,\n\nThis video details how to use the SUMIFS function along with how to create a dynamic filter for SUMIFS using dropdown menus.\n\nHow to create a dropdown list: https://youtube.com/shorts/klX9b4Gqjpo?feature=share\n\nChapters:\n0:00 Introduction\n1:02 SUMIFS Function Details\n2:24 Using SUMIFS with Dropdowns\n\n\n\n\nPlease let me know if you have any other questions or tips you'd like to see.",
        thumbnail:"https://i.ytimg.com/vi/btrjWEQ79HM/hqdefault.jpg",
        link:"https://youtu.be/btrjWEQ79HM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/btrjWEQ79HM"
        },
        topic:"SUMIFS Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Creating and Designing Pivot Tables",
        description:"Hey team,\n\nThis video will show you the Pivot Table basics. We cover a large amount of topics to help you feel confident in getting started with this powerful tool.\n\nChapters:\n0:00 Introduction\n0:43 Setting Up the Pivot Table\n1:39 Creating the Pivot Table\n2:18 Understanding Pivot Table Fields\n4:32 Designing Pivot Table Views\n6:27 Adding Calculated Fields\n8:02 Analyzing Data and Changing How Values Display\n9:33 Sorting Data\n10:14 Filtering Pivot Tables\n11:52 Adding Charts\n12:29 Refreshing Pivot Table Data",
        thumbnail:"https://i.ytimg.com/vi/GkA65PB3rnM/hqdefault.jpg",
        link:"https://youtu.be/GkA65PB3rnM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/GkA65PB3rnM"
        },
        topic:"Pivot Tables"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - FILTER Function Basics and Multiple Criteria with Column Select",
        description:"Hey team,\n\nThis video will show you how to use the FILTER function in Excel. We start off with the basics but there are examples of adding \"and\" and \"or\" criteria to the filter as well. At the end I also show how to return only the columns you want to see.\n\nChapters:\n0:00 Introduction\n0:38 FILTER Basics\n1:29 FILTER with AND Criteria\n2:43 FILTER with OR including AND Criteria\n4:17 FILTER with OR including multiple AND criteria\n5:05 Choose Columns to Include in Filter Results",
        thumbnail:"https://i.ytimg.com/vi/mdZ2eMEk2ic/hqdefault.jpg",
        link:"https://youtu.be/mdZ2eMEk2ic",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/mdZ2eMEk2ic"
        },
        topic:"FILTER Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - 25 of the Best Keyboard Shortcuts for Excel",
        description:"Hey team,\n\nThis video covers a wide range of keyboard shortcuts that can help you in Excel. Many are common across programs and I also included some lesser known keyboard shortcuts as well.\n\n\nLink to Flash Fill (Ctrl + E) Video: https://youtu.be/rIGWgROMV5A\n\nChapters:\n0:00 Introduction\n0:44 Save Your File\n0:55 Copy Data\n1:07 Paste Data / Paste Special\n1:24 Cut Data\n1:41 Undo\n1:52 Select Entire Column / Row\n2:18 Delete Row / Column\n2:37 Insert Row / Column\n2:52 Hide Row / Column\n3:09 Move Row\n3:30 Create A Table\n3:48 Select All Data\n4:03 Cell Selection\n4:26 Navigate to Top\n4:40 Navigate to Bottom\n4:52 Return to Highlighted Cell\n5:14 Cell Formatting\n5:34 Insert Current Date / Time\n5:51 Find Data\n6:11 Add Filters\n6:24 Flash Fill\n7:09 Clear Filters\n7:27 Tab Navigation\n7:51 Resize Columns / Rows\n8:15 AutoSum",
        thumbnail:"https://i.ytimg.com/vi/8N_njEhSrSQ/hqdefault.jpg",
        link:"https://youtu.be/8N_njEhSrSQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/8N_njEhSrSQ"
        },
        topic:"Keyboard Shortcuts"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - IFERROR and Nested IFERROR to Help Clean Up Your Data",
        description:"Hey team, \n\nThis video will show you how to use the IFERROR function with a basic example, how to use IFERROR to keep other formulas from returning an error, and how to use IFERROR nested with other formulas.\n\nChapters:\n0:00 Introduction\n0:36 IFERROR Basics\n2:39 IFERROR and Other Formulas\n4:10 Nested IFERROR",
        thumbnail:"https://i.ytimg.com/vi/0VKyWG-2rMM/hqdefault.jpg",
        link:"https://youtu.be/0VKyWG-2rMM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/0VKyWG-2rMM"
        },
        topic:"IFERROR Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Multiple Dependent or Cascading Dropdowns (Simple Method)",
        description:"Hey team,\n\nThis video will show you how to create dependent dropdowns in Excel so that your selection in one dropdown list filters the remaining list options in the remaining dropdowns.\n\nThere are a lot of different ways to accomplish this goal, but I thought this tip would be helpful as it can be pretty simple to set up and doesn't require complex formulas or code.\n\nNote: Handling multi-word entries is a bit different than single word entries in Excel for dependent dropdowns. There are some system limitations depending on your needs. \n\nSee the chapters below for the section that will help most and thank you for watching.\n\nChapters:\n0:00 Introduction\n0:35 Two Levels of Dependency with Single Words\n3:26 Three Levels of Dependency with Single Words\n4:27 Multi-word Entries \n\nLet me know what other videos you'd like to see covered.",
        thumbnail:"https://i.ytimg.com/vi/8FCP8LxgVo0/hqdefault.jpg",
        link:"https://youtu.be/8FCP8LxgVo0",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/8FCP8LxgVo0"
        },
        topic:"Multiple Dependent Dropdowns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - TRANSPOSE Function - Switch or Rotate Columns and Rows",
        description:"This video will show you how to use the TRANSPOSE function and how to paste special with transpose so that you can reorganize your data in Excel by switching or rotating the columns and rows. \nChapters: \n0:00 Introduction \n0:39 TRANSPOSE Function\n3:25 Paste Special with Transpose",
        thumbnail:"https://i.ytimg.com/vi/1JYHbKDymKM/hqdefault.jpg",
        link:"https://youtu.be/1JYHbKDymKM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/1JYHbKDymKM"
        },
        topic:"TRANSPOSE Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Quick Answers with the Status Bar and Customization",
        description:"This video will show you how to get quick answers from the status bar in Excel and how to customize the status bar to include additional helpful information",
        thumbnail:"https://i.ytimg.com/vi/TLtImt9oqFY/hqdefault.jpg",
        link:"https://youtu.be/TLtImt9oqFY",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/TLtImt9oqFY"
        },
        topic:"Status Bar"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Create Dynamic Row Sequences that Automatically Update",
        description:"This video will show you how to create dynamic sequences in your Excel rows that will automatically update when new fields are added or when a row is deleted. I will also cover how to add text before the sequence and how to create a date sequence.",
        thumbnail:"https://i.ytimg.com/vi/-cG7mbyXKAQ/hqdefault.jpg",
        link:"https://youtu.be/-cG7mbyXKAQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/-cG7mbyXKAQ"
        },
        topic:"Dynamic Row Sequences"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - TRIM Function - Removes Unwanted Extra Spaces / Fixes Common Formula Error",
        description:"Hey team,\n\nThis video will help you see why the TRIM function can be so helpful in Excel. I will show you a real-life scenario for how this function can help and show you how the TRIM function works.",
        thumbnail:"https://i.ytimg.com/vi/YW8kKbrKiR4/hqdefault.jpg",
        link:"https://youtu.be/YW8kKbrKiR4",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/YW8kKbrKiR4"
        },
        topic:"TRIM Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Best Way to Create Dropdowns that Dynamically Update",
        description:"This video will show you an easy way to create dropdown lists in Excel that can update dynamically when new fields are added.",
        thumbnail:"https://i.ytimg.com/vi/-6_B1WnsmCg/hqdefault.jpg",
        link:"https://youtu.be/-6_B1WnsmCg",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/-6_B1WnsmCg"
        },
        topic:"Create Dynamic Dropdowns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Freeze Columns and Rows / Freeze Panes",
        description:"This video explains how to freeze panes (columns and rows) in Excel.",
        thumbnail:"https://i.ytimg.com/vi/GNb5Nocqj7k/hqdefault.jpg",
        link:"https://youtu.be/GNb5Nocqj7k",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/GNb5Nocqj7k"
        },
        topic:"Freeze Rows and Columns"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Import Website Data",
        description:"This video shows you how to bring website data into Excel. \n\nThis method is for PC. the process on Mac would be a bit different.",
        thumbnail:"https://i.ytimg.com/vi/r60VUSL1nsU/hqdefault.jpg",
        link:"https://youtu.be/r60VUSL1nsU",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/r60VUSL1nsU"
        },
        topic:"Import Website Data"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Don't Use Formulas! Use Ctrl + E Instead",
        description:"This quick video shows you how powerful the Ctrl + E combination can be in Excel with some examples.\n\nCtrl + E is a keyboard shortcut for flash fill that recognizes patterns in adjacent columns and fills the current column. This will not replace the need for all formulas but it can help with common tasks we perform in Excel.",
        thumbnail:"https://i.ytimg.com/vi/rIGWgROMV5A/hqdefault.jpg",
        link:"https://youtu.be/rIGWgROMV5A",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/rIGWgROMV5A"
        },
        topic:"Flash Fill"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - UPPER, LOWER, and PROPER Functions",
        description:"This video show you how to use the UPPER, LOWER, and PROPER functions in Excel. These functions can help you with formatting your data to avoid inconsistencies and errors in matching information.",
        thumbnail:"https://i.ytimg.com/vi/PkuhtMDkGUI/hqdefault.jpg",
        link:"https://youtu.be/PkuhtMDkGUI",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/PkuhtMDkGUI"
        },
        topic:"UPPER LOWER PROPER Functions"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Make Filtering Easy with Slicer Buttons",
        description:"This video shows you how you can filter items easily in Excel using Slicer Buttons.",
        thumbnail:"https://i.ytimg.com/vi/OI3EqD2mGSw/hqdefault.jpg",
        link:"https://youtu.be/OI3EqD2mGSw",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/OI3EqD2mGSw"
        },
        topic:"Slicer Buttons"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - SUM and AutoSum",
        description:"This video shows you how to easily sum up data in excel using a variety of methods",
        thumbnail:"https://i.ytimg.com/vi/niLbIjjNiec/hqdefault.jpg",
        link:"https://youtu.be/niLbIjjNiec",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/niLbIjjNiec"
        },
        topic:"SUM Function"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Outlook",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"9 Email Tips and Etiquette in 2023",
        description:"This video reviews 9 tips and best practices for email you can use to help you in your career.\n\nTopics covered:\n• Email subject line - 0:30 \n• Listing your main point first - 1:17\n• List details in bullets - 2:03\n• Introduce Yourself - 2:43 \n• Avoid all caps - 3:26\n• Shorten Hyperlinks - 4:03\n• Choose when to reply - 4:30\n• Set informative out of office messages - 5:13\n• Proofread - 6:31",
        thumbnail:"https://i.ytimg.com/vi/yHXwf7JkiCM/hqdefault.jpg",
        link:"https://youtu.be/yHXwf7JkiCM",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/yHXwf7JkiCM"
        },
        topic:"Email"
    },
    {
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png"
        },
        title:"Excel Tips - Move or Copy Tab or Multiple Tabs",
        description:"This quick video will show you how to move or copy an entire tab in Excel to another workbook or a new workbook.",
        thumbnail:"https://i.ytimg.com/vi/rMtH08s7zcQ/hqdefault.jpg",
        link:"https://youtu.be/rMtH08s7zcQ",
        related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/rMtH08s7zcQ"
        },
        topic:"Tab Management"
    }

  ];  // <-- close the array here

// ...existing code...




window.updateYouTubeContentItems = async function() {
  const CHANNEL_ID  = 'UCY_eFbgvDBsEmY10mtFNLNw';
  const UPLOADS_PLAYLIST_ID = 'UU' + CHANNEL_ID.slice(2);

  // Fetch playlist items from your backend proxy
  const response = await fetch(`http://localhost:3001/api/youtube?playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=50`);
  const data = await response.json();
  const plResItems = data.items || [];

  const videoIdList = plResItems.map(i => i.snippet.resourceId.videoId);
  let allVidItems = [];
  for (let i = 0; i < videoIdList.length; i += 50) {
    const batchIds = videoIdList.slice(i, i + 50).join(',');
    // Fetch video details from your backend proxy
    const batchRes = await fetch(
      `http://localhost:3001/api/youtube?playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=50&id=${batchIds}`
    ).then(r => r.json());
    allVidItems = allVidItems.concat(batchRes.items || []);
  }

  // Get a Set of all existing YouTube video links
  const existingLinks = new Set(
    (window.contentItems || [])
      .filter(item => item.program && item.program.name === 'YouTube')
      .map(item => item.link)
  );

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
    }))
    // Only add items not already present
    .filter(item => !existingLinks.has(item.link));

  window.contentItems = (window.contentItems || []).concat(dynamicItems);
  window.dispatchEvent(new Event('contentItemsLoaded'));
}
