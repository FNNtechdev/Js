// Create a canvas
const canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 200;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Draw a red heart emoji
ctx.font = "100px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("❤️", canvas.width / 2, canvas.height / 2);
