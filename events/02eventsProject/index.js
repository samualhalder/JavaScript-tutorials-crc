const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    const random = Math.floor(Math.random() * 16);
    color += hex[random];
  }
  return color;
};
let interval;
const body = document.querySelector("body");
const code = document.querySelector(".code");
const generate = () => {
  interval = setInterval(() => {
    const color = randomColor();
    body.style.backgroundColor = color;
    code.innerText = color;
  }, 1000);
};

const stBtn = document.querySelector(".start");
stBtn.addEventListener("click", () => {
  generate();
});
document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(interval);
});
