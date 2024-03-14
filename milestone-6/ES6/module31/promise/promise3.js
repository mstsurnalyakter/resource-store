// promise chaining
const taskOne = () =>{
    return new Promise((resolve,reject)=>{
        resolve('task 1');
    })
}
const taskTwo = () =>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve("task 2");
      }, 2000);
    })
}
const taskThree = () =>{
    return new Promise((resolve,reject)=>{
        reject('task 3 not complete');
    })
}
const taskFour = () =>{
    return new Promise((resolve,reject)=>{
        resolve('task 4');
    })
}
const taskFive = () =>{
    return new Promise((resolve,reject)=>{
        resolve('task 5');
    })
}

taskOne()
  .then((res) => console.log(res))
  .then(taskTwo)
  .then((res) => console.log(res))
  .then(taskThree)
  .then(res =>console.log(res))
  .then(taskFour)
  .then(res =>console.log(res))
  .then(taskFive)
  .then(res =>console.log(res))
  .catch(err =>console.log(err))
