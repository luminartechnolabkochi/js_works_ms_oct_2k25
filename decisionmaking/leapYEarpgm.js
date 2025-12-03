

var year = 2000

//     T        and   T
//  2000%100==0 && 2000%400==0
if((year%100==0 && year%400==0) ||(year%100!=0 && year%4==0)){
    console.log("leap year");//leap year
    
}

else{
    console.log("not a leap year");
    
}