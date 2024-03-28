const butns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
console.log(butns);
butns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    body.style.backgroundColor = e.target.id;
  })
);
