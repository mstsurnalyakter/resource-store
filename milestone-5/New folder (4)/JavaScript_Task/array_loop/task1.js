/**
 * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']
 */


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reverse1 = colors.reverse();
// console.log(reverse1);

const reverse2 = [];
for (const item of colors) {
    reverse2.unshift(item)
}

console.log(reverse2);