const { set } = require("express/lib/application")

function rotateArr(arr,k) {
//!write a program to rotate array k times
let i=0
let j=arr.length-1

let swap = (arr,i,j) => {
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        console.log(arr[i],arr[j]);
        i++;
        j--;
    }
}
swap(arr,i,j) //rotated entire array
i=0
j=k-1
swap(arr,i,j) //roteted array till k-1
i=k
j=arr.length-1 // rotared array from k to array length
swap(arr,i,j)
return arr

}
//console.log(rotateArr([7,2,4,6,9],2)); 

//!find the unique element from the array
function findUniq(arr) {
    let map =new Map()
    let unique = []
    ;
    for (let item of arr){
        
        if(!map.get(item)){
           map.set(item,1)
        }else{
            map.set(item,map.get(item)+1)
        }
    }
        console.log(map);
    for(let [key,value] of map){ //we can also use arr[0] and arr[1]
        console.log(key,value);
        if(value==1){unique.push(key)}
    }
    
    
    return unique
   
}
//console.log(findUniq([7,8,9,5,4,5,4,4,9,3,8]));

//?                -- 2nd way--
function findUniq(arr) {
    let set =new Set()
    
    for(let item of arr){
       set.add(item)
    }
    return Array.from(set)

}
console.log(findUniq([7,8,9,5,4,5,4,4,9,3,8]));





