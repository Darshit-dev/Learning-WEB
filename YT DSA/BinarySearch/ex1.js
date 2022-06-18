//? find the key from the given array 
//TODO : code is not running
function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    let mid = Math.floor((start + end) / 2)

    while (start <= end) {
        if (arr[mid] == key) {
            return mid
        }
        //if key greter than mid value then go to right 
        else if (arr[mid] > key) {
            start = mid + 1
        }
        //if key is less than mid value  then go to
        else if (arr[mid] < key) {
            start = mid - 1
        }
        mid = Math.floor((start + end) / 2)
    }
    return mid

}

let result = binarySearch([2, 4, 6, 8, 12, 18], 12);
console.log(result);