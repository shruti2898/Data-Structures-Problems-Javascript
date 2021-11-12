let numbers = new Array();

//storing 10 random numbers into array
for(let i=0; i<10; i++){
   let num = Math.floor(Math.random()*(999-100+1)+100);
   numbers.push(num);
}
console.log("Array: "+numbers);
let max = -1;
let min = 1000;

for(let i=0; i<numbers.length;i++){
    if(numbers[i]>max) max= numbers[i];
    if(numbers[i]<min) min= numbers[i];
}
console.log("\nLargest number in array is "+max);
console.log("\nSmallest number in array is "+min);