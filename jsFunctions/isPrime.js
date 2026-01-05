

// w.a function isPrime(number) return True if  number is prime else return False


function isPrime(number){ //number =9
 
    let primeNumber=True

    for(let i =2 ;i<number;i++){
        if(number%i==0){
            primeNumber=false
            break
        }
    }

    return primeNumber
}

isPrime(9)