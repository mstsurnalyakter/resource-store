const averageArr = arr =>{
    let sum = 0;
    for (const item of arr) {
        sum += item * 2;
    }

    return sum/arr.length;
}

const arr = [3, 2, 8, 9];

averageArr(arr);

const averageArr2 = (arr) => {

    const arv = arr.reduce()
  let sum = 0;
  for (const item of arr) {
    sum += item * 2;
  }

  return sum / arr.length;
};