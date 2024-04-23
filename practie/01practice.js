// Custom polyfil for Flat metode

const data = [1, 2, [3, 1, 4, [5, [7, 8, [9, [101]]]]], 6];

const myFlat = (data) => {
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (!data[i].length) {
      newData.push(data[i]);
    } else {
      myFlat(data[i]).map((e) => data.push(e));
    }
  }
  return newData;
};

console.log(myFlat(data));
