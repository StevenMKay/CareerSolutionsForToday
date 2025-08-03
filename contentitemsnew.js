
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
    link: "Learn.html#css-holographic-demo",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#css-holographic-demo"
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
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Float",
    description: "Learn CSS float property for text wrapping and layout. Master how elements float left or right, clear floats, and create multi-column layouts. Essential for understanding legacy layout techniques.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-float",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-float"
    },
    topic: "CSS Float",
    demoHtml: `<div class="float-demo">
    <h1>CSS Float Examples</h1>
    
    <div class="float-examples">
        <div class="float-section">
            <h3>Float Left</h3>
            <div class="float-container">
                <div class="float-box float-left">Floated Left</div>
                <p>This text wraps around the floated element on the left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
        </div>
        
        <div class="float-section">
            <h3>Float Right</h3>
            <div class="float-container">
                <div class="float-box float-right">Floated Right</div>
                <p>This text wraps around the floated element on the right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
        </div>
        
        <div class="float-section">
            <h3>Multiple Floated Elements</h3>
            <div class="float-container">
                <div class="float-box float-left">Left 1</div>
                <div class="float-box float-left">Left 2</div>
                <div class="float-box float-right">Right 1</div>
                <p>Text flows around multiple floated elements. The left floated elements stack from left to right, while right floated elements stack from right to left. This creates interesting text wrapping effects.</p>
            </div>
        </div>
        
        <div class="float-section">
            <h3>Clear Property</h3>
            <div class="float-container">
                <div class="float-box float-left">Floated Left</div>
                <p>This paragraph flows around the floated element.</p>
                <p class="clear-left">This paragraph uses clear: left to move below the floated element instead of wrapping around it.</p>
            </div>
        </div>
        
        <div class="float-section">
            <h3>Clearfix Technique</h3>
            <div class="float-container clearfix">
                <div class="float-box float-left">Float 1</div>
                <div class="float-box float-right">Float 2</div>
                <p>This container uses the clearfix technique to contain its floated children.</p>
            </div>
            <p class="clearfix-note">Notice how the container properly contains the floated elements above.</p>
        </div>
        
        <div class="float-section">
            <h3>Float Layout Example</h3>
            <div class="layout-example">
                <div class="sidebar">Sidebar</div>
                <div class="main-content">
                    <h4>Main Content</h4>
                    <p>This is a classic float-based layout with a sidebar and main content area. While modern CSS Grid and Flexbox are preferred, understanding floats is important for maintaining legacy code.</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Float Demo */
.float-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.float-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.float-examples {
    display: grid;
    gap: 20px;
}

.float-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.float-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.float-container {
    background: #ecf0f1;
    padding: 15px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
    overflow: auto; /* Contains floated elements */
}

.float-box {
    background: #3498db;
    color: white;
    padding: 15px;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    width: 120px;
    margin: 0 10px 10px 0;
}

/* Float Properties */
.float-left {
    float: left;
}

.float-right {
    float: right;
    background: #e74c3c;
}

/* Clear Property */
.clear-left {
    clear: left;
    background: #f39c12;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
}

/* Clearfix Technique */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

.clearfix-note {
    color: #7f8c8d;
    font-style: italic;
    margin-top: 10px;
}

/* Float Layout Example */
.layout-example {
    background: #ecf0f1;
    border-radius: 8px;
    overflow: auto;
    border: 2px dashed #bdc3c7;
}

.sidebar {
    float: left;
    width: 200px;
    background: #34495e;
    color: white;
    padding: 20px;
    font-weight: bold;
    text-align: center;
}

.main-content {
    margin-left: 220px; /* Sidebar width + margin */
    padding: 20px;
    background: white;
    border-radius: 0 8px 8px 0;
}

.main-content h4 {
    margin: 0 0 15px 0;
    color: #2c3e50;
}

.float-container p {
    margin: 10px 0;
    line-height: 1.6;
    text-align: justify;
}

/* Responsive behavior */
@media (max-width: 600px) {
    .sidebar {
        float: none;
        width: auto;
    }
    
    .main-content {
        margin-left: 0;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Z-index",
    description: "Control element stacking order with CSS z-index property. Learn about stacking contexts, positioned elements, and how to layer elements on top of each other for complex layouts and overlays.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-z-index",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-z-index"
    },
    topic: "CSS Z-index",
    demoHtml: `<div class="z-index-demo">
    <h1>CSS Z-index Examples</h1>
    
    <div class="z-index-examples">
        <div class="z-index-section">
            <h3>Basic Z-index Stacking</h3>
            <div class="stacking-container">
                <div class="stack-box box1">Z-index: 1</div>
                <div class="stack-box box2">Z-index: 2</div>
                <div class="stack-box box3">Z-index: 3</div>
            </div>
            <p>Higher z-index values appear on top of lower values.</p>
        </div>
        
        <div class="z-index-section">
            <h3>Negative Z-index</h3>
            <div class="negative-container">
                <div class="background-text">Background Text</div>
                <div class="negative-box">Z-index: -1 (Behind)</div>
                <p class="front-text">This text appears above the negative z-index element.</p>
            </div>
        </div>
        
        <div class="z-index-section">
            <h3>Z-index Without Position (No Effect)</h3>
            <div class="no-position-container">
                <div class="no-position-box box-a">Z-index: 100 (No position)</div>
                <div class="no-position-box box-b">Z-index: 1 (No position)</div>
                <p><strong>Note:</strong> Z-index only works on positioned elements (relative, absolute, fixed, sticky).</p>
            </div>
        </div>
        
        <div class="z-index-section">
            <h3>Stacking Context</h3>
            <div class="stacking-context-demo">
                <div class="context-parent parent1">
                    <div class="context-title">Parent Z-index: 1</div>
                    <div class="context-child">Child Z-index: 999</div>
                </div>
                <div class="context-parent parent2">
                    <div class="context-title">Parent Z-index: 2</div>
                    <div class="context-child">Child Z-index: 1</div>
                </div>
                <p>The child with z-index 999 appears behind the parent with z-index 2 due to stacking context.</p>
            </div>
        </div>
        
        <div class="z-index-section">
            <h3>Practical Example: Modal Overlay</h3>
            <div class="modal-example">
                <div class="page-content">
                    <h4>Page Content</h4>
                    <p>This is the main page content that will be covered by the modal.</p>
                    <button class="modal-trigger" onclick="toggleModal()">Open Modal</button>
                </div>
                <div class="modal-overlay" id="modalOverlay">
                    <div class="modal-content">
                        <h4>Modal Dialog</h4>
                        <p>This modal appears on top of all other content.</p>
                        <button onclick="toggleModal()">Close Modal</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="z-index-section">
            <h3>Interactive Z-index Controls</h3>
            <div class="interactive-demo">
                <div class="control-panel">
                    <h4>Control Z-index Values:</h4>
                    <div class="controls">
                        <label>Red Box: <input type="range" min="-1" max="10" value="1" onchange="updateZIndex('red', this.value)"> <span id="red-value">1</span></label>
                        <label>Green Box: <input type="range" min="-1" max="10" value="2" onchange="updateZIndex('green', this.value)"> <span id="green-value">2</span></label>
                        <label>Blue Box: <input type="range" min="-1" max="10" value="3" onchange="updateZIndex('blue', this.value)"> <span id="blue-value">3</span></label>
                    </div>
                </div>
                <div class="interactive-container">
                    <div class="interactive-box red-box" id="redBox">Red Box</div>
                    <div class="interactive-box green-box" id="greenBox">Green Box</div>
                    <div class="interactive-box blue-box" id="blueBox">Blue Box</div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Z-index Demo */
.z-index-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.z-index-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.z-index-examples {
    display: grid;
    gap: 20px;
}

.z-index-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.z-index-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Basic Stacking Example */
.stacking-container {
    position: relative;
    height: 200px;
    background: #ecf0f1;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.stack-box {
    position: absolute;
    width: 120px;
    height: 80px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

.box1 {
    background: #e74c3c;
    top: 20px;
    left: 20px;
    z-index: 1;
}

.box2 {
    background: #f39c12;
    top: 60px;
    left: 60px;
    z-index: 2;
}

.box3 {
    background: #3498db;
    top: 100px;
    left: 100px;
    z-index: 3;
}

/* Negative Z-index */
.negative-container {
    position: relative;
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.background-text {
    background: #2ecc71;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
}

.negative-box {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 200px;
    padding: 20px;
    background: #e74c3c;
    color: white;
    font-weight: bold;
    text-align: center;
    z-index: -1;
    border-radius: 4px;
}

.front-text {
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    border: 2px solid #3498db;
}

/* No Position Example */
.no-position-container {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.no-position-box {
    display: inline-block;
    width: 180px;
    padding: 20px;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 4px;
    margin: 0 10px;
}

.box-a {
    background: #e74c3c;
    z-index: 100; /* No effect without position */
    margin-left: -20px;
}

.box-b {
    background: #3498db;
    z-index: 1; /* No effect without position */
}

/* Stacking Context */
.stacking-context-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
    display: flex;
    gap: 20px;
}

.context-parent {
    position: relative;
    width: 200px;
    height: 150px;
    border-radius: 8px;
}

.parent1 {
    background: #e74c3c;
    z-index: 1;
}

.parent2 {
    background: #3498db;
    z-index: 2;
}

.context-title {
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 10px;
}

.context-child {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: #f39c12;
    color: white;
    padding: 15px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 12px;
}

.parent1 .context-child {
    z-index: 999;
}

.parent2 .context-child {
    z-index: 1;
}

/* Modal Example */
.modal-example {
    position: relative;
    height: 200px;
}

.page-content {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    height: 160px;
}

.modal-trigger {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 300px;
}

.modal-content button {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

/* Interactive Demo */
.interactive-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.control-panel {
    margin-bottom: 20px;
}

.controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.controls label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
}

.controls input[type="range"] {
    width: 150px;
}

.interactive-container {
    position: relative;
    height: 200px;
}

.interactive-box {
    position: absolute;
    width: 100px;
    height: 80px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: move;
}

.red-box {
    background: #e74c3c;
    top: 20px;
    left: 20px;
    z-index: 1;
}

.green-box {
    background: #2ecc71;
    top: 60px;
    left: 60px;
    z-index: 2;
}

.blue-box {
    background: #3498db;
    top: 100px;
    left: 100px;
    z-index: 3;
}

/* Responsive */
@media (max-width: 600px) {
    .stacking-context-demo {
        flex-direction: column;
    }
    
    .context-parent {
        width: 100%;
    }
}

<script>
function toggleModal() {
    const modal = document.getElementById('modalOverlay');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function updateZIndex(color, value) {
    const element = document.getElementById(color + 'Box');
    const valueSpan = document.getElementById(color + '-value');
    element.style.zIndex = value;
    valueSpan.textContent = value;
}
</script>`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Opacity",
    description: "Control element transparency with CSS opacity property. Learn how opacity affects elements and their children, create fade effects, and combine opacity with other properties for stunning visual effects.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-opacity",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-opacity"
    },
    topic: "CSS Opacity",
    demoHtml: `<div class="opacity-demo">
    <h1>CSS Opacity Examples</h1>
    
    <div class="opacity-examples">
        <div class="opacity-section">
            <h3>Basic Opacity Values</h3>
            <div class="opacity-grid">
                <div class="opacity-box opacity-100">Opacity: 1.0 (100%)</div>
                <div class="opacity-box opacity-75">Opacity: 0.75 (75%)</div>
                <div class="opacity-box opacity-50">Opacity: 0.5 (50%)</div>
                <div class="opacity-box opacity-25">Opacity: 0.25 (25%)</div>
                <div class="opacity-box opacity-10">Opacity: 0.1 (10%)</div>
                <div class="opacity-box opacity-0">Opacity: 0 (0%)</div>
            </div>
        </div>
        
        <div class="opacity-section">
            <h3>Opacity vs RGBA Comparison</h3>
            <div class="comparison-demo">
                <div class="comparison-container">
                    <h4>Using Opacity</h4>
                    <div class="opacity-parent">
                        <div class="opacity-child">Child text also transparent</div>
                    </div>
                </div>
                <div class="comparison-container">
                    <h4>Using RGBA</h4>
                    <div class="rgba-parent">
                        <div class="rgba-child">Child text remains opaque</div>
                    </div>
                </div>
            </div>
            <p><strong>Key difference:</strong> Opacity affects the entire element and its children, while RGBA only affects the background color.</p>
        </div>
        
        <div class="opacity-section">
            <h3>Hover Effects with Opacity</h3>
            <div class="hover-effects">
                <div class="hover-box fade-in">Fade In on Hover</div>
                <div class="hover-box fade-out">Fade Out on Hover</div>
                <div class="hover-box partial-fade">Partial Fade on Hover</div>
                <div class="hover-box scale-fade">Scale + Fade Effect</div>
            </div>
            <p>Hover over the boxes to see different opacity effects!</p>
        </div>
        
        <div class="opacity-section">
            <h3>Image Overlays with Opacity</h3>
            <div class="image-gallery">
                <div class="image-item">
                    <div class="image-placeholder">Image 1</div>
                    <div class="image-overlay">
                        <h5>Image Title</h5>
                        <p>Image description appears on hover</p>
                    </div>
                </div>
                <div class="image-item">
                    <div class="image-placeholder">Image 2</div>
                    <div class="image-overlay">
                        <h5>Another Image</h5>
                        <p>Beautiful overlay effect</p>
                    </div>
                </div>
                <div class="image-item">
                    <div class="image-placeholder">Image 3</div>
                    <div class="image-overlay">
                        <h5>Third Image</h5>
                        <p>Smooth opacity transitions</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="opacity-section">
            <h3>Interactive Opacity Control</h3>
            <div class="interactive-opacity">
                <div class="opacity-controls">
                    <label for="opacitySlider">Opacity: <span id="opacityValue">0.5</span></label>
                    <input type="range" id="opacitySlider" min="0" max="1" step="0.1" value="0.5" oninput="updateOpacity(this.value)">
                </div>
                <div class="controlled-element" id="controlledElement">
                    <h4>Adjustable Opacity</h4>
                    <p>Use the slider above to control my opacity!</p>
                </div>
            </div>
        </div>
        
        <div class="opacity-section">
            <h3>Layered Opacity Effects</h3>
            <div class="layered-demo">
                <div class="layer layer1">Layer 1 (Opacity: 0.8)</div>
                <div class="layer layer2">Layer 2 (Opacity: 0.6)</div>
                <div class="layer layer3">Layer 3 (Opacity: 0.4)</div>
                <div class="layer layer4">Layer 4 (Opacity: 0.2)</div>
            </div>
            <p>Multiple overlapping layers create depth and visual interest.</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Opacity Demo */
.opacity-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.opacity-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.opacity-examples {
    display: grid;
    gap: 20px;
}

.opacity-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.opacity-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Basic Opacity Values */
.opacity-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.opacity-box {
    background: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    border: 2px solid #2980b9;
}

.opacity-100 { opacity: 1.0; }
.opacity-75 { opacity: 0.75; }
.opacity-50 { opacity: 0.5; }
.opacity-25 { opacity: 0.25; }
.opacity-10 { opacity: 0.1; }
.opacity-0 { opacity: 0; border: 2px dashed #bdc3c7; background: transparent !important; color: #7f8c8d !important; }

/* Opacity vs RGBA Comparison */
.comparison-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
}

.comparison-container h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
    text-align: center;
}

.opacity-parent {
    background: #e74c3c;
    color: white;
    padding: 20px;
    border-radius: 4px;
    opacity: 0.7;
}

.rgba-parent {
    background: rgba(231, 76, 60, 0.7);
    color: white;
    padding: 20px;
    border-radius: 4px;
}

.opacity-child,
.rgba-child {
    background: #34495e;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
}

/* Hover Effects */
.hover-effects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.hover-box {
    background: #3498db;
    color: white;
    padding: 30px 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.fade-in {
    opacity: 0.3;
}

.fade-in:hover {
    opacity: 1;
}

.fade-out {
    opacity: 1;
}

.fade-out:hover {
    opacity: 0.3;
}

.partial-fade {
    background: #e74c3c;
    opacity: 1;
}

.partial-fade:hover {
    opacity: 0.6;
}

.scale-fade {
    background: #f39c12;
    opacity: 0.8;
    transform: scale(1);
}

.scale-fade:hover {
    opacity: 1;
    transform: scale(1.1);
}

/* Image Gallery with Overlays */
.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.image-item {
    position: relative;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #3498db, #2980b9);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(44, 62, 80, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
}

.image-item:hover .image-overlay {
    opacity: 1;
}

.image-overlay h5 {
    margin: 0 0 10px 0;
    font-size: 18px;
}

.image-overlay p {
    margin: 0;
    font-size: 14px;
}

/* Interactive Opacity Control */
.interactive-opacity {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.opacity-controls {
    margin-bottom: 20px;
    text-align: center;
}

.opacity-controls label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #2c3e50;
}

.opacity-controls input[type="range"] {
    width: 200px;
    margin: 0 10px;
}

.controlled-element {
    background: #3498db;
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    opacity: 0.5;
    transition: opacity 0.2s ease;
}

.controlled-element h4 {
    margin: 0 0 10px 0;
}

.controlled-element p {
    margin: 0;
}

/* Layered Effects */
.layered-demo {
    position: relative;
    height: 300px;
    background: #ecf0f1;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.layer {
    position: absolute;
    width: 200px;
    height: 150px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    text-align: center;
}

.layer1 {
    background: #e74c3c;
    top: 20px;
    left: 20px;
    opacity: 0.8;
}

.layer2 {
    background: #f39c12;
    top: 60px;
    left: 60px;
    opacity: 0.6;
}

.layer3 {
    background: #2ecc71;
    top: 100px;
    left: 100px;
    opacity: 0.4;
}

.layer4 {
    background: #9b59b6;
    top: 140px;
    left: 140px;
    opacity: 0.2;
}

/* Responsive */
@media (max-width: 600px) {
    .comparison-demo {
        grid-template-columns: 1fr;
    }
    
    .opacity-grid,
    .hover-effects {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
}

<script>
function updateOpacity(value) {
    const element = document.getElementById('controlledElement');
    const valueSpan = document.getElementById('opacityValue');
    element.style.opacity = value;
    valueSpan.textContent = value;
}
</script>`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Pseudo-classes",
    description: "Master CSS pseudo-classes to style elements based on their state or position. Learn :hover, :focus, :active, :first-child, :last-child, :nth-child, and more for dynamic styling without JavaScript.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-pseudo-classes",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-pseudo-classes"
    },
    topic: "CSS Pseudo-classes",
    demoHtml: `<div class="pseudo-classes-demo">
    <h1>CSS Pseudo-classes Examples</h1>
    
    <div class="pseudo-examples">
        <div class="pseudo-section">
            <h3>Link Pseudo-classes</h3>
            <div class="link-demo">
                <a href="#unvisited" class="demo-link">Unvisited Link (:link)</a>
                <a href="#visited" class="demo-link visited-demo">Visited Link (:visited)</a>
                <a href="#hover" class="demo-link">Hover Link (:hover)</a>
                <a href="#active" class="demo-link">Active Link (:active)</a>
            </div>
            <p>Try clicking and hovering over the links to see state changes!</p>
        </div>
        
        <div class="pseudo-section">
            <h3>Form Pseudo-classes</h3>
            <form class="form-demo">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="Focus me (:focus)" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Valid email (:valid/:invalid)">
                </div>
                <div class="form-group">
                    <input type="checkbox" id="terms" required>
                    <label for="terms">I agree to terms (:checked)</label>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Disabled input" disabled>
                </div>
                <button type="submit">Submit (:enabled/:disabled)</button>
            </form>
        </div>
        
        <div class="pseudo-section">
            <h3>Structural Pseudo-classes</h3>
            <div class="structural-demo">
                <h4>Child Selectors</h4>
                <ul class="child-list">
                    <li>First child (:first-child)</li>
                    <li>Second child</li>
                    <li>Third child</li>
                    <li>Fourth child</li>
                    <li>Last child (:last-child)</li>
                </ul>
                
                <h4>Nth-child Examples</h4>
                <div class="nth-grid">
                    <div class="nth-item">Item 1</div>
                    <div class="nth-item">Item 2 (even)</div>
                    <div class="nth-item">Item 3 (odd)</div>
                    <div class="nth-item">Item 4 (even)</div>
                    <div class="nth-item">Item 5 (odd)</div>
                    <div class="nth-item">Item 6 (even)</div>
                    <div class="nth-item">Item 7 (odd)</div>
                    <div class="nth-item">Item 8 (even)</div>
                </div>
                <p>Every 3rd item has a special style (:nth-child(3n))</p>
            </div>
        </div>
        
        <div class="pseudo-section">
            <h3>Interactive Pseudo-classes</h3>
            <div class="interactive-demo">
                <div class="hover-box">Hover me (:hover)</div>
                <div class="focus-box" tabindex="0">Focus me (:focus)</div>
                <div class="target-box" id="target1">Target me (:target) <a href="#target1">[Link to target]</a></div>
                <div class="empty-box"></div>
                <div class="not-empty-box">Not empty (:not(:empty))</div>
            </div>
        </div>
        
        <div class="pseudo-section">
            <h3>Advanced Pseudo-classes</h3>
            <div class="advanced-demo">
                <div class="article-demo">
                    <h4>Article with Paragraphs</h4>
                    <p>First paragraph (:first-of-type)</p>
                    <p>Second paragraph</p>
                    <p>Third paragraph</p>
                    <p>Last paragraph (:last-of-type)</p>
                    <span>This is a span element</span>
                    <p>Another paragraph (:last-of-type for p elements)</p>
                </div>
                
                <div class="only-child-demo">
                    <h4>Only Child Example</h4>
                    <div class="container">
                        <p>I am an only child (:only-child)</p>
                    </div>
                    <div class="container">
                        <p>I have a sibling</p>
                        <p>I also have a sibling</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="pseudo-section">
            <h3>Practical Example: Navigation Menu</h3>
            <nav class="pseudo-nav">
                <ul class="nav-list">
                    <li><a href="#" class="nav-link">Home</a></li>
                    <li><a href="#" class="nav-link">About</a></li>
                    <li><a href="#" class="nav-link">Services</a></li>
                    <li><a href="#" class="nav-link">Portfolio</a></li>
                    <li><a href="#" class="nav-link">Contact</a></li>
                </ul>
            </nav>
            <p>This navigation uses multiple pseudo-classes for styling.</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Pseudo-classes Demo */
.pseudo-classes-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.pseudo-classes-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.pseudo-examples {
    display: grid;
    gap: 20px;
}

.pseudo-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.pseudo-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Link Pseudo-classes */
.link-demo {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
}

.demo-link {
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.demo-link:link {
    background: #3498db;
    color: white;
}

.demo-link:visited {
    background: #9b59b6;
    color: white;
}

.demo-link:hover {
    background: #e74c3c;
    color: white;
    transform: translateY(-2px);
}

.demo-link:active {
    background: #f39c12;
    color: white;
    transform: translateY(0);
}

/* Form Pseudo-classes */
.form-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.form-group {
    margin: 15px 0;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #2c3e50;
}

.form-demo input[type="text"],
.form-demo input[type="email"] {
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.form-demo input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.form-demo input:valid {
    border-color: #2ecc71;
}

.form-demo input:invalid:not(:focus) {
    border-color: #e74c3c;
}

.form-demo input:disabled {
    background: #ecf0f1;
    color: #7f8c8d;
    cursor: not-allowed;
}

.form-demo input[type="checkbox"]:checked + label {
    color: #2ecc71;
}

.form-demo button {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;
}

.form-demo button:hover {
    background: #2980b9;
}

.form-demo button:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
}

/* Structural Pseudo-classes */
.child-list {
    list-style: none;
    padding: 0;
    background: #ecf0f1;
    border-radius: 8px;
    overflow: hidden;
}

.child-list li {
    padding: 12px 20px;
    border-bottom: 1px solid #bdc3c7;
}

.child-list li:first-child {
    background: #e74c3c;
    color: white;
    font-weight: bold;
}

.child-list li:last-child {
    background: #3498db;
    color: white;
    font-weight: bold;
    border-bottom: none;
}

.nth-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 20px 0;
}

.nth-item {
    background: #ecf0f1;
    padding: 15px;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
}

.nth-item:nth-child(even) {
    background: #3498db;
    color: white;
}

.nth-item:nth-child(odd) {
    background: #e74c3c;
    color: white;
}

.nth-item:nth-child(3n) {
    background: #f39c12;
    color: white;
    transform: scale(1.05);
}

/* Interactive Pseudo-classes */
.interactive-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.hover-box,
.focus-box,
.target-box,
.empty-box,
.not-empty-box {
    padding: 20px;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.hover-box {
    background: #ecf0f1;
    cursor: pointer;
}

.hover-box:hover {
    background: #3498db;
    color: white;
    transform: scale(1.05);
}

.focus-box {
    background: #ecf0f1;
    cursor: pointer;
}

.focus-box:focus {
    background: #2ecc71;
    color: white;
    outline: 3px solid rgba(46, 204, 113, 0.3);
}

.target-box {
    background: #ecf0f1;
    font-size: 14px;
}

.target-box:target {
    background: #f39c12;
    color: white;
    animation: highlight 1s ease;
}

@keyframes highlight {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.empty-box:empty {
    background: #e74c3c;
    min-height: 50px;
}

.empty-box:empty::after {
    content: "I'm empty (:empty)";
    color: white;
    font-weight: bold;
}

.not-empty-box:not(:empty) {
    background: #2ecc71;
    color: white;
}

/* Advanced Demo */
.article-demo p:first-of-type {
    color: #e74c3c;
    font-weight: bold;
    font-size: 18px;
}

.article-demo p:last-of-type {
    color: #3498db;
    font-weight: bold;
    font-size: 18px;
}

.only-child-demo .container {
    background: #ecf0f1;
    padding: 15px;
    margin: 10px 0;
    border-radius: 4px;
}

.only-child-demo p:only-child {
    background: #2ecc71;
    color: white;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
}

/* Navigation Example */
.pseudo-nav {
    background: #34495e;
    border-radius: 8px;
    overflow: hidden;
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}

.nav-list li:first-child .nav-link {
    background: #3498db;
}

.nav-list li:last-child .nav-link {
    background: #e74c3c;
}

.nav-link {
    display: block;
    color: #ecf0f1;
    text-decoration: none;
    padding: 15px 20px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background: #2c3e50;
    color: #3498db;
}

.nav-link:focus {
    background: #f39c12;
    color: white;
    outline: none;
}

/* Responsive */
@media (max-width: 600px) {
    .nth-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .interactive-demo {
        grid-template-columns: 1fr;
    }
    
    .nav-list {
        flex-direction: column;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Tutorial",
    description: "CSS (Cascading Style Sheets) is used to style and layout web pages. This comprehensive tutorial covers everything from basic syntax to advanced techniques. Learn how to make your HTML beautiful with colors, fonts, layouts, and animations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-tutorial",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-tutorial"
    },
    topic: "CSS Basics",
    demoHtml: `<div class="css-tutorial-container">
    <h1>Welcome to CSS Tutorial!</h1>
    <p class="intro-text">CSS makes web pages beautiful and interactive.</p>
    <div class="feature-grid">
        <div class="feature-box">
            <h3>🎨 Styling</h3>
            <p>Colors, fonts, and layouts</p>
        </div>
        <div class="feature-box">
            <h3>📱 Responsive</h3>
            <p>Works on all devices</p>
        </div>
        <div class="feature-box">
            <h3>✨ Animation</h3>
            <p>Smooth transitions and effects</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Tutorial Demo */
.css-tutorial-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;
    text-align: center;
}

.intro-text {
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.9;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.feature-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
}

.feature-box:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS HOME",
    description: "Start your CSS journey here! CSS (Cascading Style Sheets) is the language used to style HTML documents. Learn the fundamentals of how CSS works, including selectors, properties, and values. This is your gateway to creating beautiful web designs.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-home",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-home"
    },
    topic: "CSS Introduction",
    demoHtml: `<div class="css-home">
    <header class="hero">
        <h1>CSS Home</h1>
        <p class="tagline">Cascading Style Sheets - Make the web beautiful</p>
    </header>
    <div class="content">
        <h2>What is CSS?</h2>
        <p>CSS controls the presentation, formatting, and layout of HTML elements.</p>
        <div class="highlight-box">
            <p>🎨 CSS makes your HTML look amazing!</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Home Demo */
.css-home {
    font-family: 'Arial', sans-serif;
    max-width: 500px;
    margin: 0 auto;
    background: #f8f9fa;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.hero {
    background: linear-gradient(45deg, #ff6b6b, #ff8e53);
    color: white;
    padding: 30px 20px;
    text-align: center;
}

.hero h1 {
    margin: 0 0 10px 0;
    font-size: 2.5em;
    font-weight: bold;
}

.tagline {
    margin: 0;
    opacity: 0.9;
    font-style: italic;
}

.content {
    padding: 20px;
}

.highlight-box {
    background: #e3f2fd;
    border: 2px solid #2196f3;
    border-radius: 8px;
    padding: 15px;
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    color: #1976d2;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Introduction",
    description: "CSS stands for Cascading Style Sheets and describes how HTML elements should be displayed. CSS saves a lot of work by controlling the layout of multiple web pages at once. Learn the basic syntax and how to apply styles to your HTML.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-introduction",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-introduction"
    },
    topic: "CSS Basics",
    demoHtml: `<div class="intro-demo">
    <h1 class="main-title">CSS Introduction</h1>
    <p class="description">CSS controls how HTML elements look and feel.</p>
    <div class="example-box">
        <h3>Without CSS</h3>
        <div class="no-css">Plain boring HTML</div>
        <h3>With CSS</h3>
        <div class="with-css">Beautiful styled HTML!</div>
    </div>
</div>`,
    demoCss: `/* CSS Introduction Demo */
.intro-demo {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.main-title {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 10px;
    font-size: 2em;
}

.description {
    text-align: center;
    color: #7f8c8d;
    margin-bottom: 20px;
}

.example-box {
    background: #ecf0f1;
    padding: 15px;
    border-radius: 8px;
}

.example-box h3 {
    margin: 10px 0 5px 0;
    color: #34495e;
}

.no-css {
    background: white;
    padding: 10px;
    border: 1px solid #bdc3c7;
    margin-bottom: 15px;
}

.with-css {
    background: linear-gradient(45deg, #3498db, #2980b9);
    color: white;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

.with-css:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0,0,0,0.3);
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Syntax",
    description: "Learn the basic syntax of CSS. CSS rules consist of selectors and declarations. Each declaration includes a property and value, separated by a colon and ended with a semicolon. Understanding CSS syntax is fundamental to writing effective stylesheets.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-syntax",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-syntax"
    },
    topic: "CSS Syntax",
    demoHtml: `<div class="syntax-demo">
    <h1 class="main-heading">CSS Syntax Demo</h1>
    <div class="syntax-example">
        <h3>CSS Rule Structure:</h3>
        <div class="code-explanation">
            <span class="selector">selector</span>
            <span class="brace"> {</span><br>
            &nbsp;&nbsp;<span class="property">property</span><span class="colon">:</span> <span class="value">value</span><span class="semicolon">;</span><br>
            &nbsp;&nbsp;<span class="property">property</span><span class="colon">:</span> <span class="value">value</span><span class="semicolon">;</span><br>
            <span class="brace">}</span>
        </div>
    </div>
    <div class="example-box">
        <p class="styled-text">This text is styled using CSS syntax!</p>
    </div>
</div>`,
    demoCss: `/* CSS Syntax Demo */
.syntax-demo {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.main-heading {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
}

.syntax-example {
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-family: 'Courier New', monospace;
}

.code-explanation {
    font-size: 16px;
    line-height: 1.6;
}

.selector { color: #f6ad55; }
.property { color: #68d391; }
.value { color: #63b3ed; }
.colon, .semicolon { color: #ffffff; }
.brace { color: #f687b3; }

.example-box {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border: 2px solid #e2e8f0;
}

.styled-text {
    color: #9f7aea;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 0;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Selectors",
    description: "CSS selectors are patterns used to select and style HTML elements. Learn about element selectors, class selectors, ID selectors, attribute selectors, and more. Mastering selectors is key to effective CSS styling.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-selectors",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-selectors"
    },
    topic: "CSS Selectors",
    demoHtml: `<div class="selectors-demo">
    <h1 id="main-title">CSS Selectors Demo</h1>
    
    <div class="selector-examples">
        <p class="example-text">This paragraph uses a class selector (.example-text)</p>
        <p id="unique-paragraph">This paragraph uses an ID selector (#unique-paragraph)</p>
        <span class="highlight">Highlighted span text</span>
        
        <div class="container">
            <h3>Universal Selector Example</h3>
            <p>All elements styled with * selector get basic styling</p>
        </div>
        
        <ul class="selector-list">
            <li>Element selector (li)</li>
            <li class="special">Class selector (.special)</li>
            <li>Another list item</li>
        </ul>
    </div>
</div>`,
    demoCss: `/* CSS Selectors Demo */
* {
    box-sizing: border-box;
}

.selectors-demo {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;
}

#main-title {
    text-align: center;
    color: #ffeb3b;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.example-text {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 5px;
    border-left: 4px solid #4caf50;
}

#unique-paragraph {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 5px;
    border-left: 4px solid #ff5722;
}

.highlight {
    background: #ffeb3b;
    color: #333;
    padding: 3px 6px;
    border-radius: 3px;
    font-weight: bold;
}

.container {
    background: rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
}

.selector-list li {
    padding: 5px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.selector-list .special {
    color: #ffeb3b;
    font-weight: bold;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS How To",
    description: "Learn how to add CSS to HTML in three different ways: inline styles, internal stylesheets, and external stylesheets. Each method has its use cases and benefits. Understanding when to use each approach is crucial for effective web development.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-how-to",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-how-to"
    },
    topic: "CSS Implementation",
    demoHtml: `<div class="how-to-demo">
    <h1>CSS How To - Three Methods</h1>
    
    <div class="method-section">
        <h3>1. Inline CSS</h3>
        <p style="color: red; font-weight: bold; background: #ffe6e6; padding: 10px;">
            This paragraph uses inline CSS with the style attribute.
        </p>
        <code>&lt;p style="color: red; font-weight: bold;"&gt;Text&lt;/p&gt;</code>
    </div>
    
    <div class="method-section">
        <h3>2. Internal CSS</h3>
        <p class="internal-example">This paragraph uses internal CSS defined in the &lt;style&gt; tag.</p>
        <code>&lt;style&gt; .internal-example { color: blue; } &lt;/style&gt;</code>
    </div>
    
    <div class="method-section">
        <h3>3. External CSS</h3>
        <p class="external-example">This paragraph would use external CSS from a separate file.</p>
        <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>
    </div>
</div>`,
    demoCss: `/* CSS How To Demo - Internal/External CSS Examples */
.how-to-demo {
    max-width: 700px;
    margin: 20px auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 12px;
    font-family: Arial, sans-serif;
}

.how-to-demo h1 {
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 3px solid #4CAF50;
    padding-bottom: 10px;
}

.method-section {
    background: white;
    margin: 20px 0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.method-section h3 {
    color: #2196F3;
    margin-top: 0;
    border-left: 4px solid #2196F3;
    padding-left: 10px;
}

.internal-example {
    color: blue;
    background: #e3f2fd;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
}

.external-example {
    color: green;
    background: #e8f5e8;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
}

code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 8px 12px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    display: block;
    margin-top: 10px;
    overflow-x: auto;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Comments",
    description: "CSS comments are used to explain your code and make it more readable. Comments are ignored by browsers but are invaluable for documentation. Learn how to write effective comments that help maintain your stylesheets.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-comments",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-comments"
    },
    topic: "CSS Comments",
    demoHtml: `<div class="comments-demo">
    <h1 class="main-title">CSS Comments Demo</h1>
    
    <div class="comment-examples">
        <div class="code-block">
            <h3>CSS with Comments</h3>
            <pre><code>/* This is a single line comment */
.example {
    color: blue;
    /* This property sets the text color */
    background: yellow;
}

/*
This is a multi-line comment
Used for longer explanations
and documentation
*/</code></pre>
        </div>
        
        <div class="visual-example">
            <h3>Visual Result</h3>
            <div class="commented-element">
                This element is styled with the CSS above!
            </div>
        </div>
        
        <div class="comment-tips">
            <h3>💡 Comment Best Practices</h3>
            <ul>
                <li>Explain complex selectors</li>
                <li>Document color schemes</li>
                <li>Note browser-specific fixes</li>
                <li>Organize sections of your CSS</li>
            </ul>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Comments Demo - Main Styles */
.comments-demo {
    max-width: 600px;
    margin: 20px auto;
    padding: 25px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    font-family: Arial, sans-serif;
}

/* Main heading styling */
.main-title {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 25px;
    font-size: 2.2em;
}

/* Code display section */
.code-block {
    background: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.code-block code {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4;
}

/* Visual example styling */
.commented-element {
    color: blue;
    background: yellow;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    margin: 10px 0;
}

/* Tips section */
.comment-tips {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #17a2b8;
}

.comment-tips ul {
    margin: 10px 0;
    padding-left: 20px;
}

.comment-tips li {
    margin-bottom: 8px;
    color: #495057;
}

/* 
Multi-line comment example:
This demonstrates how comments
can span multiple lines for
detailed explanations
*/`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Colors",
    description: "Learn about CSS color systems including named colors, hexadecimal values, RGB, RGBA, HSL, and HSLA. Understanding color theory and CSS color functions helps create beautiful and accessible color schemes for your websites.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-colors",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-colors"
    },
    topic: "CSS Colors",
    demoHtml: `<div class="colors-demo">
    <h1 class="rainbow-title">CSS Colors Showcase</h1>
    
    <div class="color-grid">
        <div class="color-section">
            <h3>Named Colors</h3>
            <div class="color-box red-named">red</div>
            <div class="color-box blue-named">blue</div>
            <div class="color-box green-named">green</div>
        </div>
        
        <div class="color-section">
            <h3>HEX Colors</h3>
            <div class="color-box hex-red">#FF0000</div>
            <div class="color-box hex-blue">#0066CC</div>
            <div class="color-box hex-green">#00AA00</div>
        </div>
        
        <div class="color-section">
            <h3>RGB Colors</h3>
            <div class="color-box rgb-purple">rgb(128, 0, 128)</div>
            <div class="color-box rgb-orange">rgb(255, 165, 0)</div>
            <div class="color-box rgb-cyan">rgb(0, 255, 255)</div>
        </div>
        
        <div class="color-section">
            <h3>RGBA (with transparency)</h3>
            <div class="transparency-demo">
                <div class="color-box rgba-red">rgba(255, 0, 0, 0.5)</div>
                <div class="color-box rgba-blue">rgba(0, 100, 255, 0.7)</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Colors Demo */
.colors-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 25px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
    font-family: Arial, sans-serif;
}

.rainbow-title {
    background: linear-gradient(45deg, 
        #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #f0932b, #eb4d4b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 30px;
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
}

.color-section h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 15px;
}

.color-box {
    padding: 15px;
    text-align: center;
    color: white;
    font-weight: bold;
    margin: 8px 0;
    border-radius: 8px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Named Colors */
.red-named { background-color: red; }
.blue-named { background-color: blue; }
.green-named { background-color: green; }

/* HEX Colors */
.hex-red { background-color: #FF0000; }
.hex-blue { background-color: #0066CC; }
.hex-green { background-color: #00AA00; }

/* RGB Colors */
.rgb-purple { background-color: rgb(128, 0, 128); }
.rgb-orange { background-color: rgb(255, 165, 0); }
.rgb-cyan { background-color: rgb(0, 255, 255); color: black; }

/* RGBA Colors */
.transparency-demo {
    background: url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="%23f0f0f0"/><rect x="10" y="10" width="10" height="10" fill="%23f0f0f0"/><rect x="10" width="10" height="10" fill="%23ccc"/><rect y="10" width="10" height="10" fill="%23ccc"/></svg>') repeat;
    border-radius: 8px;
    padding: 5px;
}

.rgba-red { background-color: rgba(255, 0, 0, 0.5); }
.rgba-blue { background-color: rgba(0, 100, 255, 0.7); }`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Backgrounds",
    description: "Learn how to style element backgrounds with CSS. Control background colors, images, repeat patterns, positioning, and size. Master modern techniques like multiple backgrounds and CSS gradients to create stunning visual effects.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-backgrounds",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-backgrounds"
    },
    topic: "CSS Backgrounds",
    demoHtml: `<div class="backgrounds-demo">
    <h1>CSS Backgrounds Showcase</h1>
    
    <div class="bg-examples">
        <div class="bg-color">
            <h3>Background Color</h3>
            <p>Simple solid background</p>
        </div>
        
        <div class="bg-gradient">
            <h3>Linear Gradient</h3>
            <p>Beautiful gradient background</p>
        </div>
        
        <div class="bg-pattern">
            <h3>Background Pattern</h3>
            <p>Repeating pattern background</p>
        </div>
        
        <div class="bg-image">
            <h3>Background Image</h3>
            <p>Image with custom positioning</p>
        </div>
        
        <div class="bg-multiple">
            <h3>Multiple Backgrounds</h3>
            <p>Multiple layers combined</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Backgrounds Demo */
.backgrounds-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.backgrounds-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
}

.bg-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.bg-examples > div {
    padding: 30px 20px;
    border-radius: 12px;
    color: white;
    text-align: center;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.bg-examples h3 {
    margin: 0 0 10px 0;
    font-size: 1.3em;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.bg-color {
    background-color: #3498db;
}

.bg-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-pattern {
    background: repeating-linear-gradient(
        45deg,
        #ff6b6b,
        #ff6b6b 10px,
        #4ecdc4 10px,
        #4ecdc4 20px
    );
}

.bg-image {
    background: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ff6b6b"/></svg>') center/cover;
}

.bg-multiple {
    background: 
        radial-gradient(circle at 20% 80%, rgba(255,107,107,0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(78,205,196,0.3) 0%, transparent 50%),
        linear-gradient(45deg, #667eea, #764ba2);
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Borders",
    description: "Master CSS borders with different styles, widths, colors, and radius values. Learn how to create rounded corners, decorative borders, and modern design elements using border properties and border-radius.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-borders",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-borders"
    },
    topic: "CSS Borders",
    demoHtml: `<div class="borders-demo">
    <h1>CSS Borders Gallery</h1>
    
    <div class="border-grid">
        <div class="border-solid">
            <h3>Solid Border</h3>
            <p>border: 3px solid #3498db</p>
        </div>
        
        <div class="border-dashed">
            <h3>Dashed Border</h3>
            <p>border: 3px dashed #e74c3c</p>
        </div>
        
        <div class="border-dotted">
            <h3>Dotted Border</h3>
            <p>border: 3px dotted #9b59b6</p>
        </div>
        
        <div class="border-rounded">
            <h3>Rounded Corners</h3>
            <p>border-radius: 15px</p>
        </div>
        
        <div class="border-circular">
            <h3>Circular</h3>
            <p>border-radius: 50%</p>
        </div>
        
        <div class="border-mixed">
            <h3>Mixed Styles</h3>
            <p>Different sides, different styles</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Borders Demo */
.borders-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.borders-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.border-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.border-grid > div {
    background: white;
    padding: 20px;
    text-align: center;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.border-grid h3 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.border-grid p {
    margin: 0;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #7f8c8d;
}

.border-solid {
    border: 3px solid #3498db;
}

.border-dashed {
    border: 3px dashed #e74c3c;
}

.border-dotted {
    border: 3px dotted #9b59b6;
}

.border-rounded {
    border: 3px solid #f39c12;
    border-radius: 15px;
}

.border-circular {
    border: 3px solid #1abc9c;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.border-mixed {
    border-top: 5px solid #e74c3c;
    border-right: 3px dashed #3498db;
    border-bottom: 4px dotted #9b59b6;
    border-left: 6px double #f39c12;
    border-radius: 10px 0 10px 0;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Margins",
    description: "Understanding CSS margins is crucial for layout control. Learn how margins create space around elements, handle margin collapse, and use auto margins for centering. Master the margin shorthand property and negative margins for advanced layouts.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-margins",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-margins"
    },
    topic: "CSS Margins",
    demoHtml: `<div class="margins-demo">
    <h1>CSS Margins Visualization</h1>
    
    <div class="margin-examples">
        <div class="example-section">
            <h3>Margin Around Elements</h3>
            <div class="container">
                <div class="box no-margin">No Margin</div>
                <div class="box with-margin">20px Margin</div>
                <div class="box large-margin">40px Margin</div>
            </div>
        </div>
        
        <div class="example-section">
            <h3>Different Margin Sides</h3>
            <div class="container">
                <div class="box margin-top">Top: 30px</div>
                <div class="box margin-horizontal">Left/Right: 50px</div>
                <div class="box margin-all-different">All Different</div>
            </div>
        </div>
        
        <div class="example-section">
            <h3>Auto Margins (Centering)</h3>
            <div class="container-wide">
                <div class="box centered-box">margin: 0 auto</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Margins Demo */
.margins-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.margins-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.example-section {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.example-section h3 {
    color: #34495e;
    margin-top: 0;
    text-align: center;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.container {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 5px;
    border: 2px dashed #bdc3c7;
}

.container-wide {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 5px;
    border: 2px dashed #bdc3c7;
}

.box {
    background: #3498db;
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    display: inline-block;
    border: 2px solid #2980b9;
}

.no-margin {
    margin: 0;
}

.with-margin {
    margin: 20px;
    background: #e74c3c;
    border-color: #c0392b;
}

.large-margin {
    margin: 40px;
    background: #9b59b6;
    border-color: #8e44ad;
}

.margin-top {
    margin-top: 30px;
    background: #f39c12;
    border-color: #e67e22;
}

.margin-horizontal {
    margin: 10px 50px;
    background: #1abc9c;
    border-color: #16a085;
}

.margin-all-different {
    margin: 10px 20px 30px 40px;
    background: #e67e22;
    border-color: #d35400;
}

.centered-box {
    margin: 20px auto;
    display: block;
    width: 200px;
    background: #2ecc71;
    border-color: #27ae60;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Padding",
    description: "CSS padding creates space inside elements between the content and the border. Learn how padding differs from margin, use the padding shorthand property, and control inner spacing for better design and readability.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-padding",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-padding"
    },
    topic: "CSS Padding",
    demoHtml: `<div class="padding-demo">
    <h1>CSS Padding Examples</h1>
    
    <div class="padding-comparison">
        <h3>Padding vs No Padding</h3>
        <div class="comparison-row">
            <div class="demo-box no-padding">
                <span>No Padding</span>
            </div>
            <div class="demo-box with-padding">
                <span>With Padding</span>
            </div>
        </div>
    </div>
    
    <div class="padding-variations">
        <h3>Different Padding Values</h3>
        <div class="variations-grid">
            <div class="demo-box small-padding">
                <span>Small (10px)</span>
            </div>
            <div class="demo-box medium-padding">
                <span>Medium (20px)</span>
            </div>
            <div class="demo-box large-padding">
                <span>Large (40px)</span>
            </div>
            <div class="demo-box asymmetric-padding">
                <span>Asymmetric<br>Top: 30px<br>Right: 10px<br>Bottom: 20px<br>Left: 50px</span>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Padding Demo */
.padding-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.padding-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.padding-comparison,
.padding-variations {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.padding-comparison h3,
.padding-variations h3 {
    color: #34495e;
    margin-top: 0;
    text-align: center;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.comparison-row {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.variations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
}

.demo-box {
    background: #3498db;
    border: 3px solid #2980b9;
    color: white;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.no-padding {
    padding: 0;
    background: #e74c3c;
    border-color: #c0392b;
}

.with-padding {
    padding: 20px;
    background: #27ae60;
    border-color: #2ecc71;
}

.small-padding {
    padding: 10px;
    background: #f39c12;
    border-color: #e67e22;
}

.medium-padding {
    padding: 20px;
    background: #9b59b6;
    border-color: #8e44ad;
}

.large-padding {
    padding: 40px;
    background: #1abc9c;
    border-color: #16a085;
}

.asymmetric-padding {
    padding: 30px 10px 20px 50px;
    background: #e67e22;
    border-color: #d35400;
    font-size: 14px;
    line-height: 1.2;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Box Model",
    description: "The CSS box model is fundamental to understanding layout. Every element is a rectangular box with content, padding, border, and margin. Learn how these areas interact and how box-sizing affects calculations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-box-model",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-box-model"
    },
    topic: "CSS Box Model",
    demoHtml: `<div class="box-model-demo">
    <h1>CSS Box Model Visualization</h1>
    
    <div class="model-explanation">
        <h3>Box Model Components</h3>
        <div class="box-model-visual">
            <div class="margin-area">
                <div class="margin-label">Margin</div>
                <div class="border-area">
                    <div class="border-label">Border</div>
                    <div class="padding-area">
                        <div class="padding-label">Padding</div>
                        <div class="content-area">
                            <div class="content-label">Content</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="box-sizing-demo">
        <h3>Box-sizing Comparison</h3>
        <div class="sizing-comparison">
            <div class="box content-box">
                <h4>content-box (default)</h4>
                <p>Width = content only<br>Total: width + padding + border</p>
            </div>
            <div class="box border-box">
                <h4>border-box</h4>
                <p>Width = content + padding + border<br>Total: width specified</p>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Box Model Demo */
.box-model-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.box-model-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.model-explanation {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.model-explanation h3 {
    text-align: center;
    color: #34495e;
    margin-bottom: 20px;
}

.box-model-visual {
    max-width: 400px;
    margin: 0 auto;
}

.margin-area {
    background: #3498db;
    padding: 30px;
    border-radius: 8px;
    position: relative;
}

.border-area {
    background: #e74c3c;
    padding: 20px;
    border-radius: 6px;
    position: relative;
}

.padding-area {
    background: #f39c12;
    padding: 20px;
    border-radius: 4px;
    position: relative;
}

.content-area {
    background: #2ecc71;
    padding: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
    border-radius: 2px;
}

.margin-label,
.border-label,
.padding-label {
    position: absolute;
    top: 5px;
    left: 5px;
    color: white;
    font-weight: bold;
    font-size: 12px;
}

.content-label {
    color: white;
    font-weight: bold;
    margin: 0;
}

.box-sizing-demo {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.box-sizing-demo h3 {
    text-align: center;
    color: #34495e;
    margin-bottom: 20px;
}

.sizing-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.box {
    width: 200px;
    padding: 20px;
    border: 10px solid #3498db;
    background: #ecf0f1;
    text-align: center;
    margin: 0 auto;
}

.content-box {
    box-sizing: content-box;
    border-color: #e74c3c;
}

.border-box {
    box-sizing: border-box;
    border-color: #2ecc71;
}

.box h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.box p {
    margin: 0;
    font-size: 14px;
    color: #7f8c8d;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Text",
    description: "Master CSS text styling properties including color, alignment, decoration, transformation, spacing, and shadows. Learn how to create beautiful typography and improve text readability with advanced text properties.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-text",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-text"
    },
    topic: "CSS Text",
    demoHtml: `<div class="text-demo">
    <h1>CSS Text Styling Showcase</h1>
    
    <div class="text-examples">
        <div class="text-section">
            <h3>Text Alignment</h3>
            <p class="text-left">Left aligned text (default)</p>
            <p class="text-center">Center aligned text</p>
            <p class="text-right">Right aligned text</p>
            <p class="text-justify">Justified text spreads content evenly across the line width, creating clean edges on both sides of the paragraph.</p>
        </div>
        
        <div class="text-section">
            <h3>Text Decoration</h3>
            <p class="text-underline">Underlined text</p>
            <p class="text-overline">Overlined text</p>
            <p class="text-line-through">Line-through text</p>
            <p class="text-none">No decoration</p>
        </div>
        
        <div class="text-section">
            <h3>Text Transform</h3>
            <p class="text-uppercase">uppercase text</p>
            <p class="text-lowercase">LOWERCASE TEXT</p>
            <p class="text-capitalize">capitalize each word</p>
        </div>
        
        <div class="text-section">
            <h3>Text Effects</h3>
            <p class="text-shadow">Text with shadow</p>
            <p class="text-glow">Glowing text effect</p>
            <p class="text-gradient">Gradient text effect</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Text Demo */
.text-demo {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.text-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.text-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.text-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.text-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.text-section p {
    margin: 15px 0;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
}

/* Text Alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Text Decoration */
.text-underline { text-decoration: underline; }
.text-overline { text-decoration: overline; }
.text-line-through { text-decoration: line-through; }
.text-none { text-decoration: none; }

/* Text Transform */
.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }

/* Text Effects */
.text-shadow {
    text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    color: #2c3e50;
    font-weight: bold;
    font-size: 18px;
}

.text-glow {
    color: #fff;
    background: #333;
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    font-weight: bold;
    text-align: center;
}

.text-gradient {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Fonts",
    description: "Learn CSS font properties to control typography. Understand font families, sizes, weights, styles, and how to load web fonts. Master font stacks and create beautiful, readable text designs.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-fonts",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-fonts"
    },
    topic: "CSS Fonts",
    demoHtml: `<div class="fonts-demo">
    <h1>CSS Fonts Showcase</h1>
    
    <div class="font-examples">
        <div class="font-families">
            <h3>Font Families</h3>
            <p class="font-serif">Serif font - Times, Georgia</p>
            <p class="font-sans-serif">Sans-serif font - Arial, Helvetica</p>
            <p class="font-monospace">Monospace font - Courier New</p>
            <p class="font-cursive">Cursive font - Script style</p>
            <p class="font-fantasy">Fantasy font - Decorative style</p>
        </div>
        
        <div class="font-sizes">
            <h3>Font Sizes</h3>
            <p class="size-small">Small text (14px)</p>
            <p class="size-medium">Medium text (18px)</p>
            <p class="size-large">Large text (24px)</p>
            <p class="size-xlarge">Extra large text (32px)</p>
        </div>
        
        <div class="font-weights">
            <h3>Font Weights</h3>
            <p class="weight-light">Light weight (300)</p>
            <p class="weight-normal">Normal weight (400)</p>
            <p class="weight-bold">Bold weight (700)</p>
            <p class="weight-bolder">Bolder weight (900)</p>
        </div>
        
        <div class="font-styles">
            <h3>Font Styles & Variants</h3>
            <p class="style-normal">Normal style</p>
            <p class="style-italic">Italic style</p>
            <p class="style-oblique">Oblique style</p>
            <p class="variant-small-caps">Small caps variant</p>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Fonts Demo */
.fonts-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.fonts-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-family: Georgia, serif;
}

.font-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.font-families,
.font-sizes,
.font-weights,
.font-styles {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.font-examples h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.font-examples p {
    margin: 15px 0;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 4px;
    border-left: 4px solid #3498db;
}

/* Font Families */
.font-serif { 
    font-family: "Times New Roman", Times, serif; 
}

.font-sans-serif { 
    font-family: Arial, Helvetica, sans-serif; 
}

.font-monospace { 
    font-family: "Courier New", Courier, monospace; 
}

.font-cursive { 
    font-family: cursive; 
}

.font-fantasy { 
    font-family: fantasy; 
}

/* Font Sizes */
.size-small { font-size: 14px; }
.size-medium { font-size: 18px; }
.size-large { font-size: 24px; }
.size-xlarge { font-size: 32px; }

/* Font Weights */
.weight-light { font-weight: 300; }
.weight-normal { font-weight: 400; }
.weight-bold { font-weight: 700; }
.weight-bolder { font-weight: 900; }

/* Font Styles */
.style-normal { font-style: normal; }
.style-italic { font-style: italic; }
.style-oblique { font-style: oblique; }
.variant-small-caps { 
    font-variant: small-caps; 
    font-weight: bold;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Display",
    description: "The CSS display property is fundamental to layout control. Learn about block, inline, inline-block, flex, grid, and none values. Master how display affects element behavior and layout flow.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-display",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-display"
    },
    topic: "CSS Display",
    demoHtml: `<div class="display-demo">
    <h1>CSS Display Property Examples</h1>
    
    <div class="display-sections">
        <div class="display-section">
            <h3>Block Display</h3>
            <div class="demo-container">
                <div class="display-block">Block Element 1</div>
                <div class="display-block">Block Element 2</div>
                <p>Block elements take full width and stack vertically.</p>
            </div>
        </div>
        
        <div class="display-section">
            <h3>Inline Display</h3>
            <div class="demo-container">
                <span class="display-inline">Inline 1</span>
                <span class="display-inline">Inline 2</span>
                <span class="display-inline">Inline 3</span>
                <p>Inline elements flow horizontally and only take needed width.</p>
            </div>
        </div>
        
        <div class="display-section">
            <h3>Inline-Block Display</h3>
            <div class="demo-container">
                <div class="display-inline-block">Box 1</div>
                <div class="display-inline-block">Box 2</div>
                <div class="display-inline-block">Box 3</div>
                <p>Inline-block combines inline flow with block-level sizing.</p>
            </div>
        </div>
        
        <div class="display-section">
            <h3>Flex Display</h3>
            <div class="demo-container">
                <div class="display-flex">
                    <div class="flex-item">Flex 1</div>
                    <div class="flex-item">Flex 2</div>
                    <div class="flex-item">Flex 3</div>
                </div>
                <p>Flex creates flexible layouts with powerful alignment options.</p>
            </div>
        </div>
        
        <div class="display-section">
            <h3>Grid Display</h3>
            <div class="demo-container">
                <div class="display-grid">
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                </div>
                <p>Grid provides two-dimensional layout control.</p>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Display Demo */
.display-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.display-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.display-sections {
    display: grid;
    gap: 20px;
}

.display-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.display-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.demo-container {
    margin: 15px 0;
}

.demo-container p {
    margin-top: 15px;
    color: #7f8c8d;
    font-style: italic;
}

/* Block Display */
.display-block {
    display: block;
    background: #3498db;
    color: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 4px;
    text-align: center;
}

/* Inline Display */
.display-inline {
    display: inline;
    background: #e74c3c;
    color: white;
    padding: 8px 12px;
    margin: 0 5px;
    border-radius: 4px;
}

/* Inline-Block Display */
.display-inline-block {
    display: inline-block;
    background: #9b59b6;
    color: white;
    padding: 15px;
    margin: 5px;
    border-radius: 4px;
    width: 80px;
    text-align: center;
}

/* Flex Display */
.display-flex {
    display: flex;
    gap: 10px;
    padding: 10px;
    background: #ecf0f1;
    border-radius: 4px;
}

.flex-item {
    flex: 1;
    background: #f39c12;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 4px;
}

/* Grid Display */
.display-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    background: #ecf0f1;
    border-radius: 4px;
}

.grid-item {
    background: #1abc9c;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Position",
    description: "Master CSS positioning with static, relative, absolute, fixed, and sticky values. Learn how positioned elements interact with the document flow and create complex layouts with z-index control.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-position",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-position"
    },
    topic: "CSS Position",
    demoHtml: `<div class="position-demo">
    <h1>CSS Position Property Examples</h1>
    
    <div class="position-examples">
        <div class="position-section">
            <h3>Static Position (Default)</h3>
            <div class="demo-box">
                <div class="pos-static">Static element (normal flow)</div>
                <p>Static is the default position. Elements appear in normal document flow.</p>
            </div>
        </div>
        
        <div class="position-section">
            <h3>Relative Position</h3>
            <div class="demo-box">
                <div class="pos-relative">Relative element (moved from original position)</div>
                <p>Relative positioning moves element relative to its normal position.</p>
            </div>
        </div>
        
        <div class="position-section">
            <h3>Absolute Position</h3>
            <div class="demo-box relative-container">
                <div class="pos-absolute">Absolute positioned</div>
                <p>Absolute positioning places element relative to positioned ancestor.</p>
            </div>
        </div>
        
        <div class="position-section">
            <h3>Fixed Position</h3>
            <div class="demo-box">
                <div class="pos-fixed-demo">Fixed to viewport</div>
                <p>Fixed elements stay in the same position even when scrolling.</p>
            </div>
        </div>
        
        <div class="position-section">
            <h3>Sticky Position</h3>
            <div class="demo-box sticky-container">
                <div class="pos-sticky">Sticky element</div>
                <div class="scroll-content">
                    <p>Scroll content...</p>
                    <p>More content...</p>
                    <p>Even more content...</p>
                </div>
                <p>Sticky elements stick to a position during scrolling.</p>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Position Demo */
.position-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.position-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.position-examples {
    display: grid;
    gap: 20px;
}

.position-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.position-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.demo-box {
    background: #ecf0f1;
    padding: 20px;
    margin: 15px 0;
    border-radius: 4px;
    border: 2px dashed #bdc3c7;
    position: relative;
    min-height: 80px;
}

.demo-box p {
    margin-top: 15px;
    color: #7f8c8d;
    font-style: italic;
}

/* Position Examples */
.pos-static {
    position: static;
    background: #3498db;
    color: white;
    padding: 10px;
    border-radius: 4px;
    display: inline-block;
}

.pos-relative {
    position: relative;
    top: 20px;
    left: 30px;
    background: #e74c3c;
    color: white;
    padding: 10px;
    border-radius: 4px;
    display: inline-block;
}

.relative-container {
    position: relative;
    height: 120px;
}

.pos-absolute {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #9b59b6;
    color: white;
    padding: 10px;
    border-radius: 4px;
}

.pos-fixed-demo {
    background: #f39c12;
    color: white;
    padding: 10px;
    border-radius: 4px;
    display: inline-block;
    position: relative; /* Demo purposes - would be fixed in real use */
}

.sticky-container {
    height: 150px;
    overflow-y: auto;
}

.pos-sticky {
    position: sticky;
    top: 0;
    background: #1abc9c;
    color: white;
    padding: 10px;
    border-radius: 4px;
    z-index: 1;
}

.scroll-content {
    height: 200px;
}

.scroll-content p {
    margin: 10px 0;
    padding: 10px;
    background: #ffffff;
    border-radius: 4px;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Flexbox",
    description: "Master CSS Flexbox for flexible and responsive layouts. Learn flex containers, flex items, alignment properties, and how to create modern web layouts with ease. Essential for responsive design.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-flexbox",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-flexbox"
    },
    topic: "CSS Flexbox",
    demoHtml: `<div class="flexbox-demo">
    <h1>CSS Flexbox Layout Examples</h1>
    
    <div class="flex-examples">
        <div class="flex-section">
            <h3>Basic Flex Container</h3>
            <div class="flex-container basic-flex">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
        </div>
        
        <div class="flex-section">
            <h3>Justify Content</h3>
            <div class="flex-container justify-center">
                <div class="flex-item">Center</div>
                <div class="flex-item">Items</div>
            </div>
            <div class="flex-container justify-between">
                <div class="flex-item">Space</div>
                <div class="flex-item">Between</div>
            </div>
        </div>
        
        <div class="flex-section">
            <h3>Align Items</h3>
            <div class="flex-container align-center">
                <div class="flex-item tall">Tall Item</div>
                <div class="flex-item">Normal</div>
                <div class="flex-item">Center Aligned</div>
            </div>
        </div>
        
        <div class="flex-section">
            <h3>Flex Direction</h3>
            <div class="flex-container flex-column">
                <div class="flex-item">Column 1</div>
                <div class="flex-item">Column 2</div>
                <div class="flex-item">Column 3</div>
            </div>
        </div>
        
        <div class="flex-section">
            <h3>Flex Grow & Shrink</h3>
            <div class="flex-container">
                <div class="flex-item flex-grow-1">Grow 1</div>
                <div class="flex-item flex-grow-2">Grow 2</div>
                <div class="flex-item">Normal</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Flexbox Demo */
.flexbox-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.flexbox-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.flex-examples {
    display: grid;
    gap: 20px;
}

.flex-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.flex-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.flex-container {
    display: flex;
    background: #ecf0f1;
    padding: 15px;
    margin: 15px 0;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
    min-height: 60px;
}

.flex-item {
    background: #3498db;
    color: white;
    padding: 15px;
    margin: 5px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    min-width: 60px;
}

/* Flex Variations */
.basic-flex {
    /* Default flex behavior */
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.align-center {
    align-items: center;
    height: 120px;
}

.flex-column {
    flex-direction: column;
    height: 200px;
}

.tall {
    height: 80px;
    display: flex;
    align-items: center;
    background: #e74c3c;
}

.flex-grow-1 {
    flex-grow: 1;
    background: #9b59b6;
}

.flex-grow-2 {
    flex-grow: 2;
    background: #f39c12;
}

/* Responsive Flexbox */
@media (max-width: 600px) {
    .flex-container {
        flex-wrap: wrap;
    }
    
    .flex-item {
        flex: 1 1 100px;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Grid",
    description: "Master CSS Grid for powerful two-dimensional layouts. Learn grid containers, grid items, grid lines, areas, and responsive grid patterns. Essential for modern web layout design.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-grid",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-grid"
    },
    topic: "CSS Grid",
    demoHtml: `<div class="grid-demo">
    <h1>CSS Grid Layout Examples</h1>
    
    <div class="grid-examples">
        <div class="grid-section">
            <h3>Basic Grid</h3>
            <div class="grid-container basic-grid">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
            </div>
        </div>
        
        <div class="grid-section">
            <h3>Grid Areas</h3>
            <div class="grid-container grid-areas">
                <div class="grid-item header">Header</div>
                <div class="grid-item sidebar">Sidebar</div>
                <div class="grid-item main">Main Content</div>
                <div class="grid-item footer">Footer</div>
            </div>
        </div>
        
        <div class="grid-section">
            <h3>Grid Gap</h3>
            <div class="grid-container grid-gap">
                <div class="grid-item">Item 1</div>
                <div class="grid-item">Item 2</div>
                <div class="grid-item">Item 3</div>
                <div class="grid-item">Item 4</div>
            </div>
        </div>
        
        <div class="grid-section">
            <h3>Auto-fit Grid</h3>
            <div class="grid-container auto-fit-grid">
                <div class="grid-item">Auto</div>
                <div class="grid-item">Fit</div>
                <div class="grid-item">Responsive</div>
                <div class="grid-item">Grid</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Grid Demo */
.grid-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.grid-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.grid-examples {
    display: grid;
    gap: 30px;
}

.grid-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.grid-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.grid-container {
    display: grid;
    background: #ecf0f1;
    padding: 15px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.grid-item {
    background: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
}

/* Basic Grid */
.basic-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

/* Grid Areas */
.grid-areas {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    height: 300px;
}

.header {
    grid-area: header;
    background: #e74c3c;
}

.sidebar {
    grid-area: sidebar;
    background: #f39c12;
}

.main {
    grid-area: main;
    background: #2ecc71;
}

.footer {
    grid-area: footer;
    background: #9b59b6;
}

/* Grid Gap */
.grid-gap {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* Auto-fit Grid */
.auto-fit-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
}

/* Responsive Grid */
@media (max-width: 600px) {
    .basic-grid {
        grid-template-columns: 1fr 1fr;
    }
    
    .grid-areas {
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
        height: auto;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Animations",
    description: "Create dynamic web experiences with CSS animations. Learn keyframes, animation properties, timing functions, and how to bring your web pages to life with smooth, performant animations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-animations",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-animations"
    },
    topic: "CSS Animations",
    demoHtml: `<div class="animations-demo">
    <h1>CSS Animations Showcase</h1>
    
    <div class="animation-examples">
        <div class="animation-section">
            <h3>Bounce Animation</h3>
            <div class="animation-container">
                <div class="animated-box bounce">Bounce</div>
            </div>
        </div>
        
        <div class="animation-section">
            <h3>Rotation Animation</h3>
            <div class="animation-container">
                <div class="animated-box rotate">Rotate</div>
            </div>
        </div>
        
        <div class="animation-section">
            <h3>Pulse Animation</h3>
            <div class="animation-container">
                <div class="animated-box pulse">Pulse</div>
            </div>
        </div>
        
        <div class="animation-section">
            <h3>Slide Animation</h3>
            <div class="animation-container">
                <div class="animated-box slide">Slide</div>
            </div>
        </div>
        
        <div class="animation-section">
            <h3>Color Change Animation</h3>
            <div class="animation-container">
                <div class="animated-box color-change">Colors</div>
            </div>
        </div>
        
        <div class="animation-section">
            <h3>Complex Animation</h3>
            <div class="animation-container">
                <div class="animated-box complex">Complex</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Animations Demo */
.animations-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.animations-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
    from {
        text-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
    }
    to {
        text-shadow: 0 0 20px rgba(52, 152, 219, 0.8);
    }
}

.animation-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.animation-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.animation-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    text-align: center;
}

.animation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    background: #ecf0f1;
    border-radius: 8px;
    overflow: hidden;
}

.animated-box {
    background: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
}

/* Bounce Animation */
.bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
}

/* Rotation Animation */
.rotate {
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Pulse Animation */
.pulse {
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

/* Slide Animation */
.slide {
    animation: slide 4s ease-in-out infinite;
}

@keyframes slide {
    0%, 100% { transform: translateX(-20px); }
    50% { transform: translateX(20px); }
}

/* Color Change Animation */
.color-change {
    animation: colorChange 3s ease-in-out infinite;
}

@keyframes colorChange {
    0% { background: #3498db; }
    25% { background: #e74c3c; }
    50% { background: #f39c12; }
    75% { background: #2ecc71; }
    100% { background: #3498db; }
}

/* Complex Animation */
.complex {
    animation: complex 4s ease-in-out infinite;
}

@keyframes complex {
    0% { 
        transform: translateX(-20px) rotate(0deg) scale(1);
        background: #3498db;
    }
    25% { 
        transform: translateX(20px) rotate(90deg) scale(1.1);
        background: #e74c3c;
    }
    50% { 
        transform: translateX(20px) rotate(180deg) scale(0.9);
        background: #f39c12;
    }
    75% { 
        transform: translateX(-20px) rotate(270deg) scale(1.1);
        background: #2ecc71;
    }
    100% { 
        transform: translateX(-20px) rotate(360deg) scale(1);
        background: #3498db;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Transitions",
    description: "Smooth interactions with CSS transitions. Learn how to create smooth animations between states, control timing, and enhance user experience with subtle motion effects.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-transitions",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-transitions"
    },
    topic: "CSS Transitions",
    demoHtml: `<div class="transitions-demo">
    <h1>CSS Transitions Interactive Demo</h1>
    
    <div class="transition-examples">
        <div class="transition-section">
            <h3>Hover to see transitions</h3>
            <p>Move your mouse over the boxes below:</p>
            
            <div class="transition-grid">
                <div class="transition-box basic-transition">
                    <h4>Basic Transition</h4>
                    <p>Hover me</p>
                </div>
                
                <div class="transition-box color-transition">
                    <h4>Color Transition</h4>
                    <p>Color change</p>
                </div>
                
                <div class="transition-box size-transition">
                    <h4>Size Transition</h4>
                    <p>Scale up</p>
                </div>
                
                <div class="transition-box rotate-transition">
                    <h4>Rotate Transition</h4>
                    <p>Spin me</p>
                </div>
                
                <div class="transition-box border-transition">
                    <h4>Border Transition</h4>
                    <p>Border radius</p>
                </div>
                
                <div class="transition-box shadow-transition">
                    <h4>Shadow Transition</h4>
                    <p>Drop shadow</p>
                </div>
            </div>
        </div>
        
        <div class="transition-timing">
            <h3>Different Timing Functions</h3>
            <div class="timing-examples">
                <div class="timing-box ease">ease</div>
                <div class="timing-box ease-in">ease-in</div>
                <div class="timing-box ease-out">ease-out</div>
                <div class="timing-box ease-in-out">ease-in-out</div>
                <div class="timing-box linear">linear</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Transitions Demo */
.transitions-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.transitions-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.transition-examples {
    display: grid;
    gap: 30px;
}

.transition-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.transition-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.transition-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.transition-box {
    background: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.transition-box h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
}

.transition-box p {
    margin: 0;
    font-size: 14px;
}

/* Transition Effects */
.basic-transition:hover {
    background: #e74c3c;
    transform: translateY(-5px);
}

.color-transition {
    transition: background-color 0.5s ease;
}

.color-transition:hover {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.size-transition {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.size-transition:hover {
    transform: scale(1.2);
}

.rotate-transition {
    transition: transform 0.4s ease;
}

.rotate-transition:hover {
    transform: rotate(15deg) scale(1.1);
}

.border-transition {
    transition: border-radius 0.3s ease, background 0.3s ease;
}

.border-transition:hover {
    border-radius: 50%;
    background: #9b59b6;
}

.shadow-transition {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.shadow-transition:hover {
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    transform: translateY(-3px);
}

/* Timing Functions */
.transition-timing {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.transition-timing h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.timing-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
}

.timing-box {
    background: #2ecc71;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.timing-box.ease {
    transition: transform 0.5s ease;
}

.timing-box.ease-in {
    transition: transform 0.5s ease-in;
}

.timing-box.ease-out {
    transition: transform 0.5s ease-out;
}

.timing-box.ease-in-out {
    transition: transform 0.5s ease-in-out;
}

.timing-box.linear {
    transition: transform 0.5s linear;
}

.timing-box:hover {
    transform: translateX(20px);
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Height/Width",
    description: "Control element dimensions with CSS height and width properties. Learn about different units (px, %, em, rem, vw, vh), min/max constraints, and how dimensions affect layout and responsiveness.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-height-width",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-height-width"
    },
    topic: "CSS Dimensions",
    demoHtml: `<div class="dimensions-demo">
    <h1>CSS Height & Width Examples</h1>
    
    <div class="dimensions-examples">
        <div class="dimension-section">
            <h3>Fixed Dimensions</h3>
            <div class="demo-container">
                <div class="box fixed-width">200px wide</div>
                <div class="box fixed-height">150px tall</div>
                <div class="box fixed-both">200x150px</div>
            </div>
        </div>
        
        <div class="dimension-section">
            <h3>Percentage Dimensions</h3>
            <div class="demo-container">
                <div class="box percent-width">50% wide</div>
                <div class="box percent-height">75% of container height</div>
            </div>
        </div>
        
        <div class="dimension-section">
            <h3>Viewport Dimensions</h3>
            <div class="demo-container">
                <div class="box viewport-width">30vw (30% of viewport width)</div>
                <div class="box viewport-height">20vh (20% of viewport height)</div>
            </div>
        </div>
        
        <div class="dimension-section">
            <h3>Min/Max Constraints</h3>
            <div class="demo-container">
                <div class="box min-width">min-width: 200px</div>
                <div class="box max-width">max-width: 150px (with long text that will wrap)</div>
                <div class="box min-max-height">min-height: 100px, max-height: 120px</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Height/Width Demo */
.dimensions-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.dimensions-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.dimensions-examples {
    display: grid;
    gap: 20px;
}

.dimension-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dimension-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.demo-container {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: flex-start;
    min-height: 200px;
}

.box {
    background: #3498db;
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Fixed Dimensions */
.fixed-width {
    width: 200px;
    background: #e74c3c;
}

.fixed-height {
    height: 150px;
    background: #f39c12;
}

.fixed-both {
    width: 200px;
    height: 150px;
    background: #9b59b6;
}

/* Percentage Dimensions */
.percent-width {
    width: 50%;
    background: #1abc9c;
}

.percent-height {
    height: 75%;
    width: 150px;
    background: #2ecc71;
}

/* Viewport Dimensions */
.viewport-width {
    width: 30vw;
    background: #e67e22;
}

.viewport-height {
    height: 20vh;
    width: 200px;
    background: #8e44ad;
}

/* Min/Max Constraints */
.min-width {
    min-width: 200px;
    width: 100px; /* Will be overridden by min-width */
    background: #16a085;
}

.max-width {
    max-width: 150px;
    width: 300px; /* Will be constrained by max-width */
    background: #c0392b;
    word-wrap: break-word;
}

.min-max-height {
    min-height: 100px;
    max-height: 120px;
    width: 200px;
    background: #d35400;
    overflow: auto;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Outline",
    description: "CSS outline creates a line around elements outside the border. Unlike borders, outlines don't affect layout and are perfect for focus indicators and debugging. Learn outline styles, widths, and colors.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-outline",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-outline"
    },
    topic: "CSS Outline",
    demoHtml: `<div class="outline-demo">
    <h1>CSS Outline Examples</h1>
    
    <div class="outline-examples">
        <div class="outline-section">
            <h3>Outline Styles</h3>
            <div class="outline-grid">
                <div class="outline-box solid-outline">Solid Outline</div>
                <div class="outline-box dashed-outline">Dashed Outline</div>
                <div class="outline-box dotted-outline">Dotted Outline</div>
                <div class="outline-box double-outline">Double Outline</div>
                <div class="outline-box groove-outline">Groove Outline</div>
                <div class="outline-box ridge-outline">Ridge Outline</div>
            </div>
        </div>
        
        <div class="outline-section">
            <h3>Outline vs Border Comparison</h3>
            <div class="comparison-container">
                <div class="compare-box border-only">
                    <h4>Border Only</h4>
                    <p>Takes up space in layout</p>
                </div>
                <div class="compare-box outline-only">
                    <h4>Outline Only</h4>
                    <p>Doesn't affect layout</p>
                </div>
                <div class="compare-box both-border-outline">
                    <h4>Both Border & Outline</h4>
                    <p>Outline appears outside border</p>
                </div>
            </div>
        </div>
        
        <div class="outline-section">
            <h3>Interactive Focus Outlines</h3>
            <div class="focus-examples">
                <button class="focus-button default-focus">Default Focus</button>
                <button class="focus-button custom-focus">Custom Focus</button>
                <button class="focus-button no-focus">No Focus (Bad UX)</button>
                <input type="text" class="focus-input" placeholder="Focus me!">
            </div>
            <p><strong>Try clicking or tabbing to these elements!</strong></p>
        </div>
        
        <div class="outline-section">
            <h3>Outline Offset</h3>
            <div class="offset-examples">
                <div class="offset-box no-offset">No Offset</div>
                <div class="offset-box small-offset">5px Offset</div>
                <div class="offset-box large-offset">15px Offset</div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Outline Demo */
.outline-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.outline-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.outline-examples {
    display: grid;
    gap: 20px;
}

.outline-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.outline-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.outline-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.outline-box {
    background: #ecf0f1;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
}

/* Outline Styles */
.solid-outline { outline: 3px solid #3498db; }
.dashed-outline { outline: 3px dashed #e74c3c; }
.dotted-outline { outline: 3px dotted #f39c12; }
.double-outline { outline: 4px double #9b59b6; }
.groove-outline { outline: 4px groove #2ecc71; }
.ridge-outline { outline: 4px ridge #e67e22; }

/* Comparison Examples */
.comparison-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.compare-box {
    padding: 15px;
    text-align: center;
    background: #ecf0f1;
    border-radius: 4px;
}

.compare-box h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.border-only {
    border: 3px solid #3498db;
}

.outline-only {
    outline: 3px solid #e74c3c;
}

.both-border-outline {
    border: 3px solid #3498db;
    outline: 3px solid #f39c12;
}

/* Focus Examples */
.focus-examples {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 20px 0;
    align-items: center;
}

.focus-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    background: #3498db;
    color: white;
}

.default-focus:focus {
    outline: 2px solid #2980b9;
    outline-offset: 2px;
}

.custom-focus:focus {
    outline: 3px solid #e74c3c;
    outline-offset: 4px;
}

.no-focus {
    outline: none; /* Bad for accessibility */
}

.focus-input {
    padding: 8px 12px;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 14px;
}

.focus-input:focus {
    outline: 2px solid #3498db;
    outline-offset: 1px;
}

/* Outline Offset Examples */
.offset-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    margin: 20px 0;
}

.offset-box {
    background: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
    outline: 3px solid #e74c3c;
}

.no-offset { outline-offset: 0; }
.small-offset { outline-offset: 5px; }
.large-offset { outline-offset: 15px; }`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Links",
    description: "Style HTML links with CSS to create beautiful, interactive navigation. Learn about link pseudo-classes (:link, :visited, :hover, :active), link states, and how to create custom button-style links.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-links",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-links"
    },
    topic: "CSS Links",
    demoHtml: `<div class="links-demo">
    <h1>CSS Links Styling Examples</h1>
    
    <div class="links-examples">
        <div class="links-section">
            <h3>Basic Link States</h3>
            <div class="link-states">
                <p>Here are different link states:</p>
                <ul>
                    <li><a href="#" class="basic-link">Unvisited link</a></li>
                    <li><a href="#visited" class="basic-link visited-link">Visited link</a></li>
                    <li><a href="#" class="basic-link">Hover over this link</a></li>
                    <li><a href="#" class="basic-link">Active link (click and hold)</a></li>
                </ul>
                <p><strong>Note:</strong> Hover and click the links to see state changes!</p>
            </div>
        </div>
        
        <div class="links-section">
            <h3>Styled Text Links</h3>
            <div class="text-links">
                <p><a href="#" class="underline-link">Underline on hover</a></p>
                <p><a href="#" class="color-change-link">Color change link</a></p>
                <p><a href="#" class="glow-link">Glowing link effect</a></p>
                <p><a href="#" class="slide-link">Slide underline effect</a></p>
            </div>
        </div>
        
        <div class="links-section">
            <h3>Button-Style Links</h3>
            <div class="button-links">
                <a href="#" class="btn-primary">Primary Button</a>
                <a href="#" class="btn-secondary">Secondary Button</a>
                <a href="#" class="btn-outline">Outline Button</a>
                <a href="#" class="btn-gradient">Gradient Button</a>
                <a href="#" class="btn-rounded">Rounded Button</a>
                <a href="#" class="btn-shadow">Shadow Button</a>
            </div>
        </div>
        
        <div class="links-section">
            <h3>Navigation Links</h3>
            <nav class="nav-demo">
                <ul class="nav-list">
                    <li><a href="#" class="nav-link">Home</a></li>
                    <li><a href="#" class="nav-link active">About</a></li>
                    <li><a href="#" class="nav-link">Services</a></li>
                    <li><a href="#" class="nav-link">Portfolio</a></li>
                    <li><a href="#" class="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Links Demo */
.links-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.links-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.links-examples {
    display: grid;
    gap: 20px;
}

.links-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.links-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Basic Link States */
.basic-link {
    color: #3498db;
    text-decoration: underline;
    transition: all 0.3s ease;
}

.basic-link:visited {
    color: #9b59b6;
}

.basic-link:hover {
    color: #e74c3c;
    text-decoration: none;
}

.basic-link:active {
    color: #f39c12;
}

/* Styled Text Links */
.text-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.underline-link {
    color: #2c3e50;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
}

.underline-link:hover {
    color: #3498db;
    text-decoration: underline;
}

.color-change-link {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
}

.color-change-link:hover {
    color: #e74c3c;
    font-size: 1.1em;
}

.glow-link {
    color: #2c3e50;
    text-decoration: none;
    transition: all 0.3s ease;
}

.glow-link:hover {
    color: #3498db;
    text-shadow: 0 0 8px rgba(52, 152, 219, 0.6);
}

.slide-link {
    color: #2c3e50;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}

.slide-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: #3498db;
    transition: left 0.3s ease;
}

.slide-link:hover::after {
    left: 0;
}

/* Button-Style Links */
.button-links {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.button-links a {
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-block;
}

.btn-primary {
    background: #3498db;
    color: white;
}

.btn-primary:hover {
    background: #2980b9;
    transform: translateY(-2px);
}

.btn-secondary {
    background: #95a5a6;
    color: white;
}

.btn-secondary:hover {
    background: #7f8c8d;
}

.btn-outline {
    background: transparent;
    color: #3498db;
    border: 2px solid #3498db;
}

.btn-outline:hover {
    background: #3498db;
    color: white;
}

.btn-gradient {
    background: linear-gradient(45deg, #3498db, #9b59b6);
    color: white;
}

.btn-gradient:hover {
    background: linear-gradient(45deg, #2980b9, #8e44ad);
}

.btn-rounded {
    background: #e74c3c;
    color: white;
    border-radius: 25px;
}

.btn-rounded:hover {
    background: #c0392b;
}

.btn-shadow {
    background: #f39c12;
    color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-shadow:hover {
    background: #e67e22;
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

/* Navigation Links */
.nav-demo {
    background: #34495e;
    border-radius: 8px;
    padding: 0;
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}

.nav-link {
    color: #ecf0f1;
    text-decoration: none;
    padding: 15px 20px;
    display: block;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background: #2c3e50;
    color: #3498db;
}

.nav-link.active {
    background: #3498db;
    color: white;
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Lists",
    description: "Style HTML lists with CSS to create beautiful navigation menus, custom bullet points, and organized content. Learn to style ordered lists, unordered lists, and create horizontal navigation bars.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-lists",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-lists"
    },
    topic: "CSS Lists",
    demoHtml: `<div class="lists-demo">
    <h1>CSS Lists Styling Examples</h1>
    
    <div class="lists-examples">
        <div class="lists-section">
            <h3>List Style Types</h3>
            <div class="list-types">
                <div class="list-example">
                    <h4>Default Bullets</h4>
                    <ul class="default-list">
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </div>
                
                <div class="list-example">
                    <h4>Square Bullets</h4>
                    <ul class="square-list">
                        <li>Square bullet</li>
                        <li>Another item</li>
                        <li>Last item</li>
                    </ul>
                </div>
                
                <div class="list-example">
                    <h4>Circle Bullets</h4>
                    <ul class="circle-list">
                        <li>Circle bullet</li>
                        <li>Another item</li>
                        <li>Last item</li>
                    </ul>
                </div>
                
                <div class="list-example">
                    <h4>No Bullets</h4>
                    <ul class="no-bullets">
                        <li>Clean list item</li>
                        <li>No bullet points</li>
                        <li>Minimal style</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="lists-section">
            <h3>Ordered List Styles</h3>
            <div class="ordered-examples">
                <div class="list-example">
                    <h4>Numbers (default)</h4>
                    <ol class="decimal-list">
                        <li>First step</li>
                        <li>Second step</li>
                        <li>Third step</li>
                    </ol>
                </div>
                
                <div class="list-example">
                    <h4>Roman Numerals</h4>
                    <ol class="roman-list">
                        <li>Introduction</li>
                        <li>Main content</li>
                        <li>Conclusion</li>
                    </ol>
                </div>
                
                <div class="list-example">
                    <h4>Letters</h4>
                    <ol class="alpha-list">
                        <li>Point A</li>
                        <li>Point B</li>
                        <li>Point C</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="lists-section">
            <h3>Custom Styled Lists</h3>
            <div class="custom-lists">
                <div class="list-example">
                    <h4>Custom Icons</h4>
                    <ul class="icon-list">
                        <li>✓ Completed task</li>
                        <li>✓ Another done item</li>
                        <li>⭐ Featured item</li>
                        <li>🔥 Hot topic</li>
                    </ul>
                </div>
                
                <div class="list-example">
                    <h4>Styled Bullets</h4>
                    <ul class="styled-bullets">
                        <li>Custom colored bullet</li>
                        <li>Larger bullet points</li>
                        <li>Gradient bullets</li>
                    </ul>
                </div>
                
                <div class="list-example">
                    <h4>Bordered List</h4>
                    <ul class="bordered-list">
                        <li>Bordered list item</li>
                        <li>Clean separation</li>
                        <li>Professional look</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="lists-section">
            <h3>Horizontal Navigation List</h3>
            <ul class="horizontal-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Lists Demo */
.lists-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.lists-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.lists-examples {
    display: grid;
    gap: 20px;
}

.lists-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.lists-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.list-types,
.ordered-examples,
.custom-lists {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.list-example {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    border: 1px solid #e9ecef;
}

.list-example h4 {
    margin: 0 0 10px 0;
    color: #495057;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Basic List Styles */
.default-list {
    list-style-type: disc;
    padding-left: 20px;
}

.square-list {
    list-style-type: square;
    padding-left: 20px;
}

.circle-list {
    list-style-type: circle;
    padding-left: 20px;
}

.no-bullets {
    list-style-type: none;
    padding-left: 0;
}

/* Ordered List Styles */
.decimal-list {
    list-style-type: decimal;
    padding-left: 20px;
}

.roman-list {
    list-style-type: upper-roman;
    padding-left: 25px;
}

.alpha-list {
    list-style-type: upper-alpha;
    padding-left: 20px;
}

/* Custom Styled Lists */
.icon-list {
    list-style-type: none;
    padding-left: 0;
}

.icon-list li {
    margin: 8px 0;
    padding-left: 0;
}

.styled-bullets {
    list-style-type: none;
    padding-left: 0;
}

.styled-bullets li {
    position: relative;
    padding-left: 25px;
    margin: 10px 0;
}

.styled-bullets li::before {
    content: '●';
    color: #3498db;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: -2px;
}

.bordered-list {
    list-style-type: none;
    padding-left: 0;
    border: 1px solid #e9ecef;
    border-radius: 4px;
}

.bordered-list li {
    padding: 12px 15px;
    border-bottom: 1px solid #e9ecef;
    transition: background-color 0.2s ease;
}

.bordered-list li:last-child {
    border-bottom: none;
}

.bordered-list li:hover {
    background-color: #f8f9fa;
}

/* Horizontal Navigation */
.horizontal-nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background: #34495e;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}

.horizontal-nav li {
    flex: 1;
    text-align: center;
}

.horizontal-nav a {
    display: block;
    color: #ecf0f1;
    text-decoration: none;
    padding: 15px 20px;
    transition: all 0.3s ease;
}

.horizontal-nav a:hover {
    background: #3498db;
    color: white;
}

/* List Item Spacing */
.lists-demo li {
    margin: 5px 0;
    line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 600px) {
    .list-types,
    .ordered-examples,
    .custom-lists {
        grid-template-columns: 1fr;
    }
    
    .horizontal-nav {
        flex-direction: column;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Overflow",
    description: "Control what happens when content exceeds its container with CSS overflow properties. Learn about visible, hidden, scroll, auto values and create scrollable areas and content clipping effects.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-overflow",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-overflow"
    },
    topic: "CSS Overflow",
    demoHtml: `<div class="overflow-demo">
    <h1>CSS Overflow Examples</h1>
    
    <div class="overflow-examples">
        <div class="overflow-section">
            <h3>Overflow: visible (default)</h3>
            <div class="overflow-container visible-overflow">
                <div class="overflow-content">
                    This content is longer than the container and will overflow outside the boundaries. 
                    You can see how the text extends beyond the container edges with visible overflow. 
                    This is the default behavior when content doesn't fit.
                </div>
            </div>
            <p><code>overflow: visible</code> - Content flows outside container</p>
        </div>
        
        <div class="overflow-section">
            <h3>Overflow: hidden</h3>
            <div class="overflow-container hidden-overflow">
                <div class="overflow-content">
                    This content is longer than the container but will be clipped and hidden. 
                    You won't be able to see the text that extends beyond the container boundaries. 
                    This creates a clean, contained look but content may be inaccessible.
                </div>
            </div>
            <p><code>overflow: hidden</code> - Content is clipped</p>
        </div>
        
        <div class="overflow-section">
            <h3>Overflow: scroll</h3>
            <div class="overflow-container scroll-overflow">
                <div class="overflow-content">
                    This container will always show scrollbars, even if the content fits. 
                    You can scroll both horizontally and vertically to see all the content. 
                    This ensures all content is accessible but may show unnecessary scrollbars. 
                    Perfect for content that you know will vary in size.
                </div>
            </div>
            <p><code>overflow: scroll</code> - Always shows scrollbars</p>
        </div>
        
        <div class="overflow-section">
            <h3>Overflow: auto</h3>
            <div class="overflow-container auto-overflow">
                <div class="overflow-content">
                    This container will only show scrollbars when needed. 
                    If content fits, no scrollbars appear. If content overflows, 
                    scrollbars appear automatically. This is usually the most 
                    user-friendly option for dynamic content areas.
                </div>
            </div>
            <p><code>overflow: auto</code> - Shows scrollbars only when needed</p>
        </div>
        
        <div class="overflow-section">
            <h3>Overflow-x and Overflow-y</h3>
            <div class="overflow-examples-xy">
                <div class="xy-container">
                    <h4>overflow-x: scroll, overflow-y: hidden</h4>
                    <div class="overflow-container overflow-x-scroll">
                        <div class="wide-content">
                            This content is very wide and will require horizontal scrolling but vertical overflow is hidden
                        </div>
                    </div>
                </div>
                
                <div class="xy-container">
                    <h4>overflow-x: hidden, overflow-y: scroll</h4>
                    <div class="overflow-container overflow-y-scroll">
                        <div class="tall-content">
                            This content is very tall and will require vertical scrolling.<br><br>
                            Line 1<br>Line 2<br>Line 3<br>Line 4<br>Line 5<br>
                            Line 6<br>Line 7<br>Line 8<br>Line 9<br>Line 10
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="overflow-section">
            <h3>Practical Example: Chat Window</h3>
            <div class="chat-window">
                <div class="chat-header">Chat Messages</div>
                <div class="chat-messages">
                    <div class="message">User1: Hello everyone!</div>
                    <div class="message">User2: Hi there! How's it going?</div>
                    <div class="message">User3: Great to see everyone here</div>
                    <div class="message">User1: Anyone working on CSS today?</div>
                    <div class="message">User2: Yes! Learning about overflow properties</div>
                    <div class="message">User3: Overflow is so useful for chat windows</div>
                    <div class="message">User1: Absolutely! Auto overflow is perfect</div>
                    <div class="message">User2: Keeps the layout clean</div>
                    <div class="message">User3: And accessible to users</div>
                    <div class="message">System: New user joined the chat</div>
                </div>
                <input type="text" class="chat-input" placeholder="Type a message...">
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Overflow Demo */
.overflow-demo {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.overflow-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.overflow-examples {
    display: grid;
    gap: 20px;
}

.overflow-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.overflow-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

.overflow-container {
    width: 300px;
    height: 100px;
    border: 2px solid #3498db;
    background: #ecf0f1;
    margin: 15px 0;
    position: relative;
}

.overflow-content {
    padding: 10px;
    font-size: 14px;
    line-height: 1.4;
}

/* Overflow Types */
.visible-overflow {
    overflow: visible;
}

.hidden-overflow {
    overflow: hidden;
}

.scroll-overflow {
    overflow: scroll;
}

.auto-overflow {
    overflow: auto;
}

/* X and Y Overflow Examples */
.overflow-examples-xy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
}

.xy-container h4 {
    color: #495057;
    margin: 0 0 10px 0;
    font-size: 14px;
}

.overflow-x-scroll {
    overflow-x: scroll;
    overflow-y: hidden;
}

.overflow-y-scroll {
    overflow-x: hidden;
    overflow-y: scroll;
}

.wide-content {
    width: 600px;
    padding: 10px;
    white-space: nowrap;
    font-size: 14px;
}

.tall-content {
    padding: 10px;
    font-size: 14px;
    line-height: 1.4;
}

/* Chat Window Example */
.chat-window {
    max-width: 400px;
    height: 300px;
    border: 2px solid #34495e;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

.chat-header {
    background: #34495e;
    color: white;
    padding: 15px;
    font-weight: bold;
    text-align: center;
}

.chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background: white;
}

.message {
    padding: 5px 0;
    font-size: 14px;
    border-bottom: 1px solid #ecf0f1;
}

.message:last-child {
    border-bottom: none;
}

.chat-input {
    border: none;
    border-top: 1px solid #bdc3c7;
    padding: 12px 15px;
    font-size: 14px;
    outline: none;
}

.chat-input:focus {
    background: #f8f9fa;
}

/* Code display */
.overflow-section p code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
}

.overflow-section p {
    color: #7f8c8d;
    font-style: italic;
    margin-top: 10px;
}

/* Responsive */
@media (max-width: 600px) {
    .overflow-examples-xy {
        grid-template-columns: 1fr;
    }
    
    .overflow-container {
        width: 100%;
        max-width: 300px;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Media Queries",
    description: "Create responsive websites with CSS media queries. Learn how to apply different styles based on device characteristics like screen size, orientation, and resolution. Master breakpoints for mobile-first and desktop-first design approaches.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-media-queries",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-media-queries"
    },
    topic: "CSS Media Queries",
    demoHtml: `<div class="media-query-demo">
    <h1>CSS Media Queries Examples</h1>
    
    <div class="responsive-sections">
        <div class="responsive-section">
            <h3>Basic Screen Size Breakpoints</h3>
            <div class="responsive-box" id="responsiveBox">
                <div class="size-indicator">Resize your browser window</div>
                <div class="current-size" id="currentSize">Current width: <span></span></div>
            </div>
            <div class="breakpoint-info">
                <div class="breakpoint mobile">📱 Mobile: &lt; 768px</div>
                <div class="breakpoint tablet">📱 Tablet: 768px - 1024px</div>
                <div class="breakpoint desktop">💻 Desktop: &gt; 1024px</div>
            </div>
        </div>

        <div class="responsive-section">
            <h3>Mobile-First Approach</h3>
            <div class="mobile-first-grid">
                <div class="grid-item">Item 1</div>
                <div class="grid-item">Item 2</div>
                <div class="grid-item">Item 3</div>
                <div class="grid-item">Item 4</div>
            </div>
            <p class="approach-note">Mobile-first: Base styles for mobile, then enhance for larger screens</p>
        </div>

        <div class="responsive-section">
            <h3>Orientation-Based Styling</h3>
            <div class="orientation-demo">
                <div class="orientation-message">
                    <span class="portrait-msg">📱 Portrait Mode</span>
                    <span class="landscape-msg">📱 Landscape Mode</span>
                </div>
                <div class="orientation-box">
                    Orientation-specific styling
                </div>
            </div>
        </div>

        <div class="responsive-section">
            <h3>Print Styles</h3>
            <div class="print-demo">
                <div class="screen-only">This content only appears on screen</div>
                <div class="print-only">This content only appears when printed</div>
                <div class="content-both">This content appears both on screen and print</div>
                <p class="print-note">Use browser's print preview to see print-specific styles</p>
            </div>
        </div>

        <div class="responsive-section">
            <h3>Complex Media Query Conditions</h3>
            <div class="complex-demo">
                <div class="high-res-notice">High Resolution Display Detected</div>
                <div class="preference-notice">Prefers Reduced Motion</div>
                <div class="dark-mode-notice">Dark Mode Preferred</div>
                <p>These notices appear based on device capabilities and user preferences</p>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Media Queries Demo */
.media-query-demo {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.media-query-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.responsive-sections {
    display: grid;
    gap: 25px;
}

.responsive-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.responsive-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Basic Responsive Box */
.responsive-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    margin: 20px 0;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s ease;
}

.size-indicator {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
}

.current-size {
    font-size: 1.1em;
    opacity: 0.9;
}

.breakpoint-info {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    flex-wrap: wrap;
}

.breakpoint {
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
    transition: all 0.3s ease;
}

.breakpoint.mobile {
    background: #e74c3c;
    color: white;
}

.breakpoint.tablet {
    background: #f39c12;
    color: white;
}

.breakpoint.desktop {
    background: #27ae60;
    color: white;
}

/* Mobile-First Grid */
.mobile-first-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 20px 0;
}

.grid-item {
    background: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 6px;
    font-weight: bold;
}

.approach-note {
    color: #7f8c8d;
    font-style: italic;
    margin-top: 10px;
    font-size: 14px;
}

/* Orientation Demo */
.orientation-demo {
    text-align: center;
    margin: 20px 0;
}

.orientation-message span {
    display: none;
    font-size: 1.2em;
    font-weight: bold;
}

.orientation-box {
    background: #9b59b6;
    color: white;
    padding: 30px;
    margin: 15px 0;
    border-radius: 10px;
    font-weight: bold;
}

/* Print Demo */
.print-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.print-only {
    display: none;
}

.content-both, .screen-only {
    background: #3498db;
    color: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 4px;
}

.print-note {
    color: #7f8c8d;
    font-style: italic;
    margin-top: 10px;
    font-size: 14px;
}

/* Complex Conditions */
.complex-demo div {
    display: none;
    padding: 15px;
    margin: 10px 0;
    border-radius: 6px;
    font-weight: bold;
}

.high-res-notice {
    background: #e74c3c;
    color: white;
}

.preference-notice {
    background: #f39c12;
    color: white;
}

.dark-mode-notice {
    background: #34495e;
    color: white;
}

/* MEDIA QUERIES */

/* Mobile Styles (default) */
@media screen {
    .breakpoint.mobile {
        opacity: 1;
    }
}

/* Tablet Styles */
@media screen and (min-width: 768px) {
    .responsive-box {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    
    .breakpoint.mobile {
        opacity: 0.5;
    }
    
    .breakpoint.tablet {
        opacity: 1;
    }
    
    .mobile-first-grid {
        grid-template-columns: 1fr 1fr;
    }
}

/* Desktop Styles */
@media screen and (min-width: 1024px) {
    .responsive-box {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }
    
    .breakpoint.tablet {
        opacity: 0.5;
    }
    
    .breakpoint.desktop {
        opacity: 1;
    }
    
    .mobile-first-grid {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .responsive-sections {
        grid-template-columns: 1fr 1fr;
    }
}

/* Orientation-based styles */
@media screen and (orientation: portrait) {
    .orientation-message .portrait-msg {
        display: inline;
        color: #3498db;
    }
    
    .orientation-box {
        background: #3498db;
    }
}

@media screen and (orientation: landscape) {
    .orientation-message .landscape-msg {
        display: inline;
        color: #e74c3c;
    }
    
    .orientation-box {
        background: #e74c3c;
    }
}

/* Print Styles */
@media print {
    .media-query-demo {
        background: white;
        box-shadow: none;
    }
    
    .screen-only {
        display: none !important;
    }
    
    .print-only {
        display: block !important;
        background: #f8f9fa !important;
        color: #2c3e50 !important;
        border: 1px solid #bdc3c7 !important;
    }
    
    .responsive-section h3 {
        color: #2c3e50;
    }
}

/* High Resolution Displays */
@media screen and (min-resolution: 2dppx) {
    .high-res-notice {
        display: block;
    }
}

/* Reduced Motion Preference */
@media (prefers-reduced-motion: reduce) {
    .preference-notice {
        display: block;
    }
    
    * {
        transition: none !important;
        animation: none !important;
    }
}

/* Dark Mode Preference */
@media (prefers-color-scheme: dark) {
    .dark-mode-notice {
        display: block;
    }
}

/* Very Small Screens */
@media screen and (max-width: 480px) {
    .media-query-demo {
        margin: 10px;
        padding: 15px;
    }
    
    .breakpoint-info {
        flex-direction: column;
    }
    
    .responsive-sections {
        gap: 15px;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Variables (Custom Properties)",
    description: "Use CSS custom properties (variables) to create maintainable and dynamic stylesheets. Learn how to define, use, and update CSS variables with JavaScript for theming, responsive design, and consistent styling.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-variables",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-variables"
    },
    topic: "CSS Variables",
    demoHtml: `<div class="css-variables-demo">
    <h1>CSS Variables (Custom Properties) Examples</h1>
    
    <div class="variables-sections">
        <div class="variables-section">
            <h3>Basic CSS Variables</h3>
            <div class="basic-variables-demo">
                <div class="color-boxes">
                    <div class="color-box primary">Primary Color</div>
                    <div class="color-box secondary">Secondary Color</div>
                    <div class="color-box accent">Accent Color</div>
                </div>
                <div class="variables-display">
                    <h4>Defined Variables:</h4>
                    <code>--primary-color: #3498db;</code>
                    <code>--secondary-color: #e74c3c;</code>
                    <code>--accent-color: #f39c12;</code>
                    <code>--border-radius: 8px;</code>
                </div>
            </div>
        </div>

        <div class="variables-section">
            <h3>Theme Switching with Variables</h3>
            <div class="theme-demo" id="themeDemo">
                <div class="theme-controls">
                    <button class="theme-btn" onclick="setTheme('light')">Light Theme</button>
                    <button class="theme-btn" onclick="setTheme('dark')">Dark Theme</button>
                    <button class="theme-btn" onclick="setTheme('blue')">Blue Theme</button>
                    <button class="theme-btn" onclick="setTheme('green')">Green Theme</button>
                </div>
                <div class="themed-content">
                    <div class="themed-card">
                        <h4>Themed Card</h4>
                        <p>This card changes appearance based on the selected theme using CSS variables.</p>
                        <button class="themed-button">Themed Button</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="variables-section">
            <h3>Responsive Variables</h3>
            <div class="responsive-variables-demo">
                <div class="responsive-text">
                    <h4>Responsive Typography</h4>
                    <p>This text size changes based on screen size using CSS variables in media queries.</p>
                </div>
                <div class="responsive-spacing">
                    <div class="spaced-item">Item 1</div>
                    <div class="spaced-item">Item 2</div>
                    <div class="spaced-item">Item 3</div>
                </div>
            </div>
        </div>

        <div class="variables-section">
            <h3>Variable Inheritance and Scope</h3>
            <div class="scope-demo">
                <div class="parent-scope">
                    <div class="scope-title">Parent Scope</div>
                    <div class="child-scope">
                        <div class="scope-title">Child Scope (Overrides Parent)</div>
                        <div class="grandchild-scope">
                            <div class="scope-title">Grandchild Scope</div>
                        </div>
                    </div>
                </div>
                <div class="scope-explanation">
                    <h4>Variable Scoping:</h4>
                    <p>• Parent: --scope-color: blue</p>
                    <p>• Child: --scope-color: red (overrides)</p>
                    <p>• Grandchild: inherits from child</p>
                </div>
            </div>
        </div>

        <div class="variables-section">
            <h3>JavaScript Integration</h3>
            <div class="js-integration-demo">
                <div class="js-controls">
                    <h4>Dynamic Variable Control:</h4>
                    <div class="control-group">
                        <label>Primary Color: <input type="color" value="#3498db" onchange="updateVariable('--primary-color', this.value)"></label>
                        <label>Font Size: <input type="range" min="12" max="24" value="16" onchange="updateVariable('--dynamic-font-size', this.value + 'px')"> <span id="fontSize">16px</span></label>
                        <label>Border Radius: <input type="range" min="0" max="50" value="8" onchange="updateVariable('--dynamic-radius', this.value + 'px')"> <span id="borderRadius">8px</span></label>
                    </div>
                </div>
                <div class="dynamic-demo-box" id="dynamicBox">
                    <p>This box updates in real-time as you change the variables above!</p>
                </div>
            </div>
        </div>

        <div class="variables-section">
            <h3>Fallback Values</h3>
            <div class="fallback-demo">
                <div class="fallback-examples">
                    <div class="fallback-box defined">
                        <span>Uses defined variable</span>
                    </div>
                    <div class="fallback-box undefined">
                        <span>Uses fallback value</span>
                    </div>
                </div>
                <div class="fallback-code">
                    <h4>Code Examples:</h4>
                    <code>color: var(--defined-color, blue);</code>
                    <code>color: var(--undefined-color, red);</code>
                </div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Variables Demo */
:root {
    --primary-color: #3498db;
    --secondary-color: #e74c3c;
    --accent-color: #f39c12;
    --success-color: #27ae60;
    --border-radius: 8px;
    --shadow: 0 2px 4px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
    
    /* Responsive variables */
    --text-size: 16px;
    --spacing: 15px;
    
    /* Dynamic variables (updated by JavaScript) */
    --dynamic-font-size: 16px;
    --dynamic-radius: 8px;
}

.css-variables-demo {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: var(--border-radius);
    font-family: Arial, sans-serif;
}

.css-variables-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.variables-sections {
    display: grid;
    gap: 25px;
}

.variables-section {
    background: white;
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.variables-section h3 {
    color: var(--primary-color);
    margin-top: 0;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
}

/* Basic Variables Demo */
.color-boxes {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.color-box {
    padding: 20px;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: var(--border-radius);
    flex: 1;
    min-width: 120px;
}

.color-box.primary {
    background: var(--primary-color);
}

.color-box.secondary {
    background: var(--secondary-color);
}

.color-box.accent {
    background: var(--accent-color);
}

.variables-display {
    background: #f8f9fa;
    padding: 15px;
    border-radius: var(--border-radius);
    border: 2px dashed #bdc3c7;
}

.variables-display h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.variables-display code {
    display: block;
    background: #2d3748;
    color: #e2e8f0;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
}

/* Theme Demo */
.theme-demo {
    --theme-bg: #ffffff;
    --theme-text: #2c3e50;
    --theme-primary: #3498db;
    --theme-border: #e9ecef;
    
    background: var(--theme-bg);
    color: var(--theme-text);
    border: 1px solid var(--theme-border);
    border-radius: var(--border-radius);
    padding: 20px;
    transition: var(--transition);
}

.theme-controls {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.theme-btn {
    background: var(--theme-primary);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: var(--transition);
}

.theme-btn:hover {
    opacity: 0.8;
}

.themed-content {
    margin-top: 20px;
}

.themed-card {
    background: var(--theme-bg);
    border: 2px solid var(--theme-border);
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.themed-card h4 {
    color: var(--theme-primary);
    margin: 0 0 10px 0;
}

.themed-button {
    background: var(--theme-primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
    transition: var(--transition);
}

.themed-button:hover {
    opacity: 0.8;
}

/* Theme variants */
.theme-demo.dark {
    --theme-bg: #2d3748;
    --theme-text: #e2e8f0;
    --theme-primary: #4299e1;
    --theme-border: #4a5568;
}

.theme-demo.blue {
    --theme-bg: #ebf8ff;
    --theme-text: #2d3748;
    --theme-primary: #3182ce;
    --theme-border: #bee3f8;
}

.theme-demo.green {
    --theme-bg: #f0fff4;
    --theme-text: #2d3748;
    --theme-primary: #38a169;
    --theme-border: #c6f6d5;
}

/* Responsive Variables */
.responsive-variables-demo {
    background: #ecf0f1;
    padding: var(--spacing);
    border-radius: var(--border-radius);
}

.responsive-text {
    margin-bottom: var(--spacing);
}

.responsive-text h4 {
    font-size: calc(var(--text-size) + 4px);
    color: var(--primary-color);
}

.responsive-text p {
    font-size: var(--text-size);
    line-height: 1.6;
}

.responsive-spacing {
    display: grid;
    gap: var(--spacing);
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.spaced-item {
    background: var(--accent-color);
    color: white;
    padding: var(--spacing);
    text-align: center;
    border-radius: var(--border-radius);
    font-weight: bold;
}

/* Scope Demo */
.parent-scope {
    --scope-color: #3498db;
    border: 3px solid var(--scope-color);
    padding: 20px;
    border-radius: var(--border-radius);
}

.parent-scope .scope-title {
    background: var(--scope-color);
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 15px;
}

.child-scope {
    --scope-color: #e74c3c;
    border: 2px solid var(--scope-color);
    padding: 15px;
    border-radius: var(--border-radius);
}

.grandchild-scope {
    border: 1px solid var(--scope-color);
    padding: 10px;
    border-radius: var(--border-radius);
    margin-top: 10px;
}

.scope-explanation {
    margin-top: 20px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: var(--border-radius);
}

.scope-explanation h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.scope-explanation p {
    margin: 5px 0;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #7f8c8d;
}

/* JavaScript Integration */
.js-integration-demo {
    background: #f8f9fa;
    padding: 20px;
    border-radius: var(--border-radius);
}

.control-group {
    display: grid;
    gap: 15px;
    margin-top: 15px;
}

.control-group label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    color: #2c3e50;
}

.control-group input[type="color"] {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 50px;
    height: 30px;
}

.control-group input[type="range"] {
    flex: 1;
    max-width: 200px;
}

.dynamic-demo-box {
    background: var(--primary-color);
    color: white;
    padding: 20px;
    border-radius: var(--dynamic-radius);
    margin-top: 20px;
    text-align: center;
    font-size: var(--dynamic-font-size);
    font-weight: bold;
    transition: var(--transition);
}

/* Fallback Demo */
.fallback-examples {
    display: flex;
    gap: 20px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.fallback-box {
    flex: 1;
    min-width: 200px;
    padding: 30px;
    text-align: center;
    font-weight: bold;
    border-radius: var(--border-radius);
    color: white;
}

.fallback-box.defined {
    background: var(--primary-color, blue);
}

.fallback-box.undefined {
    background: var(--nonexistent-color, red);
}

.fallback-code {
    background: #2d3748;
    padding: 15px;
    border-radius: var(--border-radius);
}

.fallback-code h4 {
    color: white;
    margin: 0 0 10px 0;
}

.fallback-code code {
    display: block;
    color: #e2e8f0;
    font-family: 'Courier New', monospace;
    margin: 5px 0;
    font-size: 14px;
}

/* Responsive Variables */
@media (max-width: 768px) {
    :root {
        --text-size: 14px;
        --spacing: 10px;
    }
    
    .color-boxes {
        flex-direction: column;
    }
    
    .theme-controls {
        flex-direction: column;
    }
    
    .fallback-examples {
        flex-direction: column;
    }
    
    .control-group {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 1024px) {
    :root {
        --text-size: 18px;
        --spacing: 20px;
    }
    
    .variables-sections {
        grid-template-columns: 1fr 1fr;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Transforms",
    description: "Transform elements with CSS transform property. Learn 2D and 3D transformations including translate, rotate, scale, and skew. Create dynamic animations and interactive effects with matrix transformations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-transforms",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-transforms"
    },
    topic: "CSS Transforms",
    demoHtml: `<div class="transforms-demo">
    <h1>CSS Transforms Examples</h1>
    
    <div class="transform-sections">
        <div class="transform-section">
            <h3>2D Transforms</h3>
            <div class="transform-2d-examples">
                <div class="transform-grid">
                    <div class="transform-box translate">
                        <span>Translate</span>
                        <div class="transform-info">translate(50px, 30px)</div>
                    </div>
                    <div class="transform-box rotate">
                        <span>Rotate</span>
                        <div class="transform-info">rotate(45deg)</div>
                    </div>
                    <div class="transform-box scale">
                        <span>Scale</span>
                        <div class="transform-info">scale(1.2)</div>
                    </div>
                    <div class="transform-box skew">
                        <span>Skew</span>
                        <div class="transform-info">skew(20deg, 10deg)</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="transform-section">
            <h3>Interactive Transform Controls</h3>
            <div class="interactive-transform">
                <div class="transform-controls">
                    <div class="control-group">
                        <label>Translate X: <input type="range" min="-100" max="100" value="0" id="translateX"> <span id="translateXValue">0px</span></label>
                        <label>Translate Y: <input type="range" min="-100" max="100" value="0" id="translateY"> <span id="translateYValue">0px</span></label>
                        <label>Rotate: <input type="range" min="0" max="360" value="0" id="rotate"> <span id="rotateValue">0°</span></label>
                        <label>Scale: <input type="range" min="0.5" max="2" step="0.1" value="1" id="scale"> <span id="scaleValue">1</span></label>
                        <label>Skew X: <input type="range" min="-45" max="45" value="0" id="skewX"> <span id="skewXValue">0°</span></label>
                        <label>Skew Y: <input type="range" min="-45" max="45" value="0" id="skewY"> <span id="skewYValue">0°</span></label>
                    </div>
                    <button onclick="resetTransforms()" class="reset-btn">Reset All</button>
                </div>
                <div class="interactive-demo-area">
                    <div class="interactive-box" id="interactiveBox">
                        <span>Transform Me!</span>
                        <div class="current-transform" id="currentTransform">transform: none</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="transform-section">
            <h3>3D Transforms</h3>
            <div class="transform-3d-examples">
                <div class="perspective-container">
                    <div class="transform-3d-grid">
                        <div class="transform-3d-box rotateX">
                            <div class="box-face front">Front</div>
                            <div class="box-face back">Back</div>
                            <div class="box-face top">Top</div>
                            <div class="box-face bottom">Bottom</div>
                            <div class="transform-3d-info">rotateX(60deg)</div>
                        </div>
                        <div class="transform-3d-box rotateY">
                            <div class="box-face front">Front</div>
                            <div class="box-face back">Back</div>
                            <div class="box-face left">Left</div>
                            <div class="box-face right">Right</div>
                            <div class="transform-3d-info">rotateY(60deg)</div>
                        </div>
                        <div class="transform-3d-box rotateZ">
                            <div class="box-face front">Front</div>
                            <div class="box-face back">Back</div>
                            <div class="transform-3d-info">rotateZ(45deg)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="transform-section">
            <h3>Transform Origin</h3>
            <div class="origin-demo">
                <div class="origin-examples">
                    <div class="origin-box origin-center">
                        <span>Center</span>
                        <div class="origin-indicator"></div>
                    </div>
                    <div class="origin-box origin-top-left">
                        <span>Top Left</span>
                        <div class="origin-indicator"></div>
                    </div>
                    <div class="origin-box origin-bottom-right">
                        <span>Bottom Right</span>
                        <div class="origin-indicator"></div>
                    </div>
                    <div class="origin-box origin-custom">
                        <span>Custom</span>
                        <div class="origin-indicator"></div>
                    </div>
                </div>
                <p class="origin-note">Hover over boxes to see rotation around different origin points</p>
            </div>
        </div>

        <div class="transform-section">
            <h3>Combining Transforms</h3>
            <div class="combined-transforms">
                <div class="combined-examples">
                    <div class="combined-box example1">
                        <span>Scale + Rotate</span>
                    </div>
                    <div class="combined-box example2">
                        <span>Translate + Skew</span>
                    </div>
                    <div class="combined-box example3">
                        <span>All Combined</span>
                    </div>
                </div>
                <div class="combined-code">
                    <h4>Transform Combinations:</h4>
                    <code>transform: scale(1.2) rotate(15deg);</code>
                    <code>transform: translate(20px, -10px) skew(10deg);</code>
                    <code>transform: scale(0.9) rotate(10deg) translate(10px);</code>
                </div>
            </div>
        </div>

        <div class="transform-section">
            <h3>Practical Examples</h3>
            <div class="practical-examples">
                <div class="card-flip">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h4>Card Front</h4>
                                <p>Hover to flip!</p>
                            </div>
                            <div class="flip-card-back">
                                <h4>Card Back</h4>
                                <p>Flipped with CSS transforms!</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Loading Spinner</p>
                </div>
                
                <div class="hover-effects">
                    <button class="transform-button btn1">Scale on Hover</button>
                    <button class="transform-button btn2">Rotate on Hover</button>
                    <button class="transform-button btn3">Lift on Hover</button>
                </div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Transforms Demo */
.transforms-demo {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.transforms-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.transform-sections {
    display: grid;
    gap: 25px;
}

.transform-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.transform-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* 2D Transforms */
.transform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.transform-box {
    position: relative;
    width: 120px;
    height: 120px;
    background: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 8px;
    margin: 40px auto;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.transform-box span {
    position: relative;
    z-index: 2;
}

.transform-info {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 11px;
    color: #7f8c8d;
    white-space: nowrap;
    font-family: 'Courier New', monospace;
}

.transform-box.translate:hover {
    transform: translate(50px, 30px);
}

.transform-box.rotate:hover {
    transform: rotate(45deg);
}

.transform-box.scale:hover {
    transform: scale(1.2);
}

.transform-box.skew:hover {
    transform: skew(20deg, 10deg);
}

/* Interactive Transform Controls */
.interactive-transform {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.transform-controls {
    margin-bottom: 30px;
}

.control-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.control-group label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    color: #2c3e50;
}

.control-group input[type="range"] {
    flex: 1;
    max-width: 120px;
}

.control-group span {
    min-width: 40px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #7f8c8d;
}

.reset-btn {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.interactive-demo-area {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background: white;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.interactive-box {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 8px;
    transition: transform 0.1s ease;
}

.current-transform {
    font-size: 10px;
    margin-top: 8px;
    opacity: 0.8;
    font-family: 'Courier New', monospace;
}

/* 3D Transforms */
.perspective-container {
    perspective: 1000px;
    padding: 40px 20px;
}

.transform-3d-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 40px;
    justify-items: center;
}

.transform-3d-box {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    cursor: pointer;
}

.box-face {
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 14px;
    border: 2px solid rgba(255,255,255,0.2);
}

.box-face.front {
    background: #3498db;
    transform: rotateY(0deg) translateZ(50px);
}

.box-face.back {
    background: #e74c3c;
    transform: rotateY(180deg) translateZ(50px);
}

.box-face.right {
    background: #f39c12;
    transform: rotateY(90deg) translateZ(50px);
}

.box-face.left {
    background: #9b59b6;
    transform: rotateY(-90deg) translateZ(50px);
}

.box-face.top {
    background: #27ae60;
    transform: rotateX(90deg) translateZ(50px);
}

.box-face.bottom {
    background: #e67e22;
    transform: rotateX(-90deg) translateZ(50px);
}

.transform-3d-box.rotateX {
    transform: rotateX(60deg);
}

.transform-3d-box.rotateY {
    transform: rotateY(60deg);
}

.transform-3d-box.rotateZ {
    transform: rotateZ(45deg);
}

.transform-3d-box:hover {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) !important;
}

.transform-3d-info {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 11px;
    color: #7f8c8d;
    font-family: 'Courier New', monospace;
    white-space: nowrap;
}

/* Transform Origin */
.origin-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.origin-box {
    position: relative;
    width: 100px;
    height: 100px;
    background: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 8px;
    margin: 20px auto;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.origin-indicator {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #e74c3c;
    border-radius: 50%;
    border: 2px solid white;
}

.origin-box.origin-center {
    transform-origin: center center;
}

.origin-box.origin-center .origin-indicator {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.origin-box.origin-top-left {
    transform-origin: top left;
}

.origin-box.origin-top-left .origin-indicator {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
}

.origin-box.origin-bottom-right {
    transform-origin: bottom right;
}

.origin-box.origin-bottom-right .origin-indicator {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
}

.origin-box.origin-custom {
    transform-origin: 25% 75%;
}

.origin-box.origin-custom .origin-indicator {
    bottom: 25%;
    left: 25%;
    transform: translate(-50%, -50%);
}

.origin-box:hover {
    transform: rotate(45deg);
}

.origin-note {
    text-align: center;
    color: #7f8c8d;
    font-style: italic;
    margin-top: 20px;
}

/* Combined Transforms */
.combined-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 30px;
    margin: 20px 0;
}

.combined-box {
    width: 120px;
    height: 80px;
    background: #9b59b6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 8px;
    margin: 20px auto;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.combined-box.example1:hover {
    transform: scale(1.2) rotate(15deg);
}

.combined-box.example2:hover {
    transform: translate(20px, -10px) skew(10deg);
}

.combined-box.example3:hover {
    transform: scale(0.9) rotate(10deg) translate(10px);
}

.combined-code {
    background: #2d3748;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
}

.combined-code h4 {
    color: white;
    margin: 0 0 10px 0;
}

.combined-code code {
    display: block;
    color: #e2e8f0;
    font-family: 'Courier New', monospace;
    margin: 5px 0;
    font-size: 13px;
}

/* Practical Examples */
.practical-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    align-items: start;
}

/* Card Flip */
.flip-card {
    width: 200px;
    height: 150px;
    perspective: 1000px;
    margin: 0 auto;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
}

.flip-card-front {
    background: #3498db;
    color: white;
}

.flip-card-back {
    background: #e74c3c;
    color: white;
    transform: rotateY(180deg);
}

/* Loading Spinner */
.loading-spinner {
    text-align: center;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #ecf0f1;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    margin: 0 auto 15px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Hover Effects */
.hover-effects {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.transform-button {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: #34495e;
    color: white;
    min-width: 160px;
}

.transform-button.btn1:hover {
    transform: scale(1.1);
}

.transform-button.btn2:hover {
    transform: rotate(5deg);
}

.transform-button.btn3:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 768px) {
    .transform-grid {
        grid-template-columns: 1fr 1fr;
    }
    
    .control-group {
        grid-template-columns: 1fr;
    }
    
    .combined-examples, .practical-examples {
        grid-template-columns: 1fr;
    }
    
    .flip-card {
        width: 100%;
        max-width: 250px;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Units",
    description: "Master CSS units for responsive design. Learn absolute units (px, pt, in) and relative units (em, rem, %, vw, vh, vmin, vmax). Understand when and how to use each unit for scalable and accessible web design.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-units",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-units"
    },
    topic: "CSS Units",
    demoHtml: `<div class="css-units-demo">
    <h1>CSS Units Examples</h1>
    
    <div class="units-sections">
        <div class="units-section">
            <h3>Absolute Units</h3>
            <div class="absolute-units">
                <div class="unit-example">
                    <div class="unit-box px">px</div>
                    <div class="unit-info">
                        <strong>Pixels (px)</strong>
                        <p>Fixed size unit. 1px = 1/96th of an inch</p>
                        <code>width: 100px;</code>
                    </div>
                </div>
                <div class="unit-example">
                    <div class="unit-box pt">pt</div>
                    <div class="unit-info">
                        <strong>Points (pt)</strong>
                        <p>Commonly used in print. 1pt = 1/72th of an inch</p>
                        <code>font-size: 12pt;</code>
                    </div>
                </div>
                <div class="unit-example">
                    <div class="unit-box cm">cm</div>
                    <div class="unit-info">
                        <strong>Centimeters (cm)</strong>
                        <p>Real-world measurement. 1cm = 37.8px</p>
                        <code>width: 5cm;</code>
                    </div>
                </div>
            </div>
        </div>

        <div class="units-section">
            <h3>Font-Relative Units</h3>
            <div class="font-relative-demo">
                <div class="font-size-container" style="font-size: 20px;">
                    <div class="container-label">Container font-size: 20px</div>
                    <div class="font-relative-examples">
                        <div class="unit-example">
                            <div class="unit-box em">em</div>
                            <div class="unit-info">
                                <strong>Em (em)</strong>
                                <p>Relative to parent element's font size</p>
                                <code>font-size: 1.5em; (30px)</code>
                            </div>
                        </div>
                        <div class="unit-example">
                            <div class="unit-box rem">rem</div>
                            <div class="unit-info">
                                <strong>Root Em (rem)</strong>
                                <p>Relative to root element's font size</p>
                                <code>font-size: 1.5rem; (24px if root is 16px)</code>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="em-cascade-demo">
                    <h4>Em Cascade Effect</h4>
                    <div class="cascade-level-1">
                        Level 1 (1.2em)
                        <div class="cascade-level-2">
                            Level 2 (1.2em × 1.2 = 1.44em)
                            <div class="cascade-level-3">
                                Level 3 (1.44em × 1.2 = 1.728em)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="units-section">
            <h3>Percentage Units</h3>
            <div class="percentage-demo">
                <div class="parent-container">
                    <div class="parent-label">Parent Container (400px wide)</div>
                    <div class="percentage-examples">
                        <div class="percentage-box w25">25%</div>
                        <div class="percentage-box w50">50%</div>
                        <div class="percentage-box w75">75%</div>
                        <div class="percentage-box w100">100%</div>
                    </div>
                    <div class="percentage-info">
                        <p>Percentage units are relative to the parent element's size</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="units-section">
            <h3>Viewport Units</h3>
            <div class="viewport-demo">
                <div class="viewport-examples">
                    <div class="viewport-box vw">
                        <span>20vw</span>
                        <div class="viewport-info">20% of viewport width</div>
                    </div>
                    <div class="viewport-box vh">
                        <span>20vh</span>
                        <div class="viewport-info">20% of viewport height</div>
                    </div>
                    <div class="viewport-box vmin">
                        <span>15vmin</span>
                        <div class="viewport-info">15% of smaller viewport dimension</div>
                    </div>
                    <div class="viewport-box vmax">
                        <span>15vmax</span>
                        <div class="viewport-info">15% of larger viewport dimension</div>
                    </div>
                </div>
                <div class="viewport-info-panel">
                    <h4>Current Viewport:</h4>
                    <p id="viewportInfo">Resize browser to see changes</p>
                </div>
            </div>
        </div>

        <div class="units-section">
            <h3>Unit Comparison</h3>
            <div class="comparison-demo">
                <div class="comparison-container">
                    <h4>Same Content, Different Units</h4>
                    <div class="comparison-examples">
                        <div class="comparison-box px-box">
                            <div class="comparison-content">
                                <h5>Fixed Pixels</h5>
                                <p>This text is sized with px units. It won't scale with user preferences.</p>
                            </div>
                        </div>
                        <div class="comparison-box rem-box">
                            <div class="comparison-content">
                                <h5>Scalable Rems</h5>
                                <p>This text is sized with rem units. It scales with user's font size preferences.</p>
                            </div>
                        </div>
                        <div class="comparison-box viewport-box">
                            <div class="comparison-content">
                                <h5>Viewport Units</h5>
                                <p>This text is sized with vw/vh units. It scales with the viewport size.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="units-section">
            <h3>Interactive Unit Calculator</h3>
            <div class="unit-calculator">
                <div class="calculator-controls">
                    <div class="control-group">
                        <label>Base Font Size: <input type="range" min="12" max="24" value="16" id="baseFontSize"> <span id="baseFontValue">16px</span></label>
                        <label>Parent Font Size: <input type="range" min="12" max="32" value="20" id="parentFontSize"> <span id="parentFontValue">20px</span></label>
                        <label>Container Width: <input type="range" min="200" max="600" value="400" id="containerWidth"> <span id="containerWidthValue">400px</span></label>
                    </div>
                </div>
                <div class="calculator-results">
                    <div class="calc-container" id="calcContainer">
                        <div class="calc-item">
                            <div class="calc-box em-calc">1.5em</div>
                            <div class="calc-info">= <span id="emResult">30px</span></div>
                        </div>
                        <div class="calc-item">
                            <div class="calc-box rem-calc">1.5rem</div>
                            <div class="calc-info">= <span id="remResult">24px</span></div>
                        </div>
                        <div class="calc-item">
                            <div class="calc-box percent-calc">50%</div>
                            <div class="calc-info">= <span id="percentResult">200px</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="units-section">
            <h3>Best Practices</h3>
            <div class="best-practices">
                <div class="practice-grid">
                    <div class="practice-card">
                        <h4>Typography</h4>
                        <ul>
                            <li><strong>rem</strong> for font sizes</li>
                            <li><strong>em</strong> for margins/padding relative to text</li>
                            <li><strong>px</strong> for borders and fine details</li>
                        </ul>
                    </div>
                    <div class="practice-card">
                        <h4>Layout</h4>
                        <ul>
                            <li><strong>%</strong> for flexible widths</li>
                            <li><strong>vw/vh</strong> for full-screen elements</li>
                            <li><strong>px</strong> for fixed dimensions</li>
                        </ul>
                    </div>
                    <div class="practice-card">
                        <h4>Media Queries</h4>
                        <ul>
                            <li><strong>em</strong> for breakpoints (scales with zoom)</li>
                            <li><strong>px</strong> for specific device targets</li>
                            <li><strong>rem</strong> for consistent scaling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Units Demo */
.css-units-demo {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.css-units-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.units-sections {
    display: grid;
    gap: 25px;
}

.units-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.units-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Absolute Units */
.absolute-units {
    display: grid;
    gap: 20px;
}

.unit-example {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.unit-box {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 4px;
    background: #3498db;
}

.unit-box.px {
    width: 100px;
    height: 60px;
}

.unit-box.pt {
    width: 72pt;
    height: 48pt;
}

.unit-box.cm {
    width: 5cm;
    height: 2cm;
}

.unit-info {
    flex: 1;
}

.unit-info strong {
    color: #2c3e50;
    display: block;
    margin-bottom: 5px;
}

.unit-info p {
    color: #7f8c8d;
    margin: 5px 0;
    font-size: 14px;
}

.unit-info code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
}

/* Font-Relative Units */
.font-relative-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.font-size-container {
    border: 2px dashed #3498db;
    padding: 20px;
    border-radius: 8px;
    background: white;
}

.container-label {
    background: #3498db;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 15px;
    display: inline-block;
}

.font-relative-examples {
    display: grid;
    gap: 15px;
}

.unit-box.em {
    font-size: 1.5em;
    background: #e74c3c;
    padding: 15px 20px;
    width: auto;
    height: auto;
}

.unit-box.rem {
    font-size: 1.5rem;
    background: #f39c12;
    padding: 15px 20px;
    width: auto;
    height: auto;
}

/* Em Cascade Demo */
.em-cascade-demo {
    margin-top: 20px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
}

.em-cascade-demo h4 {
    margin: 0 0 15px 0;
    color: #2c3e50;
}

.cascade-level-1 {
    font-size: 1.2em;
    padding: 10px;
    background: #3498db;
    color: white;
    border-radius: 4px;
    margin: 5px 0;
}

.cascade-level-2 {
    font-size: 1.2em;
    padding: 10px;
    background: #e74c3c;
    border-radius: 4px;
    margin: 8px 0 8px 20px;
}

.cascade-level-3 {
    font-size: 1.2em;
    padding: 10px;
    background: #f39c12;
    border-radius: 4px;
    margin: 8px 0 8px 20px;
}

/* Percentage Demo */
.percentage-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.parent-container {
    width: 400px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #3498db;
}

.parent-label {
    background: #3498db;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 15px;
    text-align: center;
}

.percentage-examples {
    display: grid;
    gap: 10px;
}

.percentage-box {
    background: #9b59b6;
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
}

.percentage-box.w25 {
    width: 25%;
}

.percentage-box.w50 {
    width: 50%;
}

.percentage-box.w75 {
    width: 75%;
}

.percentage-box.w100 {
    width: 100%;
}

.percentage-info {
    margin-top: 15px;
    text-align: center;
}

.percentage-info p {
    color: #7f8c8d;
    font-style: italic;
    margin: 0;
}

/* Viewport Demo */
.viewport-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.viewport-examples {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
}

.viewport-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 8px;
    background: #27ae60;
    position: relative;
    min-height: 80px;
}

.viewport-box.vw {
    width: 20vw;
    background: #3498db;
}

.viewport-box.vh {
    height: 20vh;
    background: #e74c3c;
}

.viewport-box.vmin {
    width: 15vmin;
    height: 15vmin;
    background: #f39c12;
}

.viewport-box.vmax {
    width: 15vmax;
    height: 15vmax;
    background: #9b59b6;
}

.viewport-info {
    font-size: 10px;
    margin-top: 5px;
    opacity: 0.9;
}

.viewport-info-panel {
    background: white;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

.viewport-info-panel h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
}

.viewport-info-panel p {
    margin: 0;
    font-family: 'Courier New', monospace;
    color: #7f8c8d;
    font-size: 14px;
}

/* Comparison Demo */
.comparison-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.comparison-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
}

.comparison-container h4 {
    text-align: center;
    color: #2c3e50;
    margin: 0 0 20px 0;
}

.comparison-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.comparison-box {
    border: 2px solid #bdc3c7;
    border-radius: 8px;
    overflow: hidden;
}

.comparison-content {
    padding: 15px;
}

.px-box .comparison-content {
    font-size: 14px;
}

.px-box h5 {
    font-size: 18px;
    color: #e74c3c;
}

.rem-box .comparison-content {
    font-size: 0.875rem;
}

.rem-box h5 {
    font-size: 1.125rem;
    color: #3498db;
}

.viewport-box .comparison-content {
    font-size: 2vw;
}

.viewport-box h5 {
    font-size: 3vw;
    color: #27ae60;
}

/* Unit Calculator */
.unit-calculator {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.calculator-controls {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.control-group {
    display: grid;
    gap: 15px;
}

.control-group label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    color: #2c3e50;
}

.control-group input[type="range"] {
    flex: 1;
    max-width: 200px;
}

.control-group span {
    min-width: 50px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #7f8c8d;
}

.calculator-results {
    background: white;
    padding: 20px;
    border-radius: 8px;
}

.calc-container {
    width: 400px;
    padding: 20px;
    margin: 0 auto;
    border: 2px dashed #3498db;
    border-radius: 8px;
    background: #f8f9fa;
}

.calc-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 15px 0;
}

.calc-box {
    color: white;
    padding: 15px 20px;
    border-radius: 6px;
    font-weight: bold;
    text-align: center;
    min-width: 80px;
}

.em-calc {
    background: #e74c3c;
    font-size: 1.5em;
}

.rem-calc {
    background: #f39c12;
    font-size: 1.5rem;
}

.percent-calc {
    background: #9b59b6;
    width: 50%;
}

.calc-info {
    font-weight: bold;
    color: #2c3e50;
    font-family: 'Courier New', monospace;
}

/* Best Practices */
.best-practices {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.practice-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.practice-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.practice-card h4 {
    color: #3498db;
    margin: 0 0 15px 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
}

.practice-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.practice-card li {
    padding: 5px 0;
    font-size: 14px;
    color: #2c3e50;
}

.practice-card li strong {
    color: #e74c3c;
    font-family: 'Courier New', monospace;
}

/* Responsive */
@media (max-width: 768px) {
    .unit-example {
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
    }
    
    .viewport-examples {
        grid-template-columns: 1fr;
    }
    
    .comparison-examples {
        grid-template-columns: 1fr;
    }
    
    .parent-container {
        width: 100%;
        max-width: 350px;
    }
    
    .calc-container {
        width: 100%;
        max-width: 300px;
    }
    
    .viewport-box .comparison-content {
        font-size: 14px;
    }
    
    .viewport-box h5 {
        font-size: 18px;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Tables",
    description: "Style HTML tables with CSS for better presentation and usability. Learn table layouts, borders, spacing, striping, responsive tables, and modern alternatives to table-based layouts.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-tables",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-tables"
    },
    topic: "CSS Tables",
    demoHtml: `<div class="css-tables-demo">
    <h1>CSS Tables Examples</h1>
    
    <div class="tables-sections">
        <div class="tables-section">
            <h3>Basic Table Styling</h3>
            <div class="basic-table-demo">
                <table class="basic-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laptop</td>
                            <td>$999</td>
                            <td>15</td>
                            <td>4.5★</td>
                        </tr>
                        <tr>
                            <td>Mouse</td>
                            <td>$29</td>
                            <td>50</td>
                            <td>4.2★</td>
                        </tr>
                        <tr>
                            <td>Keyboard</td>
                            <td>$79</td>
                            <td>25</td>
                            <td>4.7★</td>
                        </tr>
                        <tr>
                            <td>Monitor</td>
                            <td>$299</td>
                            <td>8</td>
                            <td>4.6★</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="tables-section">
            <h3>Striped Table</h3>
            <div class="striped-table-demo">
                <table class="striped-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alice Johnson</td>
                            <td>Engineering</td>
                            <td>Senior Developer</td>
                            <td>$95,000</td>
                        </tr>
                        <tr>
                            <td>Bob Smith</td>
                            <td>Marketing</td>
                            <td>Marketing Manager</td>
                            <td>$75,000</td>
                        </tr>
                        <tr>
                            <td>Carol Davis</td>
                            <td>HR</td>
                            <td>HR Specialist</td>
                            <td>$60,000</td>
                        </tr>
                        <tr>
                            <td>David Wilson</td>
                            <td>Engineering</td>
                            <td>Junior Developer</td>
                            <td>$65,000</td>
                        </tr>
                        <tr>
                            <td>Eva Brown</td>
                            <td>Finance</td>
                            <td>Financial Analyst</td>
                            <td>$70,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="tables-section">
            <h3>Hover Effects and Borders</h3>
            <div class="hover-table-demo">
                <table class="hover-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Capital</th>
                            <th>Population</th>
                            <th>Area (km²)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>United States</td>
                            <td>Washington D.C.</td>
                            <td>331 million</td>
                            <td>9,833,517</td>
                        </tr>
                        <tr>
                            <td>Brazil</td>
                            <td>Brasília</td>
                            <td>215 million</td>
                            <td>8,515,767</td>
                        </tr>
                        <tr>
                            <td>Germany</td>
                            <td>Berlin</td>
                            <td>83 million</td>
                            <td>357,386</td>
                        </tr>
                        <tr>
                            <td>Japan</td>
                            <td>Tokyo</td>
                            <td>125 million</td>
                            <td>377,975</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="tables-section">
            <h3>Responsive Table</h3>
            <div class="responsive-table-demo">
                <div class="table-container">
                    <table class="responsive-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Order ID">#12345</td>
                                <td data-label="Customer">John Doe</td>
                                <td data-label="Product">Wireless Headphones</td>
                                <td data-label="Quantity">2</td>
                                <td data-label="Unit Price">$59.99</td>
                                <td data-label="Total">$119.98</td>
                                <td data-label="Status"><span class="status shipped">Shipped</span></td>
                                <td data-label="Date">2024-01-15</td>
                            </tr>
                            <tr>
                                <td data-label="Order ID">#12346</td>
                                <td data-label="Customer">Jane Smith</td>
                                <td data-label="Product">Smartphone Case</td>
                                <td data-label="Quantity">1</td>
                                <td data-label="Unit Price">$24.99</td>
                                <td data-label="Total">$24.99</td>
                                <td data-label="Status"><span class="status processing">Processing</span></td>
                                <td data-label="Date">2024-01-16</td>
                            </tr>
                            <tr>
                                <td data-label="Order ID">#12347</td>
                                <td data-label="Customer">Mike Johnson</td>
                                <td data-label="Product">USB Cable</td>
                                <td data-label="Quantity">3</td>
                                <td data-label="Unit Price">$12.99</td>
                                <td data-label="Total">$38.97</td>
                                <td data-label="Status"><span class="status pending">Pending</span></td>
                                <td data-label="Date">2024-01-17</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="responsive-note">Resize the browser window to see responsive behavior</p>
            </div>
        </div>

        <div class="tables-section">
            <h3>Table Caption and Summary</h3>
            <div class="caption-table-demo">
                <table class="caption-table">
                    <caption>Quarterly Sales Report 2024</caption>
                    <thead>
                        <tr>
                            <th scope="col">Quarter</th>
                            <th scope="col">Revenue</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Growth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Q1 2024</th>
                            <td>$250,000</td>
                            <td>$45,000</td>
                            <td>+12%</td>
                        </tr>
                        <tr>
                            <th scope="row">Q2 2024</th>
                            <td>$280,000</td>
                            <td>$52,000</td>
                            <td>+8%</td>
                        </tr>
                        <tr>
                            <th scope="row">Q3 2024</th>
                            <td>$320,000</td>
                            <td>$68,000</td>
                            <td>+15%</td>
                        </tr>
                        <tr>
                            <th scope="row">Q4 2024</th>
                            <td>$290,000</td>
                            <td>$58,000</td>
                            <td>+5%</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row">Total</th>
                            <td>$1,140,000</td>
                            <td>$223,000</td>
                            <td>+10% avg</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <div class="tables-section">
            <h3>Table Layout Properties</h3>
            <div class="layout-demo">
                <div class="layout-examples">
                    <div class="layout-example">
                        <h4>table-layout: auto (default)</h4>
                        <table class="layout-auto">
                            <tr>
                                <td>Short</td>
                                <td>This is a much longer content that will expand</td>
                                <td>Medium content</td>
                            </tr>
                            <tr>
                                <td>Data</td>
                                <td>Columns adjust automatically based on content</td>
                                <td>More data</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="layout-example">
                        <h4>table-layout: fixed</h4>
                        <table class="layout-fixed">
                            <tr>
                                <td>Short</td>
                                <td>This is a much longer content that will be constrained</td>
                                <td>Medium content</td>
                            </tr>
                            <tr>
                                <td>Data</td>
                                <td>Fixed layout distributes space evenly</td>
                                <td>More data</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="tables-section">
            <h3>Modern Alternatives</h3>
            <div class="alternatives-demo">
                <div class="comparison">
                    <div class="alternative-example">
                        <h4>CSS Grid Alternative</h4>
                        <div class="grid-table">
                            <div class="grid-header">Name</div>
                            <div class="grid-header">Email</div>
                            <div class="grid-header">Role</div>
                            <div class="grid-cell">Alice</div>
                            <div class="grid-cell">alice@example.com</div>
                            <div class="grid-cell">Developer</div>
                            <div class="grid-cell">Bob</div>
                            <div class="grid-cell">bob@example.com</div>
                            <div class="grid-cell">Designer</div>
                            <div class="grid-cell">Carol</div>
                            <div class="grid-cell">carol@example.com</div>
                            <div class="grid-cell">Manager</div>
                        </div>
                    </div>
                    
                    <div class="alternative-example">
                        <h4>Flexbox Alternative</h4>
                        <div class="flex-table">
                            <div class="flex-row header-row">
                                <div class="flex-cell">Product</div>
                                <div class="flex-cell">Price</div>
                                <div class="flex-cell">Stock</div>
                            </div>
                            <div class="flex-row">
                                <div class="flex-cell">Laptop</div>
                                <div class="flex-cell">$999</div>
                                <div class="flex-cell">15</div>
                            </div>
                            <div class="flex-row">
                                <div class="flex-cell">Mouse</div>
                                <div class="flex-cell">$29</div>
                                <div class="flex-cell">50</div>
                            </div>
                            <div class="flex-row">
                                <div class="flex-cell">Keyboard</div>
                                <div class="flex-cell">$79</div>
                                <div class="flex-cell">25</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Tables Demo */
.css-tables-demo {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.css-tables-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.tables-sections {
    display: grid;
    gap: 25px;
}

.tables-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tables-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Base Table Styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 14px;
    background: white;
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e9ecef;
}

th {
    background-color: #f8f9fa;
    font-weight: bold;
    color: #2c3e50;
    position: sticky;
    top: 0;
    z-index: 10;
}

/* Basic Table */
.basic-table {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
}

.basic-table th {
    background: #3498db;
    color: white;
}

.basic-table td {
    border-right: 1px solid #e9ecef;
}

.basic-table td:last-child,
.basic-table th:last-child {
    border-right: none;
}

/* Striped Table */
.striped-table {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
}

.striped-table th {
    background: #2c3e50;
    color: white;
}

.striped-table tbody tr:nth-child(even) {
    background-color: #f8f9fa;
}

.striped-table tbody tr:nth-child(odd) {
    background-color: white;
}

/* Hover Table */
.hover-table {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
}

.hover-table th {
    background: #e74c3c;
    color: white;
}

.hover-table tbody tr {
    transition: background-color 0.3s ease;
}

.hover-table tbody tr:hover {
    background-color: #f39c12;
    color: white;
    cursor: pointer;
}

.hover-table tbody tr:hover td {
    border-color: rgba(255,255,255,0.2);
}

/* Responsive Table */
.table-container {
    background: white;
    border-radius: 8px;
    overflow-x: auto;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.responsive-table {
    min-width: 800px;
}

.responsive-table th {
    background: #27ae60;
    color: white;
    white-space: nowrap;
}

.responsive-table td {
    white-space: nowrap;
}

.status {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
}

.status.shipped {
    background: #d4edda;
    color: #155724;
}

.status.processing {
    background: #fff3cd;
    color: #856404;
}

.status.pending {
    background: #f8d7da;
    color: #721c24;
}

.responsive-note {
    text-align: center;
    color: #7f8c8d;
    font-style: italic;
    margin-top: 15px;
    font-size: 14px;
}

/* Caption Table */
.caption-table {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    overflow: hidden;
}

.caption-table caption {
    background: #34495e;
    color: white;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    caption-side: top;
}

.caption-table th {
    background: #3498db;
    color: white;
}

.caption-table th[scope="row"] {
    background: #2980b9;
    font-weight: bold;
}

.caption-table tfoot th {
    background: #e74c3c;
    color: white;
    font-weight: bold;
}

.caption-table tfoot td {
    background: #fadbd8;
    font-weight: bold;
    color: #c0392b;
}

/* Table Layout Examples */
.layout-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.layout-examples {
    display: grid;
    gap: 20px;
}

.layout-example {
    background: white;
    padding: 15px;
    border-radius: 8px;
}

.layout-example h4 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 16px;
}

.layout-auto {
    table-layout: auto;
    border: 1px solid #bdc3c7;
}

.layout-fixed {
    table-layout: fixed;
    border: 1px solid #bdc3c7;
}

.layout-auto td,
.layout-fixed td {
    padding: 10px;
    border: 1px solid #e9ecef;
    background: #f8f9fa;
}

.layout-auto th,
.layout-fixed th {
    background: #95a5a6;
    color: white;
    padding: 10px;
}

/* Modern Alternatives */
.alternatives-demo {
    background: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
}

.comparison {
    display: grid;
    gap: 20px;
}

.alternative-example {
    background: white;
    padding: 20px;
    border-radius: 8px;
}

.alternative-example h4 {
    margin: 0 0 15px 0;
    color: #2c3e50;
}

/* Grid Table Alternative */
.grid-table {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1px;
    background: #bdc3c7;
    border-radius: 8px;
    overflow: hidden;
}

.grid-header {
    background: #3498db;
    color: white;
    padding: 12px 15px;
    font-weight: bold;
}

.grid-cell {
    background: white;
    padding: 12px 15px;
}

.grid-cell:nth-child(3n+1) {
    background: #f8f9fa;
}

/* Flexbox Table Alternative */
.flex-table {
    border: 1px solid #bdc3c7;
    border-radius: 8px;
    overflow: hidden;
}

.flex-row {
    display: flex;
    border-bottom: 1px solid #e9ecef;
}

.flex-row:last-child {
    border-bottom: none;
}

.flex-row.header-row {
    background: #e74c3c;
    color: white;
    font-weight: bold;
}

.flex-cell {
    flex: 1;
    padding: 12px 15px;
    border-right: 1px solid #e9ecef;
}

.flex-cell:last-child {
    border-right: none;
}

.flex-row:not(.header-row) .flex-cell {
    background: white;
}

.flex-row:not(.header-row):nth-child(even) .flex-cell {
    background: #f8f9fa;
}

/* Mobile Responsive Tables */
@media (max-width: 768px) {
    .responsive-table,
    .responsive-table thead,
    .responsive-table tbody,
    .responsive-table th,
    .responsive-table td,
    .responsive-table tr {
        display: block;
    }

    .responsive-table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    .responsive-table tr {
        border: 1px solid #ccc;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 8px;
        background: white;
    }

    .responsive-table td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50% !important;
        white-space: normal;
        text-align: right;
    }

    .responsive-table td:before {
        content: attr(data-label) ": ";
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
        color: #2c3e50;
    }

    .grid-table {
        grid-template-columns: 1fr;
    }

    .grid-header:nth-child(2),
    .grid-header:nth-child(3),
    .grid-cell:nth-child(5),
    .grid-cell:nth-child(6),
    .grid-cell:nth-child(8),
    .grid-cell:nth-child(9),
    .grid-cell:nth-child(11),
    .grid-cell:nth-child(12) {
        display: none;
    }

    .comparison {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .css-tables-demo {
        margin: 10px;
        padding: 15px;
    }

    .tables-section {
        padding: 15px;
    }

    th, td {
        padding: 8px 10px;
        font-size: 13px;
    }

    .layout-examples {
        grid-template-columns: 1fr;
    }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Forms",
    description: "Style HTML forms with CSS for better user experience. Learn input styling, focus states, validation feedback, form layouts, custom checkboxes and radio buttons, and accessibility considerations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-forms",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#css-forms"
    },
    topic: "CSS Forms",
    demoHtml: `<div class="css-forms-demo">
    <h1>CSS Forms Examples</h1>
    
    <div class="forms-sections">
        <div class="forms-section">
            <h3>Basic Form Styling</h3>
            <div class="basic-form-demo">
                <form class="basic-form">
                    <div class="form-group">
                        <label for="name">Full Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890">
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </div>

        <div class="forms-section">
            <h3>Modern Form with Focus States</h3>
            <div class="modern-form-demo">
                <form class="modern-form">
                    <div class="input-group">
                        <input type="text" id="modern-name" name="name" required>
                        <label for="modern-name">Full Name</label>
                        <span class="input-border"></span>
                    </div>
                    <div class="input-group">
                        <input type="email" id="modern-email" name="email" required>
                        <label for="modern-email">Email Address</label>
                        <span class="input-border"></span>
                    </div>
                    <div class="input-group">
                        <input type="password" id="modern-password" name="password" required>
                        <label for="modern-password">Password</label>
                        <span class="input-border"></span>
                    </div>
                    <div class="input-group">
                        <select id="modern-country" name="country" required>
                            <option value=""></option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                        </select>
                        <label for="modern-country">Country</label>
                        <span class="input-border"></span>
                    </div>
                    <button type="submit" class="modern-submit">Create Account</button>
                </form>
            </div>
        </div>

        <div class="forms-section">
            <h3>Custom Checkboxes and Radio Buttons</h3>
            <div class="custom-inputs-demo">
                <form class="custom-form">
                    <fieldset class="input-section">
                        <legend>Subscription Type</legend>
                        <div class="radio-group">
                            <div class="custom-radio">
                                <input type="radio" id="free" name="subscription" value="free">
                                <label for="free">
                                    <span class="radio-custom"></span>
                                    <span class="radio-label">Free Plan</span>
                                </label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" id="pro" name="subscription" value="pro">
                                <label for="pro">
                                    <span class="radio-custom"></span>
                                    <span class="radio-label">Pro Plan</span>
                                </label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" id="enterprise" name="subscription" value="enterprise">
                                <label for="enterprise">
                                    <span class="radio-custom"></span>
                                    <span class="radio-label">Enterprise Plan</span>
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="input-section">
                        <legend>Preferences</legend>
                        <div class="checkbox-group">
                            <div class="custom-checkbox">
                                <input type="checkbox" id="newsletter" name="preferences" value="newsletter">
                                <label for="newsletter">
                                    <span class="checkbox-custom"></span>
                                    <span class="checkbox-label">Subscribe to newsletter</span>
                                </label>
                            </div>
                            <div class="custom-checkbox">
                                <input type="checkbox" id="notifications" name="preferences" value="notifications">
                                <label for="notifications">
                                    <span class="checkbox-custom"></span>
                                    <span class="checkbox-label">Enable notifications</span>
                                </label>
                            </div>
                            <div class="custom-checkbox">
                                <input type="checkbox" id="terms" name="preferences" value="terms" required>
                                <label for="terms">
                                    <span class="checkbox-custom"></span>
                                    <span class="checkbox-label">I agree to the terms and conditions</span>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

        <div class="forms-section">
            <h3>Form Validation Styling</h3>
            <div class="validation-form-demo">
                <form class="validation-form">
                    <div class="form-field">
                        <label for="val-email">Email Address</label>
                        <input type="email" id="val-email" name="email" required>
                        <span class="error-message">Please enter a valid email address</span>
                        <span class="success-message">Email looks good!</span>
                    </div>
                    <div class="form-field">
                        <label for="val-password">Password</label>
                        <input type="password" id="val-password" name="password" required minlength="8">
                        <span class="error-message">Password must be at least 8 characters long</span>
                        <span class="success-message">Password strength: Good</span>
                    </div>
                    <div class="form-field">
                        <label for="val-age">Age</label>
                        <input type="number" id="val-age" name="age" min="18" max="100">
                        <span class="error-message">Age must be between 18 and 100</span>
                        <span class="success-message">Age is valid</span>
                    </div>
                    <div class="validation-demo-controls">
                        <button type="button" onclick="addValidationClass('valid')">Show Valid State</button>
                        <button type="button" onclick="addValidationClass('invalid')">Show Invalid State</button>
                        <button type="button" onclick="addValidationClass('')">Reset</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="forms-section">
            <h3>Multi-Step Form</h3>
            <div class="multi-step-demo">
                <form class="multi-step-form">
                    <div class="step-indicator">
                        <div class="step active" data-step="1">
                            <span class="step-number">1</span>
                            <span class="step-title">Personal Info</span>
                        </div>
                        <div class="step" data-step="2">
                            <span class="step-number">2</span>
                            <span class="step-title">Address</span>
                        </div>
                        <div class="step" data-step="3">
                            <span class="step-number">3</span>
                            <span class="step-title">Review</span>
                        </div>
                    </div>

                    <div class="step-content">
                        <div class="step-panel active" data-panel="1">
                            <h4>Personal Information</h4>
                            <div class="form-row">
                                <div class="form-col">
                                    <label for="step-first-name">First Name</label>
                                    <input type="text" id="step-first-name" name="firstName">
                                </div>
                                <div class="form-col">
                                    <label for="step-last-name">Last Name</label>
                                    <input type="text" id="step-last-name" name="lastName">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-col">
                                    <label for="step-dob">Date of Birth</label>
                                    <input type="date" id="step-dob" name="dob">
                                </div>
                                <div class="form-col">
                                    <label for="step-gender">Gender</label>
                                    <select id="step-gender" name="gender">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="step-panel" data-panel="2">
                            <h4>Address Information</h4>
                            <div class="form-row">
                                <div class="form-col full-width">
                                    <label for="step-address">Street Address</label>
                                    <input type="text" id="step-address" name="address">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-col">
                                    <label for="step-city">City</label>
                                    <input type="text" id="step-city" name="city">
                                </div>
                                <div class="form-col">
                                    <label for="step-state">State</label>
                                    <input type="text" id="step-state" name="state">
                                </div>
                                <div class="form-col">
                                    <label for="step-zip">ZIP Code</label>
                                    <input type="text" id="step-zip" name="zip">
                                </div>
                            </div>
                        </div>

                        <div class="step-panel" data-panel="3">
                            <h4>Review Your Information</h4>
                            <div class="review-content">
                                <p>Please review your information before submitting.</p>
                                <div class="review-item">
                                    <strong>Name:</strong> <span id="review-name">-</span>
                                </div>
                                <div class="review-item">
                                    <strong>Date of Birth:</strong> <span id="review-dob">-</span>
                                </div>
                                <div class="review-item">
                                    <strong>Address:</strong> <span id="review-address">-</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="step-navigation">
                        <button type="button" class="step-btn prev-btn" onclick="changeStep(-1)" disabled>Previous</button>
                        <button type="button" class="step-btn next-btn" onclick="changeStep(1)">Next</button>
                        <button type="submit" class="step-btn submit-btn" style="display: none;">Submit</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="forms-section">
            <h3>Accessibility Features</h3>
            <div class="accessibility-form-demo">
                <form class="accessible-form">
                    <fieldset>
                        <legend>Accessible Form Example</legend>
                        <div class="form-group">
                            <label for="acc-name">
                                Full Name <span class="required" aria-label="required">*</span>
                            </label>
                            <input type="text" id="acc-name" name="name" required 
                                   aria-describedby="name-help"
                                   aria-invalid="false">
                            <div id="name-help" class="help-text">Enter your first and last name</div>
                        </div>
                        
                        <div class="form-group">
                            <label for="acc-phone">Phone Number</label>
                            <input type="tel" id="acc-phone" name="phone" 
                                   aria-describedby="phone-help"
                                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                   placeholder="123-456-7890">
                            <div id="phone-help" class="help-text">Format: 123-456-7890</div>
                        </div>
                        
                        <fieldset class="radio-fieldset">
                            <legend>Preferred Contact Method</legend>
                            <div class="radio-group">
                                <input type="radio" id="contact-email" name="contact" value="email">
                                <label for="contact-email">Email</label>
                                
                                <input type="radio" id="contact-phone" name="contact" value="phone">
                                <label for="contact-phone">Phone</label>
                                
                                <input type="radio" id="contact-none" name="contact" value="none">
                                <label for="contact-none">No contact</label>
                            </div>
                        </fieldset>
                        
                        <button type="submit" class="accessible-submit">
                            Submit Form
                            <span class="sr-only">(This will submit your information)</span>
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>`,
    demoCss: `/* CSS Forms Demo */
.css-forms-demo {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

.css-forms-demo h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
}

.forms-sections {
    display: grid;
    gap: 25px;
}

.forms-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.forms-section h3 {
    color: #3498db;
    margin-top: 0;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
}

/* Basic Form Styling */
.basic-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #2c3e50;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-group textarea {
    resize: vertical;
    font-family: inherit;
}

.submit-btn {
    background: #3498db;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
}

.submit-btn:active {
    transform: translateY(0);
}

/* Modern Form with Floating Labels */
.modern-form {
    max-width: 500px;
    margin: 0 auto;
}

.input-group {
    position: relative;
    margin-bottom: 25px;
}

.input-group input,
.input-group select {
    width: 100%;
    padding: 15px 10px 10px 10px;
    border: none;
    border-bottom: 2px solid #e9ecef;
    background: transparent;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.input-group input:focus,
.input-group select:focus {
    outline: none;
    border-bottom-color: #3498db;
}

.input-group label {
    position: absolute;
    top: 15px;
    left: 10px;
    font-size: 16px;
    color: #7f8c8d;
    transition: all 0.3s ease;
    pointer-events: none;
}

.input-group input:focus + label,
.input-group input:valid + label,
.input-group select:focus + label,
.input-group select:valid + label {
    top: 0;
    left: 0;
    font-size: 12px;
    color: #3498db;
    font-weight: bold;
}

.input-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #3498db;
    transition: all 0.3s ease;
}

.input-group input:focus ~ .input-border,
.input-group select:focus ~ .input-border {
    width: 100%;
    left: 0;
}

.modern-submit {
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.modern-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Custom Checkboxes and Radio Buttons */
.custom-form {
    max-width: 500px;
    margin: 0 auto;
}

.input-section {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

.input-section legend {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
}

.radio-group,
.checkbox-group {
    display: grid;
    gap: 15px;
}

.custom-radio,
.custom-checkbox {
    position: relative;
}

.custom-radio input[type="radio"],
.custom-checkbox input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.custom-radio label,
.custom-checkbox label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #2c3e50;
    padding: 10px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
}

.custom-radio label:hover,
.custom-checkbox label:hover {
    background-color: #f8f9fa;
}

.radio-custom,
.checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid #bdc3c7;
    border-radius: 50%;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-custom {
    border-radius: 4px;
}

.radio-custom::after,
.checkbox-custom::after {
    content: '';
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.radio-custom::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #3498db;
    border-radius: 50%;
}

.checkbox-custom::after {
    top: 2px;
    left: 6px;
    width: 6px;
    height: 10px;
    border: solid #3498db;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.custom-radio input[type="radio"]:checked + label .radio-custom {
    border-color: #3498db;
    background-color: rgba(52, 152, 219, 0.1);
}

.custom-checkbox input[type="checkbox"]:checked + label .checkbox-custom {
    border-color: #3498db;
    background-color: rgba(52, 152, 219, 0.1);
}

.custom-radio input[type="radio"]:checked + label .radio-custom::after,
.custom-checkbox input[type="checkbox"]:checked + label .checkbox-custom::after {
    opacity: 1;
}

.radio-label,
.checkbox-label {
    font-weight: 500;
}

/* Form Validation Styling */
.validation-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-field {
    position: relative;
    margin-bottom: 25px;
}

.form-field label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #2c3e50;
}

.form-field input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 14px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.form-field input:focus {
    outline: none;
    border-color: #3498db;
}

.form-field.valid input {
    border-color: #27ae60;
    background-color: rgba(39, 174, 96, 0.05);
}

.form-field.invalid input {
    border-color: #e74c3c;
    background-color: rgba(231, 76, 60, 0.05);
}

.error-message,
.success-message {
    display: none;
    font-size: 12px;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 4px;
}

.error-message {
    color: #e74c3c;
    background-color: rgba(231, 76, 60, 0.1);
    border: 1px solid rgba(231, 76, 60, 0.2);
}

.success-message {
    color: #27ae60;
    background-color: rgba(39, 174, 96, 0.1);
    border: 1px solid rgba(39, 174, 96, 0.2);
}

.form-field.invalid .error-message {
    display: block;
}

.form-field.valid .success-message {
    display: block;
}

.validation-demo-controls {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
}

.validation-demo-controls button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    transition: opacity 0.3s ease;
}

.validation-demo-controls button:nth-child(1) {
    background: #27ae60;
    color: white;
}

.validation-demo-controls button:nth-child(2) {
    background: #e74c3c;
    color: white;
}

.validation-demo-controls button:nth-child(3) {
    background: #95a5a6;
    color: white;
}

.validation-demo-controls button:hover {
    opacity: 0.8;
}

/* Multi-Step Form */
.multi-step-form {
    max-width: 600px;
    margin: 0 auto;
}

.step-indicator {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
}

.step-indicator::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 25%;
    right: 25%;
    height: 2px;
    background: #e9ecef;
    z-index: 1;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    position: relative;
    z-index: 2;
}

.step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e9ecef;
    color: #7f8c8d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.step.active .step-number,
.step.completed .step-number {
    background: #3498db;
    color: white;
}

.step-title {
    font-size: 12px;
    color: #7f8c8d;
    font-weight: bold;
    text-align: center;
}

.step.active .step-title {
    color: #2c3e50;
}

.step-content {
    min-height: 300px;
    margin-bottom: 20px;
}

.step-panel {
    display: none;
}

.step-panel.active {
    display: block;
}

.step-panel h4 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
}

.form-col {
    display: flex;
    flex-direction: column;
}

.form-col.full-width {
    grid-column: 1 / -1;
}

.form-col label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #2c3e50;
}

.form-col input,
.form-col select {
    padding: 10px 12px;
    border: 2px solid #e9ecef;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s ease;
}

.form-col input:focus,
.form-col select:focus {
    outline: none;
    border-color: #3498db;
}

.review-content {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 2px dashed #bdc3c7;
}

.review-item {
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
}

.review-item:last-child {
    border-bottom: none;
}

.review-item strong {
    color: #2c3e50;
    display: inline-block;
    min-width: 120px;
}

.step-navigation {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.step-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.prev-btn {
    background: #95a5a6;
    color: white;
}

.next-btn,
.submit-btn {
    background: #3498db;
    color: white;
}

.step-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.step-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Accessibility Features */
.accessible-form {
    max-width: 500px;
    margin: 0 auto;
}

.accessible-form fieldset {
    border: 2px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    margin: 0;
}

.accessible-form legend {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
}

.required {
    color: #e74c3c;
    font-weight: bold;
}

.help-text {
    font-size: 12px;
    color: #7f8c8d;
    margin-top: 5px;
}

.radio-fieldset {
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 15px;
    margin: 15px 0;
}

.radio-fieldset legend {
    font-size: 14px;
    font-weight: bold;
    color: #2c3e50;
    padding: 0 8px;
}

.radio-fieldset .radio-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.radio-fieldset input[type="radio"] {
    margin-right: 8px;
}

.radio-fieldset label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #2c3e50;
}

.accessible-submit {
    background: #27ae60;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 15px;
}

.accessible-submit:hover {
    background: #229954;
}

.accessible-submit:focus {
    outline: 3px solid rgba(39, 174, 96, 0.3);
    outline-offset: 2px;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .css-forms-demo {
        margin: 10px;
        padding: 15px;
    }

    .forms-section {
        padding: 15px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .step-indicator {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .step-indicator::before {
        display: none;
    }

    .step {
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 10px;
    }

    .step-navigation {
        flex-direction: column;
    }

    .validation-demo-controls {
        flex-direction: column;
        align-items: center;
    }

    .radio-fieldset .radio-group {
        flex-direction: column;
        gap: 10px;
    }
}`
},

// HTML LEARNING CONTENT ITEMS
{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML HOME - Introduction to HTML",
    description: "Welcome to HTML learning! HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup. HTML elements are represented by tags, and browsers use these tags to render content.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-home",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-home"
    },
    topic: "HTML Basics",
    demoHtml: `<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph in HTML.</p>
    <p>HTML is easy to learn and use.</p>
</body>
</html>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Introduction",
    description: "HTML stands for HyperText Markup Language. It is used to create web pages and web applications. HTML uses tags to structure content. Each tag has an opening tag, content, and usually a closing tag. Let's explore the basic structure of an HTML document.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-introduction",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-introduction"
    },
    topic: "HTML Basics",
    demoHtml: `<h1>HTML Introduction</h1>
<p>HTML is the <strong>foundation</strong> of web development.</p>
<p>It uses <em>tags</em> to structure content:</p>
<ul>
    <li>Headers for titles</li>
    <li>Paragraphs for text</li>
    <li>Lists for organized content</li>
</ul>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Editors",
    description: "To write HTML, you need a text editor. You can use simple text editors like Notepad, or specialized code editors like Visual Studio Code, Sublime Text, or Atom. Code editors provide syntax highlighting, auto-completion, and other helpful features for writing HTML.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-editors",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-editors"
    },
    topic: "HTML Tools",
    demoHtml: `<h2>Popular HTML Editors</h2>
<table border="1">
    <tr>
        <th>Editor</th>
        <th>Type</th>
        <th>Features</th>
    </tr>
    <tr>
        <td>Visual Studio Code</td>
        <td>Free</td>
        <td>Syntax highlighting, Extensions</td>
    </tr>
    <tr>
        <td>Sublime Text</td>
        <td>Paid</td>
        <td>Fast, Lightweight</td>
    </tr>
</table>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Basic",
    description: "Every HTML document has a basic structure. It starts with a DOCTYPE declaration, followed by the html element, which contains head and body sections. The head contains metadata, while the body contains the visible content.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-basic",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-basic"
    },
    topic: "HTML Structure",
    demoHtml: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basic HTML Structure</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <a href="https://www.example.com">This is a link</a>
</body>
</html>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Elements",
    description: "An HTML element is defined by a start tag, some content, and an end tag. Some elements like <br> and <img> are empty elements and don't have closing tags. HTML elements can be nested inside other elements to create complex structures.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-elements",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-elements"
    },
    topic: "HTML Elements",
    demoHtml: `<div>
    <h2>HTML Elements Example</h2>
    <p>This paragraph contains <strong>bold text</strong> and <em>italic text</em>.</p>
    <br>
    <p>Line break above, and here's an image:</p>
    <img src="https://via.placeholder.com/200x100" alt="Placeholder" width="200">
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Attributes",
    description: "HTML attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like name='value'. Common attributes include id, class, src for images, href for links, and style for inline CSS.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-attributes",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-attributes"
    },
    topic: "HTML Attributes",
    demoHtml: `<div>
    <h2 id="main-title" class="title">HTML Attributes</h2>
    <p class="description" style="color: blue;">This paragraph has class and style attributes.</p>
    <a href="https://www.example.com" target="_blank" title="External Link">Click here (opens in new tab)</a>
    <br><br>
    <img src="https://via.placeholder.com/150" alt="Sample Image" title="This is a sample image">
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Headings",
    description: "HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading, while <h6> defines the least important heading. Headings help structure your content and are important for SEO and accessibility.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-headings",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-headings"
    },
    topic: "HTML Headings",
    demoHtml: `<h1>Heading 1 - Main Title</h1>
<h2>Heading 2 - Section Title</h2>
<h3>Heading 3 - Subsection</h3>
<h4>Heading 4 - Sub-subsection</h4>
<h5>Heading 5 - Minor Heading</h5>
<h6>Heading 6 - Smallest Heading</h6>
<p>Notice how the headings get progressively smaller!</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Paragraphs",
    description: "HTML paragraphs are defined with the <p> tag. A paragraph always starts on a new line, and browsers automatically add some white space (margins) before and after a paragraph. You cannot change the display by adding extra spaces or extra lines in your HTML code.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-paragraphs",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-paragraphs"
    },
    topic: "HTML Paragraphs",
    demoHtml: `<h2>HTML Paragraphs</h2>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>This paragraph contains a lot of lines
in the source code,
but the browser
ignores it.</p>
<p>This paragraph contains         a lot of spaces in the source         code, but the browser ignores it.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Styles",
    description: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more. You can use the style attribute to apply CSS directly to HTML elements. This is called inline CSS.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-styles",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-styles"
    },
    topic: "HTML Styling",
    demoHtml: `<h1 style="color: blue; text-align: center;">Styled Heading</h1>
<p style="color: red; font-size: 18px;">This is a red paragraph with larger font.</p>
<p style="background-color: yellow; padding: 10px;">This paragraph has a yellow background.</p>
<p style="font-family: Arial, sans-serif; font-weight: bold;">This text uses Arial font and is bold.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Formatting",
    description: "HTML contains several elements for defining text with special meaning. Formatting elements were designed to display special types of text like bold, italic, underlined, etc. These elements help emphasize content and improve readability.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-formatting",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-formatting"
    },
    topic: "HTML Formatting",
    demoHtml: `<h2>Text Formatting Examples</h2>
<p><b>This text is bold</b></p>
<p><strong>This text is important (strong)</strong></p>
<p><i>This text is italic</i></p>
<p><em>This text is emphasized</em></p>
<p><mark>This text is highlighted</mark></p>
<p><small>This is smaller text</small></p>
<p><del>This text is deleted</del></p>
<p><ins>This text is inserted</ins></p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup></p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Quotations",
    description: "HTML provides several elements for quotations and citations. Use <blockquote> for longer quotes, <q> for shorter inline quotes, <abbr> for abbreviations, <cite> for citing works, and <bdo> for bi-directional text override.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-quotations",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-quotations"
    },
    topic: "HTML Quotations",
    demoHtml: `<h2>HTML Quotations and Citations</h2>
<blockquote cite="https://www.example.com">
This is a longer quotation that stands out from regular text. It's typically indented and styled differently.
</blockquote>
<p>Einstein said, <q>Imagination is more important than knowledge.</q></p>
<p>The <abbr title="World Wide Web">WWW</abbr> was invented by Tim Berners-Lee.</p>
<p><cite>The Great Gatsby</cite> was written by F. Scott Fitzgerald.</p>
<bdo dir="rtl">This text will be right-to-left!</bdo>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Comments",
    description: "HTML comments are used to insert notes in the HTML source code. Comments are not displayed by the browser, but they can be helpful for documenting your code. Comments start with <!-- and end with -->.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-comments",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-comments"
    },
    topic: "HTML Comments",
    demoHtml: `<!-- This is a comment - you won't see this in the browser -->
<h2>HTML Comments Example</h2>
<!-- 
This is a 
multi-line comment
that explains the following content
-->
<p>This paragraph is visible to users.</p>
<!-- TODO: Add more content here later -->
<p>Comments help document your code for future reference.</p>
<!-- End of content section -->`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Colors",
    description: "HTML colors can be specified using predefined color names, RGB values, HEX values, HSL values, or RGBA/HSLA for transparency. You can apply colors to text, backgrounds, borders, and other elements using CSS or the style attribute.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-colors",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-colors"
    },
    topic: "HTML Colors",
    demoHtml: `<h2>HTML Color Examples</h2>
<p style="color: red;">Red text using color name</p>
<p style="color: #0000FF;">Blue text using HEX value</p>
<p style="color: rgb(0, 128, 0);">Green text using RGB</p>
<p style="color: hsl(300, 100%, 50%);">Magenta text using HSL</p>
<div style="background-color: yellow; padding: 10px;">Yellow background</div>
<div style="background-color: rgba(255, 0, 0, 0.3); padding: 10px;">Semi-transparent red background</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML CSS",
    description: "CSS (Cascading Style Sheets) is used to format the layout of HTML elements. CSS can be added to HTML in three ways: Inline (using the style attribute), Internal (using a <style> element in the <head> section), and External (using a <link> element to link to an external CSS file).",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-css",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-css"
    },
    topic: "HTML and CSS",
    demoHtml: `<!DOCTYPE html>
<html>
<head>
    <style>
        .internal-style { color: blue; font-size: 18px; }
        #unique-element { background-color: lightgray; padding: 10px; }
    </style>
</head>
<body>
    <h2>CSS in HTML</h2>
    <p style="color: red; font-weight: bold;">Inline CSS example</p>
    <p class="internal-style">Internal CSS example</p>
    <div id="unique-element">Element with ID styling</div>
</body>
</html>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Links",
    description: "HTML links are hyperlinks that allow users to click from one page to another. Links are defined using the <a> tag with the href attribute. You can link to other pages, sections within the same page, email addresses, or files.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-links",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-links"
    },
    topic: "HTML Links",
    demoHtml: `<h2>HTML Links Examples</h2>
<a href="https://www.example.com">Visit Example.com</a><br><br>
<a href="https://www.google.com" target="_blank">Open Google in new tab</a><br><br>
<a href="#section1">Link to section on same page</a><br><br>
<a href="mailto:someone@example.com">Send email</a><br><br>
<a href="tel:+1234567890">Call us</a><br><br>
<a href="document.pdf" download>Download PDF</a><br><br>
<h3 id="section1">Section 1</h3>
<p>This is the section that the internal link points to.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Images",
    description: "Images are defined using the <img> tag. The <img> tag is empty and contains attributes only. The src attribute specifies the path to the image, while the alt attribute provides alternative text for screen readers and when images cannot be displayed.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-images",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-images"
    },
    topic: "HTML Images",
    demoHtml: `<h2>HTML Images</h2>
<img src="https://via.placeholder.com/300x200/blue/white?text=Sample+Image" alt="Sample Image" width="300" height="200">
<br><br>
<img src="https://via.placeholder.com/150x150/green/white?text=Small" alt="Small Image" style="border: 2px solid black;">
<br><br>
<p>Image as a link:</p>
<a href="https://www.example.com">
    <img src="https://via.placeholder.com/100x50/red/white?text=Click+Me" alt="Clickable Image">
</a>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Favicon",
    description: "A favicon is a small image displayed next to the page title in the browser tab. To add a favicon to your HTML page, use a <link> element inside the <head> section. The favicon should be 16x16 pixels and in .ico, .png, or .gif format.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-favicon",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-favicon"
    },
    topic: "HTML Favicon",
    demoHtml: `<!DOCTYPE html>
<html>
<head>
    <title>My Website with Favicon</title>
    <!-- Favicon links -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
</head>
<body>
    <h1>Website with Favicon</h1>
    <p>Check the browser tab to see the favicon!</p>
    <p>Note: Favicons may not display in preview due to security restrictions.</p>
</body>
</html>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Page Title",
    description: "The HTML <title> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab. The title is also used by search engines as the clickable headline for search results.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-page-title",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-page-title"
    },
    topic: "HTML Page Title",
    demoHtml: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Awesome Website - Home Page</title>
    <meta charset="UTF-8">
    <meta name="description" content="This is a sample webpage demonstrating HTML page titles">
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>Look at the browser tab to see the page title!</p>
    <p>The title "My Awesome Website - Home Page" appears in:</p>
    <ul>
        <li>Browser tab</li>
        <li>Search engine results</li>
        <li>Social media previews</li>
        <li>Bookmarks</li>
    </ul>
</body>
</html>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Tables",
    description: "HTML tables allow you to arrange data in rows and columns. A table is defined with the <table> tag. Table rows are defined with <tr>, table headers with <th>, and table data with <td>. You can also use <caption>, <thead>, <tbody>, and <tfoot> for better structure.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-tables",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-tables"
    },
    topic: "HTML Tables",
    demoHtml: `<h2>HTML Table Example</h2>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <caption>Employee Information</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>Engineering</td>
            <td>$75,000</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Marketing</td>
            <td>$60,000</td>
        </tr>
        <tr>
            <td>Bob Johnson</td>
            <td>35</td>
            <td>Sales</td>
            <td>$65,000</td>
        </tr>
    </tbody>
</table>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Lists",
    description: "HTML lists allow you to group related items together. There are three types of lists: unordered lists (<ul>) with bullet points, ordered lists (<ol>) with numbers, and description lists (<dl>) with terms and descriptions. List items use <li>, <dt>, and <dd> tags respectively.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-lists",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-lists"
    },
    topic: "HTML Lists",
    demoHtml: `<h2>HTML Lists Examples</h2>

<h3>Unordered List</h3>
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>

<h3>Ordered List</h3>
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<h3>Description List</h3>
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
    <dt>JS</dt>
    <dd>JavaScript</dd>
</dl>

<h3>Nested List</h3>
<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Orange</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrot</li>
            <li>Broccoli</li>
        </ul>
    </li>
</ul>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Block & Inline",
    description: "HTML elements are displayed as either block or inline elements. Block elements start on a new line and take up the full width available (like <div>, <p>, <h1>). Inline elements don't start on a new line and only take up as much width as necessary (like <span>, <a>, <strong>).",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-block-inline",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-block-inline"
    },
    topic: "HTML Display Types",
    demoHtml: `<h2>Block vs Inline Elements</h2>

<div style="background-color: lightblue; padding: 10px; margin: 10px 0;">
    This is a BLOCK element (div). It takes the full width.
</div>

<div style="background-color: lightgreen; padding: 10px; margin: 10px 0;">
    This is another BLOCK element (div).
</div>

<p>This paragraph contains <span style="background-color: yellow;">inline elements</span> like <strong>strong text</strong> and <em>emphasized text</em> that flow within the text.</p>

<p>Here are more inline elements: <a href="#" style="color: blue;">link</a>, <code style="background-color: lightgray;">code</code>, and <mark>highlighted text</mark>.</p>

<h3 style="background-color: lightcoral; padding: 5px;">Block element (heading)</h3>
<p style="background-color: lightyellow; padding: 5px;">Block element (paragraph)</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Div",
    description: "The <div> element is a generic container that defines a division or section in an HTML document. It's a block-level element that's often used to group other HTML elements and apply CSS styling. Divs are essential for creating layouts and structuring web pages.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-div",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-div"
    },
    topic: "HTML Div Element",
    demoHtml: `<h2>HTML Div Examples</h2>

<div style="background-color: #f0f0f0; padding: 20px; border: 1px solid #ccc; margin: 10px 0;">
    <h3>Container Div</h3>
    <p>This entire section is wrapped in a div element.</p>
</div>

<div style="display: flex; gap: 10px; margin: 10px 0;">
    <div style="background-color: lightblue; padding: 15px; flex: 1;">
        <h4>Left Column</h4>
        <p>Content in left div</p>
    </div>
    <div style="background-color: lightgreen; padding: 15px; flex: 1;">
        <h4>Right Column</h4>
        <p>Content in right div</p>
    </div>
</div>

<div style="background-color: lightyellow; padding: 10px; text-align: center; border-radius: 5px;">
    <div style="background-color: orange; padding: 5px; display: inline-block;">
        Nested div inside another div
    </div>
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Classes",
    description: "The class attribute is used to specify one or more class names for an HTML element. Classes are used to apply CSS styling to multiple elements or to select elements with JavaScript. Multiple elements can share the same class, and an element can have multiple classes.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-classes",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-classes"
    },
    topic: "HTML Classes",
    demoHtml: `<style>
.highlight { background-color: yellow; padding: 5px; }
.bold-text { font-weight: bold; }
.blue-text { color: blue; }
.box { border: 2px solid black; padding: 10px; margin: 5px 0; }
</style>

<h2>HTML Classes Example</h2>

<p class="highlight">This paragraph has the "highlight" class.</p>

<p class="bold-text blue-text">This paragraph has multiple classes: "bold-text" and "blue-text".</p>

<div class="box">
    <h3 class="highlight bold-text">This heading uses "highlight" and "bold-text" classes</h3>
    <p class="blue-text">This paragraph uses the "blue-text" class.</p>
</div>

<div class="box highlight">
    <p>This div has both "box" and "highlight" classes applied.</p>
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Id",
    description: "The id attribute specifies a unique id for an HTML element. The id must be unique within the HTML document - no two elements can have the same id. IDs are used to style specific elements with CSS or to target elements with JavaScript. Unlike classes, each element can have only one id.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-id",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-id"
    },
    topic: "HTML IDs",
    demoHtml: `<style>
#header { background-color: navy; color: white; padding: 15px; text-align: center; }
#sidebar { background-color: lightgray; padding: 10px; float: left; width: 30%; }
#main-content { background-color: white; padding: 10px; float: right; width: 65%; }
#footer { background-color: darkgray; color: white; padding: 10px; text-align: center; clear: both; }
</style>

<div id="header">
    <h2>Website Header (id="header")</h2>
</div>

<div id="sidebar">
    <h3>Sidebar (id="sidebar")</h3>
    <ul>
        <li><a href="#main-content">Link to main content</a></li>
        <li><a href="#footer">Link to footer</a></li>
    </ul>
</div>

<div id="main-content">
    <h3>Main Content (id="main-content")</h3>
    <p>Each element has a unique ID that can be used for styling or linking.</p>
    <p>IDs are unique - only one element per page can have a specific ID.</p>
</div>

<div id="footer">
    <p>Footer (id="footer") - Copyright 2024</p>
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Iframes",
    description: "The <iframe> tag specifies an inline frame that embeds another document within the current HTML document. Common uses include embedding videos, maps, or other websites. Always use the src attribute to specify the URL of the document to embed.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-iframes",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-iframes"
    },
    topic: "HTML Iframes",
    demoHtml: `<h2>HTML Iframe Examples</h2>

<h3>Basic Iframe</h3>
<iframe src="https://www.example.com" width="400" height="200" style="border: 1px solid black;">
    Your browser does not support iframes.
</iframe>

<h3>Responsive Iframe</h3>
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.example.com" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
            allowfullscreen>
    </iframe>
</div>

<h3>Iframe with Title</h3>
<iframe src="https://www.example.com" 
        width="300" 
        height="150" 
        title="Example Website"
        style="border: 2px solid blue;">
</iframe>

<p><strong>Note:</strong> Many websites block iframe embedding for security reasons.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML JavaScript",
    description: "JavaScript can be added to HTML pages to make them interactive and dynamic. You can include JavaScript using the <script> tag either inline or by linking to external files. JavaScript can manipulate HTML elements, handle events, and create dynamic content.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-javascript",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-javascript"
    },
    topic: "HTML and JavaScript",
    demoHtml: `<h2>HTML with JavaScript</h2>

<button onclick="showAlert()">Click me for alert</button>
<br><br>

<button onclick="changeText()">Change text below</button>
<p id="demo">Original text</p>

<button onclick="changeColor()">Change color</button>
<p id="colorText" style="font-size: 18px;">This text will change color</p>

<script>
function showAlert() {
    alert("Hello from JavaScript!");
}

function changeText() {
    document.getElementById("demo").innerHTML = "Text changed by JavaScript!";
}

function changeColor() {
    var colors = ["red", "blue", "green", "purple", "orange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorText").style.color = randomColor;
}
</script>

<p><strong>JavaScript functions:</strong></p>
<ul>
    <li>showAlert() - Shows an alert dialog</li>
    <li>changeText() - Changes paragraph content</li>
    <li>changeColor() - Randomly changes text color</li>
</ul>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML File Paths",
    description: "A file path describes the location of a file in a website's folder structure. There are two types: absolute paths (full URL) and relative paths (relative to current page). Understanding file paths is crucial for linking to images, CSS files, JavaScript files, and other pages.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-file-paths",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-file-paths"
    },
    topic: "HTML File Paths",
    demoHtml: `<h2>HTML File Paths Examples</h2>

<h3>Absolute Paths</h3>
<p>Full URL to external resource:</p>
<code>https://www.example.com/images/photo.jpg</code>

<h3>Relative Paths</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Path</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>image.jpg</code></td>
        <td>File in same folder</td>
    </tr>
    <tr>
        <td><code>images/image.jpg</code></td>
        <td>File in subfolder</td>
    </tr>
    <tr>
        <td><code>../image.jpg</code></td>
        <td>File in parent folder</td>
    </tr>
    <tr>
        <td><code>/images/image.jpg</code></td>
        <td>File from root directory</td>
    </tr>
</table>

<h3>Examples in HTML</h3>
<p>Same folder: <code>&lt;img src="photo.jpg"&gt;</code></p>
<p>Subfolder: <code>&lt;img src="images/photo.jpg"&gt;</code></p>
<p>Parent folder: <code>&lt;img src="../photo.jpg"&gt;</code></p>
<p>Root directory: <code>&lt;img src="/images/photo.jpg"&gt;</code></p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Head",
    description: "The <head> element contains metadata about the HTML document. This information is not displayed on the page but is used by browsers and search engines. Common elements include <title>, <meta>, <link>, <style>, and <script>.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-head",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-head"
    },
    topic: "HTML Head Section",
    demoHtml: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Page title shown in browser tab -->
    <title>My Website - HTML Head Example</title>
    
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO meta tags -->
    <meta name="description" content="Learn about the HTML head section and its elements">
    <meta name="keywords" content="HTML, head, meta, title, SEO">
    <meta name="author" content="Your Name">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- External CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Internal CSS -->
    <style>
        body { font-family: Arial, sans-serif; }
        .highlight { background-color: yellow; }
    </style>
    
    <!-- JavaScript -->
    <script>
        console.log("Page loaded");
    </script>
</head>
<body>
    <h1>HTML Head Section Demo</h1>
    <p class="highlight">Check the browser tab, page source, and developer tools to see the head elements in action!</p>
</body>
</html>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Layout",
    description: "HTML layout refers to how elements are positioned and organized on a web page. Modern layouts use CSS Grid, Flexbox, or traditional methods like floats. Common layout patterns include header, navigation, main content, sidebar, and footer sections.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-layout",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-layout"
    },
    topic: "HTML Layout",
    demoHtml: `<style>
.layout-container { 
    display: grid;
    grid-template-areas: 
        "header header"
        "nav main"
        "footer footer";
    grid-template-rows: 60px 1fr 50px;
    grid-template-columns: 200px 1fr;
    gap: 10px;
    height: 400px;
}
.header { grid-area: header; background: #4CAF50; color: white; padding: 10px; }
.nav { grid-area: nav; background: #f1f1f1; padding: 10px; }
.main { grid-area: main; background: #fff; padding: 10px; border: 1px solid #ccc; }
.footer { grid-area: footer; background: #333; color: white; padding: 10px; }
</style>

<div class="layout-container">
    <header class="header">
        <h2>Website Header</h2>
    </header>
    
    <nav class="nav">
        <h3>Navigation</h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <main class="main">
        <h2>Main Content</h2>
        <p>This is the main content area. It contains the primary information of the webpage.</p>
        <p>This layout uses CSS Grid to create a responsive structure with header, navigation, main content, and footer areas.</p>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 Website Footer</p>
    </footer>
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Responsive",
    description: "Responsive HTML design ensures your webpage looks good on all devices - desktops, tablets, and phones. Key techniques include viewport meta tag, flexible grid layouts, flexible images, and media queries in CSS to adapt to different screen sizes.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-responsive",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-responsive"
    },
    topic: "HTML Responsive Design",
    demoHtml: `<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.responsive-container { max-width: 100%; margin: 0 auto; }
.responsive-grid { 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}
.responsive-box { 
    background: #f0f0f0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
.responsive-image { 
    width: 100%;
    height: auto;
    max-width: 300px;
}
@media screen and (max-width: 600px) {
    .responsive-grid { grid-template-columns: 1fr; }
    .responsive-box { padding: 10px; }
}
</style>

<div class="responsive-container">
    <h2>Responsive HTML Example</h2>
    <p>Resize your browser window to see the responsive behavior!</p>
    
    <div class="responsive-grid">
        <div class="responsive-box">
            <h3>Box 1</h3>
            <p>This layout adapts to different screen sizes using CSS Grid and media queries.</p>
        </div>
        <div class="responsive-box">
            <h3>Box 2</h3>
            <img src="https://via.placeholder.com/300x200" alt="Responsive Image" class="responsive-image">
        </div>
        <div class="responsive-box">
            <h3>Box 3</h3>
            <p>On mobile devices, these boxes stack vertically instead of horizontally.</p>
        </div>
    </div>
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Computercode",
    description: "HTML provides several elements for displaying computer code: <code> for inline code, <pre> for preformatted text, <kbd> for keyboard input, <samp> for sample output, and <var> for variables. These elements help distinguish code from regular text.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-computercode",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-computercode"
    },
    topic: "HTML Computer Code",
    demoHtml: `<h2>HTML Computer Code Elements</h2>

<h3>Inline Code</h3>
<p>Use the <code>console.log()</code> function to print to the browser console.</p>
<p>The <code>&lt;html&gt;</code> element is the root of an HTML document.</p>

<h3>Code Block</h3>
<pre><code>function greetUser(name) {
    console.log("Hello, " + name + "!");
    return "Greeting sent";
}

greetUser("World");</code></pre>

<h3>Keyboard Input</h3>
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.</p>
<p>To save a file, press <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>

<h3>Sample Output</h3>
<p>When you run the code above, you'll see:</p>
<samp>
Hello, World!<br>
"Greeting sent"
</samp>

<h3>Variables</h3>
<p>The function takes a parameter called <var>name</var>.</p>
<p>The result is stored in the variable <var>result</var>.</p>

<h3>Preformatted Text</h3>
<pre>
    This text preserves
        spaces and line breaks
            exactly as written
    in the HTML source code.
</pre>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Semantics",
    description: "Semantic HTML uses HTML5 elements that clearly describe their meaning in a human and machine readable way. Elements like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> provide meaning to the structure of web content, improving accessibility and SEO.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-semantics",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-semantics"
    },
    topic: "HTML Semantic Elements",
    demoHtml: `<header style="background-color: #333; color: white; padding: 20px; text-align: center;">
    <h1>Website Title</h1>
    <nav>
        <a href="#" style="color: white; margin: 0 10px;">Home</a>
        <a href="#" style="color: white; margin: 0 10px;">About</a>
        <a href="#" style="color: white; margin: 0 10px;">Services</a>
        <a href="#" style="color: white; margin: 0 10px;">Contact</a>
    </nav>
</header>

<main style="display: flex; margin: 20px 0;">
    <section style="flex: 2; padding: 0 20px;">
        <h2>Main Content Section</h2>
        <article style="border: 1px solid #ddd; padding: 15px; margin: 10px 0;">
            <h3>Article Title</h3>
            <p>This is an article within the main section. Articles are independent, reusable content.</p>
            <time datetime="2024-01-15">January 15, 2024</time>
        </article>
        <article style="border: 1px solid #ddd; padding: 15px; margin: 10px 0;">
            <h3>Another Article</h3>
            <p>Each article stands alone and could be distributed independently.</p>
        </article>
    </section>
    
    <aside style="flex: 1; background-color: #f9f9f9; padding: 20px;">
        <h3>Sidebar</h3>
        <p>This aside contains supplementary information related to the main content.</p>
        <details>
            <summary>More Information</summary>
            <p>Additional details that can be shown or hidden.</p>
        </details>
    </aside>
</main>

<footer style="background-color: #333; color: white; padding: 20px; text-align: center;">
    <p>&copy; 2024 Semantic HTML Example</p>
</footer>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Forms",
    description: "HTML forms are used to collect user input. The <form> element contains form controls like input fields, textareas, buttons, checkboxes, radio buttons, and select lists. Forms use various input types and attributes to create interactive user interfaces.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-forms",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-forms"
    },
    topic: "HTML Forms",
    demoHtml: `<h2>HTML Form Example</h2>
<form style="max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #ccc;">
    <h3>Contact Form</h3>
    
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0;"><br>
    
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 8px; margin: 5px 0 15px 0;"><br>
    
    <label for="phone">Phone:</label><br>
    <input type="tel" id="phone" name="phone" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;"><br>
    
    <label for="subject">Subject:</label><br>
    <select id="subject" name="subject" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;">
        <option value="">Choose a subject</option>
        <option value="general">General Inquiry</option>
        <option value="support">Technical Support</option>
        <option value="sales">Sales Question</option>
    </select><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;"></textarea><br>
    
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Subscribe to newsletter</label><br><br>
    
    <input type="submit" value="Send Message" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;">
    <input type="reset" value="Clear Form" style="background-color: #f44336; color: white; padding: 10px 20px; border: none; cursor: pointer; margin-left: 10px;">
</form>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Input Types",
    description: "HTML5 introduced many new input types that provide better user experience and validation. These include text, email, password, number, date, color, range, file, and many more. Each input type has specific behavior and validation rules.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-input-types",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-input-types"
    },
    topic: "HTML Input Types",
    demoHtml: `<h2>HTML Input Types</h2>
<form style="max-width: 600px; margin: 0 auto;">
    
    <h3>Text Inputs</h3>
    <input type="text" placeholder="Text input" style="margin: 5px; padding: 5px;"><br>
    <input type="email" placeholder="Email input" style="margin: 5px; padding: 5px;"><br>
    <input type="password" placeholder="Password input" style="margin: 5px; padding: 5px;"><br>
    <input type="url" placeholder="URL input" style="margin: 5px; padding: 5px;"><br>
    <input type="tel" placeholder="Phone input" style="margin: 5px; padding: 5px;"><br>
    <input type="search" placeholder="Search input" style="margin: 5px; padding: 5px;"><br>
    
    <h3>Number and Range</h3>
    <input type="number" placeholder="Number" min="1" max="100" style="margin: 5px; padding: 5px;"><br>
    <input type="range" min="0" max="100" value="50" style="margin: 5px;"><br>
    
    <h3>Date and Time</h3>
    <input type="date" style="margin: 5px; padding: 5px;"><br>
    <input type="time" style="margin: 5px; padding: 5px;"><br>
    <input type="datetime-local" style="margin: 5px; padding: 5px;"><br>
    <input type="month" style="margin: 5px; padding: 5px;"><br>
    <input type="week" style="margin: 5px; padding: 5px;"><br>
    
    <h3>Selection Inputs</h3>
    <input type="color" style="margin: 5px; width: 50px; height: 30px;"><br>
    <input type="file" style="margin: 5px; padding: 5px;"><br>
    
    <h3>Boolean Inputs</h3>
    <input type="checkbox" id="check1"> <label for="check1">Checkbox option</label><br>
    <input type="radio" id="radio1" name="radiogroup"> <label for="radio1">Radio option 1</label><br>
    <input type="radio" id="radio2" name="radiogroup"> <label for="radio2">Radio option 2</label><br>
    
    <h3>Buttons</h3>
    <input type="submit" value="Submit" style="margin: 5px; padding: 8px 15px;">
    <input type="reset" value="Reset" style="margin: 5px; padding: 8px 15px;">
    <input type="button" value="Button" onclick="alert('Button clicked!')" style="margin: 5px; padding: 8px 15px;">
    
</form>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Media",
    description: "HTML5 provides native support for embedding audio and video content without plugins. The <audio> and <video> elements support multiple formats and provide controls, autoplay, loop, and other features for rich media experiences.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-media",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-media"
    },
    topic: "HTML Media",
    demoHtml: `<h2>HTML Media Elements</h2>

<h3>Audio Element</h3>
<audio controls style="width: 100%; margin: 10px 0;">
    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<h3>Video Element</h3>
<video width="400" height="300" controls style="margin: 10px 0;">
    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
    <source src="https://sample-videos.com/zip/10/webm/SampleVideo_1280x720_1mb.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<h3>Media Attributes</h3>
<p>Common media attributes:</p>
<ul>
    <li><strong>controls</strong> - Show play/pause controls</li>
    <li><strong>autoplay</strong> - Start playing automatically</li>
    <li><strong>loop</strong> - Repeat playback</li>
    <li><strong>muted</strong> - Start muted</li>
    <li><strong>poster</strong> - Image to show before video plays</li>
</ul>

<h3>Example with Attributes</h3>
<code>&lt;video width="320" height="240" controls autoplay muted loop&gt;<br>
&nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;<br>
&nbsp;&nbsp;Your browser does not support the video tag.<br>
&lt;/video&gt;</code>

<p><strong>Note:</strong> Many browsers block autoplay for user experience reasons.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Entities",
    description: "HTML entities are used to display reserved characters that have special meaning in HTML, or characters that are not present on your keyboard. They start with an ampersand (&) and end with a semicolon (;). Common entities include &lt;, &gt;, &amp;, &quot;, and &#39;.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-entities",
    related: {
        text: "Try the Live Demo",
        url: "Learn.html#html-entities"
    },
    topic: "HTML Entities",
    demoHtml: `<h2>HTML Entities Examples</h2>

<h3>Reserved Characters</h3>
<table border="1" style="border-collapse: collapse; margin: 10px 0;">
    <tr>
        <th>Character</th>
        <th>Entity</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>&lt;</td>
        <td>&amp;lt;</td>
        <td>Less than</td>
    </tr>
    <tr>
        <td>&gt;</td>
        <td>&amp;gt;</td>
        <td>Greater than</td>
    </tr>
    <tr>
        <td>&amp;</td>
        <td>&amp;amp;</td>
        <td>Ampersand</td>
    </tr>
    <tr>
        <td>"</td>
        <td>&amp;quot;</td>
        <td>Quotation mark</td>
    </tr>
    <tr>
        <td>'</td>
        <td>&amp;#39;</td>
        <td>Apostrophe</td>
    </tr>
</table>

<h3>Special Characters</h3>
<p>&copy; Copyright (&amp;copy;)</p>
<p>&reg; Registered (&amp;reg;)</p>
<p>&trade; Trademark (&amp;trade;)</p>
<p>&nbsp; Non-breaking space (&amp;nbsp;)</p>
<p>&euro; Euro (&amp;euro;)</p>
<p>&pound; Pound (&amp;pound;)</p>
<p>&yen; Yen (&amp;yen;)</p>

<h3>Mathematical Symbols</h3>
<p>&alpha; Alpha (&amp;alpha;)</p>
<p>&beta; Beta (&amp;beta;)</p>
<p>&gamma; Gamma (&amp;gamma;)</p>
<p>&pi; Pi (&amp;pi;)</p>
<p>&sum; Sum (&amp;sum;)</p>
<p>&infin; Infinity (&amp;infin;)</p>

<h3>HTML Tag Display</h3>
<p>To display HTML tags: &lt;p&gt;This is a paragraph&lt;/p&gt;</p>
<p>To display code: &lt;script&gt;alert("Hello");&lt;/script&gt;</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Style Guide",
    description: "Following HTML style guide best practices makes your code more readable, maintainable, and professional. Use consistent indentation, lowercase tag names, quote attribute values, and provide meaningful names for elements.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-style-guide",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-style-guide"
    },
    topic: "HTML Best Practices",
    demoHtml: `<h2>HTML Style Guide Examples</h2>

<h3>✅ Good HTML Style</h3>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Welcome&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3>Best Practices</h3>
<ul>
    <li>Use lowercase for element names</li>
    <li>Always quote attribute values</li>
    <li>Use consistent indentation (2 or 4 spaces)</li>
    <li>Include alt attributes for images</li>
    <li>Use semantic HTML elements</li>
    <li>Validate your HTML code</li>
</ul>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Form Attributes",
    description: "Form attributes control how forms behave and validate user input. Common attributes include action (where to send data), method (GET/POST), target, enctype, and HTML5 validation attributes like required and pattern.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-form-attributes",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-form-attributes"
    },
    topic: "HTML Form Attributes",
    demoHtml: `<h2>HTML Form Attributes</h2>

<form action="/submit" method="post" target="_blank" enctype="application/x-www-form-urlencoded" autocomplete="on" novalidate style="border: 1px solid #ccc; padding: 20px;">
    <h3>Form with Multiple Attributes</h3>
    
    <label for="username">Username (required):</label><br>
    <input type="text" id="username" name="username" required minlength="3" maxlength="20" placeholder="Enter username"><br><br>
    
    <label for="email">Email (pattern validation):</label><br>
    <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required><br><br>
    
    <label for="age">Age (number range):</label><br>
    <input type="number" id="age" name="age" min="18" max="100" required><br><br>
    
    <label for="website">Website (URL):</label><br>
    <input type="url" id="website" name="website" placeholder="https://example.com"><br><br>
    
    <input type="submit" value="Submit Form">
    <input type="reset" value="Reset Form">
</form>

<h3>Common Form Attributes</h3>
<ul>
    <li><strong>action:</strong> URL to send form data</li>
    <li><strong>method:</strong> HTTP method (GET/POST)</li>
    <li><strong>target:</strong> Where to open response</li>
    <li><strong>enctype:</strong> How to encode form data</li>
    <li><strong>autocomplete:</strong> Enable/disable autocomplete</li>
    <li><strong>novalidate:</strong> Skip HTML5 validation</li>
</ul>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Form Elements",
    description: "HTML forms contain various elements for user input including input, textarea, select, button, fieldset, legend, label, and HTML5 elements like datalist and output. Each serves different purposes for collecting user data.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-form-elements",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-form-elements"
    },
    topic: "HTML Form Elements",
    demoHtml: `<h2>HTML Form Elements</h2>

<form style="max-width: 600px; border: 1px solid #ccc; padding: 20px;">
    <fieldset>
        <legend>Personal Information</legend>
        
        <label for="fullname">Full Name:</label><br>
        <input type="text" id="fullname" name="fullname"><br><br>
        
        <label for="bio">Biography:</label><br>
        <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Tell us about yourself..."></textarea><br><br>
        
        <label for="country">Country:</label><br>
        <select id="country" name="country">
            <option value="">Choose a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
        </select><br><br>
        
        <label for="browsers">Favorite Browser:</label><br>
        <input list="browsers" name="browser">
        <datalist id="browsers">
            <option value="Chrome">
            <option value="Firefox">
            <option value="Safari">
            <option value="Edge">
            <option value="Opera">
        </datalist><br><br>
        
        <label for="volume">Volume:</label>
        <input type="range" id="volume" name="volume" min="0" max="100">
        <output name="volumeOutput" for="volume">50</output><br><br>
        
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="button" onclick="alert('Button clicked!')">Custom Action</button>
    </fieldset>
</form>

<h3>Form Element Types</h3>
<ul>
    <li><strong>&lt;input&gt;:</strong> Various input types</li>
    <li><strong>&lt;textarea&gt;:</strong> Multi-line text input</li>
    <li><strong>&lt;select&gt;:</strong> Dropdown list</li>
    <li><strong>&lt;button&gt;:</strong> Clickable buttons</li>
    <li><strong>&lt;fieldset&gt;:</strong> Groups related elements</li>
    <li><strong>&lt;legend&gt;:</strong> Caption for fieldset</li>
    <li><strong>&lt;label&gt;:</strong> Labels for form controls</li>
    <li><strong>&lt;datalist&gt;:</strong> Predefined options</li>
    <li><strong>&lt;output&gt;:</strong> Result of calculation</li>
</ul>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Canvas",
    description: "The HTML5 canvas element provides a drawable region where you can create graphics, animations, and interactive visualizations using JavaScript. It's perfect for games, data visualization, and dynamic graphics.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-canvas",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-canvas"
    },
    topic: "HTML Canvas",
    demoHtml: `<h2>HTML Canvas Examples</h2>

<h3>Basic Canvas Drawing</h3>
<canvas id="myCanvas" width="400" height="200" style="border: 1px solid black;"></canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = '#3498db';
ctx.fillRect(20, 20, 100, 80);

// Draw a circle
ctx.beginPath();
ctx.arc(200, 60, 40, 0, 2 * Math.PI);
ctx.fillStyle = '#e74c3c';
ctx.fill();

// Draw text
ctx.font = '20px Arial';
ctx.fillStyle = '#2ecc71';
ctx.fillText('Hello Canvas!', 250, 80);

// Draw a line
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(350, 150);
ctx.strokeStyle = '#9b59b6';
ctx.lineWidth = 3;
ctx.stroke();
</script>

<h3>Canvas Code Example</h3>
<pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;"><code>&lt;canvas id="myCanvas" width="400" height="200"&gt;&lt;/canvas&gt;

&lt;script&gt;
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = '#3498db';
ctx.fillRect(20, 20, 100, 80);

// Draw a circle
ctx.beginPath();
ctx.arc(200, 60, 40, 0, 2 * Math.PI);
ctx.fillStyle = '#e74c3c';
ctx.fill();
&lt;/script&gt;</code></pre>

<p><strong>Canvas is powerful for:</strong> Games, charts, image editing, animations, and interactive graphics!</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML SVG",
    description: "SVG (Scalable Vector Graphics) allows you to create vector-based graphics directly in HTML. SVG graphics scale perfectly at any size and are ideal for icons, logos, and illustrations.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-svg",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-svg"
    },
    topic: "HTML SVG",
    demoHtml: `<h2>HTML SVG Examples</h2>

<h3>Basic SVG Shapes</h3>
<svg width="400" height="200" style="border: 1px solid black;">
    <!-- Circle -->
    <circle cx="60" cy="60" r="40" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
    
    <!-- Rectangle -->
    <rect x="120" y="20" width="80" height="80" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
    
    <!-- Line -->
    <line x1="220" y1="20" x2="320" y2="100" stroke="#2ecc71" stroke-width="3"/>
    
    <!-- Polygon (Triangle) -->
    <polygon points="340,100 380,20 420,100" fill="#f39c12" stroke="#e67e22" stroke-width="2"/>
    
    <!-- Text -->
    <text x="50" y="150" font-family="Arial" font-size="16" fill="#9b59b6">SVG Text</text>
    
    <!-- Path (Curve) -->
    <path d="M 200 120 Q 250 150 300 120" stroke="#1abc9c" stroke-width="3" fill="none"/>
</svg>

<h3>SVG vs Canvas</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Feature</th>
        <th>SVG</th>
        <th>Canvas</th>
    </tr>
    <tr>
        <td>Type</td>
        <td>Vector graphics</td>
        <td>Bitmap graphics</td>
    </tr>
    <tr>
        <td>Scalability</td>
        <td>Infinite scaling</td>
        <td>Fixed resolution</td>
    </tr>
    <tr>
        <td>DOM manipulation</td>
        <td>Yes</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Best for</td>
        <td>Icons, logos, simple graphics</td>
        <td>Complex animations, games</td>
    </tr>
</table>

<h3>Interactive SVG</h3>
<svg width="200" height="100" style="border: 1px solid black;">
    <circle cx="100" cy="50" r="30" fill="#3498db" onmouseover="this.setAttribute('fill', '#e74c3c')" onmouseout="this.setAttribute('fill', '#3498db')" style="cursor: pointer;"/>
    <text x="100" y="55" text-anchor="middle" font-size="12" fill="white" style="pointer-events: none;">Hover me!</text>
</svg>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Video",
    description: "The HTML5 video element allows you to embed video content directly in web pages without plugins. It supports multiple formats, custom controls, and provides a rich API for video manipulation.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-video",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-video"
    },
    topic: "HTML Video",
    demoHtml: `<h2>HTML Video Element</h2>

<h3>Basic Video with Controls</h3>
<video width="400" height="300" controls style="border: 1px solid black;">
    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
    <source src="https://sample-videos.com/zip/10/webm/SampleVideo_1280x720_1mb.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<h3>Video with Attributes</h3>
<video width="300" height="200" controls autoplay muted loop poster="https://via.placeholder.com/300x200/3498db/white?text=Video+Poster">
    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<h3>Video Attributes</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>controls</td>
        <td>Show video controls</td>
        <td>controls</td>
    </tr>
    <tr>
        <td>autoplay</td>
        <td>Start playing automatically</td>
        <td>autoplay</td>
    </tr>
    <tr>
        <td>muted</td>
        <td>Start muted</td>
        <td>muted</td>
    </tr>
    <tr>
        <td>loop</td>
        <td>Repeat playback</td>
        <td>loop</td>
    </tr>
    <tr>
        <td>poster</td>
        <td>Image shown before play</td>
        <td>poster="image.jpg"</td>
    </tr>
    <tr>
        <td>preload</td>
        <td>How to preload video</td>
        <td>preload="auto"</td>
    </tr>
</table>

<h3>Video Formats</h3>
<ul>
    <li><strong>MP4:</strong> Most widely supported</li>
    <li><strong>WebM:</strong> Open source format</li>
    <li><strong>Ogg:</strong> Open source alternative</li>
</ul>

<p><strong>Note:</strong> Always provide multiple formats for better browser compatibility!</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Audio",
    description: "The HTML5 audio element enables embedding sound content in web pages. Like video, it supports multiple formats and provides controls for play, pause, volume, and more audio manipulation features.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-audio",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-audio"
    },
    topic: "HTML Audio",
    demoHtml: `<h2>HTML Audio Element</h2>

<h3>Basic Audio with Controls</h3>
<audio controls style="width: 100%;">
    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<h3>Audio with Multiple Attributes</h3>
<audio controls autoplay muted loop preload="auto" style="width: 100%;">
    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg">
    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>

<h3>Audio Attributes</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Values</th>
    </tr>
    <tr>
        <td>controls</td>
        <td>Display audio controls</td>
        <td>controls</td>
    </tr>
    <tr>
        <td>autoplay</td>
        <td>Start playing automatically</td>
        <td>autoplay</td>
    </tr>
    <tr>
        <td>muted</td>
        <td>Start with audio muted</td>
        <td>muted</td>
    </tr>
    <tr>
        <td>loop</td>
        <td>Repeat audio playback</td>
        <td>loop</td>
    </tr>
    <tr>
        <td>preload</td>
        <td>How to preload audio</td>
        <td>auto, metadata, none</td>
    </tr>
</table>

<h3>Supported Audio Formats</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Format</th>
        <th>MIME Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>MP3</td>
        <td>audio/mpeg</td>
        <td>Most widely supported</td>
    </tr>
    <tr>
        <td>WAV</td>
        <td>audio/wav</td>
        <td>High quality, larger files</td>
    </tr>
    <tr>
        <td>OGG</td>
        <td>audio/ogg</td>
        <td>Open source format</td>
    </tr>
</table>

<p><strong>JavaScript Audio Control:</strong></p>
<button onclick="playAudio()">Play</button>
<button onclick="pauseAudio()">Pause</button>
<button onclick="volumeUp()">Volume Up</button>
<button onclick="volumeDown()">Volume Down</button>

<script>
const audio = document.querySelector('audio');

function playAudio() { audio.play(); }
function pauseAudio() { audio.pause(); }
function volumeUp() { if(audio.volume < 1) audio.volume += 0.1; }
function volumeDown() { if(audio.volume > 0) audio.volume -= 0.1; }
</script>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Symbols",
    description: "HTML provides entity codes for mathematical, Greek, and other symbols that might not be available on all keyboards. These symbols can be inserted using named entities or numeric codes.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-symbols",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-symbols"
    },
    topic: "HTML Symbols",
    demoHtml: `<h2>HTML Symbols</h2>

<h3>Mathematical Symbols</h3>
<p>∀ For all (&amp;forall;)</p>
<p>∃ There exists (&amp;exist;)</p>
<p>∅ Empty set (&amp;empty;)</p>
<p>∇ Nabla (&amp;nabla;)</p>
<p>∈ Element of (&amp;isin;)</p>
<p>∉ Not an element of (&amp;notin;)</p>
<p>∋ Contains as member (&amp;ni;)</p>
<p>∏ Product (&amp;prod;)</p>
<p>∑ Sum (&amp;sum;)</p>

<h3>Greek Letters</h3>
<p>Α α Alpha (&amp;Alpha; &amp;alpha;)</p>
<p>Β β Beta (&amp;Beta; &amp;beta;)</p>
<p>Γ γ Gamma (&amp;Gamma; &amp;gamma;)</p>
<p>Δ δ Delta (&amp;Delta; &amp;delta;)</p>
<p>Ω ω Omega (&amp;Omega; &amp;omega;)</p>

<h3>Arrows</h3>
<p>← Left arrow (&amp;larr;)</p>
<p>↑ Up arrow (&amp;uarr;)</p>
<p>→ Right arrow (&amp;rarr;)</p>
<p>↓ Down arrow (&amp;darr;)</p>
<p>↔ Left right arrow (&amp;harr;)</p>

<h3>Card Suits</h3>
<p>♠ Spades (&amp;spades;)</p>
<p>♣ Clubs (&amp;clubs;)</p>
<p>♥ Hearts (&amp;hearts;)</p>
<p>♦ Diamonds (&amp;diams;)</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Emojis",
    description: "Emojis are symbols from the UTF-8 character set that can be displayed in HTML using their Unicode values or by copying and pasting them directly. They add visual interest and emotion to web content.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-emojis",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-emojis"
    },
    topic: "HTML Emojis",
    demoHtml: `<h2>HTML Emojis 😊</h2>

<h3>Face Emojis</h3>
<p>😀 Grinning face (&amp;#128512;)</p>
<p>😃 Grinning face with big eyes (&amp;#128515;)</p>
<p>😄 Grinning face with smiling eyes (&amp;#128516;)</p>
<p>😁 Beaming face with smiling eyes (&amp;#128513;)</p>
<p>😊 Smiling face with smiling eyes (&amp;#128522;)</p>
<p>😍 Smiling face with heart-eyes (&amp;#128525;)</p>
<p>🤔 Thinking face (&amp;#129300;)</p>
<p>😢 Crying face (&amp;#128546;)</p>

<h3>Hand Gestures</h3>
<p>👍 Thumbs up (&amp;#128077;)</p>
<p>👎 Thumbs down (&amp;#128078;)</p>
<p>👌 OK hand (&amp;#128076;)</p>
<p>✌️ Victory hand (&amp;#9996;&amp;#65039;)</p>
<p>👋 Waving hand (&amp;#128075;)</p>
<p>👏 Clapping hands (&amp;#128079;)</p>

<h3>Hearts and Symbols</h3>
<p>❤️ Red heart (&amp;#10084;&amp;#65039;)</p>
<p>💛 Yellow heart (&amp;#128155;)</p>
<p>💚 Green heart (&amp;#128154;)</p>
<p>💙 Blue heart (&amp;#128153;)</p>
<p>⭐ Star (&amp;#11088;)</p>
<p>✨ Sparkles (&amp;#10024;)</p>
<p>🔥 Fire (&amp;#128293;)</p>
<p>💯 Hundred points (&amp;#128175;)</p>

<p><strong>Usage:</strong> You can copy and paste emojis directly or use their Unicode decimal codes!</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Charsets",
    description: "Character encoding tells the browser how to interpret and display text characters. UTF-8 is the most common encoding that supports all Unicode characters including emojis, symbols, and international characters.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-charsets",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-charsets"
    },
    topic: "HTML Character Encoding",
    demoHtml: `<h2>HTML Character Sets</h2>

<h3>Character Encoding Declaration</h3>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;UTF-8 Example&lt;/title&gt;
&lt;/head&gt;</code></pre>

<h3>Common Character Sets</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Charset</th>
        <th>Description</th>
        <th>Example Characters</th>
    </tr>
    <tr>
        <td>UTF-8</td>
        <td>Unicode (recommended)</td>
        <td>Hello 世界 🌍 ñ é</td>
    </tr>
    <tr>
        <td>UTF-16</td>
        <td>Unicode 16-bit</td>
        <td>Hello 世界 🌍 ñ é</td>
    </tr>
    <tr>
        <td>ISO-8859-1</td>
        <td>Latin-1 (Western European)</td>
        <td>Hello ñ é ü ß</td>
    </tr>
    <tr>
        <td>ASCII</td>
        <td>Basic English only</td>
        <td>Hello World 123</td>
    </tr>
</table>

<h3>International Characters</h3>
<p>🇺🇸 English: Hello World</p>
<p>🇪🇸 Spanish: Hola Mundo</p>
<p>🇫🇷 French: Bonjour le Monde</p>
<p>🇩🇪 German: Hallo Welt</p>
<p>🇯🇵 Japanese: こんにちは世界</p>
<p>🇨🇳 Chinese: 你好世界</p>
<p>🇷🇺 Russian: Привет мир</p>
<p>🇦🇪 Arabic: مرحبا بالعالم</p>

<p><strong>Note:</strong> Always use UTF-8 for maximum compatibility!</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML URL Encode",
    description: "URL encoding converts characters into a format that can be transmitted over the Internet. Special characters are replaced with percent signs followed by hexadecimal codes. This is essential for passing data in URLs safely.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-url-encode",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-url-encode"
    },
    topic: "HTML URL Encoding",
    demoHtml: `<h2>HTML URL Encoding</h2>

<h3>Common URL Encoded Characters</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Character</th>
        <th>URL Encoded</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>(space)</td>
        <td>%20 or +</td>
        <td>Space character</td>
    </tr>
    <tr>
        <td>!</td>
        <td>%21</td>
        <td>Exclamation mark</td>
    </tr>
    <tr>
        <td>"</td>
        <td>%22</td>
        <td>Quotation mark</td>
    </tr>
    <tr>
        <td>#</td>
        <td>%23</td>
        <td>Hash/pound</td>
    </tr>
    <tr>
        <td>&</td>
        <td>%26</td>
        <td>Ampersand</td>
    </tr>
    <tr>
        <td>+</td>
        <td>%2B</td>
        <td>Plus sign</td>
    </tr>
    <tr>
        <td>?</td>
        <td>%3F</td>
        <td>Question mark</td>
    </tr>
</table>

<h3>URL Examples</h3>
<p><strong>Original URL:</strong></p>
<code>https://example.com/search?q=hello world&type=all</code>

<p><strong>URL Encoded:</strong></p>
<code>https://example.com/search?q=hello%20world&amp;type=all</code>

<h3>Form Data Example</h3>
<form style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
    <label>Search Query:</label><br>
    <input type="text" value="Hello World!" style="width: 200px; padding: 5px;"><br><br>
    <p><strong>URL encoded result:</strong> <code>Hello%20World%21</code></p>
</form>

<p><strong>Note:</strong> Browsers automatically encode URLs, but it's important to understand the process!</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML vs. XHTML",
    description: "XHTML is a stricter version of HTML that follows XML syntax rules. While HTML5 is more forgiving, understanding XHTML helps write cleaner, more structured code. XHTML requires proper nesting, closing tags, and lowercase elements.",
    thumbnail: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
    link: "Learn.html#html-vs-xhtml",
    related: {
        text: "Learn and practice here",
        url: "Learn.html#html-vs-xhtml"
    },
    topic: "HTML vs XHTML",
    demoHtml: `<h2>HTML vs. XHTML Comparison</h2>

<h3>HTML Example</h3>
<pre style="background: #f4f4f4; padding: 10px;"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;HTML Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.
    &lt;br&gt;
    &lt;img src="image.jpg" alt="Photo"&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3>XHTML Example</h3>
<pre style="background: #e8f4fd; padding: 10px;"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head&gt;
    &lt;title&gt;XHTML Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
    &lt;br /&gt;
    &lt;img src="image.jpg" alt="Photo" /&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3>Key Differences</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th>Feature</th>
        <th>HTML</th>
        <th>XHTML</th>
    </tr>
    <tr>
        <td>Case sensitivity</td>
        <td>Not case sensitive</td>
        <td>Case sensitive (lowercase)</td>
    </tr>
    <tr>
        <td>Closing tags</td>
        <td>Some optional</td>
        <td>All required</td>
    </tr>
    <tr>
        <td>Empty elements</td>
        <td>&lt;br&gt;</td>
        <td>&lt;br /&gt;</td>
    </tr>
    <tr>
        <td>Attribute values</td>
        <td>Can be unquoted</td>
        <td>Must be quoted</td>
    </tr>
    <tr>
        <td>Nesting</td>
        <td>More forgiving</td>
        <td>Must be properly nested</td>
    </tr>
</table>`
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
       related:{
           text:"Check it out on YouTube",
           url:"https://www.youtube.com/shorts/fzTXUBWDCA4"
       },
       topic:"Highlight Every Other Row"
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
         related:{
           text:"Professional Bio Template",
           url:"https://docs.google.com/presentation/d/1N4Y0_lHoGTOLTuVEqnRUeGGwD190aB2P/export/pptx"
       },
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
};


