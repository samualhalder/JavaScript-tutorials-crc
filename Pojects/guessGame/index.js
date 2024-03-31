let random = parseInt(Math.random() * 100 + 1);
const inptField = document.querySelector("#guessField");
const btn = document.querySelector("#subt");
const message = document.querySelector(".lowOrHi");
const guessArrey = document.querySelector(".guesses");
const guessRem = document.querySelector(".lastResult");
const insertDiv = document.querySelector(".resultParas");
const p = document.createElement("p");

let guesses = [];
let guessCnt = 3;
guessRem.innerHTML = guessCnt;
const play = true;
if (play) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let num = parseInt(inptField.value);
    console.log(num);
    checkInp(num);
  });
}

const checkInp = (num) => {
  if (isNaN(num)) {
    alerting("enter a number ");
  } else if (num > 100) {
    alerting("enter a number from 1-100");
  } else if (isNaN(num)) {
    alerting("enter a number from 1-100");
  } else {
    compare(num);
  }
};

const compare = (num) => {
  guessArrey.innerHTML += `${num},`;
  if (guessCnt <= 0) {
    endGame("Opps Game Ended try next time, the number was");
  }
  guessCnt--;
  guessRem.innerHTML = `${guessCnt}`;
  if (num < random) {
    message.innerHTML = "number is  tooo low";
  } else if (num > random) {
    message.innerHTML = "number is too big";
  } else {
    endGame("bulls eye!!!");
  }
  inptField.value = "";
  console.log(guessRem);
  console.log(guesses);
};
const alerting = (msg) => {
  alert(msg);
  inptField.value = "";
};

const endGame = (msg) => {
  guessCnt = 3;
  guesses = [];
  message.innerHTML = `${msg} ${random}`;

  random = parseInt(Math.random() * 100 + 1);

  console.log(random);
};
