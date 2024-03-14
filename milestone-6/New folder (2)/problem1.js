// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Creating an instance of Person
var person1 = new Person("Alice", 30);

// Accessing properties/methods
console.log(person1.name); // Output: Alice
person1.sayHello(); // Output: Hello, my name is Alice
