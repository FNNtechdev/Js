const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ====== SHOE RACK FRAME ====== */
// Outer frame
ctx.lineWidth = 3;
ctx.strokeStyle = "#5A3A22";
ctx.strokeRect(120, 80, 360, 280);

// Vertical supports
ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(200, 360);
ctx.moveTo(400, 80);
ctx.lineTo(400, 360);
ctx.stroke();

/* ====== SHELVES ====== */
ctx.lineWidth = 2;
ctx.beginPath();
// Top shelf
ctx.moveTo(120, 140);
ctx.lineTo(480, 140);

// Middle shelf
ctx.moveTo(120, 220);
ctx.lineTo(480, 220);

// Bottom shelf
ctx.moveTo(120, 300);
ctx.lineTo(480, 300);
ctx.stroke();

/* ====== SHOES (Simple shapes) ====== */

// Function to draw a simple shoe
function drawShoe(x, y, color) {
  ctx.fillStyle = color;

  // Shoe body
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 60, y);
  ctx.lineTo(x + 55, y + 18);
  ctx.lineTo(x, y + 18);
  ctx.closePath();
  ctx.fill();

  // Heel part
  ctx.fillRect(x + 40, y - 8, 15, 8);
}

// Top shelf shoes
drawShoe(150, 130, "#222");
drawShoe(260, 130, "#444");
drawShoe(370, 130, "#222");

// Middle shelf shoes
drawShoe(150, 210, "#5D4037");
drawShoe(260, 210, "#795548");
drawShoe(370, 210, "#5D4037");

// Bottom shelf shoes
drawShoe(150, 290, "#0D47A1");
drawShoe(260, 290, "#1565C0");
drawShoe(370, 290, "#0D47A1");

/* ====== LABEL ====== */
ctx.fillStyle = "#000";
ctx.font = "18px Arial";
ctx.fillText("Shoe Rack", 250, 50);
