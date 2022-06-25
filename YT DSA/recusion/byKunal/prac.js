function printValue() {
    console.log("hello world");
    printValue1()
}
function printValue1() {
    console.log("hello world");
    printValue2()
}
function printValue2() {
    console.log("hello world");
    return
}
//printValue()

//!print first 5 number  
function printNum1(n){
    console.log(n);
    printNum2(2)
}
function printNum2(n){
    console.log(n);
    printNum3(3)
}
function printNum3(n){
    console.log(n);
    printNum4(4)
}
function printNum4(n){
    console.log(n);
}
//printNum1(1)

//?by recursion
function printNum(n){
    if(n==5){
        console.log(5);
        return
    }
    console.log(n);
    printNum(n+1) //recustive call
    //every function will take stack memory sepratly
}
//printNum(1)


//!fibonacchi number 
//TODO:sum of previous two number
var fib = function(n) {
    //by using recusrion
    if(n<2){
        return n
    }
    return fib(n-1)+fib(n-2)
    
};
console.log(fib(50))






















//!very imp head and tail concept
function printMe(n){
    if(n==0)return
    console.log(n);
    printMe(n-1)
}
//printMe(10) // 

