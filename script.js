function updateTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  document.getElementById("hours").innerText = `${hours}`;
  document.getElementById("minutes").innerText = `${minutes}`;
  document.getElementById("seconds").innerText = `${seconds}`;
}
setInterval(() => {
  updateTime();
}, 1000);
