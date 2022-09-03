
//!merge sort

function merge(arr1, arr2) {
    let i = 0
    let j = 0

    let result = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr
    
    let mid = Math.floor(arr.length / 2)

    //left part
    console.log(arr.slice(0, mid))
    let leftPart = mergeSort(arr.slice(0, mid));
    //right part
    let rightPart = mergeSort(arr.slice(mid))

    //merging part
   return merge(leftPart, rightPart)


}
console.log(mergeSort([2, 0, 2, 1, 1, 0]))

//!quicksort