// const http = requir('http');


import http from "http"

let server = http.createServer((req,res)=>{  //create a server
    res.end('Hwllo world')
});

server.listen(7000 , 'localhost',()=>{      //run a server on 7000 port
    console.log('server run on a http://localhost:7000')
})





