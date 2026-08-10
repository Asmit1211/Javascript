const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const lights = document.querySelectorAll(".light");

let currentLight = 0;

setInterval(() => {
  lights.forEach((light) => {
    light.style.opacity = 0.2;
  });

  // turn on current light
  lights[currentLight].style.opacity = 1;



  currentLight++;
  
  if (currentLight === lights.length) {
    currentLight = 0;
  }
}, 1000);
