


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

// for(let k in footBall){
//     console.log(k);
    
// }

// for(let k of Object.keys(footBall)){
//     console.log(k);
    
// }

// for(let v of Object.values(footBall)){
//     console.log(v);
    
// }

for(let item of Object.entries(footBall)){
    
   console.log(item[0]);
   console.log(item[1]);
}