const genNum = Math.round(Math.random() * 100);
const btn = document.querySelector("#subt");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const number = document.querySelector("#guessField").value;
  if (number === genNum) {
    const message = "Wright ans";
    const divv = document.querySelector(".resultParas").appendChild(message);
  } else {
    const message = "Wrong ans";
    const divv = document.querySelector(".resultParas").appendChild(message);
  }
  console.log(genNum);
  console.log("clivk");
});
