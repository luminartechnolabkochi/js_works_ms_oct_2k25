/*

create a class bank with attributes

acno,customer_name,acc_type,balance

createAccount()
deposit(amount)
withdraw(amount)
balEnq()

*/


class Bank{

    createAccount(acno,customerName,accType,balanace){
        this.acno = acno
        this.customerName = customerName
        this.accType = accType
        this.balanace = balanace
    }

    deposit(amount){

        this.balanace+=amount
        console.log(`${this.acno} has been credited with amt ${amount} your aval bal is ${this.balanace}`);
                
    }
    withdraw(amount){

        if(amount>this.balanace){
            console.log("insufficient balance transaction cancelled");
            
       }
       else{
        this.balanace-=amount
        console.log(`${this.acno} has been debited with amt ${amount} your aval bal is ${this.balanace}`);


       }

    }

    getBalance(){
        console.log(`your aval bal is ${this.balanace}`);
        
    }
}



var custInstance1 = new Bank()

custInstance1.createAccount(123,"vipin","savings",2000)

custInstance1.deposit(100000)

custInstance1.withdraw(50000)

