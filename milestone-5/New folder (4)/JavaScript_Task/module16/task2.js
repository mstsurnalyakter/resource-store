const math = parseInt(prompt(`Enter Math subject mark`));
const biology = parseInt(prompt(`Enter biology subject mark`));
const chemistry = parseInt(prompt(`Enter chemistry subject mark`));
const physics = parseInt(prompt(`Enter physics subject mark`));
const bangla = parseInt(prompt(`Enter bangla subject mark`));

const total = math + biology + chemistry + physics + bangla;
const average = total/ 5;
console.log('Average is: ' + average);