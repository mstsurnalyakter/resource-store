const person = {
    name:'kodom ali',
    job:'badam khai',
    3:'third',
    'add-dress':'koldd'
}

// Dot Notation
console.log(person.job);
// console.log(person.3); not apply

// Bracket Notation
console.log(person['job']);


//

const prop = 'job';
console.log(person[prop]);
console.log(person['3']);
console.log(person["add-dress"]);