 //!Swap alternate
/*
let arr = [1,2,7,8,5,6,7]
let i=0;
let j=1;

while(j<arr.length){
    if(i+1<arr.length){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++;i++
        j++;j++
    }
}
console.log(arr)
*/

//!find uniqe element from array 

//?by using maping method

//let arr = [1,3,4,1,3]
// let uniq = {}
// i=0;
// while(i<arr.length){
//     uniq[arr[i]] = (uniq[i++] || 0) + 1

// }

// for(let key in uniq){
//     if(uniq[key]==1){
//         console.log("uniq ele is " + key);
//     }
// }

//?by using XOR method 
// let arr = [3,4,3]
// let catchUniq = 0;
// for(let i=0;i<arr.length;i++){
//     catchUniq = catchUniq^arr[i]
// }
// console.log(catchUniq);

let  arr =  [{name:"darshit" ,temp : 50} ,{name:"gopal" ,temp : 20} ]
let sorted = arr.sort(function(a,b){return a.temp - b.temp})
console.log(sorted)
