
class Student{

    setStudent(rol,name,course){
        this.rol = rol
        this.name = name
        this.course = course
    }

    displayStudent(){
        console.log(this.rol,this.name,this.course);
        
    }
}



var thusharInstance = new Student()

thusharInstance.setStudent(345,"thushar","bca")

thusharInstance.displayStudent()