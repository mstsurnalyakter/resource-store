// convert odd array to event array
const oddArray = [1,3, 5, 7,9];

// map
const evenArray = oddArray.map(num => num + 1);
console.log(evenArray);


// forEach
const evenArray3 = [];
oddArray.forEach((num) => evenArray3.push(num + 1));
console.log(evenArray3);

// for of loop
const evenArray2 = [];
for (const num of oddArray) {
    evenArray2.push(num + 1)

}
console.log(evenArray2);
