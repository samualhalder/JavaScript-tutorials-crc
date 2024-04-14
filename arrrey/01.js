const data = [
  {
    id: 1,
    name: "salual",
  },
  {
    id: 3,
    name: "doli",
  },
  {
    id: 2,
    name: "new",
  },
];

const str = "samual";
const arrey = Array.from(str);
// console.log(arrey);

const fr = arrey.keys();
// console.log(fr);

const person = data.findIndex((dt) => dt.id === 3);
// console.log(person);
// console.log(isNaN(4));
const arrey2 = "hello boy how are you!";
// console.log(arrey2.includes("hello"));
// console.log(arrey2.startsWith("hello"));
console.log(arrey2.endsWith("are"));
