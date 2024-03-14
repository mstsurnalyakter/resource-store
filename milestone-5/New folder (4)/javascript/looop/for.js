// 10 times print Bangladesh
for (let i = 0; i <= 10; i++) {
    console.log(`Bangladesh`);
}
// print 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// print 1 - 10 odd number
for (let i = 1; i < 10; i = i + 2) {
    console.log(i);
}

// print 1 - 10 even number
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

// 10,9,8,7,6,5,4,3,2,1
for (let i = 10; i >= 1; i--) {
console.log(i);
}

// 1+2+3+4+5+6+7+8+9+10
 let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
 console.log(`sum = ${sum}`);

//  take input from user
 const m = parseFloat(prompt(`Enter first number`));
 const n = parseFloat(prompt(`Enter second number`));
for (let i = m; i <= n; i++) {
    sum += i;
}
 console.log(`sum = ${sum}`);

//  5 time take input from user
for (let i = 1; i <= 5; i++) {
   const m = parseFloat(prompt(`Enter first number`));
   const n = parseFloat(prompt(`Enter second number`));
   sum += m + n;
   console.log(`Sum : ${sum}`);
}
