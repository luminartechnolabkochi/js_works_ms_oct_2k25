


function isPerfectNumber(number){

    let sum=0

    for(let i =1 ;i<number;i++){
        if(number%i==0){
            sum+=i
        }
    }

    return sum==number
}

console.log(isPerfectNumber(7));


// Number
// string
// boolean
// null
// undefined
// symbol



