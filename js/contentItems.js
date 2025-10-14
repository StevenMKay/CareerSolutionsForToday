
window.PROGRAM_ICONS = {
  Outlook:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/15915cf6ce97f13abce1e50ff9f3bec486295636/icons/2025%20Outlook%20Icon.png",
 'Google Chrome':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/a4f299d05ef28e41160723f72b439f29a3868b0a/chromeicon.png",
 'Windows Edge':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/a4f299d05ef28e41160723f72b439f29a3868b0a/edgeicon.png",
 Firefox:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/a4f299d05ef28e41160723f72b439f29a3868b0a/firefoxicon.png",
General:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/5081bef9abd3db6fb93b96a3f0441e9db909aebb/icons/generalicon.png",
SQL:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/ae90f4fb10d0211b5042bfcd3b072a41dc9ce917/icons/sqlicon.png",
AI:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2cc02a9bad41b7cb85c47de78edb36622fa71d64/icons/AIicon.png",

'Helpful Websites':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/ccb7bdd06de647ea39a8a8644798db5d7c790525/icons/interneticon.png",
'Website Design':"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png",
  Windows:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/windowsicon.png",
  HTML:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png",
  SharePoint:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d864e5b49cd7968c9369676c1ecf40951d726d20/icons/2025%20SharePoint%20Icon.png",
  Word:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/195b4ed5242a495897d57f4bfe1b67b617d3980c/icons/2025%20Word%20Icon.png",
  'Google Sheets': "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/googlesheetsicon.png",
  JavaScript:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/javaicon.png",
  CSS:"https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png",
  Teams:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c7089aaa3a231f641039fc581114c260617291f1/icons/2025%20Teams%20Icon.png",
    Excel:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png",
  PowerPoint:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png",
  Word:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/195b4ed5242a495897d57f4bfe1b67b617d3980c/icons/2025%20Word%20Icon.png",
  YouTube:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/8c6a1dc0ea817ed635f08e464fa3b9cbbf6b7f93/Thumbnails/YouTube%20Thumbnail.png",
  Simulations:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d38148461878cc997ada41cde4af1fb23490ea32/icons/Simicon2.png",
  Calculators:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/34d06a0eb6b86667fd20f2e101719e15c08a8b8c/icons/calculatoricon.png"
      // Add more as needed
};

// Auto-generate Learn.html links for HTML and CSS content items
function generateLearnLink(item) {
  // Check if this is an HTML or CSS learning item without a link
  if (item.section && Array.isArray(item.section) && 
      item.section.includes('Learning') && 
      (item.section.includes('HTML') || item.section.includes('CSS')) &&
      !item.link) {
    
    // Generate anchor ID from title
    const anchorId = item.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    // Create the Learn.html link with anchor
    item.link = `Learn.html#${anchorId}-demo`;
  }
  return item;
}

// Process all content items on load to ensure they have Learn.html links
function processContentItems() {
  if (window.contentItems && Array.isArray(window.contentItems)) {
    window.contentItems = window.contentItems.map(generateLearnLink);
  }
}

// Auto-process when contentItems are loaded
document.addEventListener('DOMContentLoaded', processContentItems);
if (window.contentItems) {
  processContentItems();
}




// 1) First declare your static items:
window.contentItems = [
{
  section: ["Learning", "Website Design"],
  program: {
    name: "Website Design",
    image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png"
  },
  title: "Image Magnifier Glass Effect",
  description: "Interactive image magnifier with responsive math, touch/pointer support, and reliable visibility in live preview.",
  thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/6ea11f3eca7a00d656d9aa8a39f98a50232ca863/photos/Barn%20Own%20Photo%20for%20Hover.jpg",
  link: "Learn.html#website-design-image-magnifier",
  topic: "Interactive Effects",
  demoHtml:
`
<div id="imgMagDemo-wd" class="img-mag-demo">
  <div class="img-magnifier-container" tabindex="0" aria-label="Image magnifier demo">
    <img
      class="img-magnifier-image"
      src="https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/6ea11f3eca7a00d656d9aa8a39f98a50232ca863/photos/Barn%20Own%20Photo%20for%20Hover.jpg"
      alt="Barn Owl — hover or touch to magnify"
      draggable="false"
    />
  </div>

  <div class="controls">
    <div class="control-group">
      <label>Zoom: <span class="zoom-value">3x</span></label>
      <input type="range" class="zoom-input" min="2" max="6" value="3" step="0.25" />
    </div>
    <div class="control-group">
      <label>Glass: <span class="size-value">150px</span></label>
      <input type="range" class="size-input" min="80" max="260" value="150" step="10" />
    </div>
  </div>

  <p class="subtitle">Hover / drag to explore details. Use the sliders to adjust zoom and glass size.</p>
</div>`,
  demoCss:
`
.img-mag-demo {
  --glass-size: 150px;
  --zoom: 3;
  font-family: system-ui, Segoe UI, Roboto, sans-serif;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  padding: 20px; border-radius: 14px; background: #0b1020; color: #e6e6e6;
  min-height: 320px;
}

.img-mag-demo .subtitle { opacity: .8; text-align: center; font-size: .95rem; }
.img-mag-demo .controls { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
.img-mag-demo .control-group { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.img-mag-demo .zoom-value { font-weight: 700; color: #8ab4ff; }

.img-mag-demo .img-magnifier-container {
  position: relative; width: 100%; max-width: 800px;
  cursor: crosshair; touch-action: none; z-index: 0; /* stacking context */
  overflow: visible; /* avoid clipping in card layouts */
}
.img-mag-demo .img-magnifier-container .img-magnifier-image {
  width: 100%; height: auto; display: block; border-radius: 12px;
  user-select: none; -webkit-user-drag: none;
  box-shadow: 0 10px 30px rgba(0,0,0,.45);
}

.img-mag-demo .img-magnifier-glass {
  position: absolute; top: -9999px; left: -9999px; /* offscreen until moved */
  border: 3px solid #000; border-radius: 50%;
  width: var(--glass-size); height: var(--glass-size);
  background-repeat: no-repeat; pointer-events: none;
  box-shadow: 0 0 0 7px rgba(255,255,255,.85), 0 12px 24px rgba(0,0,0,.45), inset 0 0 15px rgba(0,0,0,.15);
  opacity: 0; transition: opacity .15s ease;
  z-index: 99999; /* above preview chrome */
}

/* never block input */
.img-mag-demo .img-magnifier-glass,
.img-mag-demo .img-magnifier-container::before { pointer-events: none; }

/* CSS fallback visibility on hover/focus */
.img-mag-demo .img-magnifier-container:hover .img-magnifier-glass,
.img-mag-demo .img-magnifier-container:focus .img-magnifier-glass { opacity: 1; }

.img-mag-demo .img-magnifier-glass.active { opacity: 1; }

@media (max-width: 768px) {
  .img-mag-demo { padding: 14px; }
  .img-mag-demo .img-magnifier-glass { border-width: 2px; }
}
`,
  demoJs:
`
(() => {
  // Hard-bind to this specific demo instance by id (no document.currentScript assumptions)
  var root = document.getElementById('imgMagDemo-wd');
  if (!root) return;

  var container = root.querySelector('.img-magnifier-container');
  var img       = root.querySelector('.img-magnifier-image');
  var zoomEl    = root.querySelector('.zoom-input');
  var zoomVal   = root.querySelector('.zoom-value');
  var sizeEl    = root.querySelector('.size-input');
  var sizeVal   = root.querySelector('.size-value');

  var state = { zoom: 3, size: 150, glass: null, shownOnce: false };

  function buildGlass() {
    if (state.glass && state.glass.isConnected) state.glass.remove();
    var g = document.createElement('div');
    g.className = 'img-magnifier-glass';
    container.appendChild(g);
    state.glass = g;
    g.style.backgroundImage = "url('" + (img.currentSrc || img.src) + "')";
    updateBgSize();
    updateGlassSize(state.size);
  }

  function updateBgSize() {
    var rect = img.getBoundingClientRect();
    if (!state.glass) return;
    state.glass.style.backgroundSize = (rect.width * state.zoom) + "px " + (rect.height * state.zoom) + "px";
  }

  function updateGlassSize(px) {
    state.size = px;
    if (state.glass) state.glass.style.setProperty('--glass-size', px + 'px');
  }

  function getPos(e) {
    var rect = img.getBoundingClientRect();
    var clientX = (e && ('clientX' in e)) ? e.clientX : (e && e.touches && e.touches[0] ? e.touches[0].clientX : (rect.left + rect.width / 2));
    var clientY = (e && ('clientY' in e)) ? e.clientY : (e && e.touches && e.touches[0] ? e.touches[0].clientY : (rect.top  + rect.height / 2));
    var x = Math.max(0, Math.min(rect.width,  clientX - rect.left));
    var y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    return { x: x, y: y };
  }

  function move(e) {
    if (!state.glass) return;
    if (e && e.preventDefault) e.preventDefault();
    var pos = getPos(e);
    var bw = parseFloat(getComputedStyle(state.glass).borderWidth) || 0;
    var w = state.size / 2, h = state.size / 2;

    state.glass.style.left = (pos.x - w) + 'px';
    state.glass.style.top  = (pos.y - h) + 'px';

    var bgX = -((pos.x * state.zoom) - w + bw);
    var bgY = -((pos.y * state.zoom) - h + bw);
    state.glass.style.backgroundPosition = bgX + "px " + bgY + "px";
  }

  function showOnceCentered() {
    if (state.shownOnce) return;
    state.glass.classList.add('active');
    move(); // center once
    state.shownOnce = true;
    setTimeout(function(){ state.glass.classList.remove('active'); }, 300);
  }

  function show() { state.glass.classList.add('active'); }
  function hide() { state.glass.classList.remove('active'); }

  function start() {
    buildGlass();

    // Prove it’s visible on mount
    showOnceCentered();

    // Pointer (preferred)
    container.addEventListener('pointerenter', show, { passive: true });
    container.addEventListener('pointerleave', hide, { passive: true });
    container.addEventListener('pointerdown',  function(e){ show(); move(e); }, { passive: false });
    container.addEventListener('pointermove',  move, { passive: false });
    container.addEventListener('pointerup',    function(e){ move(e); }, { passive: false });

    // Mouse fallback (if PointerEvents are disabled by the preview)
    container.addEventListener('mouseenter', show, { passive: true });
    container.addEventListener('mouseleave', hide, { passive: true });
    container.addEventListener('mousemove',  move, { passive: false });

    // Resize
    window.addEventListener('resize', updateBgSize, { passive: true });

    // Controls
    if (zoomEl) zoomEl.addEventListener('input', function(e){
      state.zoom = parseFloat(e.target.value);
      if (zoomVal) zoomVal.textContent = state.zoom + 'x';
      updateBgSize();
    }, { passive: true });

    if (sizeEl) sizeEl.addEventListener('input', function(e){
      var px = parseInt(e.target.value, 10);
      if (sizeVal) sizeVal.textContent = px + 'px';
      updateGlassSize(px);
      updateBgSize();
    }, { passive: true });
  }

  // Mount once the DOM & image are ready; also survive late injection
  function ready(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn, { once: true });
  }

  function tryStart() {
    if (!container || !img) return false;
    if (img.complete && img.naturalWidth) { start(); return true; }
    img.addEventListener('load', start, { once: true });
    return true;
  }

  ready(function(){
    if (tryStart()) return;
    var tries = 0, max = 120; // ~2s of retries
    (function tick(){
      if (tryStart() || tries++ >= max) return;
      requestAnimationFrame(tick);
    })();
  });
})();`
}
,


{
  section: ["Learning", "CSS"],
  program: {
    name: "CSS",
    image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
  },
  title: "CSS Cosmic Galaxy Button",
  description: "Create a stunning cosmic button with particle animations, galaxy effects, and interactive text changes. Features three states: Cosmic (default), Journey (on hover with purple glow), and Warp Speed (on click with green glow). Includes particle systems, 3D transforms, and smooth state transitions.",
  thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2c77a5197be5cf69fde4447b64ff7562578b33fc/Thumbnails/Warp%20Speed%20Thumb.png",
  link: "Learn.html#css-cosmic-button-demo",
  topic: "CSS Button Effects",
  demoHtml:
`<div class="cosmic-demo-container" id="cosmicDemo">
  <div class="galaxy-button">
    <button class="cosmic-btn" id="cosmicBtn" type="button" aria-label="Cosmic Button">
      <span class="spark"></span>
      <span class="backdrop"></span>

      <span class="galaxy__container">
        <span class="star star--static"></span>
        <span class="star star--static"></span>
        <span class="star star--static"></span>
        <span class="star star--static"></span>
        <span class="star star--static"></span>
        <span class="star star--static"></span>
        <span class="star star--static"></span>
        <span class="star star--static"></span>
      </span>

      <span class="galaxy">
        <span class="galaxy__ring">
          <!-- orbiting stars (lighter weight than the standalone page) -->
          <span class="star"></span><span class="star"></span><span class="star"></span>
          <span class="star"></span><span class="star"></span><span class="star"></span>
          <span class="star"></span><span class="star"></span><span class="star"></span>
          <span class="star"></span><span class="star"></span><span class="star"></span>
        </span>
      </span>

      <span class="text" id="cosmicText">Cosmic</span>
    </button>

    <!-- local background layer so we don't modify page <body> -->
    <div class="bodydrop" id="cosmicBodydrop" aria-hidden="true"></div>
  </div>

  <p style="color:#ddd; text-align:center; margin-top:20px; font-size:0.9rem;">
    Hover to see “Journey” • Click for “Warp Speed”
  </p>
</div>`,
  demoCss:
`
/* Cosmic Galaxy Button (scoped) */
#cosmicDemo {
  --transition: 0.25s;
  --spark: 1.8s;
  --hue: 275;
  --active: 0;
  min-height: 320px;
  padding: 24px 16px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  /* mimic the standalone body background inside the demo box */
  background:
    radial-gradient(circle at 15% 80%, hsl(280 calc(var(--active)*90%) 25% / calc(var(--active)*0.6)) 0%, transparent 40%),
    radial-gradient(circle at 10% 85%, hsl(260 calc(var(--active)*85%) 20% / calc(var(--active)*0.5)) 0%, transparent 35%),
    radial-gradient(circle at 50% 50%, hsl(240 calc(var(--active)*70%) 15% / calc(var(--active)*0.3)) 0%, transparent 50%),
    hsl(var(--hue) calc(var(--active)*97%) 6%);
  transition: background 0.5s ease;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  font-family: system-ui, sans-serif;
}

/* hover proxy (works even if :has is unsupported) */
#cosmicDemo:has(.cosmic-btn:is(:hover, :focus-visible)),
#cosmicDemo.active {
  --active: 1;
}

.galaxy-button { position: relative; }

.cosmic-btn {
  --cut: 0.1em;
  --active: 0;
  --bg:
    radial-gradient(130% 130% at -26% 126%,
      hsl(280 calc(var(--active)*97%) 85% / calc(var(--active)*0.8)) 20%,
      hsl(260 calc(var(--active)*90%) 75% / calc(var(--active)*0.6)) 35%, transparent 55%)
      calc(100px - (var(--active)*100px)) 0 / 100% 100% no-repeat,
    radial-gradient(100% 100% at -20% 120%,
      hsl(290 calc(var(--active)*95%) 70% / calc(var(--active)*0.9)) 25%,
      hsl(270 calc(var(--active)*90%) 60% / calc(var(--active)*0.7)) 40%, transparent 65%)
      calc(100px - (var(--active)*100px)) 0 / 100% 100% no-repeat,
    radial-gradient(80% 80% at 50% 50%,
      hsl(240 calc(var(--active)*80%) 50% / calc(var(--active)*0.3)) 0%, transparent 60%),
    hsl(var(--hue) calc(var(--active)*100%) calc(12% - (var(--active)*8%)));
  background: var(--bg);
  font-size: 1.8rem;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  padding: 0.9em 1.3em;
  display: inline-flex;
  align-items: center;
  gap: .25em;
  white-space: nowrap;
  border-radius: 2rem;
  position: relative;
  box-shadow:
    0 0 calc(var(--active)*6em) calc(var(--active)*3em) hsl(var(--hue) 97% 61% / 0.5),
    0 0 calc(var(--active)*3em) calc(var(--active)*1.5em) hsl(280 90% 70% / 0.4),
    0 0.05em 0 0 hsl(var(--hue) calc(var(--active)*97%) calc((var(--active)*50%)+30%)) inset,
    0 -0.05em 0 0 hsl(var(--hue) calc(var(--active)*97%) calc(var(--active)*10%)) inset;
  transition: box-shadow var(--transition), transform var(--transition), background var(--transition);
  transform: scale(calc(1 + (var(--active)*0.1)));
  transform-style: preserve-3d;
  perspective: 100vmin;
  overflow: hidden;
  color: hsl(0 0% calc(60% + (var(--active)*26%)));
}
.cosmic-btn:active { transform: scale(1); }
.cosmic-btn:is(:hover, :focus-visible) { --active: 1; }

.text { translate: 2% -6%; letter-spacing: 0.01ch; transition: all 0.3s ease; }
.cosmic-btn svg { inline-size: 1.25em; translate: -25% -5%; }

.star {
  height: calc(var(--size,3) * 1px);
  aspect-ratio: 1;
  background: white;
  border-radius: 50%;
  position: absolute;
  opacity: var(--alpha, .8);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(10deg) rotate(0deg) translateY(calc(var(--distance,80) * 1px));
  animation: orbit calc(var(--duration,12) * 1s) calc(var(--delay,0) * -1s) infinite linear;
}
@keyframes orbit {
  to { transform: translate(-50%,-50%) rotate(10deg) rotate(360deg) translateY(calc(var(--distance,80) * 1px)); }
}

.galaxy { position:absolute; width:100%; aspect-ratio:1; top:50%; left:50%; translate:-50% -50%; overflow:hidden; opacity:var(--active); transition:opacity var(--transition); }
.galaxy__ring { height:200%; width:200%; position:absolute; top:50%; left:50%; border-radius:50%;
  transform: translate(-28%,-40%) rotateX(-24deg) rotateY(-30deg) rotateX(90deg); transform-style:preserve-3d; }
.galaxy__container { position:absolute; inset:0; opacity:var(--active); transition:opacity var(--transition); mask: radial-gradient(white, transparent); }

.star--static {
  animation: none; max-height:4px; filter: brightness(4); opacity: 0.9;
  animation: move-x calc(var(--duration,12)*0.1s) calc(var(--delay,0)*-0.1s) infinite linear,
             move-y calc(var(--duration,12)*0.2s) calc(var(--delay,0)*-0.2s) infinite linear;
}
.cosmic-btn:hover .star--static { animation-play-state: paused; }
@keyframes move-x { 0% { translate:-100px 0 } 100% { translate:100px 0 } }
@keyframes move-y { 0% { transform: translate(0,-50px) } 100% { transform: translate(0,50px) } }

.spark { position:absolute; inset:0; border-radius:2rem; rotate:0deg; overflow:hidden; mask:linear-gradient(white, transparent 50%); animation: flip calc(var(--spark)*2) infinite steps(2,end); }
@keyframes flip { to { rotate:360deg } }
.spark:before{
  content:""; position:absolute; width:200%; aspect-ratio:1; top:0%; left:50%; z-index:-1;
  translate:-50% -15%; transform: rotate(-90deg);
  opacity: calc((var(--active)) + 0.4);
  background: conic-gradient(from 0deg, transparent 0 340deg, white 360deg);
  transition: opacity var(--transition);
  animation: rotate var(--spark) linear infinite both;
}
@keyframes rotate { to { transform: rotate(90deg) } }
.spark:after{ content:""; position:absolute; inset:var(--cut); border-radius:2rem; }
.backdrop{ position:absolute; inset:var(--cut); background: var(--bg); border-radius:2rem; transition: background var(--transition); }

/* Local “warp speed” state */
.cosmic-btn.warp-speed {
  --hue: 140; --active: 1; animation: warp-pulse 0.6s ease-in-out infinite alternate;
}
.cosmic-btn.warp-speed .text {
  color: hsl(140 100% 90%);
  text-shadow: 0 0 10px hsl(140 100% 60%), 0 0 20px hsl(140 100% 50%), 0 0 30px hsl(140 100% 40%);
}
@keyframes warp-pulse { 0% { transform:scale(1.1); filter:brightness(1.2) } 100% { transform:scale(1.15); filter:brightness(1.5) } }

/* background shift when warped (scoped to demo container) */
#cosmicDemo.warp-active,
#cosmicDemo .bodydrop.warp-active{
  background:
    radial-gradient(circle at 15% 80%, hsl(140 90% 25% / 0.6) 0%, transparent 40%),
    radial-gradient(circle at 10% 85%, hsl(130 85% 20% / 0.5) 0%, transparent 35%),
    radial-gradient(circle at 50% 50%, hsl(150 70% 15% / 0.3) 0%, transparent 50%),
    hsl(140 97% 8%);
  transition: background 0.5s ease;
}

/* visual layer behind button, scoped */
#cosmicDemo .bodydrop{
  position: absolute; inset: 0; z-index: -1;
  transition: background 0.5s ease;
}

/* Ensure inner visuals never block clicks */
.cosmic-btn .spark,
.cosmic-btn .backdrop,
.cosmic-btn .galaxy,
.cosmic-btn .galaxy__container,
.cosmic-btn .galaxy__ring,
.cosmic-btn .star { pointer-events: none; }

@media (max-width: 768px){ .cosmic-btn{ font-size:1.5rem; } }
`,
  demoJs:
`// Cosmic Button Interactive States (robust mount + full input support)
(() => {
  const MOUNT_ID = 'cosmicDemo';
  let mounted = false;

  const init = () => {
    if (mounted) return true;
    const root = document.getElementById(MOUNT_ID);
    if (!root) return false;

    const button   = root.querySelector('#cosmicBtn');
    const textEl   = root.querySelector('#cosmicText');
    const bodydrop = root.querySelector('#cosmicBodydrop');
    const stars    = root.querySelectorAll('.star');
    if (!button || !textEl || !bodydrop) return false;

    // Particle randomization
    const RAND = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    stars.forEach(s => {
      s.style.setProperty('--duration', RAND(6, 20));
      s.style.setProperty('--delay', RAND(1, 10));
      s.style.setProperty('--alpha', RAND(40, 90) / 100);
      s.style.setProperty('--size', RAND(2, 6));
      s.style.setProperty('--distance', RAND(40, 200));
    });

    let isWarped = false;
    const ORIGINAL = 'Cosmic';
    const HOVER    = 'Journey';
    const WARP     = 'Warp Speed';

    // Hover state (desktop)
    button.addEventListener('mouseenter', () => {
      if (!isWarped) textEl.textContent = HOVER;
      root.classList.add('active');
    });
    button.addEventListener('mouseleave', () => {
      if (!isWarped) textEl.textContent = ORIGINAL;
      root.classList.remove('active');
    });

    // Click / tap / keyboard toggle -> Warp
    const toggleWarp = (e) => {
      if (e) e.preventDefault();
      isWarped = !isWarped;
      if (isWarped) {
        textEl.textContent = WARP;
        button.classList.add('warp-speed');
        root.classList.add('warp-active');
        bodydrop.classList.add('warp-active');
        if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
      } else {
        textEl.textContent = ORIGINAL;
        button.classList.remove('warp-speed');
        root.classList.remove('warp-active');
        bodydrop.classList.remove('warp-active');
      }
    };

    button.addEventListener('click', toggleWarp, { passive: false });
    // Touch support (some previewers swallow click after touch)
    button.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'touch') toggleWarp(e);
    }, { passive: false });

    // Keyboard accessibility: Space/Enter toggle
    button.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key === ' ' || e.key === 'Enter') {
        toggleWarp(e);
      }
    });

    mounted = true;
    return true;
  };

  // Try immediately, then retry a few times if the preview injects HTML after JS runs
  if (!init()) {
    let tries = 0;
    const MAX_TRIES = 40; // ~2s total
    const tick = () => {
      if (init() || tries++ >= MAX_TRIES) return;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();
`
},

  
{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"General",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/5081bef9abd3db6fb93b96a3f0441e9db909aebb/icons/generalicon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b7ccfbcf9154a4a8c3de9b0054500a38075d99a0/Thumbnails/dup2.png",
https:"https://youtu.be/P4ZLehr19Vg",
 title:"Create Custom Email Signatures",
        description:"In this video we cover a free tool I created to help you create custom, professional, and engaging email signatures. These can be used on both PC and mobile devices.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/816af82e8b3930c33e328db97156cfdb2e0a7b06/Thumbnails/custom.png",
       link:"https://youtu.be/P4ZLehr19Vg",


  related:
  [
      {
          text:"Check it out on YouTube",
          url:"https://youtu.be/P4ZLehr19Vg"
      },
      {
            text:"Custom Signature Page",
            url:"https://www.careersolutionsfortoday.com/Signature%20Builder.html"
      }
  ],
        topic:"Email Signature"
    },


  
{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b7ccfbcf9154a4a8c3de9b0054500a38075d99a0/Thumbnails/dup2.png",
https:"https://youtu.be/YZWG1oqnE6k",
 title:"How to Find and Remove Duplicates",
        description:"In this video we cover how to find and remove duplicates in Excel.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b7ccfbcf9154a4a8c3de9b0054500a38075d99a0/Thumbnails/dup2.png",
       link:"https://youtu.be/YCIskoCQAh8",


  related:
  [
      {
          text:"Check it out on YouTube",
          url:"https://youtu.be/YCIskoCQAh8"
      },
      {
            text:"Practice File",
            url:"https://docs.google.com/spreadsheets/d/1msrqTjmKZ1J6J9mUSmFiy3hr5UFD2N-w/export?format=xlsx"
      }
  ],
        topic:"Remove Duplicates"
    },




  

{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"AI",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e78e9a4de4c8677f0934af550a36473b699011a8/icons/AIicon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e8f45f651fb516b4cbad95d85e6e12d015ca15fd/Thumbnails/boo.png",
https:"https://youtu.be/YZWG1oqnE6k",
 title:"Automate Presentation Building with Beautiful.AI",
        description:"In this video we cover a site called beautiful.ai, where you can create amazing presentations using AI prompts, templates, and more.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e8f45f651fb516b4cbad95d85e6e12d015ca15fd/Thumbnails/boo.png",
       link:"https://youtu.be/YZWG1oqnE6k",


  related:
  [
      {
          text:"Check it out on YouTube",
          url:"https://youtu.be/YZWG1oqnE6k"
      },
      {
            text:"Visit Beautiful.AI",
            url:"https://www.beautiful.ai/"
      }
  ],
        topic:"Automate Presentations"
    },

  

{
    section: ["Learning", "Website Design"],
    program: {
        name: "Website Design",
        image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png"
    },
    title: "Interactive Electric Border Effect",
    description: "Learn how to create a stunning interactive electric border effect with real-time controls. Features dynamic SVG filters, CSS animations, responsive design, and collapsible controls. Perfect for modern cards, buttons, or any UI element that needs an electrifying visual impact.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/df46cb0ce98eeb582f057e39706df4310d0b9c2d/Thumbnails/electricthumb.png",
    link: "Learn.html#website-design-electric-border-effect",
    topic: "Interactive Effects",
    demoHtml: `<!-- Interactive Electric Border Effect -->
<div class="electric-demo-container">
  <!-- Toggle button for controls -->
  <button class="toggle-controls-demo" onclick="toggleControlsDemo()" title="Toggle Controls">
    <span id="toggleIconDemo">⚙️</span>
  </button>

  <!-- Controls Panel -->
  <div class="controls-panel-demo" id="controlsPanelDemo">
    <h3 class="controls-title-demo">⚡ Electric Border Controls</h3>
    
    <div class="control-group-demo">
      <label class="control-label-demo">
        Border Color
        <span class="control-value-demo" id="colorValueDemo">#46DD96</span>
      </label>
      <input type="color" class="color-picker-demo" id="colorPickerDemo" value="#46DD96">
    </div>
    
    <div class="control-group-demo">
      <label class="control-label-demo">
        Border Width
        <span class="control-value-demo" id="widthValueDemo">2px</span>
      </label>
      <input type="range" class="slider-demo" id="widthSliderDemo" min="1" max="8" value="2" step="0.5">
    </div>
    
    <div class="control-group-demo">
      <label class="control-label-demo">
        Electric Blur
        <span class="control-value-demo" id="blurValueDemo">4px</span>
      </label>
      <input type="range" class="slider-demo" id="blurSliderDemo" min="1" max="12" value="4" step="0.5">
    </div>
    
    <div class="control-group-demo">
      <label class="control-label-demo">
        Displacement Scale
        <span class="control-value-demo" id="scaleValueDemo">50</span>
      </label>
      <input type="range" class="slider-demo" id="scaleSliderDemo" min="10" max="60" value="50" step="5">
    </div>
    
    <div class="control-group-demo">
      <label class="control-label-demo">
        Glow Opacity
        <span class="control-value-demo" id="opacityValueDemo">0.8</span>
      </label>
      <input type="range" class="slider-demo" id="opacitySliderDemo" min="0.1" max="1" value="0.8" step="0.1">
    </div>
    
    <button class="reset-button-demo" onclick="resetToDefaultsDemo()">Reset to Defaults</button>
  </div>

  <main class="main-container-demo">
    <svg class="svg-container-demo">
      <defs>
        <filter id="turbulent-displace-demo" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
            <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
            <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
          </feOffset>
          <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
          <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
          <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
          <feDisplacementMap id="displacementMapDemo" in="SourceGraphic" in2="combinedNoise" scale="50" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </defs>
    </svg>

    <div class="card-container-demo">
      <div class="inner-container-demo">
        <div class="border-outer-demo">
          <div class="main-card-demo"></div>
        </div>
        <div class="glow-layer-1-demo"></div>
        <div class="glow-layer-2-demo"></div>
      </div>

      <div class="overlay-1-demo"></div>
      <div class="overlay-2-demo"></div>
      <div class="background-glow-demo"></div>

      <div class="content-container-demo">
        <div class="content-top-demo">
          <div class="scrollbar-glass-demo" onclick="randomizeColorsDemo()">
            Interactive
          </div>
          <p class="title-demo">Electric Border</p>
        </div>

        <hr class="divider-demo" />

        <div class="content-bottom-demo">
          <p class="description-demo">
            Customize the electric border effect with real-time controls. 
            Adjust colors, width, blur, and animation to create your perfect electric effect.
            Click "Interactive" for random colors!
          </p>
        </div>
      </div>
    </div>
  </main>
</div>`,
    demoCss: `/* Interactive Electric Border Effect Styles */
:root {
  --electric-border-color-demo: #46DD96;
  --electric-width-demo: 2px;
  --electric-blur-demo: 4px;
  --electric-scale-demo: 50;
  --electric-opacity-demo: 0.8;
  --animation-speed-demo: 6s;
}

.electric-demo-container {
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  min-height: 100vh;
  color: #ffffff;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  padding: 20px;
  overflow: hidden;
}

/* Toggle button for controls */
.toggle-controls-demo {
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 15px;
  color: white;
  cursor: pointer;
  z-index: 1001;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.toggle-controls-demo:hover {
  background: rgba(0, 0, 0, 0.95);
  transform: scale(1.05);
}

/* Controls panel - collapsed by default */
.controls-panel-demo {
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  z-index: 1000;
  min-width: 280px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.controls-panel-demo.visible {
  transform: translateX(0);
  opacity: 1;
}

.controls-title-demo {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
}

.control-group-demo {
  margin-bottom: 16px;
}

.control-label-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #cccccc;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.control-value-demo {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 10px;
}

.slider-demo {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.slider-demo::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--electric-border-color-demo), #ffffff);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.color-picker-demo {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: var(--electric-border-color-demo);
  transition: transform 0.2s ease;
}

.reset-button-demo {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 16px;
}

.reset-button-demo:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Main container */
.main-container-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
}

.svg-container-demo {
  position: absolute;
  width: 0;
  height: 0;
}

/* Card container */
.card-container-demo {
  padding: calc(var(--electric-width-demo) * 1px);
  border-radius: 24px;
  position: relative;
  background: linear-gradient(
    -30deg,
    color-mix(in srgb, var(--electric-border-color-demo) 20%, transparent),
    transparent,
    color-mix(in srgb, var(--electric-border-color-demo) 20%, transparent)
  );
  transition: all 0.3s ease;
}

.inner-container-demo {
  position: relative;
}

.border-outer-demo {
  border: calc(var(--electric-width-demo) * 1px) solid color-mix(in srgb, var(--electric-border-color-demo) 50%, transparent);
  border-radius: 24px;
  padding-right: 4px;
  padding-bottom: 4px;
  transition: all 0.3s ease;
}

.main-card-demo {
  width: 280px;
  height: 400px;
  border-radius: 20px;
  border: calc(var(--electric-width-demo) * 1px) solid var(--electric-border-color-demo);
  margin-top: -4px;
  margin-left: -4px;
  filter: url(#turbulent-displace-demo);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  box-shadow: 
    0 0 10px var(--electric-border-color-demo),
    0 0 20px var(--electric-border-color-demo),
    0 0 40px color-mix(in srgb, var(--electric-border-color-demo) 50%, transparent),
    inset 0 0 15px color-mix(in srgb, var(--electric-border-color-demo) 20%, transparent);
  
  animation: electricPulseDemo 2s ease-in-out infinite alternate,
             electricFlickerDemo 0.15s linear infinite;
}

/* Enhanced hover effect */
.main-card-demo:hover {
  transform: scale(1.08) rotate(1deg);
  box-shadow: 
    0 0 25px var(--electric-border-color-demo),
    0 0 50px var(--electric-border-color-demo),
    0 0 100px color-mix(in srgb, var(--electric-border-color-demo) 90%, transparent),
    inset 0 0 40px color-mix(in srgb, var(--electric-border-color-demo) 50%, transparent);
  animation: electricPulseHoverDemo 0.6s ease-in-out infinite alternate,
             electricFlickerHoverDemo 0.08s linear infinite,
             electricIntensePulseDemo 0.3s ease-in-out infinite alternate-reverse;
}

@keyframes electricPulseDemo {
  0% { 
    box-shadow: 
      0 0 10px var(--electric-border-color-demo),
      0 0 20px var(--electric-border-color-demo),
      0 0 40px color-mix(in srgb, var(--electric-border-color-demo) 50%, transparent);
  }
  100% { 
    box-shadow: 
      0 0 15px var(--electric-border-color-demo),
      0 0 30px var(--electric-border-color-demo),
      0 0 60px color-mix(in srgb, var(--electric-border-color-demo) 70%, transparent);
  }
}

@keyframes electricPulseHoverDemo {
  0% { 
    box-shadow: 
      0 0 25px var(--electric-border-color-demo),
      0 0 50px var(--electric-border-color-demo),
      0 0 100px color-mix(in srgb, var(--electric-border-color-demo) 90%, transparent);
  }
  100% { 
    box-shadow: 
      0 0 35px var(--electric-border-color-demo),
      0 0 70px var(--electric-border-color-demo),
      0 0 140px color-mix(in srgb, var(--electric-border-color-demo) 100%, transparent);
  }
}

@keyframes electricIntensePulseDemo {
  0% { 
    filter: url(#turbulent-displace-demo) brightness(1) saturate(1.2);
  }
  100% { 
    filter: url(#turbulent-displace-demo) brightness(1.3) saturate(1.5);
  }
}

@keyframes electricFlickerDemo {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0.95; }
}

@keyframes electricFlickerHoverDemo {
  0%, 85%, 100% { opacity: 1; }
  90% { opacity: 0.9; }
  95% { opacity: 0.95; }
}

/* Content styling */
.content-container-demo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}

.content-top-demo {
  display: flex;
  flex-direction: column;
  padding: 48px;
  padding-bottom: 16px;
  height: 100%;
}

.content-bottom-demo {
  display: flex;
  flex-direction: column;
  padding: 48px;
  padding-top: 16px;
}

.scrollbar-glass-demo {
  background: radial-gradient(
    47.2% 50% at 50.39% 88.37%,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0) 100%
  ),
  rgba(255, 255, 255, 0.04);
  position: relative;
  transition: background 0.3s ease;
  border-radius: 14px;
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  pointer-events: auto;
  cursor: pointer;
}

.title-demo {
  font-size: 36px;
  font-weight: 500;
  margin-top: auto;
  background: linear-gradient(135deg, var(--electric-border-color-demo), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description-demo {
  opacity: 0.7;
  line-height: 1.5;
  color: #cccccc;
}

.divider-demo {
  margin-top: auto;
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--electric-border-color-demo),
    transparent
  );
  opacity: 0.5;
}

/* Responsive design */
@media (max-width: 768px) {
  .main-card-demo {
    width: 260px;
    height: 360px;
  }
  
  .controls-panel-demo {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    min-width: 280px;
    max-width: 85vw;
    margin: 0;
    border-radius: 0 16px 16px 0;
  }
}`,
    demoJs: `// Interactive Electric Border Effect JavaScript
function updatePropertyDemo(property, value, unit = '') {
  document.documentElement.style.setProperty(property, value + unit);
}

// Toggle controls panel
function toggleControlsDemo() {
  const panel = document.getElementById('controlsPanelDemo');
  const icon = document.getElementById('toggleIconDemo');
  
  panel.classList.toggle('visible');
  
  if (panel.classList.contains('visible')) {
    icon.textContent = '✕';
  } else {
    icon.textContent = '⚙️';
  }
}

// Reset to defaults function
function resetToDefaultsDemo() {
  const colorPicker = document.getElementById('colorPickerDemo');
  const widthSlider = document.getElementById('widthSliderDemo');
  const blurSlider = document.getElementById('blurSliderDemo');
  const scaleSlider = document.getElementById('scaleSliderDemo');
  const opacitySlider = document.getElementById('opacitySliderDemo');
  
  if (colorPicker) colorPicker.value = '#46DD96';
  if (widthSlider) widthSlider.value = '2';
  if (blurSlider) blurSlider.value = '4';
  if (scaleSlider) scaleSlider.value = '50';
  if (opacitySlider) opacitySlider.value = '0.8';
  
  // Trigger all change events
  [colorPicker, widthSlider, blurSlider, scaleSlider, opacitySlider].forEach(el => {
    if (el) el.dispatchEvent(new Event('input'));
  });
}

// Random color generator
function randomizeColorsDemo() {
  const colors = [
    '#46DD96', '#4a90dd', '#dd4a90', '#90dd4a', 
    '#9a4add', '#dd4a4a', '#4adddd', '#dddd4a',
    '#ff6b35', '#35ff6b'
  ];
  
  const colorPicker = document.getElementById('colorPickerDemo');
  if (colorPicker) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorPicker.value = randomColor;
    colorPicker.dispatchEvent(new Event('input'));
  }
}

// Initialize controls when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Color picker handler
  const colorPicker = document.getElementById('colorPickerDemo');
  if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
      const color = e.target.value;
      updatePropertyDemo('--electric-border-color-demo', color);
      const colorValue = document.getElementById('colorValueDemo');
      if (colorValue) colorValue.textContent = color.toUpperCase();
    });
  }

  // Width slider handler
  const widthSlider = document.getElementById('widthSliderDemo');
  if (widthSlider) {
    widthSlider.addEventListener('input', (e) => {
      const width = e.target.value;
      updatePropertyDemo('--electric-width-demo', width);
      const widthValue = document.getElementById('widthValueDemo');
      if (widthValue) widthValue.textContent = width + 'px';
    });
  }

  // Blur slider handler
  const blurSlider = document.getElementById('blurSliderDemo');
  if (blurSlider) {
    blurSlider.addEventListener('input', (e) => {
      const blur = e.target.value;
      updatePropertyDemo('--electric-blur-demo', blur);
      const blurValue = document.getElementById('blurValueDemo');
      if (blurValue) blurValue.textContent = blur + 'px';
    });
  }

  // Scale slider handler
  const scaleSlider = document.getElementById('scaleSliderDemo');
  if (scaleSlider) {
    scaleSlider.addEventListener('input', (e) => {
      const scale = e.target.value;
      updatePropertyDemo('--electric-scale-demo', scale);
      const displacementMap = document.getElementById('displacementMapDemo');
      if (displacementMap) {
        displacementMap.setAttribute('scale', scale);
      }
      const scaleValue = document.getElementById('scaleValueDemo');
      if (scaleValue) scaleValue.textContent = scale;
    });
  }

  // Opacity slider handler
  const opacitySlider = document.getElementById('opacitySliderDemo');
  if (opacitySlider) {
    opacitySlider.addEventListener('input', (e) => {
      const opacity = e.target.value;
      updatePropertyDemo('--electric-opacity-demo', opacity);
      const opacityValue = document.getElementById('opacityValueDemo');
      if (opacityValue) opacityValue.textContent = opacity;
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      randomizeColorsDemo();
    }
    if (e.code === 'Escape') {
      const panel = document.getElementById('controlsPanelDemo');
      const icon = document.getElementById('toggleIconDemo');
      if (panel && panel.classList.contains('visible')) {
        panel.classList.remove('visible');
        if (icon) icon.textContent = '⚙️';
      }
    }
    if (e.code === 'KeyC' && e.ctrlKey) {
      e.preventDefault();
      toggleControlsDemo();
    }
  });

  console.log('🔥 Interactive Electric Border Effect Loaded!');
  console.log('💡 Press SPACE for random colors');
  console.log('⚙️ Press Ctrl+C to toggle controls');
  console.log('🚪 Press ESC to close controls panel');
});`
},
  
  {
    section: ["Learning", "Website Design"],
    program: {
        name: "Website Design",
        image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png"
    },
    title: "Photo with Text Overlay on Hover",
    description: "Learn how to create elegant text overlay effects that appear on photo hover. This component demonstrates smooth CSS animations, typography effects, and interactive design patterns perfect for image galleries, portfolios, and call-to-action elements.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/653e4e96a66ce216ab29d40759a7bb70a385e937/photos/Surf%20Photo.jpeg",
    link: "Learn.html#website-design-photo-text-overlay",
    topic: "Hover Effects",
    demoHtml: `<!-- Photo with Text Overlay Effect -->
<div class="photo-text-container">
  <div class="photo-text-wrapper">
    <!-- Photo -->
    <div class="photo-section">
      <img 
        src="https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/618ea3020969a2f912bef52381d88d988adac4b2/photos/Surf%20Photo%20Vertical.jpeg" 
        alt="Surfing Photo"
        class="main-photo"
      >
      
      <!-- Overlay Background -->
      <div class="overlay-background"></div>
      
      <!-- Text Overlay -->
      <div class="text-overlay">
        <div class="text-content">
          <h2 class="overlay-title">Learn Surfing</h2>
          <p class="overlay-subtitle">Ride the waves with confidence</p>
          <div class="overlay-button">
            <span>Get Started</span>
            <i class="arrow">→</i>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Photo Info -->
    <div class="photo-info">
      <div class="info-content">
        <h3>Interactive Text Overlay</h3>
        <p>Hover to reveal content</p>
      </div>
    </div>
  </div>
  
  <!-- Instructions -->
  <div class="photo-instructions">
    <p>✨ Hover over the image to see the text overlay effect</p>
  </div>
</div>`,
    demoCss: `/* Photo with Text Overlay Styles */
.photo-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.photo-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Photo Section */
.photo-section {
  position: relative;
  width: 320px;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-section:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.main-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.photo-section:hover .main-photo {
  transform: scale(1.1);
}

/* Overlay Background */
.overlay-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(17, 153, 142, 0.8),
    rgba(45, 27, 105, 0.8)
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.photo-section:hover .overlay-background {
  opacity: 1;
}

/* Text Overlay */
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: 0.1s;
}

.photo-section:hover .text-overlay {
  opacity: 1;
  transform: translateY(0);
}

.text-content {
  text-align: center;
  color: white;
  padding: 30px;
  max-width: 260px;
}

.overlay-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.photo-section:hover .overlay-title {
  animation-delay: 0.2s;
}

.overlay-subtitle {
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 25px 0;
  opacity: 0.9;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.photo-section:hover .overlay-subtitle {
  animation-delay: 0.3s;
}

.overlay-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.photo-section:hover .overlay-button {
  animation-delay: 0.4s;
}

.overlay-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.arrow {
  font-style: normal;
  transition: transform 0.3s ease;
}

.overlay-button:hover .arrow {
  transform: translateX(5px);
}

/* Slide in animation */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Photo Info */
.photo-info {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  color: white;
  max-width: 320px;
}

.info-content h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
}

.info-content p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}

/* Instructions */
.photo-instructions {
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  font-size: 14px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

/* Advanced Hover Effects */
.photo-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 3;
  pointer-events: none;
}

.photo-section:hover::before {
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .photo-section {
    width: 280px;
    height: 420px;
  }
  
  .photo-text-container {
    padding: 20px 10px;
  }
  
  .overlay-title {
    font-size: 28px;
  }
  
  .text-content {
    padding: 20px;
  }
}

/* Performance Optimizations */
.photo-section {
  will-change: transform;
}

.text-overlay {
  will-change: opacity, transform;
}

.main-photo {
  will-change: transform;
}`,
    demoJs: `// Photo with Text Overlay JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const photoSection = document.querySelector('.photo-section');
  const overlayButton = document.querySelector('.overlay-button');
  
  if (!photoSection) return;
  
  let isAnimating = false;
  
  // Enhanced hover enter
  photoSection.addEventListener('mouseenter', function() {
    if (isAnimating) return;
    isAnimating = true;
    
    console.log('📸 Photo hover activated - showing text overlay');
    
    // Add visual feedback
    this.style.transform = 'translateY(-8px) scale(1.02)';
    
    setTimeout(() => {
      isAnimating = false;
    }, 600);
  });
  
  // Enhanced hover leave
  photoSection.addEventListener('mouseleave', function() {
    console.log('👋 Photo hover ended - hiding text overlay');
    
    // Reset transform
    this.style.transform = '';
  });
  
  // Button click handler
  if (overlayButton) {
    overlayButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('🏄‍♂️ Learn Surfing button clicked!');
      
      // Add click effect
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.style.transform = '';
        
        // Simulate navigation or action
        alert('🌊 Ready to learn surfing? This would navigate to a surfing course!');
      }, 150);
    });
  }
  
  // Keyboard accessibility
  photoSection.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.dispatchEvent(new Event('mouseenter'));
      
      setTimeout(() => {
        this.dispatchEvent(new Event('mouseleave'));
      }, 2000);
    }
  });
  
  // Focus management for accessibility
  photoSection.setAttribute('tabindex', '0');
  photoSection.setAttribute('role', 'button');
  photoSection.setAttribute('aria-label', 'View surfing content with text overlay');
  
  // Performance optimization - preload overlay effects
  const textOverlay = document.querySelector('.text-overlay');
  if (textOverlay) {
    // Warm up animations
    textOverlay.style.willChange = 'opacity, transform';
  }
  
  // Initialize
  console.log('✨ Photo Text Overlay Effect initialized');
  console.log('🎯 Hover over photo to see "Learn Surfing" text appear');
});`
},
{
    section: ["Learning", "Website Design"],
    program: {
        name: "Website Design",
        image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png"
    },
    title: "Photo to Video Hover Effect",
    description: "Learn how to create smooth photo-to-video hover transitions with fade effects. This interactive component demonstrates modern web techniques using CSS transforms, video controls, and smooth animations perfect for portfolio galleries and interactive media displays.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/653e4e96a66ce216ab29d40759a7bb70a385e937/photos/Surf%20Photo.jpeg",
    link: "Learn.html#website-design-photo-video-hover",
    topic: "Hover Effects",
    demoHtml: `<!-- Photo to Video Hover Effect -->
<div class="media-container">
  <div class="media-wrapper">
    <!-- Photo Layer -->
    <div class="photo-layer">
      <img 
        src="https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/618ea3020969a2f912bef52381d88d988adac4b2/photos/Surf%20Photo%20Vertical.jpeg" 
        alt="Surfing Photo"
        class="surf-photo"
      >
    </div>
    
    <!-- Video Layer -->
    <div class="video-layer">
      <video 
        class="surf-video" 
        muted 
        loop 
        playsinline
        preload="auto"
       autoplay>
        <source 
          src="https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9645f9d5ec4ac5e0b6776abdc8458b8f133833d1/Videos/Smaller%20Surf%20Video.mp4" 
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
    
    <!-- Overlay Info -->
    <div class="media-overlay">
      <div class="overlay-content">
        <h3>Hover Effect</h3>
        <p>Photo → Video</p>
      </div>
    </div>
  </div>
  
  <!-- Instructions -->
  <div class="instructions">
    <p>🎥 Hover over the image to see the video transition</p>
  </div>
</div>`,
    demoCss: `/* Photo to Video Hover Effect Styles */
.media-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.media-wrapper {
  position: relative;
  width: 320px;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.media-wrapper:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

/* Photo Layer */
.photo-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: opacity 0.8s ease-in-out;
}

.surf-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.8s ease;
}

/* Video Layer */
.video-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.surf-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Hover Effects */
.media-wrapper:hover .photo-layer {
  opacity: 0;
}

.media-wrapper:hover .video-layer {
  opacity: 1;
}

.media-wrapper:hover .surf-photo {
  transform: scale(1.1);
}

/* Media Overlay */
.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.3),
    transparent,
    rgba(0, 0, 0, 0.3)
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 30px;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.media-wrapper:hover .media-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 15px 25px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.media-wrapper:hover .overlay-content {
  transform: translateY(0);
}

.overlay-content h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 600;
}

.overlay-content p {
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
}

/* Instructions */
.instructions {
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  font-size: 14px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

/* Loading Spinner for Video */
.video-layer::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.video-layer.loading::before {
  opacity: 1;
}

@keyframes spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .media-wrapper {
    width: 280px;
    height: 420px;
  }
  
  .media-container {
    padding: 20px 10px;
  }
}

/* Performance Optimizations */
.media-wrapper {
  will-change: transform;
}

.photo-layer,
.video-layer {
  will-change: opacity;
}`,
    demoJs: `// Photo to Video Hover Effect JavaScript - Fixed for Learning Module Confunction initPhotoVideoHoverEffect() {
  // Wait a bit for content to be fully rendered
  setTimeout(() => {
    // Use more specific selectors to avoid conflicts with other demos
    const demoContainer = document.querySelector('#website-design-photo-video-hover');
    if (!demoContainer) return;
    
    const mediaWrapper = demoContainer.querySelector('.media-wrapper');
    const video = demoContainer.querySelector('.surf-video');
    const videoLayer = demoContainer.querySelector('.video-layer');
    
    if (!mediaWrapper || !video || !videoLayer) {
      console.log('❌ Photo to Video elements not found in demo container');
      return;
    }
    
    let isVideoLoaded = false;
    let isHovering = false;
// Preload video on first interaction
    function preloadVideo() {
      if (!isVideoLoaded) {
        videoLayer.classList.add('loading');
        video.muted = true;
        video.setAttribute('autoplay', '');
        video.load();
        video.addEventListener('canplaythrough', function() {
          isVideoLoaded = true;
          videoLayer.classList.remove('loading');
          console.log('✅ Video loaded successfully for demo');
          if (isHovering) {
            video.currentTime = 0;
            video.play().catch(()=>{});
          }
        }, { once: true });
        
        video.addEventListener('error', function() {
          console.error('❌ Video failed to load in demo');
          videoLayer.classList.remove('loading');
        }, { once: true });
      }
    }
    
    // Mouse enter event with user interaction check
    mediaWrapper.addEventListener('mouseenter', function() {
      isHovering = true;
      preloadVideo();
      
      // Small delay to ensure smooth transition
      setTimeout(() => {
        if (isHovering && isVideoLoaded) {
          video.currentTime = 0;
          if (isVideoLoaded) {
          video.currentTime = 0;
          video.play().catch(()=>{});
        }
}, 100);
    });
    
    // Mouse leave event  
    mediaWrapper.addEventListener('mouseleave', function() {
      isHovering = false;
      
      // Pause video with slight delay for smooth transition
      setTimeout(() => {
        if (!isHovering) {
          video.pause();
        }
      }, 200);
    });
    
    // Handle video ended (restart loop)
    video.addEventListener('ended', function() {
      if (isHovering) {
        video.currentTime = 0;
        video.play().catch(e => {
          console.warn('Video replay failed in demo:', e);
        });
      }
    });
    
    // Add click to play functionality as fallback
    mediaWrapper.addEventListener('click', function() {
if (isVideoLoaded) {
        if (video.paused) {
          video.play().catch(e => console.log('Click play failed:', e));
        } else {
          video.pause();
        }
      }
    });
    
    // Initialize
    console.log('🚀 Photo to Video Hover Effect initialized for learning module');
    
  }, 500); // Wait 500ms for content to render
}der
}

// Initialize when content loads or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPhotoVideoHoverEffect);
} else {
  initPhotoVideoHoverEffect();
}`
},

  {
 section:[
            "Learning",
            "Templates"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/08fa67a3d2a47ba58a95097a62d3140c44c3d032/Thumbnails/interactivemorphtemp9.22.png",
https:"https://youtu.be/ers-81-bFO4",
 title:"Interactive Morph Template",
        description:"In this video we cover an amazing and advanced template build where we combine the morph transition along with other formatting options to create an amazing presentation.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/08fa67a3d2a47ba58a95097a62d3140c44c3d032/Thumbnails/interactivemorphtemp9.22.png",
       link:"https://youtu.be/ers-81-bFO4",


  related:{
            text:"Link to Template",
            url:"https://docs.google.com/presentation/d/1eYWlgIPVrBVg6EhInnT5UvaBN7AfluXw/export/pptx"
        },
        topic:"Morph Templates"
    },




{
 section:[
            "Learning",
            "Templates"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/7010d4dbc6432223ee66b93865306ae9aaabc28b/Thumbnails/time.png",
https:"https://youtu.be/y1gPf0kbf-Y",
 title:"Timeline Morph Transition",
        description:"In this video we cover how to create an awesome PowerPoint timeline presentation.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/7010d4dbc6432223ee66b93865306ae9aaabc28b/Thumbnails/time.png",
       link:"https://youtu.be/y1gPf0kbf-Y",


  related:{
            text:"Link to Template",
            url:"https://docs.google.com/presentation/d/18-Kc8ofXcFfDj-kdTZdkK0d0WWqTPulu/export/pptx"
        },
        topic:"Timelines"
    },


  
  
  {
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/7010d4dbc6432223ee66b93865306ae9aaabc28b/Thumbnails/time.png",
https:"https://youtu.be/BwEq5QTCwEI",
 title:"Timeline Morph Transition",
        description:"In this video we cover how to create an awesome PowerPoint timeline presentation.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/7010d4dbc6432223ee66b93865306ae9aaabc28b/Thumbnails/time.png",
       link:"https://youtu.be/BwEq5QTCwEI",


   related: [
    {
      text:"Watch on YouTube",
            url:"https://youtu.be/BwEq5QTCwEI"
        },
    {
       text:"Link to Template",
            url:" https://docs.google.com/presentation/d/18-Kc8ofXcFfDj-kdTZdkK0d0WWqTPulu/export/pptx"
    }
    ],
        topic:"Timelines"
    },

{
 section:[
            "Learning",           
            "Simulations"
       
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c53a3f7d6c58f32ed0058cebafbb3a6bf134f5d6/Thumbnails/simsss.png",
https:"https://youtu.be/g46C_wkCXnM",
 title:"Learn VLOOKUP with Interactive Simulation",
        description:"This is a simulation I created on how to use the VLOOKUP function.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c53a3f7d6c58f32ed0058cebafbb3a6bf134f5d6/Thumbnails/simsss.png",
       link:"https://youtu.be/g46C_wkCXnM",


  related: [
    {
      text:"PC Simulation Link",
            url:" https://drive.google.com/uc?export=download&id=1ShdROCBcUP1HBVftx9G_VhbNtUekQyH_"
        },
    {
       text:"Mobile Simulation Link",
            url:"https://drive.google.com/uc?export=download&id=1TxPvhimh3Nb5hJw35hYDR6_9-YErYbq7"
    }
    ],
        topic:"VLOOKUP Learning Simulation"
    },


{
    section: ["Learning", "Website Design"],
    program: {
        name: "Website Design",
        image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png"
    },
    title: "Professional Login Form with Validation",
    description: "Learn how to create a modern, professional login form with advanced validation, password visibility toggle, loading states, and social authentication options. Features responsive design, accessibility compliance, and enterprise-grade styling perfect for business applications.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/0a51e4f4adfc3d8b62851081f74a7dd2a4bbd65c/Thumbnails/Screenshot%202025-09-26%20052218.png",
    link: "Learn.html#website-design-professional-login-form",
    topic: "Form Design",
    demoHtml: `<!-- Professional Login Form -->
<div class="login-container">
  <!-- Header -->
  <div class="login-header">
    <div class="logo">
      <i class="fas fa-user-shield"></i>
    </div>
    <h1 class="login-title">Welcome Back</h1>
    <p class="login-subtitle">Please sign in to your account to continue</p>
  </div>

  <!-- Login Form -->
  <form class="login-form" id="loginForm">
    <!-- Email Input -->
    <div class="input-group">
      <label for="email" class="input-label">
        Email Address <span class="required">*</span>
      </label>
      <div class="input-wrapper">
        <i class="fas fa-envelope input-icon"></i>
        <input 
          type="email" 
          id="email" 
          name="email" 
          class="input-field" 
          placeholder="Enter your email address" 
          required
        >
      </div>
      <div id="email-error" class="error-message"></div>
    </div>

    <!-- Password Input -->
    <div class="input-group">
      <label for="password" class="input-label">
        Password <span class="required">*</span>
      </label>
      <div class="input-wrapper">
        <i class="fas fa-lock input-icon"></i>
        <input 
          type="password" 
          id="password" 
          name="password" 
          class="input-field" 
          placeholder="Enter your password" 
          required
        >
        <button 
          type="button" 
          class="password-toggle" 
          onclick="togglePassword()"
        >
          <i class="fas fa-eye" id="password-icon"></i>
        </button>
      </div>
      <div id="password-error" class="error-message"></div>
    </div>

    <!-- Remember Me & Forgot Password -->
    <div class="remember-forgot">
      <div class="remember-me">
        <input type="checkbox" id="remember" name="remember" class="checkbox">
        <label for="remember">Remember me</label>
      </div>
      <a href="#" class="forgot-link">Forgot Password?</a>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="login-button" id="loginBtn">
      <i class="fas fa-sign-in-alt"></i>
      <span>Sign In</span>
    </button>
  </form>

  <!-- Divider -->
  <div class="divider">
    <span class="divider-text">Or continue with</span>
  </div>

  <!-- Social Login -->
  <div class="social-login">
    <a href="#" class="social-button">
      <i class="fab fa-google"></i>
      <span>Google</span>
    </a>
    <a href="#" class="social-button">
      <i class="fab fa-microsoft"></i>
      <span>Microsoft</span>
    </a>
  </div>

  <!-- Sign-up Link -->
  <div class="signup-link">
    Don't have an account? <a href="#">Sign up here</a>
  </div>
</div>

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`,
    demoCss: `/* Professional Login Form Styles */
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* CSS Variables for consistent theming */
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #64748b;
  --success-color: #10b981;
  --error-color: #ef4444;
  --surface-color: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-lg: 0.75rem;
  --radius-md: 0.5rem;
}

/* Body - creates full-height centered layout */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

/* Main login container */
.login-container {
  background: var(--surface-color);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 400px;
  position: relative;
}

/* Header section */
.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

/* Logo styling */
.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Title styling */
.login-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

/* Subtitle */
.login-subtitle {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Form styling */
.login-form {
  position: relative;
}

/* Input group container */
.input-group {
  margin-bottom: 1.5rem;
  position: relative;
}

/* Input labels */
.input-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

/* Required field indicator */
.required {
  color: var(--error-color);
}

/* Input wrapper */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

/* Input icons */
.input-icon {
  position: absolute;
  left: 0.75rem;
  color: var(--text-secondary);
  font-size: 1rem;
  pointer-events: none;
  z-index: 1;
}

/* Input fields */
.input-field {
  width: 100%;
  padding: 0.75rem 2.75rem 0.75rem 2.5rem;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  color: var(--text-primary);
  background: var(--surface-color);
  transition: all 0.2s ease;
  outline: none;
}

/* Input focus state */
.input-field:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

/* Password toggle button */
.password-toggle {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s ease;
}

.password-toggle:hover {
  color: var(--text-primary);
}

/* Remember me section */
.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
}

.checkbox:checked {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.forgot-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

/* Login button */
.login-button {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-button:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

/* Loading state */
.login-button.loading {
  background: var(--secondary-color);
  cursor: not-allowed;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Divider */
.divider {
  margin: 1.5rem 0;
  position: relative;
  text-align: center;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border-color);
}

.divider-text {
  background: var(--surface-color);
  padding: 0 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Social login */
.social-login {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.social-button {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--surface-color);
  color: var(--text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 0.2s ease;
  gap: 0.5rem;
}

.social-button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

/* Sign-up link */
.signup-link {
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.signup-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.signup-link a:hover {
  text-decoration: underline;
}

/* Error messages */
.error-message {
  color: var(--error-color);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  min-height: 1rem;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .login-container {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .login-title {
    font-size: 1.5rem;
  }
  
  .social-login {
    flex-direction: column;
  }
}`,
    demoJs: `// Professional Login Form JavaScript
// Password visibility toggle
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const passwordIcon = document.getElementById('password-icon');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.className = 'fas fa-eye-slash';
  } else {
    passwordInput.type = 'password';
    passwordIcon.className = 'fas fa-eye';
  }
}

// Form validation
function validateForm() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  let isValid = true;

  // Clear previous errors
  emailError.textContent = '';
  passwordError.textContent = '';

  // Email validation
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!email) {
    emailError.textContent = 'Email address is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Password validation
  if (!password) {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  return isValid;
}

// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (validateForm()) {
    const loginBtn = document.getElementById('loginBtn');
    const btnText = loginBtn.querySelector('span');
    const btnIcon = loginBtn.querySelector('i');
    
    // Show loading state
    loginBtn.classList.add('loading');
    btnIcon.className = 'spinner';
    btnText.textContent = 'Signing In...';
    
    // Simulate authentication
    setTimeout(() => {
      loginBtn.classList.remove('loading');
      btnIcon.className = 'fas fa-check';
      btnText.textContent = 'Success!';
      
      setTimeout(() => {
        alert('Login successful!');
        // Reset for demo
        btnIcon.className = 'fas fa-sign-in-alt';
        btnText.textContent = 'Sign In';
      }, 1500);
    }, 2000);
  }
});

// Clear errors on input
document.getElementById('email').addEventListener('input', function() {
  document.getElementById('email-error').textContent = '';
});

document.getElementById('password').addEventListener('input', function() {
  document.getElementById('password-error').textContent = '';
});

// Initialize form when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Professional Login Form initialized successfully');
});`
},

{
    section: ["Learning", "Website Design"],
    program: {
        name: "Website Design",
        image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c64cb5330505f1def1e6e7fb62755a2f49ca4205/icons/websitedesignicon.png"
    },
    title: "9 Dot Interactive Navigation Menu",
    description: "Learn how to create a stunning 9-dot grid navigation menu with smooth reveal animations, staggered timing effects, and interactive hover states. Features backdrop blur, glassmorphism design, and floating particle animations. Perfect for modern web interfaces and app-style navigation.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e60929327344cb1a9d8809e01c13096eb05175eb/Thumbnails/9dotnavmenuthumb.png",
    link: "Learn.html#website-design-9dot-nav-menu",
    topic: "Interactive Navigation",
    demoHtml: `<!-- 9 Dot Navigation Menu -->
<div class="nav-container">
  <div class="navigation">
    <div class="nav-item" data-tooltip="Coffee">
      <i class="fas fa-coffee"></i>
    </div>
    <div class="nav-item" data-tooltip="Notifications">
      <i class="fas fa-bell"></i>
    </div>
    <div class="nav-item" data-tooltip="Weather">
      <i class="fas fa-cloud-rain"></i>
    </div>
    <div class="nav-item" data-tooltip="Camera">
      <i class="fas fa-camera"></i>
    </div>
    <div class="nav-item active" data-tooltip="Close">
      <i class="fas fa-times"></i>
    </div>
    <div class="nav-item" data-tooltip="Settings">
      <i class="fas fa-cog"></i>
    </div>
    <div class="nav-item" data-tooltip="Games">
      <i class="fas fa-gamepad"></i>
    </div>
    <div class="nav-item" data-tooltip="Alarm">
      <i class="fas fa-clock"></i>
    </div>
    <div class="nav-item" data-tooltip="Profile">
      <i class="fas fa-user"></i>
    </div>
  </div>
</div>

<!-- Font Awesome for icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`,
    demoCss: `/* 9 Dot Navigation Menu Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: white;
  padding: 40px 20px;
}

.nav-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.navigation {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width: 400px;
  height: 400px;
  position: relative;
}

.nav-item {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: scale(0);
}

/* Center item (trigger) - always visible */
.nav-item:nth-child(5) {
  opacity: 1;
  transform: scale(1);
  background: #4ade80;
  border-color: #4ade80;
  box-shadow: 
    0 20px 40px rgba(74, 222, 128, 0.4),
    0 0 30px rgba(74, 222, 128, 0.3);
}

/* Show all items when hovering over the navigation container */
.navigation:hover .nav-item {
  opacity: 1;
  transform: scale(1);
}

/* Staggered animation delays for smooth entrance */
.navigation:hover .nav-item:nth-child(1) { transition-delay: 0.1s; }
.navigation:hover .nav-item:nth-child(2) { transition-delay: 0.15s; }
.navigation:hover .nav-item:nth-child(3) { transition-delay: 0.2s; }
.navigation:hover .nav-item:nth-child(4) { transition-delay: 0.05s; }
.navigation:hover .nav-item:nth-child(5) { transition-delay: 0s; } /* Center - no delay */
.navigation:hover .nav-item:nth-child(6) { transition-delay: 0.05s; }
.navigation:hover .nav-item:nth-child(7) { transition-delay: 0.2s; }
.navigation:hover .nav-item:nth-child(8) { transition-delay: 0.15s; }
.navigation:hover .nav-item:nth-child(9) { transition-delay: 0.1s; }

/* When not hovering, hide items with reverse delay */
.nav-item:nth-child(1) { transition-delay: 0.2s; }
.nav-item:nth-child(2) { transition-delay: 0.15s; }
.nav-item:nth-child(3) { transition-delay: 0.1s; }
.nav-item:nth-child(4) { transition-delay: 0.25s; }
.nav-item:nth-child(5) { transition-delay: 0s; } /* Center - always visible */
.nav-item:nth-child(6) { transition-delay: 0.25s; }
.nav-item:nth-child(7) { transition-delay: 0.1s; }
.nav-item:nth-child(8) { transition-delay: 0.15s; }
.nav-item:nth-child(9) { transition-delay: 0.2s; }

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.nav-item:hover::before {
  left: 100%;
}

.nav-item:hover {
  transform: translateY(-8px) scale(1.05);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background: #4ade80;
  border-color: #4ade80;
  box-shadow: 
    0 20px 40px rgba(74, 222, 128, 0.4),
    0 0 30px rgba(74, 222, 128, 0.3);
  opacity: 1;
  transform: scale(1);
}

.nav-item.active:hover {
  background: #22c55e;
  border-color: #22c55e;
}

.nav-item i {
  font-size: 32px;
  color: white;
  transition: all 0.3s ease;
}

.nav-item:hover i {
  transform: scale(1.2);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

/* Individual item colors on hover */
.nav-item:nth-child(1):hover { background: rgba(139, 69, 19, 0.3); border-color: #8b4513; }
.nav-item:nth-child(2):hover { background: rgba(255, 193, 7, 0.3); border-color: #ffc107; }
.nav-item:nth-child(3):hover { background: rgba(0, 123, 255, 0.3); border-color: #007bff; }
.nav-item:nth-child(4):hover { background: rgba(220, 53, 69, 0.3); border-color: #dc3545; }
.nav-item:nth-child(6):hover { background: rgba(108, 117, 125, 0.3); border-color: #6c757d; }
.nav-item:nth-child(7):hover { background: rgba(102, 16, 242, 0.3); border-color: #6610f2; }
.nav-item:nth-child(8):hover { background: rgba(253, 126, 20, 0.3); border-color: #fd7e14; }
.nav-item:nth-child(9):hover { background: rgba(32, 201, 151, 0.3); border-color: #20c997; }

/* Ripple effect */
.nav-item {
  position: relative;
  overflow: hidden;
}

.nav-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.nav-item:active::after {
  width: 300px;
  height: 300px;
}

@keyframes pulse-text {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

/* Responsive design */
@media (max-width: 768px) {
  .title {
    font-size: 36px;
    margin-bottom: 40px;
  }
  
  .navigation {
    width: 300px;
    height: 300px;
    gap: 15px;
  }
  
  .nav-container {
    padding: 30px;
  }
  
  .nav-item i {
    font-size: 24px;
  }
}`,
    demoJs: `// 9 Dot Navigation Menu JavaScript
// Add click functionality and ripple effects
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item, index) => {
  item.addEventListener('click', function() {
    // Remove active class from all items
    navItems.forEach(nav => nav.classList.remove('active'));
    
    // Add active class to clicked item
    this.classList.add('active');
    
    // Optional: Add functionality for each item
    const tooltips = [
      'Coffee', 'Notifications', 'Weather', 'Camera', 
      'Close', 'Settings', 'Games', 'Alarm', 'Profile'
    ];
    
    console.log(\`Clicked: \${tooltips[index]}\`);
    
    // You can add navigation logic here
    // For example: window.location.href = 'page.html';
  });
  
  // Add hover sound effect (optional)
  item.addEventListener('mouseenter', function() {
    // You can add a subtle sound effect here if desired
    this.style.transform = 'translateY(-8px) scale(1.05)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Social Media Icons with Hover Effects",
    description: "Learn how to create stunning social media buttons with smooth hover animations, gradient backgrounds, and expandable text effects. This comprehensive example shows modern CSS techniques including backdrop-filter, transforms, and advanced hover states. Perfect for navigation bars, footers, or any social media integration.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/774fe8316c171aa235ad056ec3e0d7f9981ad5fa/Thumbnails/Screenshot%202025-08-19%20185150.png",
    link: "Learn.html#css-social-media-icons-demo",
    topic: "CSS Social Media Effects",
    demoHtml: `<div class="social-container">
  <h2 class="title">Connect With Me</h2>
  
  <a href="https://www.facebook.com" target="_blank" class="social-btn facebook">
    <i class="fab fa-facebook-f"></i><span>Facebook</span>
  </a>
  
  <a href="https://www.twitter.com" target="_blank" class="social-btn twitter">
    <i class="fab fa-twitter"></i><span>Twitter</span>
  </a>
  
  <a href="https://www.linkedin.com" target="_blank" class="social-btn linkedin">
    <i class="fab fa-linkedin-in"></i><span>LinkedIn</span>
  </a>
  
  <a href="https://www.youtube.com" target="_blank" class="social-btn youtube">
    <i class="fab fa-youtube"></i><span>YouTube</span>
  </a>
  
  <a href="https://www.instagram.com" target="_blank" class="social-btn instagram">
    <i class="fab fa-instagram"></i><span>Instagram</span>
  </a>
  
  <a href="https://www.github.com" target="_blank" class="social-btn github">
    <i class="fab fa-github"></i><span>GitHub</span>
  </a>
</div>

<!-- Font Awesome for icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">`,
    demoCss: `/* Social Media Icons with Hover Effects */
.social-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 10;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 20px auto;
}

.title {
  text-align: center;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 30px;
  color: white;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.social-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-btn:hover::before {
  opacity: 1;
}

.social-btn i {
  font-size: 22px;
  color: white;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  line-height: 1;
}

.social-btn span {
  opacity: 0;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
  transition: all 0.3s ease;
  position: absolute;
  left: 45px;
  z-index: 2;
  white-space: nowrap;
}

.social-btn:hover {
  width: 200px;
  justify-content: flex-start;
  padding-left: 18px;
  transform: translateX(3px) scale(1.01);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
}

.social-btn:hover i {
  transform: scale(1.05);
}

.social-btn:hover span {
  opacity: 1;
}

.social-btn:active {
  transform: translateX(3px) scale(0.99);
}

/* Platform-specific styles */
.facebook {
  background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
}

.facebook:hover {
  background: linear-gradient(135deg, #166fe5 0%, #1877f2 100%);
}

.twitter {
  background: linear-gradient(135deg, #1da1f2 0%, #64b5f6 100%);
}

.twitter:hover {
  background: linear-gradient(135deg, #1a91da 0%, #1da1f2 100%);
}

.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #2196f3 100%);
}

.linkedin:hover {
  background: linear-gradient(135deg, #005885 0%, #0077b5 100%);
}

.youtube {
  background: linear-gradient(135deg, #ff0000 0%, #ff5722 100%);
}

.youtube:hover {
  background: linear-gradient(135deg, #cc0000 0%, #ff0000 100%);
}

.instagram {
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
}

.instagram:hover {
  background: linear-gradient(135deg, #732d9e 0%, #e01a1a 50%, #e8a03a 100%);
}

.github {
  background: linear-gradient(135deg, #333 0%, #666 100%);
}

.github:hover {
  background: linear-gradient(135deg, #222 0%, #333 100%);
}

/* Entry animation */
.social-btn {
  animation: slideInLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
  transform: translateX(-50px);
}

.social-btn:nth-child(2) { animation-delay: 0.1s; }
.social-btn:nth-child(3) { animation-delay: 0.2s; }
.social-btn:nth-child(4) { animation-delay: 0.3s; }
.social-btn:nth-child(5) { animation-delay: 0.4s; }
.social-btn:nth-child(6) { animation-delay: 0.5s; }
.social-btn:nth-child(7) { animation-delay: 0.6s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .social-container {
    margin: 20px;
    padding: 20px;
  }
  
  .social-btn:hover {
    width: 170px;
  }
  
  .title {
    font-size: 1.2rem;
  }
}`
},



{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Social Media Icons with Hover Effects",
    description: "Learn how to create stunning social media buttons with smooth hover animations, gradient backgrounds, and expandable text effects. This comprehensive example shows modern CSS techniques including backdrop-filter, transforms, and advanced hover states. Perfect for navigation bars, footers, or any social media integration.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/774fe8316c171aa235ad056ec3e0d7f9981ad5fa/Thumbnails/Screenshot%202025-08-19%20185150.png",
    link: "Learn.html#css-social-media-icons-demo",
    topic: "CSS Social Media Effects",
    demoHtml: `<div class="social-container">
  <h2 class="title">Connect With Me</h2>
  
  <a href="https://www.facebook.com" target="_blank" class="social-btn facebook">
    <i class="fab fa-facebook-f"></i><span>Facebook</span>
  </a>
  
  <a href="https://www.twitter.com" target="_blank" class="social-btn twitter">
    <i class="fab fa-twitter"></i><span>Twitter</span>
  </a>
  
  <a href="https://www.linkedin.com" target="_blank" class="social-btn linkedin">
    <i class="fab fa-linkedin-in"></i><span>LinkedIn</span>
  </a>
  
  <a href="https://www.youtube.com" target="_blank" class="social-btn youtube">
    <i class="fab fa-youtube"></i><span>YouTube</span>
  </a>
  
  <a href="https://www.instagram.com" target="_blank" class="social-btn instagram">
    <i class="fab fa-instagram"></i><span>Instagram</span>
  </a>
  
  <a href="https://www.github.com" target="_blank" class="social-btn github">
    <i class="fab fa-github"></i><span>GitHub</span>
  </a>
</div>

<!-- Font Awesome for icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">`,
    demoCss: `/* Social Media Icons with Hover Effects */
.social-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 10;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 20px auto;
}

.title {
  text-align: center;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 30px;
  color: white;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.social-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-btn:hover::before {
  opacity: 1;
}

.social-btn i {
  font-size: 22px;
  color: white;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  line-height: 1;
}

.social-btn span {
  opacity: 0;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
  transition: all 0.3s ease;
  position: absolute;
  left: 45px;
  z-index: 2;
  white-space: nowrap;
}

.social-btn:hover {
  width: 200px;
  justify-content: flex-start;
  padding-left: 18px;
  transform: translateX(3px) scale(1.01);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
}

.social-btn:hover i {
  transform: scale(1.05);
}

.social-btn:hover span {
  opacity: 1;
}

.social-btn:active {
  transform: translateX(3px) scale(0.99);
}

/* Platform-specific styles */
.facebook {
  background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
}

.facebook:hover {
  background: linear-gradient(135deg, #166fe5 0%, #1877f2 100%);
}

.twitter {
  background: linear-gradient(135deg, #1da1f2 0%, #64b5f6 100%);
}

.twitter:hover {
  background: linear-gradient(135deg, #1a91da 0%, #1da1f2 100%);
}

.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #2196f3 100%);
}

.linkedin:hover {
  background: linear-gradient(135deg, #005885 0%, #0077b5 100%);
}

.youtube {
  background: linear-gradient(135deg, #ff0000 0%, #ff5722 100%);
}

.youtube:hover {
  background: linear-gradient(135deg, #cc0000 0%, #ff0000 100%);
}

.instagram {
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
}

.instagram:hover {
  background: linear-gradient(135deg, #732d9e 0%, #e01a1a 50%, #e8a03a 100%);
}

.github {
  background: linear-gradient(135deg, #333 0%, #666 100%);
}

.github:hover {
  background: linear-gradient(135deg, #222 0%, #333 100%);
}

/* Entry animation */
.social-btn {
  animation: slideInLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
  transform: translateX(-50px);
}

.social-btn:nth-child(2) { animation-delay: 0.1s; }
.social-btn:nth-child(3) { animation-delay: 0.2s; }
.social-btn:nth-child(4) { animation-delay: 0.3s; }
.social-btn:nth-child(5) { animation-delay: 0.4s; }
.social-btn:nth-child(6) { animation-delay: 0.5s; }
.social-btn:nth-child(7) { animation-delay: 0.6s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .social-container {
    margin: 20px;
    padding: 20px;
  }
  
  .social-btn:hover {
    width: 170px;
  }
  
  .title {
    font-size: 1.2rem;
  }
}`
},


{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"AI",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e78e9a4de4c8677f0934af550a36473b699011a8/icons/AIicon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/361ad8a40587881852dd710b33c9a5cdea0091bf/Thumbnails/aitoolsthumb9.22.png",
https:"https://youtu.be/sNF-ewlfqmw",
 title:"Automate Any Task or Workflow with Zapier",
        description:"In this video we cover an awesome AI tool called Zapier. It can be used to automate tasks by connecting over 6000 applications.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/361ad8a40587881852dd710b33c9a5cdea0091bf/Thumbnails/aitoolsthumb9.22.png",
       link:"https://youtu.be/sNF-ewlfqmw",


  related:
  [
      {
          text:"Check it out on YouTube",
          url:"https://youtu.be/sNF-ewlfqmw"
      },
      {
            text:"Visit Zapier",
            url:"https://www.zapier.com"
      }
  ],
        topic:"Automate Tasks"
    },



{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c7d4cae5047e954b54f512e3fd8ca3a3783d49a2/Thumbnails/glassmorphism9.22.png",
https:"https://youtu.be/YhaGxBoY9PY",
 title:"Glass Morphism Effect",
        description:"This sleek design technique adds a polished, modern aesthetic often seen in apps and websites — and now you can bring it into your slides.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c7d4cae5047e954b54f512e3fd8ca3a3783d49a2/Thumbnails/glassmorphism9.22.png",
       link:"https://youtu.be/YhaGxBoY9PY",


  related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/YhaGxBoY9PY"
        },
        topic:"Glass Morphism Effect"
    },

{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/08fa67a3d2a47ba58a95097a62d3140c44c3d032/Thumbnails/interactivemorphtemp9.22.png",
https:"https://youtu.be/ers-81-bFO4",
 title:"Interactive Morph Template",
        description:"In this video we cover an amazing and advanced template build where we combine the morph transition along with other formatting options to create an amazing presentation.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/08fa67a3d2a47ba58a95097a62d3140c44c3d032/Thumbnails/interactivemorphtemp9.22.png",
       link:"https://youtu.be/ers-81-bFO4",


  related: [
        {
            text:"Check it out on YouTube",
            url:"https://youtu.be/ers-81-bFO4"
        },
        {
            text:"Template File Link",
            url:"https://docs.google.com/presentation/d/1eYWlgIPVrBVg6EhInnT5UvaBN7AfluXw/export/pptx"
        }
    ],
        topic:"Interactive Morph Template"
    },






{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/468f0c9ce0d02c7e3b6791e8268ae41582140fce/Thumbnails/change.png",
https:"https://youtu.be/y1gPf0kbf-Y",
 title:"Change Selected Cell Color",
        description:"In this video we cover how to change the background color of specific cells in Excel.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/468f0c9ce0d02c7e3b6791e8268ae41582140fce/Thumbnails/change.png",
       link:"https://youtu.be/y1gPf0kbf-Y",


  related:{
            text:"Check it out on YouTube",
            url:"https://youtu.be/y1gPf0kbf-Y"
        },
        topic:"Change Selected Cell Color"
    },



{
 section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"Excel",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png"
        },
https:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d8cda80b7134f433f39869efca9ffc75e0dd3ca5/Thumbnails/seq.png",
https:"https://youtu.be/faXUCxA4Koc",
 title:"Formula for Number Series",
        description:"In this video, we explore how to generate number series, date series, and text/ID series in Excel using modern formulas like SEQUENCE.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d8cda80b7134f433f39869efca9ffc75e0dd3ca5/Thumbnails/seq.png",
       link:"https://youtu.be/r4iBjEWwZ74",


  related: [
    {
      text:"Check it out on YouTube",
            url:"https://youtu.be/faXUCxA4Koc"
        },
    {
       text:"Practice File Link",
            url:"https://docs.google.com/spreadsheets/d/11cV9viIb-eCFkgkd5_2bbbBWRioGQQkw/export?format=xlsx"
    }
    ],
        topic:"Formula for Number Series"
    },










  
{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Cyberpunk Electric Button Effect",
    description: "Create an electrifying cyberpunk button with lightning bolts, electric particles, and dynamic surge effects. This advanced CSS effect features electric field animations, particle systems, lightning decorations, and intense electric glitch effects. Perfect for high-tech or sci-fi themed interfaces with realistic electric discharge animations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-cyberpunk-electric-demo",
    topic: "CSS Cyberpunk Effects",
    demoHtml: `<div class="electric-container">
  <!-- Electric background -->
  <div class="electric-bg"></div>
  
  <!-- Animated electric grid -->
  <div class="electric-grid"></div>
  
  <!-- Floating electric particles -->
  <div class="electric-particles" id="electric-particles"></div>
  
  <!-- Main button -->
  <div class="button-container">
    <button class="electric-cyber-button" onclick="handleElectricClick()">
      <div class="hud-frame"></div>
      <div class="corner-element top-left"></div>
      <div class="corner-element top-right"></div>
      <div class="corner-element bottom-left"></div>
      <div class="corner-element bottom-right"></div>
      <div class="lightning-bolt bolt-1"></div>
      <div class="lightning-bolt bolt-2"></div>
      <div class="lightning-bolt bolt-3"></div>
      <span class="text" data-text="CHARGE">CHARGE</span>
      <div class="data-stream">
        [VOLTAGE_001]<br>
        [ELECTRIC_READY]<br>
        [POWER_NOMINAL]<br>
        [CHARGE_LEVEL_95%]
      </div>
    </button>
  </div>
  
  <!-- Demo information -->
  <div class="demo-info">
    Hover to activate electric field<br>
    Click to initiate power surge
  </div>
</div>`,
    demoCss: `/* Import electric cyberpunk fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono:wght@400&display=swap');

.electric-container {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #000510 0%, #001122 25%, #001a33 50%, #000f1f 75%, #000008 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Share Tech Mono', 'Orbitron', monospace;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px 0;
}

/* Electric field background */
.electric-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 15% 70%, rgba(0, 255, 255, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 85% 30%, rgba(0, 128, 255, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(128, 0, 255, 0.06) 0%, transparent 60%);
  animation: electricPulse 6s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes electricPulse {
  0% { 
    filter: brightness(0.9) contrast(1.3);
    transform: scale(1);
  }
  100% { 
    filter: brightness(1.2) contrast(1.6);
    transform: scale(1.03);
  }
}

/* Electric grid pattern */
.electric-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 128, 255, 0.03) 1px, transparent 1px),
    linear-gradient(45deg, rgba(128, 0, 255, 0.025) 2px, transparent 2px);
  background-size: 35px 35px, 35px 35px, 70px 70px;
  animation: electricGridMove 15s linear infinite;
  pointer-events: none;
}

@keyframes electricGridMove {
  0% { 
    transform: translate(0, 0);
    opacity: 0.7;
  }
  50% { 
    opacity: 1;
  }
  100% { 
    transform: translate(35px, 35px);
    opacity: 0.7;
  }
}

/* Electric particles floating */
.electric-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  animation: particleFloat 12s infinite linear;
}

.particle.spark {
  width: 3px;
  height: 8px;
  background: linear-gradient(180deg, #00ffff, #0080ff);
  box-shadow: 0 0 8px #00ffff, 0 0 12px #00ffff;
  border-radius: 1px;
}

.particle.bolt {
  width: 1px;
  height: 12px;
  background: #ffffff;
  box-shadow: 0 0 6px #00ffff, 0 0 10px #0080ff;
}

.particle.charge {
  width: 2px;
  height: 2px;
  background: #8000ff;
  box-shadow: 0 0 5px #8000ff;
  border-radius: 50%;
}

@keyframes particleFloat {
  0% { 
    transform: translateY(100%) translateX(0) rotate(0deg);
    opacity: 0;
  }
  5% { opacity: 0.8; }
  95% { opacity: 0.8; }
  100% { 
    transform: translateY(-15px) translateX(150px) rotate(360deg);
    opacity: 0;
  }
}

/* Main button container */
.button-container {
  position: relative;
  z-index: 10;
}

/* Cyberpunk electric button */
.electric-cyber-button {
  position: relative;
  padding: 30px 60px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #00ffff;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.15) 0%, 
    rgba(0, 0, 0, 0.6) 30%, 
    rgba(0, 128, 255, 0.12) 70%, 
    rgba(128, 0, 255, 0.1) 100%);
  border: 3px solid #00ffff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Electric angular corners */
  clip-path: polygon(
    0 0, 
    calc(100% - 15px) 0, 
    100% 15px, 
    100% calc(100% - 8px),
    calc(100% - 8px) 100%, 
    8px 100%, 
    0 calc(100% - 15px)
  );
  
  /* Electric glow effect */
  box-shadow: 
    0 0 40px rgba(0, 255, 255, 0.4),
    0 0 80px rgba(0, 128, 255, 0.2),
    0 0 120px rgba(128, 0, 255, 0.15),
    inset 0 0 40px rgba(0, 255, 255, 0.08);
}

/* Button text with electric styling */
.electric-cyber-button .text {
  position: relative;
  z-index: 3;
  display: block;
  transition: all 0.3s ease;
  text-shadow: 
    0 0 20px rgba(0, 255, 255, 0.8),
    2px 2px 6px rgba(0, 0, 0, 0.9);
}

/* Electric scanlines */
.electric-cyber-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 255, 0.08) 2px,
    rgba(0, 255, 255, 0.08) 4px,
    transparent 4px,
    transparent 6px,
    rgba(0, 128, 255, 0.06) 6px,
    rgba(0, 128, 255, 0.06) 8px
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Electric surge wave effect */
.electric-cyber-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 255, 255, 0.4) 15%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 128, 255, 0.4) 85%,
    transparent 100%
  );
  z-index: 2;
  transition: left 0.4s ease;
}

/* Hover state - Electric activation */
.electric-cyber-button:hover {
  color: #ffffff;
  border-color: #ffffff;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.25) 0%, 
    rgba(0, 0, 0, 0.7) 30%, 
    rgba(0, 128, 255, 0.2) 70%, 
    rgba(128, 0, 255, 0.15) 100%);
  box-shadow: 
    0 0 60px rgba(0, 255, 255, 0.6),
    0 0 120px rgba(255, 255, 255, 0.4),
    0 0 180px rgba(0, 128, 255, 0.3),
    inset 0 0 60px rgba(0, 255, 255, 0.15);
  transform: translateY(-5px) scale(1.02);
}

.electric-cyber-button:hover .text {
  color: #ffffff;
  text-shadow: 
    0 0 25px rgba(255, 255, 255, 1),
    0 0 35px rgba(0, 255, 255, 0.8),
    2px 2px 8px rgba(0, 0, 0, 0.9);
  animation: electricGlitch 0.3s ease-in-out;
}

.electric-cyber-button:hover::before {
  opacity: 1;
  animation: electricScan 0.3s ease-in-out;
}

.electric-cyber-button:hover::after {
  left: 100%;
}

/* Electric glitch effect */
@keyframes electricGlitch {
  0%, 100% { 
    transform: translate(0);
    filter: contrast(1) brightness(1);
  }
  8% { 
    transform: translate(-2px, 0);
    filter: contrast(1.4) brightness(1.3);
  }
  16% { 
    transform: translate(2px, -1px);
    filter: contrast(0.8) brightness(0.8);
  }
  24% { 
    transform: translate(0, 2px);
    filter: contrast(1.2) brightness(1.2);
  }
  32% { 
    transform: translate(-1px, 0);
    filter: contrast(1.5) brightness(1.4);
  }
  48% { 
    transform: translate(2px, -2px);
    filter: contrast(0.9) brightness(0.9);
  }
  64% { 
    transform: translate(0, 1px);
    filter: contrast(1.1) brightness(1.1);
  }
  80% { 
    transform: translate(-2px, 0);
    filter: contrast(1.3) brightness(1.2);
  }
}

@keyframes electricScan {
  0% { 
    background-position: 0 0;
    opacity: 0.6;
  }
  50% { 
    background-position: 0 -20px;
    opacity: 1;
  }
  100% { 
    background-position: 0 -40px;
    opacity: 0.6;
  }
}

/* Multi-layer electric glitch text */
.electric-cyber-button:hover .text::before,
.electric-cyber-button:hover .text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.electric-cyber-button:hover .text::before {
  animation: electricGlitch1 0.3s ease-in-out;
  color: #00ffff;
  text-shadow: 0 0 15px #00ffff;
}

.electric-cyber-button:hover .text::after {
  animation: electricGlitch2 0.3s ease-in-out;
  color: #8000ff;
  text-shadow: 0 0 15px #8000ff;
}

@keyframes electricGlitch1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 1px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 2px); }
}

@keyframes electricGlitch2 {
  0%, 100% { transform: translate(0); }
  15% { transform: translate(2px, -1px); }
  35% { transform: translate(-2px, 2px); }
  55% { transform: translate(2px, 1px); }
  75% { transform: translate(-1px, -2px); }
}

/* Active/clicked state */
.electric-cyber-button:active {
  transform: translateY(-3px) scale(0.98);
  box-shadow: 
    0 0 100px rgba(255, 255, 255, 0.8),
    0 0 150px rgba(0, 255, 255, 0.6),
    0 0 200px rgba(0, 128, 255, 0.4),
    inset 0 0 100px rgba(255, 255, 255, 0.25);
}

/* Electric corner elements */
.corner-element {
  position: absolute;
  transition: all 0.3s ease;
}

.corner-element.top-left {
  top: 8px;
  left: 8px;
  width: 12px;
  height: 12px;
  border-left: 2px solid #00ffff;
  border-top: 2px solid #00ffff;
}

.corner-element.top-right {
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-right: 2px solid #00ffff;
  border-top: 2px solid #00ffff;
}

.corner-element.bottom-left {
  bottom: 8px;
  left: 8px;
  width: 12px;
  height: 12px;
  border-left: 2px solid #00ffff;
  border-bottom: 2px solid #00ffff;
}

.corner-element.bottom-right {
  bottom: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-right: 2px solid #00ffff;
  border-bottom: 2px solid #00ffff;
}

.electric-cyber-button:hover .corner-element {
  border-color: #ffffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: cornerSpark 0.4s ease-in-out infinite alternate;
}

@keyframes cornerSpark {
  0% { 
    opacity: 1; 
    transform: scale(1);
    filter: brightness(1);
  }
  100% { 
    opacity: 0.8; 
    transform: scale(1.15);
    filter: brightness(1.3);
  }
}

/* Electric HUD frame */
.hud-frame {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  clip-path: polygon(
    0 0, 
    calc(100% - 20px) 0, 
    100% 20px, 
    100% calc(100% - 12px),
    calc(100% - 12px) 100%, 
    12px 100%, 
    0 calc(100% - 20px)
  );
  transition: all 0.3s ease;
  pointer-events: none;
}

.electric-cyber-button:hover .hud-frame {
  border-color: rgba(255, 255, 255, 0.6);
  animation: hudElectric 0.5s ease-in-out infinite alternate;
}

@keyframes hudElectric {
  0% { 
    border-color: rgba(0, 255, 255, 0.4);
    transform: scale(1);
    filter: brightness(1);
  }
  100% { 
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.02);
    filter: brightness(1.2);
  }
}

/* Demo info with electric styling */
.demo-info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #00ffff;
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  text-align: center;
  opacity: 0.8;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  animation: electricInfoPulse 4s ease-in-out infinite;
}

@keyframes electricInfoPulse {
  0%, 100% { 
    opacity: 0.8; 
    color: #00ffff;
  }
  20% { 
    opacity: 1; 
    color: #ffffff;
  }
  40% { 
    opacity: 0.9; 
    color: #0080ff;
  }
  60% { 
    opacity: 1; 
    color: #8000ff;
  }
  80% { 
    opacity: 0.95; 
    color: #ffffff;
  }
}

/* Electric data stream elements */
.data-stream {
  position: absolute;
  top: 50%;
  right: -100px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px;
  color: #0080ff;
  opacity: 0.4;
  animation: dataElectricScroll 10s linear infinite;
}

@keyframes dataElectricScroll {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 0.4; }
  90% { opacity: 0.4; }
  100% { transform: translateY(-200px); opacity: 0; }
}

/* Lightning bolt decorations */
.lightning-bolt {
  position: absolute;
  width: 2px;
  height: 15px;
  background: linear-gradient(180deg, #ffffff, #00ffff);
  box-shadow: 0 0 8px #00ffff;
  animation: lightningFlicker 2s ease-in-out infinite;
  opacity: 0.6;
}

.lightning-bolt.bolt-1 {
  top: 15px;
  left: -25px;
  transform: rotate(15deg);
  animation-delay: 0s;
}

.lightning-bolt.bolt-2 {
  bottom: 25px;
  right: -20px;
  transform: rotate(-20deg);
  animation-delay: 0.7s;
}

.lightning-bolt.bolt-3 {
  top: 60%;
  left: -35px;
  transform: rotate(25deg);
  animation-delay: 1.2s;
}

@keyframes lightningFlicker {
  0%, 90%, 100% { 
    opacity: 0.6;
    transform: scale(1) rotate(var(--rotation, 0deg));
  }
  5%, 85% { 
    opacity: 1;
    transform: scale(1.1) rotate(var(--rotation, 0deg));
  }
  10%, 80% { 
    opacity: 0.3;
    transform: scale(0.9) rotate(var(--rotation, 0deg));
  }
}`,
    demoJs: `// Create electric particles
function createElectricParticles() {
  const particleContainer = document.getElementById('electric-particles');
  if (!particleContainer) return;
  
  const particleCount = 20;
  const particleTypes = ['spark', 'bolt', 'charge'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle ' + particleTypes[Math.floor(Math.random() * particleTypes.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 12 + 's';
    particle.style.animationDuration = (10 + Math.random() * 8) + 's';
    particleContainer.appendChild(particle);
  }
}

// Handle electric button click
function handleElectricClick() {
  const button = document.querySelector('.electric-cyber-button');
  const text = button.querySelector('.text');
  
  // Temporary text change
  const originalText = text.textContent;
  text.textContent = 'CHARGED';
  text.style.color = '#ffffff';
  text.style.textShadow = '0 0 30px #ffffff, 0 0 40px #00ffff, 0 0 50px #0080ff';
  
  // Add intense electric glitch effect
  button.style.animation = 'electricScreenDistort 0.15s ease-in-out 4';
  
  // Reset after animation
  setTimeout(() => {
    text.textContent = originalText;
    text.style.color = '';
    text.style.textShadow = '';
    button.style.animation = '';
  }, 1200);
  
  // Create electric lightning burst
  createElectricBurst();
  
  console.log('Electric Cyberpunk button charged! ⚡💙🔌');
}

// Electric burst effect
function createElectricBurst() {
  const button = document.querySelector('.electric-cyber-button');
  const rect = button.getBoundingClientRect();
  
  for (let i = 0; i < 20; i++) {
    const lightning = document.createElement('div');
    lightning.style.position = 'fixed';
    lightning.style.left = rect.left + rect.width/2 + 'px';
    lightning.style.top = rect.top + rect.height/2 + 'px';
    lightning.style.width = '2px';
    lightning.style.height = (8 + Math.random() * 12) + 'px';
    
    // Electric colors
    const colors = ['#00ffff', '#ffffff', '#0080ff', '#8000ff'];
    const color = colors[i % colors.length];
    lightning.style.background = 'linear-gradient(180deg, ' + color + ', ' + (color === '#ffffff' ? '#00ffff' : color === '#8000ff' ? '#4000ff' : '#003366') + ')';
    lightning.style.boxShadow = '0 0 10px ' + color + ', 0 0 20px ' + color;
    lightning.style.pointerEvents = 'none';
    lightning.style.zIndex = '1000';
    
    // Create jagged lightning effect
    if (i % 3 === 0) {
      lightning.style.clipPath = 'polygon(40% 0%, 60% 35%, 80% 35%, 50% 100%, 30% 65%, 20% 65%)';
      lightning.style.width = '6px';
    } else if (i % 3 === 1) {
      lightning.style.transform = 'rotate(' + (Math.random() * 60 - 30) + 'deg)';
    }
    
    document.body.appendChild(lightning);
    
    const angle = (i / 20) * Math.PI * 2;
    const distance = 80 + Math.random() * 60;
    
    lightning.animate([
      {
        transform: 'translate(0, 0) scale(1) rotate(0deg)',
        opacity: 1
      },
      {
        transform: 'translate(' + (Math.cos(angle) * distance) + 'px, ' + (Math.sin(angle) * distance) + 'px) scale(0.2) rotate(' + (Math.random() * 360) + 'deg)',
        opacity: 0
      }
    ], {
      duration: 800,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
      lightning.remove();
    };
  }
}

// Enhanced mouse interaction with electric effects
document.addEventListener('DOMContentLoaded', function() {
  createElectricParticles();
  
  const button = document.querySelector('.electric-cyber-button');
  if (button) {
    button.addEventListener('mouseenter', function() {
      const rect = this.getBoundingClientRect();
      
      // Create electric static sparks
      for (let i = 0; i < 8; i++) {
        const staticSpark = document.createElement('div');
        staticSpark.style.position = 'fixed';
        staticSpark.style.left = rect.left + Math.random() * rect.width + 'px';
        staticSpark.style.top = rect.top + Math.random() * rect.height + 'px';
        staticSpark.style.width = '1px';
        staticSpark.style.height = '6px';
        
        const sparkColors = ['#00ffff', '#ffffff', '#0080ff', '#8000ff'];
        const sparkColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        staticSpark.style.background = sparkColor;
        staticSpark.style.boxShadow = '0 0 8px ' + sparkColor + ', 0 0 12px ' + sparkColor;
        staticSpark.style.pointerEvents = 'none';
        staticSpark.style.zIndex = '999';
        
        document.body.appendChild(staticSpark);
        
        staticSpark.animate([
          { 
            opacity: 1, 
            transform: 'scale(1) rotate(0deg)' 
          },
          { 
            opacity: 0, 
            transform: 'scale(0.3) rotate(180deg)' 
          }
        ], {
          duration: 400,
          easing: 'ease-out'
        }).onfinish = () => {
          staticSpark.remove();
        };
      }
    });
  }
});`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS Cyberpunk Thermal Button Effect",
    description: "Create a stunning cyberpunk-inspired thermal button with industrial styling, floating debris, dynamic hover effects, and futuristic animations. This advanced CSS effect combines multiple animation techniques including glitch effects, thermal waves, industrial scanlines, and interactive particle systems. Perfect for sci-fi or gaming themed websites.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-cyberpunk-thermal-demo",
    topic: "CSS Cyberpunk Effects",
    demoHtml: `<div class="cyberpunk-container">
  <!-- Industrial background -->
  <div class="industrial-bg"></div>
  
  <!-- Animated industrial grid -->
  <div class="industrial-grid"></div>
  
  <!-- Floating industrial debris -->
  <div class="industrial-debris" id="industrial-debris"></div>
  
  <!-- Main button -->
  <div class="button-container">
    <button class="industrial-cyber-button" onclick="handleIndustrialClick()">
      <div class="hud-frame"></div>
      <div class="corner-element top-left"></div>
      <div class="corner-element top-right"></div>
      <div class="corner-element bottom-left"></div>
      <div class="corner-element bottom-right"></div>
      <span class="text" data-text="BREACH">BREACH</span>
      <div class="data-stream">
        [DATA_STREAM_001]<br>
        [THERMAL_READY]<br>
        [SYSTEMS_NOMINAL]
      </div>
    </button>
  </div>
  
  <!-- Demo information -->
  <div class="demo-info">
    Hover to activate thermal systems<br>
    Click to initiate breach protocol
  </div>
</div>`,
    demoCss: `/* Import cyberpunk fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono:wght@400&display=swap');

.cyberpunk-container {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a1810 50%, #1a1a1a 75%, #0a0a0a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Share Tech Mono', 'Orbitron', monospace;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px 0;
}

/* Industrial cityscape background */
.industrial-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 15% 70%, rgba(255, 165, 0, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 85% 30%, rgba(255, 69, 0, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(70, 130, 180, 0.04) 0%, transparent 60%);
  animation: industrialPulse 8s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes industrialPulse {
  0% { 
    filter: brightness(0.8) contrast(1.2);
    transform: scale(1);
  }
  100% { 
    filter: brightness(1.1) contrast(1.4);
    transform: scale(1.02);
  }
}

/* Gritty industrial grid */
.industrial-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 165, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(70, 130, 180, 0.02) 1px, transparent 1px),
    linear-gradient(45deg, rgba(255, 69, 0, 0.015) 2px, transparent 2px);
  background-size: 40px 40px, 40px 40px, 80px 80px;
  animation: industrialGridMove 20s linear infinite;
  pointer-events: none;
}

@keyframes industrialGridMove {
  0% { 
    transform: translate(0, 0);
    opacity: 0.6;
  }
  50% { 
    opacity: 0.8;
  }
  100% { 
    transform: translate(40px, 40px);
    opacity: 0.6;
  }
}

/* Industrial floating debris */
.industrial-debris {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.debris {
  position: absolute;
  animation: debrisFloat 15s infinite linear;
}

.debris.spark {
  width: 2px;
  height: 6px;
  background: linear-gradient(180deg, #ffa500, #ff4500);
  box-shadow: 0 0 6px #ffa500;
}

.debris.dust {
  width: 1px;
  height: 1px;
  background: #4682b4;
  box-shadow: 0 0 4px #4682b4;
  border-radius: 50%;
}

.debris.fragment {
  width: 3px;
  height: 3px;
  background: #696969;
  transform: rotate(45deg);
}

@keyframes debrisFloat {
  0% { 
    transform: translateY(100%) translateX(0) rotate(0deg);
    opacity: 0;
  }
  3% { opacity: 0.7; }
  97% { opacity: 0.7; }
  100% { 
    transform: translateY(-10px) translateX(100px) rotate(180deg);
    opacity: 0;
  }
}

/* Main button container */
.button-container {
  position: relative;
  z-index: 10;
}

/* Cyberpunk industrial button */
.industrial-cyber-button {
  position: relative;
  padding: 30px 60px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #ffa500;
  background: linear-gradient(135deg, 
    rgba(255, 165, 0, 0.1) 0%, 
    rgba(0, 0, 0, 0.4) 30%, 
    rgba(70, 130, 180, 0.08) 70%, 
    rgba(255, 69, 0, 0.1) 100%);
  border: 3px solid #ffa500;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Industrial angular corners */
  clip-path: polygon(
    0 0, 
    calc(100% - 15px) 0, 
    100% 15px, 
    100% calc(100% - 8px),
    calc(100% - 8px) 100%, 
    8px 100%, 
    0 calc(100% - 15px)
  );
  
  /* Industrial glow effect */
  box-shadow: 
    0 0 30px rgba(255, 165, 0, 0.3),
    0 0 60px rgba(70, 130, 180, 0.15),
    0 0 90px rgba(255, 69, 0, 0.1),
    inset 0 0 30px rgba(255, 165, 0, 0.05);
}

/* Button text with industrial styling */
.industrial-cyber-button .text {
  position: relative;
  z-index: 3;
  display: block;
  transition: all 0.3s ease;
  text-shadow: 
    0 0 15px rgba(255, 165, 0, 0.6),
    2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* Industrial scanlines */
.industrial-cyber-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(255, 165, 0, 0.05) 3px,
    rgba(255, 165, 0, 0.05) 6px,
    transparent 6px,
    transparent 9px,
    rgba(70, 130, 180, 0.03) 9px,
    rgba(70, 130, 180, 0.03) 12px
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Industrial thermal wave effect */
.industrial-cyber-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 165, 0, 0.3) 20%,
    rgba(255, 69, 0, 0.5) 50%,
    rgba(255, 165, 0, 0.3) 80%,
    transparent 100%
  );
  z-index: 2;
  transition: left 0.5s ease;
}

/* Hover state - Industrial thermal activation */
.industrial-cyber-button:hover {
  color: #ffffff;
  border-color: #ff4500;
  background: linear-gradient(135deg, 
    rgba(255, 69, 0, 0.2) 0%, 
    rgba(0, 0, 0, 0.6) 30%, 
    rgba(70, 130, 180, 0.15) 70%, 
    rgba(255, 165, 0, 0.2) 100%);
  box-shadow: 
    0 0 50px rgba(255, 69, 0, 0.5),
    0 0 100px rgba(255, 165, 0, 0.3),
    0 0 150px rgba(70, 130, 180, 0.2),
    inset 0 0 50px rgba(255, 69, 0, 0.1);
  transform: translateY(-4px) scale(1.01);
}

.industrial-cyber-button:hover .text {
  color: #ffffff;
  text-shadow: 
    0 0 20px rgba(255, 69, 0, 0.8),
    0 0 30px rgba(255, 165, 0, 0.6),
    2px 2px 6px rgba(0, 0, 0, 0.9);
  animation: industrialGlitch 0.4s ease-in-out;
}

.industrial-cyber-button:hover::before {
  opacity: 1;
  animation: industrialScan 0.4s ease-in-out;
}

.industrial-cyber-button:hover::after {
  left: 100%;
}

/* Industrial glitch effect */
@keyframes industrialGlitch {
  0%, 100% { 
    transform: translate(0);
    filter: contrast(1) brightness(1);
  }
  10% { 
    transform: translate(-1px, 0);
    filter: contrast(1.2) brightness(1.1);
  }
  20% { 
    transform: translate(1px, -1px);
    filter: contrast(0.9) brightness(0.9);
  }
  30% { 
    transform: translate(0, 1px);
    filter: contrast(1.1) brightness(1.05);
  }
  40% { 
    transform: translate(-1px, 0);
    filter: contrast(1.15) brightness(1.08);
  }
  60% { 
    transform: translate(1px, -1px);
    filter: contrast(0.95) brightness(0.95);
  }
  80% { 
    transform: translate(0, 1px);
    filter: contrast(1.05) brightness(1.02);
  }
}

@keyframes industrialScan {
  0% { 
    background-position: 0 0;
    opacity: 0.5;
  }
  50% { 
    background-position: 0 -15px;
    opacity: 0.8;
  }
  100% { 
    background-position: 0 -30px;
    opacity: 0.5;
  }
}

/* Multi-layer industrial glitch text */
.industrial-cyber-button:hover .text::before,
.industrial-cyber-button:hover .text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.industrial-cyber-button:hover .text::before {
  animation: industrialGlitch1 0.4s ease-in-out;
  color: #ff4500;
  text-shadow: 0 0 10px #ff4500;
}

.industrial-cyber-button:hover .text::after {
  animation: industrialGlitch2 0.4s ease-in-out;
  color: #4682b4;
  text-shadow: 0 0 10px #4682b4;
}

@keyframes industrialGlitch1 {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(1px, -1px); }
  75% { transform: translate(-1px, -1px); }
}

@keyframes industrialGlitch2 {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(1px, -1px); }
  50% { transform: translate(-1px, 1px); }
  75% { transform: translate(1px, 1px); }
}

/* Active/clicked state */
.industrial-cyber-button:active {
  transform: translateY(-2px) scale(0.99);
  box-shadow: 
    0 0 80px rgba(255, 69, 0, 0.8),
    0 0 120px rgba(255, 165, 0, 0.6),
    0 0 180px rgba(70, 130, 180, 0.4),
    inset 0 0 80px rgba(255, 69, 0, 0.2);
}

/* Industrial corner elements */
.corner-element {
  position: absolute;
  transition: all 0.3s ease;
}

.corner-element.top-left {
  top: 8px;
  left: 8px;
  width: 12px;
  height: 12px;
  border-left: 2px solid #ffa500;
  border-top: 2px solid #ffa500;
}

.corner-element.top-right {
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-right: 2px solid #ffa500;
  border-top: 2px solid #ffa500;
}

.corner-element.bottom-left {
  bottom: 8px;
  left: 8px;
  width: 12px;
  height: 12px;
  border-left: 2px solid #ffa500;
  border-bottom: 2px solid #ffa500;
}

.corner-element.bottom-right {
  bottom: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-right: 2px solid #ffa500;
  border-bottom: 2px solid #ffa500;
}

.industrial-cyber-button:hover .corner-element {
  border-color: #ff4500;
  box-shadow: 0 0 8px rgba(255, 69, 0, 0.6);
  animation: cornerFlicker 0.5s ease-in-out infinite alternate;
}

@keyframes cornerFlicker {
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  100% { 
    opacity: 0.7; 
    transform: scale(1.1);
  }
}

/* Industrial HUD frame */
.hud-frame {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 1px solid rgba(255, 165, 0, 0.2);
  clip-path: polygon(
    0 0, 
    calc(100% - 20px) 0, 
    100% 20px, 
    100% calc(100% - 12px),
    calc(100% - 12px) 100%, 
    12px 100%, 
    0 calc(100% - 20px)
  );
  transition: all 0.3s ease;
  pointer-events: none;
}

.industrial-cyber-button:hover .hud-frame {
  border-color: rgba(255, 69, 0, 0.4);
  animation: hudPulse 0.6s ease-in-out infinite alternate;
}

@keyframes hudPulse {
  0% { 
    border-color: rgba(255, 69, 0, 0.3);
    transform: scale(1);
  }
  100% { 
    border-color: rgba(255, 165, 0, 0.6);
    transform: scale(1.01);
  }
}

/* Demo info with industrial styling */
.demo-info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffa500;
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  text-align: center;
  opacity: 0.7;
  text-shadow: 0 0 8px rgba(255, 165, 0, 0.4);
  animation: industrialInfoPulse 3s ease-in-out infinite;
}

@keyframes industrialInfoPulse {
  0%, 100% { 
    opacity: 0.7; 
    color: #ffa500;
  }
  25% { 
    opacity: 0.9; 
    color: #ff4500;
  }
  50% { 
    opacity: 0.8; 
    color: #4682b4;
  }
  75% { 
    opacity: 0.9; 
    color: #ff4500;
  }
}

/* Data stream elements */
.data-stream {
  position: absolute;
  top: 50%;
  right: -80px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px;
  color: #4682b4;
  opacity: 0.3;
  animation: dataScroll 8s linear infinite;
}

@keyframes dataScroll {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-100px); opacity: 0; }
}`,
    demoJs: `// Create industrial debris particles
function createIndustrialDebris() {
  const debrisContainer = document.getElementById('industrial-debris');
  if (!debrisContainer) return;
  
  const debrisCount = 15;
  const debrisTypes = ['spark', 'dust', 'fragment'];
  
  for (let i = 0; i < debrisCount; i++) {
    const debris = document.createElement('div');
    debris.className = 'debris ' + debrisTypes[Math.floor(Math.random() * debrisTypes.length)];
    debris.style.left = Math.random() * 100 + '%';
    debris.style.animationDelay = Math.random() * 15 + 's';
    debris.style.animationDuration = (12 + Math.random() * 8) + 's';
    debrisContainer.appendChild(debris);
  }
}

// Handle industrial button click
function handleIndustrialClick() {
  const button = document.querySelector('.industrial-cyber-button');
  const text = button.querySelector('.text');
  
  // Temporary text change
  const originalText = text.textContent;
  text.textContent = 'BREACHED';
  text.style.color = '#00ff00';
  text.style.textShadow = '0 0 20px #00ff00, 0 0 30px #00ff00';
  
  // Add intense industrial glitch effect
  button.style.animation = 'industrialScreenDistort 0.2s ease-in-out 3';
  
  // Reset after animation
  setTimeout(() => {
    text.textContent = originalText;
    text.style.color = '';
    text.style.textShadow = '';
    button.style.animation = '';
  }, 1000);
  
  // Create industrial sparks burst
  createIndustrialSparks();
  
  console.log('Industrial Cyberpunk button breached! ⚡🔥💻');
}

// Industrial sparks burst effect
function createIndustrialSparks() {
  const button = document.querySelector('.industrial-cyber-button');
  const rect = button.getBoundingClientRect();
  
  for (let i = 0; i < 15; i++) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.left = rect.left + rect.width/2 + 'px';
    spark.style.top = rect.top + rect.height/2 + 'px';
    spark.style.width = '3px';
    spark.style.height = '8px';
    
    // Industrial spark colors
    const colors = ['#ffa500', '#ff4500', '#4682b4'];
    const color = colors[i % colors.length];
    spark.style.background = 'linear-gradient(180deg, ' + color + ', ' + (color === '#4682b4' ? '#87ceeb' : '#8b0000') + ')';
    spark.style.boxShadow = '0 0 8px ' + color;
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '1000';
    
    document.body.appendChild(spark);
    
    const angle = (i / 15) * Math.PI * 2;
    const distance = 60 + Math.random() * 40;
    
    spark.animate([
      {
        transform: 'translate(0, 0) scale(1)',
        opacity: 1
      },
      {
        transform: 'translate(' + (Math.cos(angle) * distance) + 'px, ' + (Math.sin(angle) * distance) + 'px) scale(0.3)',
        opacity: 0
      }
    ], {
      duration: 600,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
      spark.remove();
    };
  }
}

// Enhanced mouse interaction with industrial effects
document.addEventListener('DOMContentLoaded', function() {
  createIndustrialDebris();
  
  const button = document.querySelector('.industrial-cyber-button');
  if (button) {
    button.addEventListener('mouseenter', function() {
      const rect = this.getBoundingClientRect();
      
      // Create industrial static sparks
      for (let i = 0; i < 6; i++) {
        const staticSpark = document.createElement('div');
        staticSpark.style.position = 'fixed';
        staticSpark.style.left = rect.left + Math.random() * rect.width + 'px';
        staticSpark.style.top = rect.top + Math.random() * rect.height + 'px';
        staticSpark.style.width = '2px';
        staticSpark.style.height = '4px';
        
        const sparkColors = ['#ffa500', '#ff4500', '#4682b4'];
        const sparkColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        staticSpark.style.background = sparkColor;
        staticSpark.style.boxShadow = '0 0 6px ' + sparkColor;
        staticSpark.style.pointerEvents = 'none';
        staticSpark.style.zIndex = '999';
        
        document.body.appendChild(staticSpark);
        
        staticSpark.animate([
          { 
            opacity: 1, 
            transform: 'scale(1)' 
          },
          { 
            opacity: 0, 
            transform: 'scale(0.5)' 
          }
        ], {
          duration: 300,
          easing: 'ease-out'
        }).onfinish = () => {
          staticSpark.remove();
        };
      }
    });
  }
});`
},



   // ===== TOOLS SECTION =====
    // Simulations Program
    // Simulation Downloads - Learning Items Only
    {
        section: ["Learning", "Coding"], 
        program: {
            name: "Simulations",
            image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d38148461878cc997ada41cde4af1fb23490ea32/icons/Simicon2.png"
        },
        title: "Call Center Training Simulation",
        description: "Download the complete HTML/CSS/JavaScript source code for an interactive call center training simulation. Study customer service workflows, verification processes, and performance tracking implementation.",
        thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/31db8896e8600ad36dce8f9159c2709c5b00b949/Thumbnails/callcenterthumbnail.png",
        link: "https://drive.google.com/uc?export=download&id=1MFhESZXZztO-rnv-yQ1UmTajuEHdqF6t",
        related: [
            {
                text: "Download code",
                url: "https://drive.google.com/uc?export=download&id=1MFhESZXZztO-rnv-yQ1UmTajuEHdqF6t"
            },
            {
                text: "Video on topic",
                url: "https://youtu.be/VsivDUMm9lE"
            }
        ],
        topic: "Simulation Examples"
    },
    {
        section: ["Learning", "Coding"], 
        program: {
            name: "Simulations",
            image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d38148461878cc997ada41cde4af1fb23490ea32/icons/Simicon2.png"
        },
        title: "Excel VLOOKUP Training Simulation",
        description: "Download the complete HTML/CSS/JavaScript source code for an interactive Excel VLOOKUP training simulation. Learn step-by-step tutorial development with real-time feedback and validation.",
        thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/31db8896e8600ad36dce8f9159c2709c5b00b949/Thumbnails/VLOOKUPThumbnail.png",
        link: "https://drive.google.com/uc?export=download&id=1ShdROCBcUP1HBVftx9G_VhbNtUekQyH_",
        related: [
            {
                text:"Download code",
                url:"https://drive.google.com/uc?export=download&id=1ShdROCBcUP1HBVftx9G_VhbNtUekQyH_"
            },
            {
                text:"Video on topic",
                url:"https://youtu.be/VsivDUMm9lE"
            }
        ],
        topic: "Simulation Examples"
    },


{
  
        section:[
            "Learning",
            "Videos"
        ],
        program:{
            name:"PowerPoint",
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
        },
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/d4a5c2c46650f1e958e1a38996ea4216181edddf/Thumbnails/biotemplatethumb.png",
        link:"https://youtube.com/shorts/DjKv6sjiE1U?si=WhYQjXMBumaZha6l",
        title:"Morph Transition Tutorial",
        description:"Quick video on how to make a cool slide using morph transitions.",
        thumbnail:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e81150277e03f88b43c271c2c9ff82174575ba01/Thumbnails/surfmorphtutorialthumbnail.png",
       link:"https://youtube.com/shorts/DjKv6sjiE1U?si=WhYQjXMBumaZha6l",
         related:{
           text:"Watch YouTube Video",
           url:"https://youtube.com/shorts/DjKv6sjiE1U?si=WhYQjXMBumaZha6l"
       },
       topic:"Morph Transition Tutorial",
    },




{
    section: [
        "Learning",
        "Videos"
    ],
    program: {
        name: "AI",
        image: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/e78e9a4de4c8677f0934af550a36473b699011a8/icons/AIicon.png"
    },
    title: "Vibe Coding for Websites and Training Simulations",
    description: "In this video we cover how to use vibe coding to easily and quickly build effective websites, training simulations, and other tools.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/2cc02a9bad41b7cb85c47de78edb36622fa71d64/Thumbnails/thumb.png",
    link: "https://youtu.be/VsivDUMm9lE",
    related: {
        text: "Check it out on YouTube",
        url: "https://youtu.be/VsivDUMm9lE"
    },
    topic: "Vibe Coding"
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Elements",
    description: "HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, content, and an end tag. Some elements are self-closing and don't require an end tag.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-elements-demo",
    topic: "HTML Basics",
    demoHtml: `<h1>This is a heading element</h1>
<p>This is a paragraph element</p>
<strong>This is a strong element</strong>
<em>This is an emphasis element</em>
<br>
<hr>
<img src="https://via.placeholder.com/150" alt="Placeholder">`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Attributes",
    description: "HTML attributes provide additional information about HTML elements. Attributes are always specified in the start tag and come in name/value pairs. Common attributes include id, class, src, href, alt, and style.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-attributes-demo",
    topic: "HTML Basics",
    demoHtml: `<h1 id="main-title" class="blue-text">Title with ID and Class</h1>
<p class="highlight" style="color: red;">Paragraph with class and style</p>
<a href="https://www.example.com" target="_blank">Link with href and target</a>
<img src="https://via.placeholder.com/100" alt="Example image" width="100" height="100">
<input type="text" placeholder="Enter text here" value="Default value">`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Headings",
    description: "HTML headings are defined with 'h1' to 'h6' tags. 'h1' defines the most important heading, while 'h6' defines the least important. Headings help organize content hierarchy and are important for SEO and accessibility.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-headings-demo",
    topic: "HTML Text Elements",
    demoHtml: `<h1>Heading Level 1 - Main Title</h1>
<h2>Heading Level 2 - Section Title</h2>
<h3>Heading Level 3 - Subsection</h3>
<h4>Heading Level 4 - Sub-subsection</h4>
<h5>Heading Level 5 - Minor heading</h5>
<h6>Heading Level 6 - Smallest heading</h6>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Paragraphs",
    description: "The HTML <p> element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (margins) before and after a paragraph. Multiple spaces and line breaks in HTML are collapsed to single spaces.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-paragraphs-demo",
    topic: "HTML Text Elements",
    demoHtml: `<p>This is a paragraph.</p>
<p>This is another paragraph with more text to demonstrate how paragraphs work in HTML. Notice how the browser adds space between paragraphs automatically.</p>
<p>You can have multiple
lines in your HTML code, but the browser will display them as a single line unless you use line break tags.</p>
<p>Use the &lt;br&gt; tag for line breaks:<br>
This text appears on a new line.<br>
And this on another line.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Text Formatting",
    description: "HTML provides several elements for text formatting. These include bold, italic, underline, strikethrough, superscript, subscript, and more. These elements help emphasize content and improve readability.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-formatting-demo",
    topic: "HTML Text Elements",
    demoHtml: `<p><b>Bold text using b tag</b></p>
<p><strong>Important text using strong tag</strong></p>
<p><i>Italic text using i tag</i></p>
<p><em>Emphasized text using em tag</em></p>
<p><u>Underlined text</u></p>
<p><s>Strikethrough text</s></p>
<p>This is <sup>superscript</sup> and this is <sub>subscript</sub></p>
<p><mark>Highlighted text</mark></p>
<p><small>Small text</small></p>
<p><del>Deleted text</del> and <ins>inserted text</ins></p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Links",
    description: "HTML links are created with the <a> tag. The href attribute specifies the URL of the page the link goes to. Links can point to other web pages, sections within the same page, email addresses, or files.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-links-demo",
    topic: "HTML Navigation",
    demoHtml: `<p><a href="https://www.example.com">External link to example.com</a></p>
<p><a href="https://www.google.com" target="_blank">Opens in new tab</a></p>
<p><a href="#section1">Link to section within same page</a></p>
<p><a href="mailto:someone@example.com">Send email</a></p>
<p><a href="tel:+1234567890">Call phone number</a></p>
<p><a href="/path/to/document.pdf" download>Download file</a></p>
<h3 id="section1">This is Section 1</h3>
<p>This section can be linked to from the anchor above.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Images",
    description: "The HTML <img> tag is used to embed images in a web page. The src attribute specifies the path to the image, and the alt attribute provides alternative text for accessibility and SEO.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-images-demo",
    topic: "HTML Media",
    demoHtml: `<img src="https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/12642175ff9f8e24ac76c1747bdf69defa70e6ee/photos/IMG_0358.jpg" alt="Beautiful mountain landscape" width="250" height="180">
<br><br>

<figure>
    <img src="https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/12642175ff9f8e24ac76c1747bdf69defa70e6ee/photos/Oregon.jpg" alt="Oregon coastline" width="250" height="180">
    <figcaption>Oregon coastline with a figure caption</figcaption>
</figure>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Lists",
    description: "HTML supports three types of lists: ordered lists, unordered lists, and description lists. Lists are useful for organizing related items and improving content structure.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-lists-demo",
    topic: "HTML Structure",
    demoHtml: `<h3>Unordered List</h3>
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<h3>Ordered List</h3>
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<h3>Nested List</h3>
<ul>
    <li>Main item 1
        <ul>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
        </ul>
    </li>
    <li>Main item 2</li>
</ul>

<h3>Description List</h3>
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`
},



{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Forms",
    description: "HTML forms are used to collect user input. Forms contain various input elements like text fields, checkboxes, radio buttons, select dropdowns, and buttons. The <form> element wraps all form controls.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-forms-demo",
    topic: "HTML Forms",
    demoHtml: `<form action="#" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="120">
    <br><br>
    
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <br><br>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">Select Country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
    </select>
    <br><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    <br><br>
    
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
</form>`
},


{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Classes and IDs",
    description: "The class and id attributes are used to identify HTML elements for styling with CSS and JavaScript. Classes can be used multiple times, while IDs should be unique on a page.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-classes-ids-demo",
 
    topic: "HTML Attributes",
    demoHtml: `<style>
.highlight { background-color: yellow; }
.bold-text { font-weight: bold; }
#unique-element { color: red; border: 2px solid blue; padding: 10px; }
</style>

<p class="highlight">This paragraph has a class</p>
<p class="highlight bold-text">This paragraph has multiple classes</p>
<div id="unique-element">This div has a unique ID</div>
<p>Regular paragraph without classes or IDs</p>
<span class="bold-text">Span with class</span>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Semantic Elements",
    description: "HTML5 introduced semantic elements that clearly describe their meaning to both browser and developer. These include header, nav, main, article, section, aside, and footer.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-semantic-demo",
  
    topic: "HTML5 Semantics",
    demoHtml: `<header style="background: #f0f0f0; padding: 10px;">
    <h1>Website Header</h1>
    <nav style="background: #e0e0e0; padding: 5px;">
        <a href="#home">Home</a> |
        <a href="#about">About</a> |
        <a href="#contact">Contact</a>
    </nav>
</header>

<main style="display: flex; margin: 10px 0;">
    <article style="flex: 2; padding: 10px; border: 1px solid #ccc; margin-right: 10px;">
        <h2>Main Article</h2>
        <section>
            <h3>Article Section 1</h3>
            <p>Content of the first section</p>
        </section>
        <section>
            <h3>Article Section 2</h3>
            <p>Content of the second section</p>
        </section>
    </article>
    
    <aside style="flex: 1; padding: 10px; background: #f9f9f9; border: 1px solid #ccc;">
        <h3>Sidebar</h3>
        <p>Additional information</p>
    </aside>
</main>

<footer style="background: #f0f0f0; padding: 10px; text-align: center;">
    <p>&copy; 2025 Website Footer</p>
</footer>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Comments",
    description: "HTML comments are not displayed in the browser but help developers document their code. Comments start with <!-- and end with -->. They're useful for leaving notes and temporarily disabling code.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-comments-demo",
    topic: "HTML Basics",
    demoHtml: `<!-- This is a comment and won't be displayed -->
<h2>Visible Content</h2>
<p>This paragraph is visible</p>

<!-- 
This is a multi-line comment
that spans several lines
and can contain detailed explanations
-->

<p>Another visible paragraph</p>

<!-- <p>This paragraph is commented out and won't show</p> -->

<!-- TODO: Add more content here later -->
<div>
    <!-- Comments can be placed anywhere in HTML -->
    <p>Content inside a div</p>
    <!-- End of div content -->
</div>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Entities",
    description: "HTML entities are used to display special characters that are reserved in HTML or not easily typeable. They start with & and end with ;. Common entities include &lt;, &gt;, &amp;, and &copy;.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-entities-demo",
    
    topic: "HTML Special Characters",
    demoHtml: `<h3>Reserved Characters:</h3>
<p>&lt; - Less than</p>
<p>&gt; - Greater than</p>
<p>&amp; - Ampersand</p>
<p>&quot; - Quote</p>

<h3>Common Symbols:</h3>
<p>&copy; - Copyright</p>
<p>&trade; - Trademark</p>
<p>&euro; - Euro sign</p>
<p>&hearts; &clubs; &diams; &spades; - Card suits</p>`
},



// === MORE HTML LEARNING CONTENT ===

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Block and Inline Elements",
    description: "HTML elements are categorized as block-level or inline elements. Block elements take up the full width and start on a new line, while inline elements only take up necessary space and flow with text.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-block-inline-demo",
  
    topic: "HTML Structure",
    demoHtml: `<h3>Block Elements:</h3>
<div style="background: lightblue; margin: 5px 0; padding: 5px;">Block div</div>
<p style="background: lightgreen; margin: 5px 0; padding: 5px;">Block paragraph</p>

<h3>Inline Elements:</h3>
<p>Text with <span style="background: pink; padding: 2px;">inline span</span> and <strong style="background: lightcoral; padding: 2px;">bold text</strong>.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Input Types",
    description: "HTML5 introduced many new input types for forms. These include email, password, number, date, color, range, and more. Each type has specific validation and user interface features.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-input-types-demo",
   
    topic: "HTML Forms",
    demoHtml: `<form>
    <p><label>Text: </label><input type="text" placeholder="Enter text"></p>
    <p><label>Password: </label><input type="password" placeholder="Enter password"></p>
    <p><label>Email: </label><input type="email" placeholder="Enter email"></p>
    <p><label>Number: </label><input type="number" min="1" max="100" value="50"></p>
    <p><label>Range: </label><input type="range" min="0" max="100" value="50"></p>
    <p><label>Date: </label><input type="date"></p>
    <p><label>Time: </label><input type="time"></p>
    <p><label>Color: </label><input type="color" value="#ff0000"></p>
    <p><label>File: </label><input type="file"></p>
    <p><label>URL: </label><input type="url" placeholder="https://example.com"></p>
    <p><label>Search: </label><input type="search" placeholder="Search..."></p>
    <p><label>Tel: </label><input type="tel" placeholder="+1-234-567-8900"></p>
    <p><input type="checkbox" id="check1"> <label for="check1">Checkbox</label></p>
    <p><input type="radio" id="radio1" name="radio"> <label for="radio1">Radio button</label></p>
    <p><input type="submit" value="Submit"> <input type="reset" value="Reset"></p>
</form>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Media Elements",
    description: "HTML5 provides built-in support for audio and video content without plugins. The audio and video elements support multiple formats and provide controls for playback.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-media-demo",
  
    topic: "HTML5 Media",
    demoHtml: `<h3>YouTube Video Embed</h3>
<iframe width="250" height="140" 
        src="https://www.youtube.com/embed/LIlIzKFkhXw" 
        title="HTML Media Video"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style="max-width: 100%; height: auto;">
</iframe>

<h3>HTML5 Audio</h3>
<audio controls style="width: 100%; max-width: 250px;">
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<p><strong>Note:</strong> Modern browsers require user interaction before playing audio/video.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Iframes",
    description: "An iframe (inline frame) is used to embed another HTML document within the current document. It's commonly used for embedding maps, videos, or other web content.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-iframes-demo",
    topic: "HTML Embedding",
    demoHtml: `<h3>Basic Iframe</h3>
<iframe src="https://www.example.com" width="300" height="200" title="Example Website">
    <p>Your browser does not support iframes.</p>
</iframe>

<h3>YouTube Video Embed</h3>
<iframe width="300" height="200" 
        src="https://www.youtube.com/embed/LIlIzKFkhXw" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>

<h3>Google Maps Embed - Phoenix, AZ</h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427168.71635690214!2d-112.32135019999999!3d33.4483771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1704123456789!5m2!1sen!2sus" 
        width="300" 
        height="200" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
</iframe>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML Canvas",
    description: "The HTML5 canvas element is used to draw graphics via JavaScript. It provides a drawing area where you can create dynamic graphics, animations, games, and data visualizations.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-canvas-demo",
 
    topic: "HTML5 Graphics",
    demoHtml: `<h3>Canvas Element</h3>
<canvas id="myCanvas" width="250" height="150" style="border:1px solid #000; max-width: 100%;">
    Your browser does not support the canvas element.
</canvas>

<script>
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = '#FF0000';
ctx.fillRect(10, 10, 80, 60);

// Draw a circle
ctx.beginPath();
ctx.arc(150, 40, 25, 0, 2 * Math.PI);
ctx.fillStyle = '#00FF00';
ctx.fill();

// Draw text - fixed to not split
ctx.fillStyle = '#0000FF';
ctx.font = '14px Arial';
ctx.fillText('HTML Canvas', 10, 130);
</script>

<p><strong>Interactive:</strong> Canvas elements can be made interactive with JavaScript event handlers for drawing, animations, and games.</p>`
},

{
    section: ["Learning", "HTML"],
    program: {
        name: "HTML",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/htmlicon.png"
    },
    title: "HTML SVG Graphics",
    description: "SVG (Scalable Vector Graphics) allows you to create vector graphics in HTML. Unlike canvas, SVG graphics are part of the DOM and can be styled with CSS and manipulated with JavaScript.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/c3a19888074dfcffbf22a62556dd77384b5b0630/Thumbnails/htmlthumbnail.png",
    link: "Learn.html#html-svg-demo",
  
    topic: "HTML5 Graphics",
    demoHtml: `<h3>Basic SVG Shapes</h3>
<svg width="250" height="150" style="border: 1px solid black; max-width: 100%;">
    <!-- Rectangle -->
    <rect x="10" y="10" width="80" height="60" fill="red" />
    
    <!-- Circle -->
    <circle cx="150" cy="40" r="25" fill="green" />
    
    <!-- Polygon (Triangle) -->
    <polygon points="120,80 100,120 140,120" fill="purple" />
</svg>

<h3>Advanced SVG with Gradient</h3>
<svg width="200" height="100" style="max-width: 100%;">
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
    </defs>
    <ellipse cx="100" cy="50" rx="80" ry="35" fill="url(#grad1)" />
</svg>`
},


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
    title: "CSS Social Media Icons with Hover Effects",
    description: "Learn how to create stunning social media buttons with smooth hover animations, gradient backgrounds, and expandable text effects. This comprehensive example shows modern CSS techniques including backdrop-filter, transforms, and advanced hover states. Perfect for navigation bars, footers, or any social media integration.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/774fe8316c171aa235ad056ec3e0d7f9981ad5fa/Thumbnails/Screenshot%202025-08-19%20185150.png",
    link: "Learn.html#css-social-media-icons-demo",
    topic: "CSS Social Media Effects",
    demoHtml: `<div class="social-container">
  <h2 class="title">Connect With Me</h2>
  
  <a href="https://www.facebook.com" target="_blank" class="social-btn facebook">
    <i class="fab fa-facebook-f"></i><span>Facebook</span>
  </a>
  
  <a href="https://www.twitter.com" target="_blank" class="social-btn twitter">
    <i class="fab fa-twitter"></i><span>Twitter</span>
  </a>
  
  <a href="https://www.linkedin.com" target="_blank" class="social-btn linkedin">
    <i class="fab fa-linkedin-in"></i><span>LinkedIn</span>
  </a>
  
  <a href="https://www.youtube.com" target="_blank" class="social-btn youtube">
    <i class="fab fa-youtube"></i><span>YouTube</span>
  </a>
  
  <a href="https://www.instagram.com" target="_blank" class="social-btn instagram">
    <i class="fab fa-instagram"></i><span>Instagram</span>
  </a>
  
  <a href="https://www.github.com" target="_blank" class="social-btn github">
    <i class="fab fa-github"></i><span>GitHub</span>
  </a>
</div>

<!-- Font Awesome for icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">`,
    demoCss: `/* Social Media Icons with Hover Effects */
.social-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 10;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 20px auto;
}

.title {
  text-align: center;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 30px;
  color: white;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.social-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-btn:hover::before {
  opacity: 1;
}

.social-btn i {
  font-size: 22px;
  color: white;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  line-height: 1;
}

.social-btn span {
  opacity: 0;
  font-size: 16px;
  font-weight: 600;
  margin-left: 15px;
  transition: all 0.3s ease;
  position: absolute;
  left: 45px;
  z-index: 2;
  white-space: nowrap;
}

.social-btn:hover {
  width: 200px;
  justify-content: flex-start;
  padding-left: 18px;
  transform: translateX(3px) scale(1.01);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
}

.social-btn:hover i {
  transform: scale(1.05);
}

.social-btn:hover span {
  opacity: 1;
}

.social-btn:active {
  transform: translateX(3px) scale(0.99);
}

/* Platform-specific styles */
.facebook {
  background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
}

.facebook:hover {
  background: linear-gradient(135deg, #166fe5 0%, #1877f2 100%);
}

.twitter {
  background: linear-gradient(135deg, #1da1f2 0%, #64b5f6 100%);
}

.twitter:hover {
  background: linear-gradient(135deg, #1a91da 0%, #1da1f2 100%);
}

.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #2196f3 100%);
}

.linkedin:hover {
  background: linear-gradient(135deg, #005885 0%, #0077b5 100%);
}

.youtube {
  background: linear-gradient(135deg, #ff0000 0%, #ff5722 100%);
}

.youtube:hover {
  background: linear-gradient(135deg, #cc0000 0%, #ff0000 100%);
}

.instagram {
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
}

.instagram:hover {
  background: linear-gradient(135deg, #732d9e 0%, #e01a1a 50%, #e8a03a 100%);
}

.github {
  background: linear-gradient(135deg, #333 0%, #666 100%);
}

.github:hover {
  background: linear-gradient(135deg, #222 0%, #333 100%);
}

/* Entry animation */
.social-btn {
  animation: slideInLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
  transform: translateX(-50px);
}

.social-btn:nth-child(2) { animation-delay: 0.1s; }
.social-btn:nth-child(3) { animation-delay: 0.2s; }
.social-btn:nth-child(4) { animation-delay: 0.3s; }
.social-btn:nth-child(5) { animation-delay: 0.4s; }
.social-btn:nth-child(6) { animation-delay: 0.5s; }
.social-btn:nth-child(7) { animation-delay: 0.6s; }

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .social-container {
    margin: 20px;
    padding: 20px;
  }
  
  .social-btn:hover {
    width: 170px;
  }
  
  .title {
    font-size: 1.2rem;
  }
}`
},

{
    section: ["Learning", "CSS"],
    program: {
        name: "CSS",
        image: "https://github.com/StevenMKay/CareerSolutionsForToday/raw/bec276b558dc0f3049b3696abe7ef062e4cc4e0d/icons/cssicon.png"
    },
    title: "CSS 3D Tilt Hover Effect with JavaScript",
    description: "Create an interactive 3D tilt effect that follows your mouse movement. This advanced hover effect combines CSS transforms, perspective, and JavaScript mouse tracking to create a dynamic card that tilts based on cursor position with realistic shadows and lighting effects.",
    thumbnail: "https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/1aadef01d41a2681c875e9c64eb28bf11c80d26f/Thumbnails/cssthumbnail.png",
    link: "Learn.html#css-3d-tilt-demo",
    topic: "CSS 3D Interactive Effects",
    demoHtml: `<div class="card-container-3d">
  <div class="card-3d">
    <h2>Hover Here</h2>
  </div>
</div>`,
    demoCss: `/* CSS 3D Tilt Hover Effect */
.card-container-3d {
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
}

.card-3d {
  width: 320px;
  height: 200px;
  background: #1e1e1e;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.card-3d h2 {
  z-index: 2;
  font-size: 24px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  margin: 0;
  position: relative;
}

.card-3d::before {
  content: "";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 60%);
  pointer-events: none;
  transition: background 0.2s;
}`,
    demoJs: `// JavaScript for 3D Tilt Effect
const cards = document.querySelectorAll('.card-3d');
const containers = document.querySelectorAll('.card-container-3d');

containers.forEach((container, index) => {
  const card = cards[index];
  if (card && container) {
    container.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;

      card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      card.style.boxShadow = (-rotateY) + 'px ' + rotateX + 'px 20px rgba(0, 255, 255, 0.5)';
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
    });
  }
});`
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
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png"
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
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/b373342d2eaed89178d1a606daa46b2710a0c783/icons/2025%20Excel%20Icon.png"
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
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
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
   related:{
            text:"Check it out on YouTube",
            url:"https://youtube.com/shorts/TCMYpQUytOM"
        },
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
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
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
            image:"https://raw.githubusercontent.com/StevenMKay/CareerSolutionsForToday/9e800bd0119e969736b32fe8da6f2950e7d872d1/icons/2025%20PowerPoint%20Icon.png"
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
    },



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
