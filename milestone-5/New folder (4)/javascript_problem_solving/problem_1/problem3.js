/**
 * sort students roll array
 */

const rolls = [7,9,3, 2, 4, 1,8,5,6];
rolls.sort((a,b)=>{
    return a - b;
})

console.log(rolls);