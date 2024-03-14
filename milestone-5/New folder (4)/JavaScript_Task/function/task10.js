const add = (num1,num2) =>{
    return num1 + num2;
}
const subtract = (num1,num2) =>{
    return num1 - num2;
}
const multiply = (num1,num2) =>{
    return num1 * num2;
}
const division = (num1,num2) =>{
    return num1 / num2;
}
const modules = (num1,num2) =>{
    return num1 % num2;
}

const calculator = (a, b, operator) =>{
    if (operator === 'add') {
        return add(a,b);
    }else if (operator === 'subtract') {
        return subtract(a,b);
    }else if (operator === 'multiply') {
        return multiply(a, b);
    }else if (operator === 'division') {
        return division(a,b);
    }else if (operator === 'modules') {
        return modules(a,b);
    }else{
        return `Only allow add , subtract, multiply, division, and modules operator`
    }
}

console.log(calculator(3, 3, "add"));
console.log(calculator(3, 3, "subtract"));
console.log(calculator(3, 3, "multiply"));
console.log(calculator(3, 3, "divided"));