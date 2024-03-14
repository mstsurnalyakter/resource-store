const products = [
  { name: "shampoo", price: 300, quanti: 2 },
  { name: "chiruni", price: 100, quanti: 5 },
  { name: "shirt", price: 700, quanti: 22 },
  { name: "pant", price: 1700, quanti: 2 },
];

const totalPrice = (products) => {
  let sum = 0;
  for (const item of products) {
    sum += item.price * item.quanti;
  }
  return sum;
};

console.log(totalPrice(products));
