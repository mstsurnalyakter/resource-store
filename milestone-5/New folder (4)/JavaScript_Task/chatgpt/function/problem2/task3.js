/**
 * Create a function that sorts elements in an array.
 */

const arrSort = arr =>{
    const sortArr = arr.sort((a,b)=>{
        return a - b;
    })

    return sortArr;
}


const arr = [4, 8, 29, 8, 2];

console.log(arrSort(arr));