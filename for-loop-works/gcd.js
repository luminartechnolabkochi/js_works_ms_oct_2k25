

var num1=12

var num2=24

// 1,2,3,4,5,6,7,8,9,10,11,12
//       i

var gcd=1

var minNumber=num1<num2?num1:num2

for(let i=1;i<=minNumber;i++){

    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}

console.log(gcd);


// perfect number
// prime
// fibonacci
// gcd

