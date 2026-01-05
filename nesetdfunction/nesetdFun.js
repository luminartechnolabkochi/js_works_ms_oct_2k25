


// nested function



function outerFunction(){

    function innerFunction(){
        console.log("inner function");
        
    }

    innerFunction()


}

outerFunction()



function outer(num1){

    function wrapper(num2){
        return num1+num2
    }
    return wrapper
}

console.log(outer(100)(200));


function login(username){

    function checkPassword(password){
        return username=="admin" && password == "admin@123"
    }
    return checkPassword
}

console.log(login("admin")("admin@123"));
