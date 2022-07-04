
//!merge two sorted array
let arr1 = [3, 5, 9]
let arr2 = [4, 6, 8]
function mergetwoarray(arr1,arr2) {
    
let arr = Array(arr1.length+arr2.length)

console.log(arr);
let i = 0, j = 0,k=0
while (i < arr1.length &&j<arr2.length) {
    if (arr1[i] < arr2[j]) { //j terminated the loop
        arr[k]=arr1[i]
        i++
    } else {
        arr[k]=arr2[j]
        j++
    }
    k++
    //it may be possible that one of the array is not complete
    //now add all the remaining element in the array
}
    while(i<arr1.length){
        console.log("run");
        arr[k] = arr1[i]
        i++
        k++
    }

    //only one of the two loop will run
    while(j<arr2.length){
        console.log("run");
        arr[k] = arr2[j]
        j++
        k++
    }
return arr
}
//console.log(mergetwoarray(arr1, arr2));







