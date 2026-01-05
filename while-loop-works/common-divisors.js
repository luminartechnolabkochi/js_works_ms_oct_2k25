
// common divisors of two number num1,num2

var num1 = 12

var num2= 40

var min=0

if(num1<num2){
    
    min = num1
}
else{
    
    min=num2
}
// 1,,,,,,,,,,,,,,,,,,min


// i                   

var i = 1

while(i<=min){//1,2,3,4,5,6,7,8,9,10,11,12

    if(num1%i==0 && num2%i==0){

        console.log(i);
        
    }

    i++

}

















