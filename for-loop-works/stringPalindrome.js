// var text="amanaplanacanalpanama"
// //        012345678901234567890
//                  // 1


// var stringLength=text.length-1

// result=""

// for(let i=stringLength;i>=0;i--){

//     result=result+text[i]

// }


// console.log(result==text?"palindrome":"not a palindrome");


// nested loop
    //1,2,3,4,5

// 1=>1,2,3,4,5-> for
// 2=>1,2,3,4,5-> for
// 3=>1,2,3,4,5-> for
// 4=>1,2,3,4,5-> for

var pattern=""

for(let r =1;r<=4;r++){

    pattern=""
    
    for(let c=1;c<=5;c++){
        pattern=pattern+c
        
    }
    console.log(pattern);
    
}

