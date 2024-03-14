const students = require("./students_data.json");

// JavaScript Object
const students2 = {
    name:'Surnaly',
    id:1001
}


/**
 * Convert JavScript Object ot JSON
 */
console.log(JSON.stringify(students2));

/**
 * Convert JSON to JavScript Object
 */

console.log(JSON.parse('{"name":"Mst Surnaly Akter"}'));
