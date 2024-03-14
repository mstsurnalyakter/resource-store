let num = parseFloat(prompt(`Enter a number`));

num > 0 ? console.log(`Positive ${num}`) : console.log(`Negative ${num}`);

num % 2 === 0 ? console.log(`Even Number`): console.log(`Odd Number`);

num > 0 ? console.log(`Positive`) :(num < 0) ? console.log(`Negative`) : console.log(`Zero`);

let num1 = parseFloat(prompt(`Enter first number`));
let num2 = parseFloat(prompt(`Enter second number`));
let num3 = parseFloat(prompt(`Enter three number`));

let biggerNumber = (num1 > num2 && num1 < num3) ? console.log(`${num1} is the bigger number`):(num2 > num1 && num2 > num3) ? console.log(`${num2} is the bigger number`): console.log(`${num3} is the bigger number`);