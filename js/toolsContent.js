// Tools content generation functions

// Function to create Call Center Simulation iframe content
function createCallCenterSimulation() {
  return `
    <iframe class="simulation-iframe" 
            src="Simulations/CallCenter.html" 
            title="Call Center Training Simulation"
            style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">
      Your browser does not support iframes. Please use a modern browser to view this simulation.
    </iframe>
  `;
}

// Function to create VLOOKUP Simulation iframe content  
function createVLookupSimulation() {
  return `
    <iframe class="simulation-iframe" 
            src="Simulations/VLOOKUPSimulation.html" 
            title="Excel VLOOKUP Master Training"
            style="width: 100%; height: 800px; border: none; border-radius: 8px; background: white;">
      Your browser does not support iframes. Please use a modern browser to view this simulation.
    </iframe>
  `;
}

// Function to create Business Case Calculator iframe content
function createBusinessCaseCalculator() {
  return `
    <iframe class="simulation-iframe" 
            src="businesscase.html" 
            title="Business Case Development Calculator"
            style="width: 100%; height: 1200px; border: none; border-radius: 8px; background: white;">
      Your browser does not support iframes. Please use a modern browser to view this simulation.
    </iframe>
  `;
}

// Function to create Amortization Calculator iframe content
function createAmortizationCalculator() {
  return `
    <iframe class="simulation-iframe" 
            src="amortization.html" 
            title="Amortization Calculator"
            style="width: 100%; height: 1000px; border: none; border-radius: 8px; background: white;">
      Your browser does not support iframes. Please use a modern browser to view this simulation.
    </iframe>
  `;
}

// Make functions globally available
window.createCallCenterSimulation = createCallCenterSimulation;
window.createVLookupSimulation = createVLookupSimulation;
window.createBusinessCaseCalculator = createBusinessCaseCalculator;
window.createAmortizationCalculator = createAmortizationCalculator;
