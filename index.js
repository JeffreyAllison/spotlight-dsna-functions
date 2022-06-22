function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    callback(item);
  }
}
const assets = [{ value: 3 }, { value: 4 }, { value: 6 }];
forEach(assets, (obj) => (obj.value *= 2)); // no return value
// assets is now:
// [{ value: 6 }, { value: 8 }, { value: 12 }]
console.log(assets);

function map(arr, callback) { 
  let newArray = [];
  arr[i] = arr[i + 1];
  callback(newArray);
  return newArray;
}
const myArray = [1, 2, 3, 4];
const newArray = map(myArray, (num) => num * 2);
console.log(newArray);