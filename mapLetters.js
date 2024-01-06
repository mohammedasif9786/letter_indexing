//mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }


let letterIndexing = (input)=> {
     
    let obj = {}
    for(let i=0;i<input.length;i++){
        let char = input[i]
        if(!obj[char]){
            obj[char] = [i]
        }else{

            obj[char].push(i)
        }
    }
return obj
    }

console.log(
letterIndexing("09877664")

);
