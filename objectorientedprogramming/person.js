

// person name,eat(),sleep(),walk()

class Person{

    setPerson(name){
        this.name=name
    }

  eat(){
    console.log(this.name,"is eating");
    
  }
  
  walk(){
    console.log(this.name,"is walking");
    
  }

    
}

// this is a keyword used for for representimng current instance
// var referenceName=new ClassName()

var arunInstance=new Person()

arunInstance.setPerson("ARUN")
arunInstance.eat()

var jazeelInstance = new Person()

jazeelInstance.setPerson("JAZEEL")

jazeelInstance.walk()

var person1={
    name:"arun",
    eat(){
        console.log(this.name,"is eating");
        
    }
}