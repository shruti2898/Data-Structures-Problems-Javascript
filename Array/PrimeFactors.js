//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
let number = prompt("Enter number: ");
let n =number;
let factors = new Array();
while (number % 2 == 0)
{
        factors.push(2);
        number = number/2;
}

for (let i = 3; i <= Math.sqrt(number); i += 2)
{
               
        while (number % i == 0)
        {
            factors.push(i);
            number = number / i;
        }
}

if (number > 2) factors.push(number);

console.log(`\nPrime factors of ${n} are: ${factors}`);