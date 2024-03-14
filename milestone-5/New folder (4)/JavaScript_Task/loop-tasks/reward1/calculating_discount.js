// calculating discount
const prices = [330, 444, 700, 100, 200];
const discount = [];
for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
  if (price > 200) {
    const discountPrice = price - price*10/100;
    discount.push(discountPrice);
  }else{
    discount.push(price);
  }

}

console.log(discount);
// using map
const discountPriceUsingMap = prices.map((price)=>{
     if (price > 200) {
       const discountPrice = price - (price * 10) / 100;
       return discountPrice;
     } else {
       return price;
     }
})

console.log(discountPriceUsingMap);
