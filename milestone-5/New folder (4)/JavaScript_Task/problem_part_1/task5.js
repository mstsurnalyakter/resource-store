/**
 * Task-5:
Generate a random number between 10 to 20.
 */

const random = () =>{
    const number = Math.floor(Math.random()*11 + 10);
    return number;
}


console.log(random());
