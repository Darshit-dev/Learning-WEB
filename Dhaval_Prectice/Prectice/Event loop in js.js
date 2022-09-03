var fun2 = () =>{

    setTimeout(()=>{
        console.log("fun2 is starting") //after 3 sec executed
    }, 3000)
}

var fun1 = () => {
    console.log("fun1 is starting")  //1st executed
    fun2() //2nd but 3 sec delay
    console.log("fun1 is ending")  //code work as a asynchronously so 2nd executed
}

fun1()