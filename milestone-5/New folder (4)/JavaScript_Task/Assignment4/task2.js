const matchFind = (str1, str2) =>{
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        const result = str1.includes(str2);
        return result;
    }else{
        return `Please provide two valid string`
    }
}


console.log(matchFind("John Doe", "ohn"));
console.log(matchFind("JavaScript", "Code"));
console.log(matchFind("Peter Parker", "Pen"));

console.log('-----------');

const str = (str1, str2) =>{
    if (typeof str1 === 'string' && typeof str2 === 'string') {
        let index = str1.search(str2);
        if (index >= 0) {
            return true;
        }else{
            return false;
        }
    }else{
        return `Please provide two string`
    }
}

console.log(str('John Doe','ohn'));
console.log(str("JavaScript","Code"));
console.log(str("Peter Parker","Pen"));
