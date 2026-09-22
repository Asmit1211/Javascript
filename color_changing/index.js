const bgBtn = document.getElementById("bgBtn");
const stopBtn = document.getElementById("stopBtn");
const colorCode = document.getElementById("colorCode");
let colorInterval = null;

bgBtn.addEventListener("click", () => {
  // Prevent multiple intervals
  if (colorInterval !== null) {
    return;
  }

  colorInterval = setInterval(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = "#" + randomColor;
    colorCode.textContent = "#" + randomColor;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(colorInterval);
  colorInterval = null;
});
