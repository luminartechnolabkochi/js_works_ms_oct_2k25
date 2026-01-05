


var colors=["red","green",'blue','black','yellow','white','black',"black",'purple','blue','red','orange','yellow','red']

var color_count={}

for(let c of colors){

    if(c in color_count){
        color_count[c]+=1
    }
    else{
        color_count[c]=1
    }
}

console.log(color_count);
