const numbers = [1, 2, 3, 4, 5];


// Using map to double each number in the array
const doubleNumbers = numbers.map(number => number * 2);

// Converting an array of strings to uppercase:
const words = ["hello", "world", "javascript"];
const capitalizedWords = words.map(word => word.toUpperCase());

//Mapping an array of objects to extract a specific property:

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
];


const usersIds = users.map(user => user.id);


const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const abbreviatedDays = days.map((day,index)=> `${index + 1}.${day.slice(0,3)}`);



const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedMatrix = matrix.map(subArray => subArray.map(num => num*2));


//Transforming array of objects:

const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Phone", price: 599.99 },
  { id: 3, name: "Tablet", price: 399.99 },
];

const formattedProducts = products.map(product =>({
   name:product.name.toUpperCase(),
   price:`$${product.price.toFixed(2)}`
}))

//Using map() for data normalization:
const data = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, first_name: "Jane", last_name: "Smith" },
  { id: 3, FirstName: "Alice", LastName: "Johnson" },
];

const normalizedData = data.map((entry) => ({
  id: entry.id,
  firstName: entry.firstName || entry.first_name || entry.FirstName || "",
  lastName: entry.lastName || entry.last_name || entry.LastName || "",
}));

//// Filter even numbers and Double each even number

const numbers2 = [1, 2, 3, 4, 5, 6];
const filteredAndDoubled = numbers2
                        .filter(num =>num % 2 === 0)
                        .map(num => num * 2);


