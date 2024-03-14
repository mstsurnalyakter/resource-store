// how to create an object
//how to print
// adding a constructor
// adding function inside a constructor

const students = {
    name:'Mst Surnaly Akter',
    age:21,
    lang:['HTML','CSS','JavaScript']
}

console.log(student1);
console.log(student1.name);



function Students (name, age, lang){
  this.name = name;
  this.age = age;
  this.lang = lang;
};

const student1 = new Students(
  "Mst Surnaly Akter",
  21,["HTML", "CSS", "JavaScript"]
);
const student2 = new Students(
  "Surnaly",
  21,["HTML", "CSS", "JavaScript"]
);
const student3 = new Students(
  "Mst Akter",
  21,["HTML", "CSS", "JavaScript"]
);

console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.lang);

function Students2 (name, age, lang){
  this.name = name;
  this.age = age;
  this.lang = lang;
  this.display = () =>{
    console.log(name);
    console.log(age);
    console.log(lang);
  }
};

const student11 = new Students2("Mst Surnaly Akter", 21, [
  "HTML",
  "CSS",
  "JavaScript",
]);
const student12 = new Students2("Surnaly", 21, ["HTML", "CSS", "JavaScript"]);
const student13 = new Students2("Mst Akter", 21, ["HTML", "CSS", "JavaScript"]);

student11.display();
student12.display();