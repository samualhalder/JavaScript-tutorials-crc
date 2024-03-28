const developer = {
  name: "Samual halder",
  role: "sde",
  exp: 2,
  tech: ["js", "cpp", "react"],
};
console.log(developer.tech[0]);
developer.newName = "doli";
console.log(developer);
developer.fun = () => {
  console.log("i am a function");
};
console.log(developer.fun());
