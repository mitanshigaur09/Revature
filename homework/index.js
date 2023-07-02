// Event handler for outer div (capturing phase)
function handleOuterCapturing() {
  console.log("Outer Capturing");
  // event.stopPropagation(); // Uncomment this line to stop propagation
}

// Event handler for middle div (capturing phase)
function handleMiddleCapturing() {
  console.log("Middle Capturing");
  // event.stopPropagation(); // Uncomment this line to stop propagation
}

// Event handler for inner div (capturing phase)
function handleInnerCapturing() {
  console.log("Inner Capturing");
  // event.stopPropagation(); // Uncomment this line to stop propagation
}

// Event handler for inner div (bubbling phase)
function handleInnerBubbling() {
  console.log("Inner Bubbling");
  // event.stopPropagation(); // Uncomment this line to stop propagation
}

// Event handler for middle div (bubbling phase)
function handleMiddleBubbling() {
  console.log("Middle Bubbling");
  // event.stopPropagation(); // Uncomment this line to stop propagation
}

// Event handler for outer div (bubbling phase)
function handleOuterBubbling() {
  console.log("Outer Bubbling");
  // event.stopPropagation(); // Uncomment this line to stop propagation
}

// Add event listeners using capturing phase
var outer = document.getElementById("outer");
outer.addEventListener("click", handleOuterCapturing, true);
outer.addEventListener("click", handleOuterBubbling, false);

var middle = document.getElementById("middle");
middle.addEventListener("click", handleMiddleCapturing, true);
middle.addEventListener("click", handleMiddleBubbling, false);

var inner = document.getElementById("inner");
inner.addEventListener("click", handleInnerCapturing, true);
inner.addEventListener("click", handleInnerBubbling, false);
