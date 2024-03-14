const mapArray = (array,mappingFunction) =>{
    return array.map(mappingFunction);
}

const numbers = [3, 4, 2, 6, 7, 8];

const result1 = mapArray(numbers, num => num * 2);
console.log(`Double each number`, result1);

const result2 = mapArray(numbers, num => num ** 2);

console.log('Square each number', result2);