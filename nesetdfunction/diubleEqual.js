

var age=23

console.log(age=="23");

// == value compare  not type
console.log(age === "23");


// recursion
// nesetd function
// == ===

// 
// greet(username)=> message(text)=> hello vipin goodmorning

function greeting(username){

    function message(text){
        return `hello ${username} ${text}`.toUpperCase()
    }
    return message
}

console.log(greeting("vipin")("good afternoon"));

