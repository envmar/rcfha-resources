console.log("RCFHA loader.js: script loaded from jsDelivr");

// Wait until RAMP finishes building the DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready, injecting banner");

  const banner = document.createElement("div");
  banner.textContent = "Loader.js is running inside RAMP";
  banner.style.background = "#0066cc";
  banner.style.color = "white";
  banner.style.padding = "6px";
  banner.style.fontSize = "14px";
  banner.style.marginBottom = "10px";

  document.body.prepend(banner);
});
