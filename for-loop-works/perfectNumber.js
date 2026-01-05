
// 12
// 1,2,3,4,5,6,7,8,9,10,11

var number = 8 //number = 8
var sum=0;//sum =0

for(let i =1;i<number;i++){ // i=1  i=2 2<8->t i=3 i=4 

    if(number%i==0){ //8%1==0->t 8%2==0->t 8%3==0 ->f *%4==0

        sum= sum+i//sum=0+1->1 sum=1+2=3 sum= 3+4=7

    }
}

console.log(sum==number?"perfect number":"not a perfect number");

