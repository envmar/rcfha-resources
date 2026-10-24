console.log("RCFHA loader.js: script loaded");

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM ready, searching for target heading");

  // Find the exact heading text
  const headings = Array.from(document.querySelectorAll("h3"));
  const target = headings.find(h => h.textContent.trim() === "League Documents and Information");

  if (!target) {
    console.warn("Target heading not found: 'League Documents and Information'");
    return;
  }

  console.log("Heading found, fetching replacement content");

  try {
    // GitHub → jsDelivr URL for your HTML block
    const url = "https://cdn.jsdelivr.net/gh/envmar/rcfha-resources@latest/league-documents-and-information.html";

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status}`);
    }

    const html = await res.text();

    // Create wrapper for injected HTML
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    // Replace the heading entirely
    target.replaceWith(wrapper);

    console.log("Content replaced successfully");
  } catch (err) {
    console.error("Injection error:", err);
  }
});
