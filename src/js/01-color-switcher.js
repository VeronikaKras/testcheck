

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
let timerId = null;
const body = document.querySelector('body')
  



startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    
});

if (getRandomHexColor()) {
   startBtn.setAttribute('disabled', true)
  }