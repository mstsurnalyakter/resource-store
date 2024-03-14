const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
];

tasks.forEach((task) => {
  task.completed = true;
});

console.log(tasks);
// Output: [{ id: 1, title: 'Task 1', completed: true },
//          { id: 2, title: 'Task 2', completed: true },
//          { id: 3, title: 'Task 3', completed: true }]


const obj = { a: 1, b: 2, c: 3 };
const keys = [];

Object.keys(obj).forEach(key => {
  keys.push(key);
});

console.log(keys); // Output: ['a', 'b', 'c']

const arr = [1, , , 4];

arr.forEach((element) => {
  console.log(element); // Output: 1, undefined, undefined, 4
});

