//Spread
/*
const numbers = [1, 2, 3, 4];
console.log(numbers);
console.log(...numbers);

const alphabets = ["a", "b", "c"];

console.log(numbers, alphabets);
console.log(numbers + alphabets);
console.log([numbers, alphabets]);
console.log(...numbers, ...alphabets);
console.log([...numbers, ...alphabets]);

const testA = {
  value: "C",
  male: false
};

const testB = {
  oi: "C",
  lalala: true
};
console.log({ testA, testB });
console.log({ ...testA, ...testB });
*/

const nums = [1, 2, 3, 4];
const newNums = [...nums, 5];
console.log(newNums);
const newNums2 = [0, ...nums, 5];
console.log(newNums2);

//Conditional object properties
const lastName = prompt("Last Name");

const user = {
  name: "j",
  age: "29",
  ...(lastName !== "" && { lastName })
};

console.log(user);
