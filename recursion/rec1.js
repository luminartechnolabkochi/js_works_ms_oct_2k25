

//1,2,3
// iterartive
// recursive

// display_hello_world_n times


function display_hi(number){

   
    console.log("hi");

    display_hi(number-1)
    
}
// display_hi(4)




function factorial(number){

    if(number==0){
        return 1
    }

    return number*factorial(number-1)
}

console.log(factorial(4));



//factorial(4)=>
//4*factorial(3) =>4*6=24
//3*factorial(2) =>3*2=6
//2*factorial(1)=>2*1=2
//1*factorial(0)1*1=1
//FACTORIAL(0)1
 
// cs


// display_digit(123)
// 3
// 2
// 1


function displayDigit(number){
    
    
    if(number==0){
        return 
    }
    console.log(number%10);

    displayDigit(Math.floor(number/10))
        
}

displayDigit(123)

// sumOfDigit(234)=> 9




function sumOfDigit(number){

    if(number==0){
        return 0
    }
    return number%10+sumOfDigit(Math.floor(number/10))
}
console.log(sumOfDigit(234));


// sumOfNNumber(5) => 1+2+3+4+5=15


function sumOfN(number){
    if(number==0){
        return 0
    }

    return number+sumOfN(number-1)
}

console.log(sumOfN(3));



