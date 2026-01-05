

var arr=[1,2,4,5]
//       0 1 2 3 4
//         l r

var left = 0
var right=left+1

while(left<arr.length-1){
    let difference=arr[right] - arr[left]
    if(difference!=1){
        console.log(`${arr[left]+1} is missing`);
        break
        
    }
    left++
    right++
}

var arr=[10,11,12,12,13,14,15,15]
// display duplicate numbers

