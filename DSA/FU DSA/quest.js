//TODO:(1)SWAPPING TWO VARIABLE WITHOUT USING THIRD VAIABLE



//TODO(2)REVERSE A ARRAY WITHOUT USING AN EXTRA ARRAY


//TODO(3)FIND THE UNIQUE ELEMENTS OF AN ARRAY
let arr3 = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7]
let res3 = [3, 4, 5, 6]
//method-create hash map counr==1 push into result array

//TODO(4)FIND THE SUM OF ELEMENTS WHOSE SUM IS EQUAL TO THE TARGET
let arr4 = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1]
let k = 5

//STEP-1:MAP CREATION
//STEP-2:K-EL


//TODO(5)TAKE A INPUT AND CHECK WHEATHER IT IS INTEGER OR NOT
//Ip-string of number  eg.s="1234"

//if(s[i]>="0" && s[i]<="9"){}//continue
//else {} //break

//M-2:Using Regex



//TODO(6)CHECK WHEATHER A NUMBER IS PRIME OR NOT
//M-1 -check divisibility by half of number
//M-2 -check by sq.root of number and below its value->(Math.squar-----for squre root)
//Time comple: O(square root of n)
let n = 13
console.log(Math.sqrt(n))

function isPrime(n) {

    let val = Math.sqrt(n)

    for (let i = 2; i <= val; i++) {
        if (n % i == 0) return false

    }
    return true
}
let c = isPrime(n)
console.log(c)


//(7)FIND SECOND LARGEST ELEMENT IN ARRAY
let arr7 = [1, 2, 3, 4, 5, 6, 7]

let last = arr7[0]
let secondLargest = -Infinity

for (let i = 0; i < arr3.length; i++) {
    if (arr7[i] > last) {
        last = arr7[i]
        secondLargest = arr7[i]
    }
    else if (arr7[i] > secondLargest) {
        secondLargest = arr7[i]
    }
}

function findSecondLargest(arr) {
    let large = arr[0]
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i]
            secondLargest = arr[i]
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }

    }
    return secondLargest
}
console.log(findSecondLargest([1, 2, 3, 10, 5, 6, 7]));


//TODO:(8)FILTER THE DUPLICATE ELEMENT AND GIVE UNIQUE ELEMENT
//?Use set and put array into it.


//TODO:(9)TAKE A NUMBER IF A NUMBER IS MULTIPLE OF 3,PRINT "FOO",IF THE NUMBER IS MULTIPLE OF 5, PRINT "BAR",AND IF NO. IS MULTIPLE OF 7 & 5 PRINT "FOOBAR" ELSE PRINT NOTHING



//TODO:(10)COUNT DISTINCT PAIR WITH GIVEN SUM------->"Geeks for Geeks"

//TOdo:(11): reverse each word of given string 
function reverseIt(sentence) {

}
function swapValue(a,b) {
    a= a+b
    b=a-b
    a=a-b
    console.log(a,b);
}
swapValue(1,5)