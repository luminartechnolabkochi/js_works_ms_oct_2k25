

// T1=>APP 30mnt
// t1 =>app2 27mnt
//t3=>app 10 mnt


// two pair sum

//             j
var arr=[1,2,3,4,5,6,7]
//           i      
var target=10

var left=0
var right=arr.length-1

while(left<right){
    let curSum=arr[left] + arr[right]

    if(curSum==target){
        console.log(`${arr[left]},${arr[right]}`);
        break
        
    }
    else if (curSum>target){
        right--;
    }
    else{
        left++
    }
    count++
}

console.log('iterartion count',count);
