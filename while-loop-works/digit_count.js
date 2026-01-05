


var number = 1234


var count = 0


while(number!=0){//123!=0 -> T 12!=0 T  1!=0->T 0!=0 F

    let digit = number %10 // 123%10=3  12%10=2 1%10=1

    count++;//count= 3

    number = Math.floor(number/10)//123//10->12 12//10=1 1//10=0
}


console.log(count);



// armstrong number

var mnumber = 8208

// digit_count = 4

// 8^4 + 0^4 + 2^4 + 8^4 = 8208


// 1641