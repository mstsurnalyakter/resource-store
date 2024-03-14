/**
 * Array - is an object; collection of variables
 */

const names1 = new Array();
names1[0] = 'Mst Surnaly Akter';
names1[1] = 'Mst Surnaly Akter1';
names1[2] = 'Mst Surnaly Akter2';
names1[3] = 'Mst Surnaly Akter3';
names1[4] = 'Mst Surnaly Akter4';

console.log(names1);
console.log(names1.length);
console.log(names1[2]);

const names2 = []
names2[0] = "Mst Surnaly Akter";
names2[1] = "Mst Surnaly Akter1";
names2[2] = "Mst Surnaly Akter2";
names2[3] = "Mst Surnaly Akter3";
names2[4] = "Mst Surnaly Akter4";

console.log(names2);

names2.push("Mst Surnaly Akter5")
names2.push("Mst Surnaly Akter6")
console.log(names2);
console.log(names2.length);

names2.pop();
console.log(names2.length);

names2.shift();
console.log(names2.length);

names2.unshift("Mst Surnaly Akter0")
console.log(names2.length);

const names = names1.concat(names2)
console.log(names);