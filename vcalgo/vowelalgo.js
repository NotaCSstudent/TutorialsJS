const letter = (word,letter) =>{
    letterarr = [];
    let g = word.toLowerCase();
    for(let i = 0; i < g.length; i++){
      if(g[i] === letter){
        letterarr.push(g[i])
      }
    
    }
    
    return letterarr;
    
    }
    
    
    
    
    const vowelcount = (str) => {
    let g = str.toLowerCase();
    
    a = letter(str,'a');
    e = letter(str,'e');
    i = letter(str,'i');
    o = letter(str,'o');
    u = letter(str,'u');
    let n = [a,e,i,o,u]
    let n2 = []
    for(let i = 0; i < n.length; i++){
      if(n[i].length!= 0){
        n2.push(n[i].length)
      }
    
      
    }
    let sum = 0;
    for(i = 0; i< n2.length; i++){
      sum += n2[i]
    }
    return sum;
    
    
    
    
    
    
    }


   




let worstcasescenario = "Hello, My Name is Mahamud Babu. I want to put as many vowels as much as possible. :) Lemmme udr motr 54 more what owie okay";
let g = vowelcount(worstcasescenario);
console.log(g);
