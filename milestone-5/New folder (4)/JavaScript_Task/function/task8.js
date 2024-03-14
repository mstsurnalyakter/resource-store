const products = [
  { name: "shampoo", price: 300, quanti: 2 },
  { name: "chiruni", price: 100, quanti: 5 },
  { name: "shirt", price: 700, quanti: 22 },
  { name: "pant", price: 1700, quanti: 2 },
];

const totalPrice = (products) => {
  let sum1 = 0;
  let sum2 = 0;
  for (const item of products) {
    if (item.quanti >= 5) {
      let disCount = item.price - item.price * (10 / 100);
      sum1 += disCount * item.quanti;
    } else {
      sum2 += item.price * item.quanti;
    }
  }

  console.log(sum1);
  console.log(sum2);
  let sum = sum1 + sum2;
  return sum;
};

console.log(totalPrice(products));
