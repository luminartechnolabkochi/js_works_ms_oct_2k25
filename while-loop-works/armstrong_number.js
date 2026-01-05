

var number = 153; //number =0

var numberCopy = number //153

var original = number

var digitCount =0 //3

var sum=0 //0


while(number!=0){

    digitCount++;

    number = Math.floor(number/10)

}

while(numberCopy!=0){//153!=0 -> T 15!=0 T 1!=0 ->T 0!=0 F

    let digit = numberCopy % 10 //digit = 153%10->3  digit = 15%10->5 digit = 1%10=>1

    let exponenet = digit**digitCount // exponent=3**3->27  expoenent=5**3->125 expoenent= 1**3=1

    sum =sum+exponenet//sum= 0+27 -> 27 sum=27+125=>152 sum = 152+1->153

    numberCopy = Math.floor(numberCopy/10) //153//10->15  15//10=1 1//10=0
}

console.log(original==sum?"Armstrong number":"not armstrong number");
