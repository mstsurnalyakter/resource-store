const products = [
  { id: 1, name: "phone", price: 20000 },
  { id: 2, name: "phone", price: 40000 },
  { id: 3, name: "laptop", price: 50000 },
  { id: 4, name: "computer", price: 60000 },
  { id: 5, name: "pc", price: 70000 },
  { id: 6, name: "mac book", price: 80000 },
  { id: 7, name: "Phone", price: 140000 },
];

function matchProduct(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

console.log(matchProduct(products, "laptop"));
