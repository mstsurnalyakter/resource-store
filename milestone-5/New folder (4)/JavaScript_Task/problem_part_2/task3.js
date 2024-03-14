// quantity;

/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

const calculateElectronicsBudget = (laptopQuantity,tabletQuantity, mobileQuantity) =>{
    let perLaptopPrice = 35000;
    let perTabletPrice = 15000;
    let perMobilePrice = 20000;

    let totalLaptopPrice = laptopQuantity * perLaptopPrice;
    let totalTabletPrice = tabletQuantity * perTabletPrice;
    let totalMobilePrice =  mobileQuantity * perMobilePrice

    return totalLaptopPrice + totalTabletPrice + totalMobilePrice;

}


console.log(calculateElectronicsBudget(2, 1, 3));