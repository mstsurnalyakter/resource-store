/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const mark = prompt(`Enter your mark`);

if (mark >= 90 && mark <= 100) {
  console.log(`Your grade is A`);
} else if (mark >= 80 && mark <= 89) {
  console.log(`Your grade is B`);
} else if (mark >= 70 && mark <= 79) {
  console.log(`Your grade is C`);
} else if (mark >= 60 && mark <= 69) {
  console.log(`Your grade is D`);
} else if (mark >= 0 && mark <= 59) {
  console.log(`Your grade is F`);
} else {
  console.log(`Your grade is invalid`);
}
