let sum: number=0;
let count:number=0;
for (let i=3;count<30;i++){
    let isPrime:boolean=true;
    if(i==2){
        sum+=i;
        count++;
        continue;
    }
    for (let j=2;i<=Math.sqrt(i);j++){
        if(i%j==0){
            isPrime=false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum+=i;
    count++;
}
console.log(sum);