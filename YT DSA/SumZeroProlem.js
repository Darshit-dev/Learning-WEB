// Checking sum zero-Problem1
// [-5,-4,-3,-2,0,2,4,6,8] =>input
//[?,?] -- nhi pata

//sorting is very useful in array problem in easy way
let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
//!1st way to
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] - arr[j] == 0) {
//       console.log([arr[i], arr[j]]);
//     }
//   }
// }
//quadratic T.c = O(n^2)

//!2nd way
//first we need to sort the array
//o(n) - TC
let left = 0;
let right = arr.length - 1
while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {

        console.log([arr[left], arr[right]])
        break;
    }
    if (sum > 0) right--
    if (sum < 0) left++
}


//?function up way 
{
let arr = [-5,-3,-2,1,5,7]
let i = 0;
let j= arr.length - 1

while (i<j){

}
}