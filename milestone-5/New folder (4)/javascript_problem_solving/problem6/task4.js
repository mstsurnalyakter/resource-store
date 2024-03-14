const instructor = [
    {name:'Nodi',age:28,position:'Senior'},
    {name:'Akil',age:22,position:'Junior'},
    {name:'Shobuj',age:23,position:'Senior'},
]

const names = instructor.filter((item) => item.position === "Senior");
console.log(names);