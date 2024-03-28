const fun = (a, b) => ({
  name: "samual",
});
// console.log(fun());

//IIFE

(function newFun() {
  console.log("new");
})();
((name) => {
  console.log(`name: ${name}`);
})("samula");
