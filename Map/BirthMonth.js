let monthMap = new Map([["Jan",0],["Feb",0] ,["Mar",0] ,["Apr",0] ,["May",0] ,["June",0] ,["July",0] ,["Aug",0] ,["Sep",0] ,["Oct",0] ,["Nov",0],["Dec",0] ]);
let months =  Array.from(monthMap.keys() );
let count = 0;
for(let i =0; i<50;i++){
    let index = Math.floor((Math.random()* 12));
    count = monthMap.get(months[index]);
    count++;
    monthMap.set(months[index],count);
}
console.log("Month\t\tNumber of people sharing same birthday month");
for(let [key,value] of monthMap){
    console.log(key+"\t\t"+value);
}
