const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(num => num > 2);


//Finding an object in an array by property value:
const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Phone", price: 599.99 },
  { id: 3, name: "Tablet", price: 399.99 },
];

const foundProduct = products.find(product => product.id === 1);

//Finding an element in an array of strings:
const fruits = ["apple", "banana", "pear", "orange"];
const foundBanana = fruits.find(fruit => fruit === 'banana');

//Finding undefined or null values:
const values = [1, 2, null, 3, undefined, 4];
const foundValue = values.find(value => value === null || value === undefined);

// Finding the first element that matches a dynamic condition:
const numbers2 = [10, 20, 30, 40, 50];
const foundNumber = numbers2.find(number => number % 4 === 0);

//Finding objects based on multiple criteria:
const users = [
  { id: 1, name: "John", age: 25, gender: "male" },
  { id: 2, name: "Alice", age: 30, gender: "female" },
  { id: 3, name: "Bob", age: 22, gender: "male" },
];

const foundUser = users.find(user => user.age === 30 && user.gender === 'female');

//Finding the index of the first occurrence:
const numbers3 = [10, 20, 30, 40, 50];
const index = numbers3.findIndex(number => number > 25);

//Finding nested objects:

const data = [
  { id: 1, details: { name: "John", age: 25 } },
  { id: 2, details: { name: "Alice", age: 30 } },
  { id: 3, details: { name: "Bob", age: 22 } },
];
const foundData = data.find(item => item.details.age === 30);

//User Authentication:

const users2 = [
  { username: "user1", password: "pass1", id: 1 },
  { username: "user2", password: "pass2", id: 2 },
  { username: "user3", password: "pass3", id: 3 },
];

const authenticatedUser = users2.find(
  (user) => user.username === "user2" && user.password === "pass2"
);

// if (authenticatedUser) {
//   console.log("Authentication successful:", authenticatedUser);
// } else {
//   console.log("Invalid username or password");
// }


//Search Functionality:
const products2 = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Phone", price: 599.99 },
  { id: 3, name: "Tablet", price: 399.99 },
];

const searchItem = 'Phone';
const foundProduct3 = products2.find(product => product.name.toLowerCase() === searchItem.toLowerCase());

// if (foundProduct3) {
//     console.log(`Product found : ${foundProduct3}`);
// } else {
//     console.log(`Product not found`);
// }

// Data Validation:

const existingUserNames = ['user1','user2','user3'];
const newUser = 'user4';

const isUserNameExist = existingUserNames.find(userName => userName === newUser);

if (isUserNameExist) {
    console.log(`UserName already exists. Do not allow submission`);
} else {
    console.log(`UserName is unique. Allow submission`);
}

//Error Handling:

const errors = [
  { code: 404, message: "Not found" },
  { code: 500, message: "Internal server error" },
  { code: 400, message: "Bad request" },
];

const errorCode = 500;

const error = errors.find(error => error.code === errorCode);
if (error) {
    console.log(`Error: ${error.message}`);
} else {
    console.log(`Unknown error code: ${errorCode}`);
}
