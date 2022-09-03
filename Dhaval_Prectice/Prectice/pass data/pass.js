//pass data from middleware to controller express

let express = require('express');
let app = express(); 


function middleware1(req,res,next){
    // Set data
    req.dataFromMiddelare1 = "Data of Middleware 1";
    // Go to next middleware
    next();
}
 
function middleware2(req,res,next){

    console.log("We are in Middleware 2.");
     // Get Data of Middleware1
    console.log(req.dataFromMiddelare1);
    // Go to next middleware
    next();
}

// Handling Get Request '/'
app.get('/getDetails',middleware1,middleware2,(req,res)=>{

    return res.send(req.dataFromMiddelare1);
})


app.listen(3000);