
async function sum(num){
    let res = await (num+10)
    console.log("First",res)
}
sum(10);
console.log("Second")