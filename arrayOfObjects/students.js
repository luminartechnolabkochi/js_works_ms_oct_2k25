

var students=[
    {id:1,name:"arun",course:"engineering",dept:"it",year:2024,gender:"male",total:460},
    {id:2,name:"amal",course:"bc computer science",dept:"it",year:2025,gender:"male",total:360},
    {id:3,name:"thushar",course:"bca",dept:"it",year:2025,gender:"male",total:420},
    {id:4,name:"goutham",course:"btech",dept:"mech",year:2020,gender:"male",total:330},
    {id:5,name:"roshan",course:"bcom",dept:"it",year:2024,gender:"male",total:310},
    {id:6,name:"venkitesh",course:"bca",dept:"it",year:2024,gender:"male",total:310},
    {id:7,name:"prabinav",course:"diploma",dept:"it",year:2025,gender:"male",total:310},
    {id:8,name:"jazeel",course:"btech",dept:"it",year:2025,gender:"male",total:435},
    {id:9,name:"nazim",course:"btech",dept:"it",year:2025,gender:"male",total:411},
    {id:10,name:"yadhu",course:"btech",dept:"it",year:2025,gender:"male",total:390},
    {id:11,name:"catherin",course:"engineerinbtech",dept:"it",year:2025,gender:"female",total:480},
]

// display all student name

var allStudents=students.map(st=>st.name)

console.log(allStudents);
//display bcs students name

var bcaStudents=students.filter(st=>st.course=="bca").map(st=>[st.name,st.course])

console.log(bcaStudents);


var femaleItStudents=students.filter(st=>st.dept=="it" && st.gender=="female").map(st=>st.name)

console.log(femaleItStudents);

students.sort((s1,s2)=>s2.total-s1.total)


var maxTotal=students.reduce((s1,s2)=>s1.total>s2.total?s1:s2).total

var maxTotalStud=students.filter(st=>st.total==maxTotal)
console.log(maxTotalStud);




var min=students.reduce((s1,s2)=>s1.total < s2.total?s1:s2).total

console.log("min score students=====");

var minScoreStudents=students.filter(st=>st.total==min).map(st=>st.name)
console.log(minScoreStudents);
