
// create a function isLeapYear

function isLeapYear(year){

    if((year%100==0 && year%400==0) || (year%100!=0 && year%4==0)){
        return true
    }
    else{
        return false
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
console.log(isLeapYear(2100));
