// md=662
// titanic 

var malePassengers=869;

var femalePassengers=412;

var survived=492;

// total number of passengers

var totalPassengers = femalePassengers + malePassengers

console.log("total passengers",totalPassengers);

// number of unsurvived passengers

var unsurvivedCount = totalPassengers - survived

console.log("unsurvived ",unsurvivedCount)



var survivedInPercentage = (survived/totalPassengers)*100

console.log(survivedInPercentage)


