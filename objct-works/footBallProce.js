var footBall={
    brazil:5,
    portugal:0,
    england:1,
    germany:4,
    argentina:3,
    urugay:2,
    espain:1,
    italy:4,
    france:2
}


// display country name whose values > 1

for(let [k,v] of Object.entries(footBall)){

    if(v>1){
        console.log(k,v);
        
    }
    

}