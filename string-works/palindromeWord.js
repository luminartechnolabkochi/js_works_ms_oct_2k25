

function isPlaindromeWord(word){
 
    let newWord=word.toLowerCase().replaceAll(" ","")
    let reversedString=""

    for(let i=newWord.length-1;i>=0;i--){
        reversedString+=newWord[i]
    }

    return reversedString==newWord
    

}

console.log(isPlaindromeWord("A MAN A plan a canal panama"));
