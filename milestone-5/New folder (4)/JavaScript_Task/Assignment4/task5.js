const canPay = (arr, num) => {
  if (!arr.length) {
    return `Array is Empty. Please provide a not empty array.`;
  }
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }

  return sum >= num ? true : false;
};

console.log(canPay([1, 3, 5], 10));
console.log(canPay([1, 5, 5], 10));
