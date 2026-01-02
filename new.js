// Create message
const message = document.createElement("h1");
message.innerText = "🌸 Happy New Year 2026 🌸";
message.style.position = "fixed";
message.style.top = "40%";
message.style.left = "50%";
message.style.transform = "translate(-50%, -50%)";
message.style.fontSize = "3rem";
message.style.color = "#ff2f92";
message.style.fontFamily = "cursive";
message.style.textShadow = "2px 2px 10px pink";
document.body.appendChild(message);

// Set background
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "linear-gradient(to bottom, #fff0f5, #ffe4e1)";

// Create floral petals
function createFlower() {
    const flower = document.createElement("div");
    flower.innerHTML = "🌸";

    const size = Math.random() * 30 + 20;
    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-50px";
    flower.style.fontSize = size + "px";
    flower.style.opacity = Math.random();
    flower.style.transition = "top 6s linear, transform 6s linear";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.style.top = window.innerHeight + "px";
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 100);

    setTimeout(() => {
        flower.remove();
    }, 6000);
}

// Generate flowers continuously
setInterval(createFlower, 300);
