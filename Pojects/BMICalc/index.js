const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const ans = document.querySelector("#results");
  if (height == "" || height < 0 || isNaN(height)) {
    ans.innerHTML = "pls add a valid value";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    ans.innerHTML = "pls add a valid value";
  } else {
    height /= 100;
    const bmi = weight / (height * height);
    ans.innerHTML = bmi;
  }
});
