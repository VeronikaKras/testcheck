

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let timerId = null;

  
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    getRandomHexColor();
  }, 1000);
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}