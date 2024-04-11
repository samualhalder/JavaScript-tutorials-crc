//way 1

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task 1 is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("1 consumed");
});

// way 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task 2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("2 consumed");
});

// way 3
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    const err = false;
    if (!err) {
      console.log("task two is completed");
      resolve({ userName: "samual halder", password: "1234" });
    } else {
      reject("had a error");
    }
  }, 1000);
});

promiseTwo
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((msg) => {
    console.log(msg);
  });
//way 5
fetch("https://api.github.com/users/samualhalder")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data, "hey");
  })
  .catch((err) => {
    console.log(err);
  });
//   .then((data) => {
//     console.log(data);
//   });
// //   .catch((err) => {
// //     console.log(err);
// //   });
