

class OddEven{

    solution(number){
        return number%2==0?"even":"odd"
    }
}

// oop
// programming style
// way of programming 
// we can bring real world entities to programming by using class and object

// object={attr:value,methods}



// class : design pattern , plan for creating objects

// object: realworld entity


// plan=> class


// class
//  attributes
//  methods

/*
 
class Car{

    brand:str
    model:str
    engine:
    start(){}
    accelrate(){}
    break(){}
    stop(){}

}


*/



class Employee{    
  
    setEmployee(ecode,name,dept,sal){

        this.code = ecode
        this.name = name
        this.dept=dept
        this.salary=sal

    }
    displayEmployee(){
        console.log(this.code,this.name,this.dept,this.salary);
        
    }

    
}



