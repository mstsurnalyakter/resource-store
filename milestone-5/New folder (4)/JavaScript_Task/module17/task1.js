/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 300;

if (burgerPrice >= 500) {
  console.log(`You get free coke.`);
} else {
  console.log(`You get not free coke.`);
}

burgerPrice >= 500
  ? console.log(`You get free coke`)
  : console.log(`You get not free coke`);
