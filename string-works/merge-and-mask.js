

var word="ABC123"

var challengeCode="7YZ"

var result = word.concat(challengeCode)

console.log(result);
// A B C 1 2 3 7 Y Z
// 0 1 2 3 4 5 6 7 8

var maskedString=""
var count = 1;
for(let i =0 ;i<result.length;i++){

    if((i+1)%3==0){
        maskedString+="X"
    }
    else{
        maskedString+=result[i]
    }

   
}
console.log(maskedString);



