const Obj1 = {
  1: "a",
  2: "b",
};
const Obj2 = {
  3: "a",
  4: "b",
  name: "samual",
};

const newObj = {
  name: "samual",
  role: 1100,
  id: 1,
};
// destructure
const { name, role, id } = newObj;
console.log(newObj.name);
console.log(name);
console.log(role);
console.log(id);
