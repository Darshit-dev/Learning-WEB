//!find ele from given array
//?need to run on debugger

function findele(arr,k) {
    if(arr.length==0){ 
        return false;
    }
    console.log(arr[0]);
    if(arr[0]==k)return true
    else {
        let remainingPart = findele(arr.slice(1),k)
        return remainingPart
    }
}
console.log(findele([1,2,36,4,7,8],36));