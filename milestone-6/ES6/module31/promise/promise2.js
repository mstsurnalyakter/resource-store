const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('completed promise 1')
    }, 2000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Complete promise 2')
    }, 1000);
})

// race() work one promise that completed first
Promise.race([promise1,promise2])
.then((res1)=>{
    console.log(res1);
})
.catch(err =>{
    console.log(err);
})
