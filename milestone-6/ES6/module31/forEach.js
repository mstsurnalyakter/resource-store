const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))

//Modifying each element in an array:
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num,index, arr)=> arr[index] = num * 2);


//Summing up values in an array:
const numbers3 = [1, 2, 3, 4, 5];
let sum = 0;
numbers3.forEach(num => sum += num);

//Using forEach() with objects:

const obj = { a: 1, b: 2, c: 3 };
const keys = [];

Object.keys(obj).forEach(key => keys.push(key));

//Skipping undefined elements:
const arr = [1, , , 4];

// arr.forEach(element => console.log(element))


// Updating objects within an array:

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
];

tasks.forEach(task =>task.completed =true);


//Calculating total values:
const numbers4 = [10, 20, 30, 40, 50];
let sum3 = 0;

numbers4.forEach(num => sum3 += num);

const avg = sum3/numbers4.length;