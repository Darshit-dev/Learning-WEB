
//!recursion
//?IMP : base case must ,without it ,it will go to infinite
// function say_hello(n){
//     console.log(n,"I executed"); // printed once already
//     if(n==0){//stopping case or base case or initial condition
//         return 
//     }
//     say_hello(n-1) //n-1 more times
// }

// say_hello(10)

//!sum of 10 number usong recursion
//1+2+3+4+5+6+7+8+9+....+(n-1) + n  
/*function sum(n){
    if(n==0){
        return 0;
    }
    let letf_part = sum(n-1)
    return letf_part + n
}
console.log(sum(100));
*/

//!sum of digits of number
//the concept of green box must remember
/*
1214 --> 121 4
121 --> 12 1
12 --> 1 2
1 -->0 1
*/
//12143 = 1+2+1+4   + 3
//return sum_digit(1214) + 3

function sum_digit(n){
    if(n==0){
        return 0
    }
    let last_digit =Math.floor(n%10);
    let remaning_digit =Math.floor(n/10)
    console.log(remaning_digit,last_digit);
    return sum_digit(remaning_digit) + last_digit
}

console.log(sum_digit(12143));