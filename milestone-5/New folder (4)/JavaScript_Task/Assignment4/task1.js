// make cube of a provided number
function cubeNumber(number){
    if (typeof number === 'number') {
        const result = Math.pow(number, 3);
        return result;
    }else{
        return `Enter a Valid Number.`
    }
}

const result = cubeNumber(3);
console.log(result);

const cubeNumber1 = num =>{
    if (typeof num === 'number') {
        return num * num * num;
    }else{
        return `Please provide a Valid Number.`
    }
}

const result1 = cubeNumber1(4);
console.log(result1);