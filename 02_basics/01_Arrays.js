const arr = [1, 2, 3, 4, 5]

// console.log(arr);
// console.log(typeof arr);

//----Methods

// console.log(arr.push(6));
// console.log(arr.pop());
// console.log(arr.includes(6));
// console.log(arr.indexOf(3));

// slice, splice

console.log("A", arr);
const newArr = arr.slice(1,3)
// const newArr0 = arr.slice(1)
// console.log(newArr0);
console.log(newArr);
console.log(arr);

console.log("B", arr);
const newArr1 = arr.splice(1,3)
console.log(newArr1);
console.log(arr);

