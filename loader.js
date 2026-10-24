console.log("RCFHA loader.js: script loaded from jsDelivr");

// Try touching the DOM safely
const testBanner = document.createElement("div");
testBanner.textContent = "Loader.js is running inside RAMP";
testBanner.style.background = "#0066cc";
testBanner.style.color = "white";
testBanner.style.padding = "6px";
testBanner.style.fontSize = "14px";
testBanner.style.marginBottom = "10px";

document.body.prepend(testBanner);
