/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = prompt(`Enter your age`);
const isStudent = prompt(`Are you students?`);
const ticketPrice = 800;

if (age < 10) {
  console.log(`Your children. You ticket is free`);
} else if (isStudent == `yes`) {
  const discount = (ticketPrice * 50) / 100;
  const studentTicketPrice = ticketPrice - discount;
  console.log(`Give ${studentTicketPrice} taka for ticket price`);
} else {
  console.log(`Give ${ticketPrice} taka for ticket price`);
}
