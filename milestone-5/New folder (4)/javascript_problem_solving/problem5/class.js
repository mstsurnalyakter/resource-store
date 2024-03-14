const products = [
  { id: 1, name: "lenvo", price: 50000 },
  { id: 2, name: "dell", price: 44000 },
  { id: 3, name: "hp", price: 70000 },
  { id: 4, name: "map", price: 150000 },
];

// properties
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name
    }
    speak(talk){
        console.log(`${talk}`);
    }
}


const lenvo = new Product('hello');


class Teacher{
    lecture(){
        console.log('math');
    }
    constructor(name,subject){
    this.name=name,
    this.subject = subject
    }

}

const tapan = new Teacher('tapon','chemistry');
const haron = new Teacher('Haron','english');

console.log(haron);