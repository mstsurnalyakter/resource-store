const num1 = parseFloat(prompt(`Enter first number`));
const num2 = parseFloat(prompt(`Enter second number`));
let result;
if (num1 > num2) {
    result = num1 * num2;
    console.log(`result: ${result}`);
}else{
    result = num1 + num2;
    console.log(`result: ${result}`);
}

result = num1 > num2 ? (num1 * num1) : (num1 + num2);

console.log(`result: ${result}`);