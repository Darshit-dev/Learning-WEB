function second(){
    setTimeout(()=>{console.log("Second function is starting.")},3000)
}

function first(){
    console.log("First function is starting.");
    second();
    console.log("First function is ending.");
}

first();


