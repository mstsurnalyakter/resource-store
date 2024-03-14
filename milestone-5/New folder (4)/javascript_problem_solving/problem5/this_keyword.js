class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('kodom',21);
console.log(kodom);
kodom.sleep()


const badm = new Person('badm',32)
badm.activity();