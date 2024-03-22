// console.log("hadi");

const arr = [
  { color: "red", age: 1 },
  { color: "red", age: 2 },
  { color: "blue", age: 3 },
  { color: "red", age: 4 },
  { color: "red", age: 5 },
  { color: "red", age: 6 },
];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].age <= 5) console.log(arr[i]);
// }

// arr.map( () => {} )
// arr.map((x) => (x.age <= 5 ? console.log(x) : console.log("none")));
// const newArr = arr.map((x) => x.age <= 5 && x);

const newArr = arr.filter((x) => x.age !== 5);

console.log(newArr);
