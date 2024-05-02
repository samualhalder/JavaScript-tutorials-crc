const arr = [1, 3, 4, 5, 6];
console.log(arr.map((elm) => elm * 2));
Array.prototype.MyMapO = function (fun) {
  //arrow function donst have acces of this
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    newArr.push(fun(this[index]));
  }
  return newArr;
};
console.log(
  "my arr",
  arr.MyMapO((elm) => elm * 2)
);
