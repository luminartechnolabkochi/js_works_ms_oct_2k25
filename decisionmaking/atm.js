/*
✅ 5. ATM Withdrawal

Task:
Ask for PIN.

If PIN is correct:


    chk if amount is multple of 100



        If amount ≤ balance → "Withdrawal successful"

        Else → "Insufficient balance"
    
    else-> enter multiple of 100

Else → "Incorrect PIN"
*/


var dbPin=2324

var dbBalance=4500

var userPin=2325

var amount=5000

if(dbPin == userPin){

    if(amount%100==0){

        if(amount<dbBalance){
            console.log("success");
            
        }
        else{
            console.log("insufficient balance");
            
        }
    }
    else{
        console.log("enter multiples of q00");
        
    }
}
else{
    console.log("incorrect pin");
    
}