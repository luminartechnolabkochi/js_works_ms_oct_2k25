

/*
w.a.p to display 


    PING if number is / by 3
    PONG if number is / by 5
    PINGPONG if number is / by 15
    invalid otehrwise

*/

var number = 27

if (number%15==0){
    console.log("PINGPONG");
    
}

else if(number%5==0){
    console.log("PONG");
    
}

else if(number%3==0){
    console.log("PING");
    
}
else{
    console.log("invalid");
    
}