
//!merge two sorted array
//let arr1 = [3, 5, 9]
//let arr2 = [4, 6, 8]
function mergetwoarray(arr1, arr2) {

    let arr = []


    let i = 0, j = 0, k = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) { //j terminated the loop
            arr[k] = arr1[i]
            i++
        } else {
            arr[k] = arr2[j]
            j++
        }
        k++
        //it may be possible that one of the array is not complete
        //now add all the remaining element in the array
    }
    while (i < arr1.length) {
        console.log("run");
        arr[k] = arr1[i]
        i++
        k++
    }

    //only one of the two loop will run
    while (j < arr2.length) {
        console.log("run");
        arr[k] = arr2[j]
        j++
        k++
    }
    return arr
}
function merge(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = merge(arr.slice(0, mid))
    let right = merge(arr.slice(mid))
    return mergetwoarray(left, right)
}
console.log(merge([2, 10, 2, 1, 1, 5]));
//console.log(mergetwoarray(arr1, arr2));


//1]Reverse array without using 3rd varivable

//!reverse string
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("darshit"))
//reverseArray([1,2,3,4,5,6,7,8,9]);




//!reverse arr
function revarr(arr, i = 0) {
    if (i == arr.length - 1) return arr[0];
    return revarr(arr[i], ++i)
}
console.log(revarr([1, 2, 3]));

