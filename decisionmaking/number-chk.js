

// take a number as input
// display + ve if number is a +ve number
// display -ve if number is a -ve number
// display ZERO if number 0 
// display INVALID  OTHERWISE 


var number = 0

if (number > 0){//0>0 F

    console.log(`${number} is +ve`);
    
}
else if(number<0){ //0<0 F
    console.log(`${number} is -ve`);
    
}
else if(number==0){//0==0 T
    console.log(`${number} is zero`); //zero
    
}
else{
    console.log("invalid");
    
}