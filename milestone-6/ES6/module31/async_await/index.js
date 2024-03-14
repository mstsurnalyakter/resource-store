// promise chaining
const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    resolve("task 3");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task 4");
  });
};
const taskFive = () => {
  return new Promise((resolve, reject) => {
    resolve("task 5");
  });
};

const callAllTask = async () =>{
    const t1 = await taskOne();
    console.log(t1);

    const t2 = await taskTwo();
    console.log(t2);

     const t3 = await taskThree();
     console.log(t3);

      const t4 = await taskFour();
      console.log(t4);

       const t5 = await taskFive();
       console.log(t5);


}

callAllTask();
