/*setTimeout allows us to run a function once after the interval of time. 
-setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating 
continuously at that interval.*/

setTimeout(()=>{
    console.log("First")
},2000)


setInterval(()=>{
    console.log("Sec")
},2000)