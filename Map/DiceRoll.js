let diceMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);
let count = 0;

while(count<10)
{  
    let dice = Math.floor( (Math.random() * 6) +1 );
    count = diceMap.get(dice);
    count++;
    diceMap.set(dice,count);  
} 

let max = -1;
let min = 11;
let maxKey=0;
let minKey=0;
for(let [key,value] of diceMap){
    console.log("Dice number "+key+" appeared "+value+" times");
    if(value>max){
        max = value;
        maxKey = key;
    } 
    if(value<min){
        min = value;
        minKey = key;
    } 
}

console.log("\nDice number "+maxKey+" appeared maximum times while rolling the dice");
console.log("\nDice number "+minKey+" appeared minimum times while rolling the dice");