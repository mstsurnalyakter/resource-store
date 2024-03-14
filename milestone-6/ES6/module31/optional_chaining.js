let obj = {
  property1: {
    property2: {
      property3: "value",
    },
  },
};

const value = obj?.property1?.property2?.property3;
// console.log(value);

//Accessing properties in nested objects:
const user = {
  profile: {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      zip: 10001,
    },
  },
};

const cityName = user?.profile?.address?.city;
// console.log(cityName);

//Calling functions that may or may not exist:
const obj2 = {
  func: () => "Hello from function",
};

const result = obj2?.func();
// console.log(result);

// Handling arrays:
const arr = [1, 2, 3, 4];
const firstElement = arr?.[0];
// console.log(firstElement);

// Using optional chaining with conditional (ternary) operator:
const data = {
  status: "success",
  message: "Data loaded successfully",
};

const statusMessageOptional = data.status === 'success'? data?.message:undefined;
console.log(statusMessageOptional);
