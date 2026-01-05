


var number =29;

var isPrime=true;

for(let i=2;i<number;i++){

    if(number%i==0){
        isPrime=false
        break
    }
}

console.log(isPrime?"prime number":"not a prime number");



