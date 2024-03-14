/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

const condition = num1 =>{
    if (!isNaN(Number(num1))) {
        if (num1 % 2 === 1) {
            const result = num1 * 2;
            return result;
        }else{
            const result = num1 / 2;
            return result;
        }
    }
}

console.log(condition(6));