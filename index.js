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

function addX(exPoints) {
  return (x) => {
    return x + exPoints;
  };
}

const addExcitement = addX('!!!');
console.log(addExcitement('Hello World'));
console.log(addExcitement('Pokemon, catch em all'));

function addFirst(element) {
  return (x) => {
    return x.map((i) => element + i);
  };
}

const addOrange = addFirst('orange');
console.log(addOrange(['red', 'blue', 'green']));
// [orange,red,blue,green]
console.log(addOrange(['blue', 'blue', 'blue']));
// [orange,blue,blue,blue]

const addCat = addFirst('cat');
console.log(addOrange(['dog', 'bird', 'lizard']));
// [cat,dog,bird,lizard]
console.log(addOrange(['lizard', 'donkey', 'whale']));
// [cat,lizard,donkey,whale]


function fib(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  // if(n < 2) {
  //   return n;
  // }
  return fib(n-1) + fib(n - 2); 
}
console.log(fib(8));

function sum(n) {
  if (n === 1) return 1;
  return sum(n - 1) + n;
}

console.log(sum(5));

  ```
  
  > **You can assume valid inputs**
  
  ## Test Cases
  
  Input | Output
  ---|---
  5 | 15  (// 1 + 2 + 3 + 4 + 5 = 15)
  1 | 1 
  12 | 78
