const fahrenheit = parseFloat(prompt(`Enter Fahrenheit Temperature:`));

const celsius = (fahrenheit - 32) * 5 / 9;

console.log(`Celsius Temperature: ${celsius}`);