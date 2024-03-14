
console.log('welcome');

// how to create a promise --> pending, resolve, reject
const promise1 = new Promise((resolve,reject)=>{
    // let completedPromise = true;
    let completedPromise = false;

    if (completedPromise) {
        resolve('complete promise 1');
    }else{
        // reject('not completed promise 1')
        reject(new Error("not completed promise 1"));
    }
})


const promise2 = new Promise((resolve,reject)=>{
    const completedPromise = true;

    if (completedPromise) {
        resolve('completed promise 2');
    } else {
        // reject('not completed promise 2');
        reject(new Error("not completed promise 2"));
    }
})


const promise3 = new Promise((resolve,reject)=>{
    const completed = false;
    if (completed) {
        resolve('completed promise 3')
    } else {
        reject(new Error('not completed promise 3'))
    }
})


const promise4 = new Promise((resolve,reject)=>{
    resolve('completed promise 4')
})

// Promise.all([promise1,promise2,promise3,promise4])
// .then(res => console.log(res))
// .catch(err => console.log(err))

Promise.all([promise1, promise2, promise3, promise4])
  .then(([res1,res2,res3,res4]) =>{
    console.log(res1,res2,res3,res4);
  })
  .catch((err) => console.log(err));


console.log('bye');