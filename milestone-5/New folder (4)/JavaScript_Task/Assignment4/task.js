
function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return "Invalid Number. Please provide a valid number.";
  }
  const result = ticketSale * 120 - (500 + 8 * 50);
  return result;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  const lowerCaseName = name.toLowerCase();
  const lastLetter = lowerCaseName[lowerCaseName.length - 1];
  const validLastLetter = ["a", "y", "i", "e", "o", "u", "w"];

  if (validLastLetter.includes(lastLetter)) {
    return "Good Name";
  }
  return "Bad Name";
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array. Please provide a valid array.";
  }

  const numberArray = [];

  for (const item of array) {
    if (typeof item === "number" && !isNaN(item)) {
      numberArray.push(item);
    }
  }

  return numberArray;
}

function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;
  const birthYearLength = birthYear.toString().length;
  if (
    typeof obj !== "object" ||
    !name ||
    !birthYear ||
    !siteName ||
    birthYearLength !== 4
  ) {
    return "invalid";
  }
  const siteNameArr = siteName.split("");
  const siteNameCapitalize =
    siteNameArr[0].toUpperCase() + siteNameArr.slice(1).join("");
  const passwordGenerator = siteNameCapitalize.concat(
    "#",
    name,
    "@",
    birthYear
  );

  return passwordGenerator;
}




function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid input.";
  }
  let incomeMoney = 0;

  for (const item of arr) {
    if (typeof item === "number" && !isNaN(item)) {
      const text = (item * 20) / 100;
      incomeMoney += item >= 3000 ? item - text : item;
    }
  }

  const savingsMoney = incomeMoney - livingCost;
  if (savingsMoney >= 0) {
    return savingsMoney;
  }

  return "“earn more”";
}


console.log(monthlySavings([1000,2000,3000],5400));
console.log(monthlySavings([1000,2000,2500],5000));
console.log(monthlySavings([900,7200,3400],10000));
console.log(monthlySavings(3400, [9000, 7200, 3400]));