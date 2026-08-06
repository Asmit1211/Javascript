const countElement = document.getElementById("count");
const positiveBtn = document.getElementById("positive");
const negativeBtn = document.getElementById("negative");

let count = 0;

positiveBtn.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

negativeBtn.addEventListener("click", () => {
  count--;
  countElement.textContent = count;
});
