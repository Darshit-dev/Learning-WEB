//! print n number 
function printNum(n){
    if(n==0){
        return
    } 
    printNum(n-1)
    console.log(n); 
    //here return type is voide so need to return
}
//?printNum(10)

function printNum1(n){
    if(n==0){
        return
    } 
    console.log(n); 
    printNum1(n-1)
    console.log(n);
    //here return type is voide so need to return
}
//printNum1(5) 

//!factorial of a number

function factorial(n){
    if(n<1)return 1

    return n*factorial(n-1)
}
//console.log( factorial(5));

//!sum of digit  // product of digit

function sumOfDigit(n){
    console.log((n));
    if(n==0) return 0
    return Math.floor(n%10) + sumOfDigit(Math.floor(n/10))
}
//console.log(sumOfDigit(134267)); // TC = logn

//TODO !why not run 
function profuctOfDigit(n){
    console.log((n));
    if(n%10==n) return n //why n%10==n?
    return Math.floor(n%10) * profuctOfDigit(Math.floor(n/10))
}
//console.log(profuctOfDigit(312)); // TC = logn

//console.log(1%10);


//!passing number of 
//?#concept
function passNum(n) {
    if(n==0)return
    console.log(n);
    passNum(n--) // will go into stackoverflow
}
//passNum(5);

//!reverse a number
//?my way
function reverseNum(n){
    if(n==0)return
    console.log(Math.floor(n%10));
    reverseNum(Math.floor(n/10))
}
//reverseNum(124)

//?kunal way -1  --imp--
let sum = 0   //if there any way to not include this in the fun? yes- by addin into params
function reversNum1(n) {
    if(n==0) return
    let rem = n%10
    sum = sum*10+rem
    reversNum1(Math.floor(n/10))
}
reversNum1(1234)
//console.log(sum);  

//?way - 2

//!if array is sorted or not
function checkSorted(arr,index=0) {
    if(index>=arr.length)return true
    if(arr[index]<arr[index-1])return false
    return checkSorted(arr,index+1) 
}
//console.log(checkSorted([1,2,5,3]));

//!check if array ele odd or even
function checkOdd(arr,index=0) {
if(arr.length==0)return 0
if(index>=arr.length)return
console.log(arr[index]%2!==0);
checkOdd(arr,index+1)
}
//checkOdd([1,2,5,3])

//?helper recustive function  --- IMP---
//inner function will run recursively and help parent function 
function findOdd(arr){
let result = []
function helper(input){
    console.log("👌");
    if(input.length==0)return
    
    if(input[0]%2!==0){result.push(input[0])}
    helper(input.slice(1)) //recursively call
}
helper(arr) //first time call 
return result
}
//console.log(findOdd([1,2,5,3,5]));


// //!number is palindrome or not
// function pal(nums,s,e) {
    
    
// }
// console.log(pal(12321));

//!count number of zeros in a given number
//? ----IMP----
//if we take count inside the argu
function countZero(num,count=0) {
    if(num == 0) return count //whatever tha count vlaue we have we will print
    if(Math.floor(num%10)==0)return countZero(Math.floor(num%10),count+1)
    return countZero(Math.floor(num%10,count));
}
//console.log(countZero(12021));

//? --with helper function --
function count(n) {
    function helper(input,count) {
        if(input == 0) return count
        let rem  = input%10;
        if(rem==0){
            return helper(input/10,count+1);
        }
        return helper(input/10,count)
    }   
    return helper(n,0)
}
console.log(count(1,2,0,6,0,4,0));