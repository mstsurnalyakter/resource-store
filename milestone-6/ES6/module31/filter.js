// even
const numbers1 = [1, 2, 3, 4, 5];
const evenNumber = numbers1.filter(num => num % 2 === 0);


// Filtering objects by property value:
const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Mouse", price: 19.99 },
  { id: 3, name: "Keyboard", price: 49.99 },
];

const cheapProducts = products.filter(product => product.price < 50);

//Filtering strings by length:
const words = ["apple", "banana", "pear", "orange"];
const longWords = words.filter(word => word.length > 5);

//Filtering out undefined or null values:
const values = [1, 2, null, 3, undefined, 4];

const filteredValues = values.filter(value => value !== null && value !== undefined);

//Filtering objects with specific conditions:

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 22 },
];

const adults = users.filter(user => user.age >= 18 && user.age <= 30);

//Filtering and mapping simultaneously:
const numbers2 = [1, 2, 3, 4, 5];

const squaredEvenNumbers = numbers2
                        .filter(num => num % 2 === 0)
                        .map(num => num ** 2);

//Filtering objects by multiple criteria:

const users2 = [
  { id: 1, name: "John", age: 25, gender: "male" },
  { id: 2, name: "Alice", age: 30, gender: "female" },
  { id: 3, name: "Bob", age: 22, gender: "male" },
];

const maleUsersOverTwenty = users2.filter(user => user.gender === 'male' && user.age > 20);

//Filtering unique values from an array:
const numbers3 = [1, 2, 3, 4, 1, 2, 5];

const uniqueNumbers = numbers3.filter(
  (number, index, array) => array.indexOf(number) === index
);

//Filtering array of objects based on a dynamic condition:

const users4 = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 22 },
];

const filteredUser = users4.filter(user => user.age > 25);
