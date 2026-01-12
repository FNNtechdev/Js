const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ---- HOUSE BODY ---- */
ctx.fillStyle = "#c68642";
ctx.fillRect(150, 180, 200, 150);

/* ---- ROOF ---- */
ctx.beginPath();
ctx.moveTo(140, 180);
ctx.lineTo(260, 100);
ctx.lineTo(360, 180);
ctx.closePath();
ctx.fillStyle = "#8b0000";
ctx.fill();

/* ---- DOOR ---- */
ctx.fillStyle = "#654321";
ctx.fillRect(230, 240, 40, 90);

/* ---- WINDOWS ---- */
ctx.fillStyle = "#87ceeb";
ctx.fillRect(170, 210, 40, 40);
ctx.fillRect(290, 210, 40, 40);

/* ---- WINDOW LINES ---- */
ctx.strokeStyle = "#000";
ctx.strokeRect(170, 210, 40, 40);
ctx.strokeRect(290, 210, 40, 40);

/* ---- GROUND ---- */
ctx.fillStyle = "#228b22";
ctx.fillRect(0, 330, 500, 70);
