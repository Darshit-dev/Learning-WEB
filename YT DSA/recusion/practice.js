let counter = 1
function demo(n){
    if(counter<n){
        return;
    }
    console.log("Hello")
    counter++
    demo(n)
}

function demo1(n){
    if(n==0){
        return;
    }
    console.log("Hello", n)
    demo1(n-1)
}
//demo1(50)

//tailrecsum
function tailrecsum(x, running_total = 0) {
    if (x === 0) {
        console.log (running_total);
    } else {
        return tailrecsum(x - 1, running_total + x);
    }
}
//tailrecsum(100)

//by pritesh sir

function checkeven(arr){
    if(arr.length==0){
        return;
    }
    else{
        let ele =arr.pop();
        if(ele%7==0)console.log("yes")
        else console.log("no")
        checkeven(arr)
    }

}
//checkeven([14,7,12,21,57,98]);

function printcounters(num) {
    //head and tail concept used
if(num==0)return

printcounters(num-1)
console.log(num) //it will print 1-10
//bcz we call first and print after
}

console.log(printcounters(10))


