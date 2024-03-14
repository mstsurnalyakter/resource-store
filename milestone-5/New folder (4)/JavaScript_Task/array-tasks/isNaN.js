const arr = [33, "44", "33", 22, "price:55"];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  const currentNum = arr[i];
  const convertedNumber = parseInt(currentNum);
  if (!isNaN(convertedNumber)) {
    sum += convertedNumber;
  }
}

console.log(sum);
