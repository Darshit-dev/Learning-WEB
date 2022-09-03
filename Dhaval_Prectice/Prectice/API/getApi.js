/*Qus] with the help of get api print a meg in a postmen.

1]install express for a server and requir it.
2]call the express all function stored into app.
3]create a get api in a globle middelwere.
call a server on a 3000 PORT number. 

For Nodemon command = npx nodemon file.js
====================================================================*/

const express = require("express");

const app = express();

app.get("/print",(req,res)=>{
    res.send("Hello world.How are you??")
})

app.listen(3000);





