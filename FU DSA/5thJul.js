//!check if the both halves of the string have same set of characters

//?Approach : 
                //?length of string must be even
                //?use hashmap or json obj

function checkSameHalves(str) {
    if(str.length%2 != 0) return "NO"

    let map = {}

    for(let i=0; i<str.length; i++){
        if(i<str.length/2){
            map[str[i]] = map[str[i]]+1 || 1;
            console.log(map);
        }else{
            console.log(map);
            if(map[str[i]]){
                map[str[i]]--
               
            }else{
                return "NO"
            }
        } 
    }
    return "Yes"
}

console.log(checkSameHalves('abccabbacc'));


//!Replace each array element by difference of array size and frequency of that element
let myArr = [1,2,3,10,50]
console.log(myArr.push());