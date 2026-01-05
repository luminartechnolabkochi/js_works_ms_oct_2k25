/*

5 *   *   *   *   * col(5)
4 *   *   *   * col(4)  
3 *   *   * (col3)  
2 *   * (col2)  
1 *(col1)   

*/

for(let r=5;r>=1;r--){
    let pattern=""
    for(let c=1;c<=r;c++){
        pattern+="* \t"
    }
    console.log(pattern);
    
}


for(let row=1;row<=4;row++){

    let pattern=""
    for(let col=1;col<=4;col++){
        if(row+col<=5){
            pattern+="# \t"
        }
    }
    console.log(pattern);
    
}