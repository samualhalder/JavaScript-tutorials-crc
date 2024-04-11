function User(username, age, male) {
  (this.username = username), (this.age = age), (this.male = male);
}

const userOne = new User("samual halder", 22, true);
const userTwo = new User("doli halder", 30, false);
//new   creates a new object or a instance
console.log(userOne);
console.log(userTwo);
