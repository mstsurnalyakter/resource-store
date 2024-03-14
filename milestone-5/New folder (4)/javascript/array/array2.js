const num = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < num.length; i++) {
   sum += num[i];
}

console.log(sum);

const num2 = new Array();
let sum2 = 0;
for (let i = 0; i < 5; i++){
    num2[i] = parseInt(prompt(`Enter a number`));
    sum2 += num2[i];
}

console.log(sum2);