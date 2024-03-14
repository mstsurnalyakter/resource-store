const local = localStorage;
local.setItem("name","surnaly");
const arr = [3, 2, 34];
const arrStrin = JSON.stringify(arr);
local.setItem("arr",arrStrin);
const obj = {name:'alex'}
const objStr = JSON.stringify(obj);
local.setItem("obj",objStr);

console.log(JSON.parse(local.getItem("obj")));