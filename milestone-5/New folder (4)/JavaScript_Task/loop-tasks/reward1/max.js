const arr = [3, 4, -10, 5, 7, 2];
  let maxValue = arr[0];
  let minValue = arr[0];
for (let i = 0; i < arr.length; i++) {
   if (maxValue < arr[i]) {
    maxValue = arr[i];
   }else if(minValue > arr[i]){
    minValue = arr[i];
   }

}

console.log(`Maximum value = ${maxValue}`);
console.log(`Minimum value = ${minValue}`);
