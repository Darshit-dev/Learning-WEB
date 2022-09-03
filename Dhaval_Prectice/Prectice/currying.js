//Currying is a checking method to make sure that you get everything you need before you proceed. 
//It helps you to avoid passing the same variable again and again. It divides your function into multiple 
//smaller functions that can handle one responsibility.

function add(a,b,c){
    return a+b+c
}

console.log(add(10,20,30))


let fun =(a)=>{
    return(a)=>{
        return(b)=>{
            return(c)
        }
    }
}

console.log(add(10,210,30))

function sum(a,b,c){
    return a+b+c
}
console.log(sum(1,2,3))


