/*

*   *   *   *
*   *   *   *
*   *   *   *
*   *   *   *


*/



/*

@ @
@ @
@ @
@ @

*/

for(let r=1;r<=4;r++){//r=1 1<=4 r=2 2<=4 r=3 3<=4

    let pattern=""//p=""

    for(let c=1;c<=2;c++){ //c=1 1<=2 c=2 2<=2 c =3 3<=2
        pattern+="@"//@@

    }
    console.log(pattern);//@@


}












for(let r=1;r<=3;r++){
    let pattern=""
    for(let c=1;c<=4;c++){
        pattern+="* \t"
    }
    console.log(pattern);
    
}


// O    E   O   E
// O    E   O   E
// O    E   O   E

for(let row=1;row<=3;row++){
    let pattern=""
    for(let col=1;col<=4;col++){

        if(col%2==0){
            pattern+="E "
        }
        else{
            pattern+="O "
        }

    }
    console.log(pattern);
    
}

// 1   0   0   1
// 0   1   1   0
// 0   1   1   0
// 1   0   0   1




for(let r=1;r<=4;r++){

    let pattern=""
    for(let c=1;c<=4;c++){

        if(r==c){
            pattern+="1\t"
        }
        else{
            pattern+="0\t"
        }
    }
    console.log(pattern);
    
}