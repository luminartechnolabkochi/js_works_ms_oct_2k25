var limit = 15

var prev=0

var cur=1
console.log(prev);

console.log(cur);


for(let i=3;i<=limit;i++){
    let next=prev+cur
    console.log(next);
    prev=cur
    cur=next
    
}

// 