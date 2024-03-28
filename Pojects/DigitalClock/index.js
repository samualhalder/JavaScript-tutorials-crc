const clk = document.querySelector(".clock");
setInterval(() => {
  const date = new Date();
  clk.innerHTML = date.toLocaleTimeString();
  //   console.log(date.toLocaleTimeString());
}, 1000);
