// digit spelling
// 0 - zero, 1 - one  ... 9 - nine
const digit = prompt(`Enter a digit`);

switch (digit) {
  case "0":
    console.log(`Zero`);
    break;
  case "1":
    console.log(`One`);
    break;
  case "2":
    console.log(`Two`);
    break;
  case "3":
    console.log(`Three`);
    break;
  case "4":
    console.log(`Four`);
    break;
  case "5":
    console.log(`Five`);
    break;
  case "6":
    console.log(`Six`);
    break;
  case "7":
    console.log(`Seven`);
    break;
  case "8":
    console.log(`Eight`);
    break;
  case "9":
    console.log(`Nine`);
    break;
  case "10":
    console.log(`Ten`);
    break;

  default:
    console.log(`Not a digit`);
    break;
}


const dayOfWeek = 2;

switch (dayOfWeek) {
  case 1:
    console.log(`Saturday`);
    break;
  case 2:
    console.log(`Sunday`);
    break;
  case 3:
    console.log(`Monday`);
    break;
  case 4:
    console.log(`Tuesday`);
    break;
  case 5:
    console.log(`Wednesday`);
    break;
  case 6:
    console.log(`Thursday`);
    break;
  case 7:
    console.log(`Friday`);
    break;
  default:
    console.log(`Unknown day of week`);
    break;
}

const lightCondition = false;

switch (lightCondition) {
  case true:
    console.log(`Light on`);
    break;
  case false:
    console.log(`Light off`);
    break;
  default:
    console.log(`Unknown condition`);
    break;
}


const calGraded = (score) => {
  let gradingScore = "";
  switch (true) {
    case score >= 90 && score <= 100:
      gradingScore = "A+";
      break;
    case score >= 80 && score <= 89:
      gradingScore = "A";
      break;
    case score >= 70 && score <= 79:
      gradingScore = "A-";
      break;
    case score >= 60 && score <= 69:
      gradingScore = "B";
      break;
    case score >= 50 && score <= 59:
      gradingScore = "C";
      break;
    case score >= 40 && score <= 49:
      gradingScore = "D";
      break;
    case score >= 0 && score <= 39:
      gradingScore = "Fail";
      break;
    case score > 100 || score < 0:
      gradingScore = "Invalid";
      break;
    default:
      return "Invalid Score";
  }
  return `You got ${gradingScore}`;
};

console.log(calGraded(90));
