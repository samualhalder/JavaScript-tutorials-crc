//clouser is a scope of function with its lexical memory
const a = () => {
  var a = 7;
  return () => {
    console.log(a);
  };
};
const b = a();
console.log(b);
b();
