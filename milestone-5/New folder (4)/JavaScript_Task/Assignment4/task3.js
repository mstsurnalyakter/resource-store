const sortArr = arr =>{
    const [a,b] = arr;

    if (a < 0 || b < 0) {
        return 'Invalid input'
    }

    if (a === b) {
        return 'Equal';
    }

    if (a > b) {
        return [a, b];
    }else{
        return [b,a];
    }
}


console.log(sortArr([6, 9]));
console.log(sortArr([6, -9]));
console.log(sortArr([6, 6]));


console.log(`------------------------`);

const arrProblem = (arr) => {
  if (Array.isArray(arr)) {
    if (arr[0] > 0 && arr[1] > 0 && arr[0] !== arr[1]) {
      arr.sort((a, b) => {
        return b - a;
      });
      return arr;
    } else if (arr[0] === arr[1]) {
      return "Equal";
    } else if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid";
    }
  }
};


console.log(arrProblem([6, 9]));
console.log(arrProblem([6, -9]));
console.log(arrProblem([6, 6]));
