

// create an object product with attrs
// code,title,price,color


var product={
    code:"sku123",
    title:"galaxy watch 6",
    price:55000,
    color:"black"
}

product["color"]="blue"

console.log(product.title);
console.log(product["title"]);

//chk attr is exist or not

// attr in object => True or False

if("offer" in product){
    console.log("exist");
    
}
else{
    console.log("not exist");    
}

product.offer=500 // add

console.log(product);


product.price+=5000 //update
console.log(product);

// add new property qty as 10 if qty not exist else update qty as 
// current qty + 10

if("qty" in product){

    product.qty+=10 //update
}
else{
    product.qty=10 //add
}


console.log(product);

