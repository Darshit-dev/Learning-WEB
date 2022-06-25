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




