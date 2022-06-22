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
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const modifiedItem = callback(item);
    newArray[newArray.length] = modifiedItem;
  }
  return newArray;
}
const myArray = [1, 6, 5];
const newArray = map(myArray, (num) => num ** 2);
console.log(newArray);

function filter(arr, callback) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (callback(item)) {
      filteredArr[filteredArr.length] = item;
    }
  }
  return filteredArr;
}

console.log(filter([2, 6, 5], (n) => (n % 2 === 0) | [(2, 6)]));
