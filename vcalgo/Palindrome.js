const palindrome = (str) => {

    str2 = str.toLowerCase();
    str2length = str2.length-1;
    reversearr = [];
    for(let i = str2length; i >0;i--){
        reversearr.push(str2[i])

    }
    let tru = true;
    reversearr.push(str2[0])
    for(let i = 0; i< reversearr.length; i++){
        if(reversearr[i] === str2[i]){
            return "This is a Palindrome. :)";
        }
        else{
            return "This is not a Palindrome. :(";
        }
    }
    
}



console.log(palindrome("Bob"));
console.log(palindrome("Peanut"));
console.log(palindrome("NaN"));
console.log(palindrome("nanny"));