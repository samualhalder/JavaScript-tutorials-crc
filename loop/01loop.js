for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

const prices = [1, 4, 6, 2, 7, 9, 8, 12, 14, 4, 16, 20];
const values = new Map();
values.set("c", 2);
values.set("d", 4);
values.set("e", 7);
const obj = {
  name: "samula halder",
  role: "user",
  order: ["iphoen", "food", "laptop"],
  id: 1,
};
//forof loop gives the values of a key cant apply on a object but on map,arrey
for (const [key, val] of values) {
  // console.log(key);
}

//forin loop gives the key and can be applied on object,arrey but cant on maps
for (const key in obj) {
  // console.log(obj[key]);
}

//forEach gives us the value in arrey ,map but not in a object but it does nt return a value
values.forEach((val, ind, arr) => {
  //console.log(val, ind, arr);
});

//filter it return a true value
const newPrices = prices.filter((val) => val >= 8);
//console.log(newPrices);

//map does some operation and return value

const modifiy = prices.map((val) => val * 10).filter((val) => val > 40);
// console.log(modifiy);
const total = modifiy.reduce((acc, cur) => acc + cur, 0);
console.log(total);
