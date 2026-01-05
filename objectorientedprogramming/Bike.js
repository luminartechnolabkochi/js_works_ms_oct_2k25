

class Bike{

    setBike(name,brand,price,color){

        this.name = name

        this.brand=brand

        this.price=price

        this.color=color
    }

    start(){
        console.log(this.name,"is starting");
        
    }

    accelerate(){
        console.log(this.name,"is accelerate");
        
    }

}

var iqubeInstance = new Bike()

var passionProInstance = new Bike()

passionProInstance.setBike("passionpro","hero",10000,"black")

passionProInstance.start()

iqubeInstance.start()

// student setStudent,display
