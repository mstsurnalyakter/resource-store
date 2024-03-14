/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

const findSmallesName = heights2 =>{

    let smallestName = heights2[0];
    for (const item of heights2) {
         if (smallestName.length > item.length) {
            smallestName = item;
    }
    }

    return smallestName;
}


console.log(findSmallesName(heights2));