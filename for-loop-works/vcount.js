
var text="python world"

var vCount=0;

var cCount=0;

for(let ch of text){

     if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
        vCount++
    }
    else if(ch!=" "){
        cCount++;

    }
}

console.log("v-count",vCount);
console.log("c-count",cCount);

