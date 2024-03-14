class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    set studentName(name){
        this.name = name
    }
    get studentInfo(){
        return this.id + " " + this.name
    }
    printInfo(){
        console.log(this.id);
        console.log(this.name);
    }
}

const s1 = new Student(101,'Mst Surnaly Akter');

console.log(s1.studentInfo);