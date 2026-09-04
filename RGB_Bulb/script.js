const bulb = document.getElementById("bulb");
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");

// Lets write custom Javscript Logic here

redBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "RGB(255,0,0)";
});

greenBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "RGB(0,255,0)";
});

blueBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "RGB(0,0,255)";
});

