const data = require("./friends_data.json");

// access data
console.log(data.friends[0].name);
console.log(data.friends[0].age);
console.log(data.friends[1].name);
console.log(data.friends[1].age);

// modify data
data.friends[0].name = "Mst Surnaly Akter";


// delete data
delete data.friends[0].age
