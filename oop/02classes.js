class User {
  constructor(name, email, User) {
    this.name = name;
    this.email = email;
    this.User = User;
  }
  setValue(name) {
    this.name = name;
  }
  nextUser() {
    return this.User;
  }
}

const user1 = new User("samual", "email", new User());
// user1.setValue("samuel");
const user2 = user1.nextUser();
user2.name = "doli";
user2.email = "email";
user2.User = new User();

// console.log(user2);
console.log(user1);
