
// tripWise

var expenses={
    jazeel:780,
    nazim:680,
    arun:1000,
    mahin:500,
    amal:750,
    thusar:1500
}






//total Expense

var total=0;

for(let key in expenses){

    total+=expenses[key]
}

console.log("Total Expense =",total);

//who paid most

var maxSpend=0

for(let key in expenses){

    let curExp=expenses[key]

    if(curExp>maxSpend){

        maxSpend=curExp
    }
}

for(let key in expenses){

    let cuExp=expenses[key]
    
    if(cuExp==maxSpend){
        
        console.log(key,maxSpend);
        
    }
}


var split=total/Object.entries(expenses).length

var splitWise={}//jazeel:



for(let user in expenses){

    let amount = expenses[user]
    splitWise[user]=split-amount
}

console.log(splitWise);
