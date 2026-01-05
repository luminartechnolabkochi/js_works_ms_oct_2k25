
var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}

// unpaid students names

var key_values=Object.entries(expenses)

/*
[
  [ 'prabinav', 560 ],
  [ 'venkitesh', 650 ],
  [ 'roshan', 120 ],
  [ 'goutham', 340 ],
  [ 'thushar', 670 ],
  [ 'arun', 67 ],
  [ 'jazeel', 480 ],
  [ 'nazim', 340 ],
  [ 'yadhu', 0 ],
  [ 'amal', 0 ],
  [ 'catherin', 0 ],
  [ 'reshmi', 0 ],
  [ 'sreelakshmi', 0 ]
]
*/

var unpaidStudents=Object.entries(expenses).filter(arr=>arr[1]==0)

// console.log(unpaidStudents);

//q1 paid students


var paidStudents=Object.entries(expenses).filter(arr=>arr[1]>0)
console.log(paidStudents);

//q2 display student who piad > 250

//total expense

var totalExpense=Object.values(expenses).reduce((sum,e)=>sum+e,0)
console.log(totalExpense);

var individualSplit=totalExpense/Object.entries(expenses).length

individualSplit=Math.round(individualSplit)
console.log(individualSplit);

var splitWise={}


for(let [k,v] of Object.entries(expenses)){

    splitWise[k]=individualSplit-v
}

console.log(splitWise);
