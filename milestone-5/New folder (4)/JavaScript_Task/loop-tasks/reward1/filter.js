// filter array
const arr = [300, 220, 600, 55, 110];
// using loop
const filterHistory = [];

for(let i =  0; i < arr.length; i++){
    const currentElement = arr[i];
    if (currentElement <= 200) {
        filterHistory.push(currentElement);
    }
}

console.log(filterHistory);


// using array method [filter method alway return new array]
const filterArr = arr.filter((currentElement)=>{
 return currentElement <= 200;
});

console.log(filterArr);
