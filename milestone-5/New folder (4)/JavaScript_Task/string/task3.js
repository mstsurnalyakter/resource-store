/**
 * Task-3:
Check whether a string contains all the vowels a, e, i, o, u
 */


const str = "I am Mst Surnaly Akter.";

const containsAllVowels = (str) =>{
    const lowerCaseStr = str.toLowerCase();
    const hasA = lowerCaseStr.includes("a");
    const hasE = lowerCaseStr.includes("e");
    const hasI = lowerCaseStr.includes("i");
    const hasO = lowerCaseStr.includes("o");
    const hasU = lowerCaseStr.includes("u");
     return hasA && hasE && hasI && hasO && hasU;
}

const result = containsAllVowels(str);
if (result) {
    console.log(`The string contains all the vowels.`);
}else{
    console.log(`The string does not contains all the vowels`);
}