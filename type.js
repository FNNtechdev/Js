// Text to be typed
const text = "Happy Happy birthday madam Daisy Chania";

// Create an element to display the text
const container = document.createElement("div");
container.style.fontSize = "24px";
container.style.fontFamily = "monospace";
document.body.appendChild(container);

let index = 0;

// Typing function
function typeText() {
  if (index < text.length) {
    container.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // typing speed (ms)
  }
}

// Start typing
typeText();
