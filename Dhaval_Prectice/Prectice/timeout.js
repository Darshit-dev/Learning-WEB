//TODO: settimeout, set immediately, process.nextTick

//tricky part comes



//bcz it has 0 second  it will register immediately into callback queue
setTimeout(() => {
    console.log("settimeout called");
},0)

process.nextTick(() => {
    console.log("from tick");
})

//this is also register immediately , but after thee setTimeout
setImmediate(() => {
    console.log("immediate called");
})

console.log("last");
