const bulb = document.getElementById("bulb");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

onBtn.addEventListener("click", function () {
    bulb.style.backgroundColor = "yellow";
    bulb.style.boxShadow = "0 0 30px yellow";
});

offBtn.addEventListener("click", function () {
    bulb.style.backgroundColor = "#444";
    bulb.style.boxShadow = "0 0 10px #000";
});
