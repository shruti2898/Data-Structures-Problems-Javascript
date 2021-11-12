let numbers = new Array();

//storing 10 random numbers into array
for(let i=0; i<3; i++){
   let num = Math.floor(Math.random()*(999-100+1)+100);
   numbers.push(num);
}
console.log("Array: "+numbers);

let sum =0;
for(let i=0; i<3; i++){
    sum = sum + numbers[i];
}
console.log("Sum of Array: "+sum);