//!find if the arrray is sorted or not?
function sortedArray(arr,index=0) {
    if(index==arr.length-1)return true
    console.log(index);
    return arr[index]<arr[index+1] && sortedArray(arr,index+1)
} 
console.log(sortedArray([1,2,10,3,6,5]));