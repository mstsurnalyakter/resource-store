/**
 * Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:
let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
 */



let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const key in myObject) {
    console.log(`key: ${key} | type: ${typeof key}`);
}

console.log(`--------- second loop ------------`);

for (const key in myObject) {
    console.log(`key: ${key} | type: ${typeof myObject[key]}`);
}


let name = "John Doe";
let  age = 25;