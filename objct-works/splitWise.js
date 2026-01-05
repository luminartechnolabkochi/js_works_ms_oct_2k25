var expenses={
    jazeel:780,
    nazim:680,
    arun:1000,
    mahin:500,
    amal:750,
    thusar:1500
}

// display all names (key)
// Object.keys(expenses)=>["jazeel","nazim","arun","mahin"]

for(let key of Object.keys(expenses)){

    console.log(key);
    
}


// display all

// object.values(obj)

for(let val of Object.values(expenses)){
    console.log(val);
    
}

// Object.entries(obj)

for(let [k,v] of Object.entries(expenses)){
 
    console.log(k,v);
    
}