const kelvin=0; // Temperature in kelvin
const celsius=kelvin-273; // Temp in celsius
let fahrenheit=celsius*(9/5)+32; // Temp in fahrenheit 
fahrenheit=Math.floor(fahrenheit); // Round down the Fahrenheit temperature.
let newton=celsius*(33/100);
newton=Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`);
console.log(`The temperature is ${newton} Newton.`);

