/*

*
*   *
*   *   *
*   *   *   *
*   *   *   *   *


*/


for(let r=1;r<=5;r++){
    let pattern=""
    for(let c=1;c<=r;c++){

        pattern+="* \t"

    }
    console.log(pattern);
    
}





for(let row=1;row<=5;row++){

    let pattern=""
    for(let col=1;col<=5;col++){
        if(col<=row){
            pattern+="* \t"
        }

    }
    console.log(pattern);
    
}