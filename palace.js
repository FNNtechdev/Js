// Create canvas
const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 500;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Sky
ctx.fillStyle = "#cce7ff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Ground
ctx.fillStyle = "#6dbb75";
ctx.fillRect(0, 400, canvas.width, 100);

// Main palace building
ctx.fillStyle = "#d4af7a";
ctx.fillRect(200, 220, 400, 180);

// Central roof
ctx.fillStyle = "#8b5a2b";
ctx.beginPath();
ctx.moveTo(200, 220);
ctx.lineTo(400, 140);
ctx.lineTo(600, 220);
ctx.closePath();
ctx.fill();

// Left tower
ctx.fillStyle = "#cfa36a";
ctx.fillRect(120, 180, 80, 220);

ctx.beginPath();
ctx.moveTo(120, 180);
ctx.lineTo(160, 120);
ctx.lineTo(200, 180);
ctx.closePath();
ctx.fill();

// Right tower
ctx.fillRect(600, 180, 80, 220);

ctx.beginPath();
ctx.moveTo(600, 180);
ctx.lineTo(640, 120);
ctx.lineTo(680, 180);
ctx.closePath();
ctx.fill();

// Door
ctx.fillStyle = "#5a3a1a";
ctx.fillRect(370, 300, 60, 100);

// Windows
ctx.fillStyle = "#ffffff";
for (let x = 250; x <= 500; x += 100) {
  ctx.fillRect(x, 260, 40, 40);
  ctx.fillRect(x, 320, 40, 40);
}

// Flag poles
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(160, 120);
ctx.lineTo(160, 70);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(640, 120);
ctx.lineTo(640, 70);
ctx.stroke();

// Flags
ctx.fillStyle = "red";
ctx.fillRect(160, 70, 40, 20);

ctx.fillStyle = "blue";
ctx.fillRect(640, 70, 40, 20);
