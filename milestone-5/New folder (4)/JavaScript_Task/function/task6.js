const mobiles = [
  { name: "Samsung", price: 20000 },
  { name: "Iphone", price: 2000000 },
  { name: "Samsung2", price: 202000 },
];

const cheapestPhone = (mobiles) => {
  let maxPrice = mobiles[0].price;
  let maxPricePhone = mobiles[0].name;
  for (let i = 0; i < mobiles.length; i++) {
    if (maxPrice < mobiles[i].price) {
      maxPrice = mobiles[i].price;
      maxPricePhone = mobiles[i].name;
    }
  }

  return maxPricePhone;
};

console.log(cheapestPhone(mobiles));
