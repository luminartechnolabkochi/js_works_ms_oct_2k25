

var vegitables={
    onion:35,
    potatto:60,
    brinjal:50,
    carrot:70,
    beans:100,
    garlic:200,
    chilly:120,
    ginger:200

}

let maxPrice=0;

for(let key in vegitables){
    let currentPrice=vegitables[key]
    if(currentPrice>maxPrice){
        maxPrice=currentPrice
    }
}

for(let key in vegitables){

    let curPrice=vegitables[key]
    if(maxPrice==curPrice){
        console.log(key,curPrice);
        
    }
}