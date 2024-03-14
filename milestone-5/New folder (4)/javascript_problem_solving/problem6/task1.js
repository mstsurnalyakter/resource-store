//task-1: console log the secondary school location of Sophia
const data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [{ school_name: "ABC Primary School" }, { location: "Dhaka" }],
      },
      {
        secondary: [
          { school_name: "ABC Secondary School" },
          { location: "Camilla" },
        ],
      },
    ],
  },
};

console.log(data.Sophia.study[1].secondary[1].location);
// task -2: print Petersburg, Alex
let students = {
  2222: {
    name: "Jack ma",
    section: "A",
    class: "IX",
    address: {
      "Building no": 35,
      street: "ACC Road",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Alex",
    section: "D",
    class: "X",
    address: {
      "Building no": 85,
      street: "DC Road",
      city: "Dhaka",
      country: "Bangladesh",
    },
  },
};


console.log(students['2222'].address.city);
console.log(students['3333'].name);

// task - 3: Poor dad and rich

// price Beginner

const data2 = {
    data:[
        {
            bookId:1,
            bookDetails:{
                name:'Poor dad and rich',
                category:'Self improve',
                price:'3333'
            }
        },
        {
            bookId:2,
            bookDetails:{
                name:'7 habit highly effective people',
                category:'Self development',
                price:'2222'
            },
            bookCategory:'Beginner'
        }
    ]
}

console.log(data2.data[1].bookDetails.name);
console.log(data2.data[1].bookCategory);