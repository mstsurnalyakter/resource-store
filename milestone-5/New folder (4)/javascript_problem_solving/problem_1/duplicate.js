/**
 * make a new array using duplicate number from the existing array
 */
const arr = [3, 2, 9, 7, 1, 3, 4, 5, 6, 7, 5]
const duplicate = arr.filter((value,index) =>{
    return arr.indexOf(value) !== index;
})

console.log(duplicate);


// make unique array
const unique = arr.filter((value, index) => {
  return arr.indexOf(value) === index;
});

console.log(unique);