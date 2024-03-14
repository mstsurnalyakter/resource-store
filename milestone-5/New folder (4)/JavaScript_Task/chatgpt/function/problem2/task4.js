const filterArray = (arr,conditionFun) =>{
    return arr.filter(conditionFun);
}


const numbers = [3, 2, 9, 6, 4, 99, 33, 44, 1];

const result1 = filterArray(numbers, num =>{
    return num % 2 === 0;
})

console.log(result1);

const result2 = filterArray(numbers, num =>{
    return num  % 2 === 1;
})

console.log(result2);

const result3 = filterArray(numbers, num =>{
    return num > 5;
})

