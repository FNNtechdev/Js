// Create canvas
const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Background
ctx.fillStyle = "#eef2f7";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Trophy Cup (top bowl)
ctx.fillStyle = "#d4af37"; // gold color
ctx.beginPath();
ctx.moveTo(200, 120);
ctx.lineTo(400, 120);
ctx.lineTo(360, 200);
ctx.lineTo(240, 200);
ctx.closePath();
ctx.fill();

// Cup Rim
ctx.fillStyle = "#b8962e";
ctx.fillRect(190, 100, 220, 20);

// Left Handle
ctx.strokeStyle = "#d4af37";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(200, 160, 40, Math.PI / 2, (3 * Math.PI) / 2);
ctx.stroke();

// Right Handle
ctx.beginPath();
ctx.arc(400, 160, 40, (3 * Math.PI) / 2, Math.PI / 2);
ctx.stroke();

// Stem
ctx.fillStyle = "#b8962e";
ctx.fillRect(280, 200, 40, 50);

// Base Top
ctx.fillStyle = "#8b6b2e";
ctx.fillRect(240, 250, 120, 20);

// Base Bottom
ctx.fillStyle = "#5a4215";
ctx.fillRect(220, 270, 160, 40);

// Engraving Text
ctx.fillStyle = "#ffffff";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.fillText("WINNER", 300, 295);
