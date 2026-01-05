/*

Array

if we want to store and organize multiple object with same or different type

create:var arr=[]

keeps order

duplicates allowed

mutable

var colors=["red","blue","black"]

*/

var expenses=[23000,21000,18000,17000,19000,22000,25000,34000,32000,21000,22000]
//              0     1     2     3     4     5     6      7   8     9      10 


var maxExp=0;

for(let e of expenses){

    if(e>maxExp){
        maxExp=e
    }
}

console.log("max expense=",maxExp);


var minExp=expenses[0] //23000

for(let e of expenses){
    if(e<minExp){
        minExp=e
    }
}

console.log("min Exp",minExp);

var array={
    length,
    push(){},
    
}
// orderd
// allow duplicates
// mutable
// []
// methods