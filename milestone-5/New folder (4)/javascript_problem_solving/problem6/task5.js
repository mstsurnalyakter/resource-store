const people = [
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22}
]

const totalAge = people.reduce((previous,current)=> previous + current.age,0);

console.log(totalAge);