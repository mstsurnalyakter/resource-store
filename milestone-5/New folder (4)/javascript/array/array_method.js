const names = ['Mst Surnaly Akter','Yellow' ,'Tisha', 'Tama', 'Tima', 'Alex']
console.log(names);

shift() and unshift()
names.shift()
console.log(names);
names.unshift('Mst Surnaly Akter');
console.log(names);

// splice() --> we can add , remove any items any position
names.splice(0,0,'Salma Begum', 'Nur Hossen');
console.log(names);

//slice() -->slice() method slice the elements of an array and return a new array using slicing elements but can't change the existing array

const n1 = names.slice(1);
console.log(n1);
console.log(names);

// sort() --> sort() method sort the element of an array and return a new array using sorting elements but can change the existing array

// alphabet sort
const sortedNames = names.sort();
console.log(sortedNames);
console.log(names);

names.reverse()

console.log(names);

// number sort
const num = [9, 33,4, 9, 77, 88];
console.log(num);
num.sort((a, b)=>{
    return a - b;
})
console.log(num);

// reverse sort
num.sort((a,b)=>{
    return b - a;
})

console.log(num);
