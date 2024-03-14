const taskOne = (callback) => {
  console.log("Task1");
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("Task2");
    callback();
  }, 2000);
};
const taskThree = (callback) => {
  console.log("Task3");
  callback();
};
const taskFour = (callback) => {
  console.log("Task4");
  callback();
};
const taskFive = () => {
  console.log("Task5");
};

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive();
      });
    });
  });
});

console.log('h1');
document.querySelector('button').addEventListener('click',()=>{
  console.log('click');
})
console.log('bye');

// taskTwo();
// taskThree();
// taskFour();
// taskFive();
