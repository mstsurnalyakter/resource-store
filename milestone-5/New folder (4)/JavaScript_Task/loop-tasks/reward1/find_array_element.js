// find array element
const arr = [9, 3, 7, 32];
const target = 77;
let foundIndex = -1;
for(let i = 0; i < arr.length; i++){
    const currentNumber = arr[i];
    if (currentNumber === target) {
        foundIndex = i;
    }
}
if (foundIndex > -1) {
    console.log(foundIndex, "Founded");
}else{
    console.log(`Not Found`);
}