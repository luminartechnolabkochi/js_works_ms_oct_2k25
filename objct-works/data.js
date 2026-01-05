

var fruits={
    apple:250,
    orange:100,
    mango:120,
    cherry:270,
    guva:90,
    banana:70
}

/*
[
  [ 'apple', 250 ],
  [ 'orange', 100 ],
  [ 'mango', 120 ],
  [ 'cherry', 220 ],
  [ 'guva', 90 ],
  [ 'banana', 70 ]
]
*/

// display products whose price > 100

var priceGtHundred=Object.entries(fruits).filter(item=>item[1]>=100)
// console.log(priceGtHundred);


// display products available in range of 50 to 150

var priceFilter=Object.entries(fruits).filter(item=>item[1]>=50 && item[1]<=150)
// console.log(priceFilter);


// display costly product

var costlyProduct=Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)

console.log(costlyProduct);

// display product with low cost


var cheapestProduct=Object.entries(fruits).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2)

console.log(cheapestProduct);

