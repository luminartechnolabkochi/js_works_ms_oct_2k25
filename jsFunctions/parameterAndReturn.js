

// syntax
/*

function functionName(p1,p2,p3){

    function body

    return value

}

let res=functionName()
log(res)
log(functionName(a1,a2,a3))


*/



// create a function cube with one param num1 return cube of number

function cube(num){

    return num**3
    
}


console.log(cube(5))

console.log(cube(7));




// create a function isOdd with one parameter num retrun true if number is odd
// else return false

function isOdd(num){
    return num%2!=0?true:false
}

console.log(isOdd(2));


// create a function numberChek with one parameter num function return 
// +ve if number is +ve number
// -ve if number is negative number
// zero if number is 0

function numberChek(num){

    if(num>0){
        return "+ve"

    }
    else if(num<0){
        return "-ve"
    }
    else if (num==0){
        return "zero"
    }
    else{

        return "invalid"
    }
}

console.log(numberChek(10));
