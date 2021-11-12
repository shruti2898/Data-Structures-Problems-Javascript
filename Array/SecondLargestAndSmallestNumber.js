let numbers = new Array();

//storing 10 random numbers into array
for(let i=0; i<10; i++){
   let num = Math.floor(Math.random()*(999-100+1)+100);
   numbers.push(num);
}
console.log("Array: "+ numbers);

//sorting array
numbers.sort();
console.log("\nSorted Array: "+ numbers);

console.log("\nSecond Largest Number: "+ numbers[numbers.length-2]);
console.log("\nSecond Smallest Number: "+ numbers[1]);
