const text = "Rich Dad Poor Dad";
const speed = 150;
let index = 0;

function typeTitle(elementId) {
  const element = document.getElementById(elementId);

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeTitle(elementId), speed);
  }
}

// Call the function with the ID of your HTML element
typeTitle("title");
