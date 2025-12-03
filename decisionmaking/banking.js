/*
✅ 5. ATM Withdrawal

Task:
Ask for PIN.

If PIN is correct:



    If amount ≤ balance → "Withdrawal successful"

    Else → "Insufficient balance"

Else → "Incorrect PIN"
*/


var dbPin=2121

var dbBalance=45000

var userPin=2121

var amount=2300

if(dbPin==userPin){

    if(amount<dbBalance){
        console.log("Withdrawal successful");
        
    }
    else{
        console.log("Insufficient balance");
        
    }
}
else{

    console.log("incorrect pin");
    
}