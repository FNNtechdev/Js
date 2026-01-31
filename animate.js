const box = document.querySelector(".box");

let position = 0;

function animate() {
  position += 2;          // speed
  box.style.left = position + "px";

  if (position < 400) {
    requestAnimationFrame(animate);
  }
}

animate();
