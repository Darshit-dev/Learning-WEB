//! sum of all the array by recursio
//? by doing 
// we use bigint for large nuber of array
function sum(arr){

    if(arr.length == 1) return arr[0];
    //TODO: this console can give us clear und..
    console.log(arr);
    return arr[0]+ sum(arr.slice(1))

}
//console.log(sum([1,2,5,6,4,8,9]));

//!find out majority function
//?by using hashmap function  -diff between object and map
//?use hashmap for better coding manner 

function finMajor(arr){
const map = new Map();
let maxFreq = 0;
let major = 0;
for(let el of arr){
    //1.will chekc ele present? if not will add other wise incr.
    if(map.get(el)){
        console.log(el);
        map.set(el,map.get(el)+1)
        if(maxFreq<map.get(el)){
            maxFreq = map.get(el);
            major = el
        }
    }else{
        map.set(el,1)
        console.log("👍",map);
    }
}
return major
}
console.log(finMajor([1,2,2,2,6,5,5,5,5]))


//!least occured characters

function leastChar(arr){
    let map = new Map();

    //created freq. counter
    for(let el of arr){
        if(map.get(el)){
            map.set(el,map.get(el)+1)
        }
        else{
            map.set(el,1)
        }
    }

    //find min freq value
    let minfreq = Math.pow(10,10)
    let least = '';
    for(let el of map){
        if(midFreq >0 ){}
    }
}
//console.log(leastChar('absdbabsaababab'));