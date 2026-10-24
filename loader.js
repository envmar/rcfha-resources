console.log("RCFHA loader.js: script loaded from jsDelivr");

// Wait until DOM is parsed
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready, searching for placeholder comment");

  // Walk the DOM tree to find the comment node
  const walker = document.createTreeWalker(
    document,
    NodeFilter.SHOW_COMMENT,
    null,
    false
  );

  let found = null;

  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.trim() === "RCFHA-RESOURCE-BLOCK") {
      found = walker.currentNode;
      break;
    }
  }

  if (!found) {
    console.warn("Placeholder comment not found");
    return;
  }

  console.log("Placeholder comment found, injecting test block");

  // Create a test block to inject
  const testBlock = document.createElement("div");
  testBlock.textContent = "Injected near RCFHA-RESOURCE-BLOCK";
  testBlock.style.background = "#009900";
  testBlock.style.color = "white";
  testBlock.style.padding = "6px";
  testBlock.style.margin = "10px 0";
  testBlock.style.fontSize = "14px";

  // Insert right after the comment
  found.parentNode.insertBefore(testBlock, found.nextSibling);
});
