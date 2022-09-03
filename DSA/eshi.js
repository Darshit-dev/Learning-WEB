// let c=1;

// function test(c) {
//  c=2;
// }

// test(c);

// console.log(c);

// let obj = {"a":1}

// function objTest(obj) {
//  obj.a=2;
// }

// objTest(obj);

// console.log(obj.a);

// let obj1 = {"a":1}

// function objTest1(...obj1) {
//  obj1.a=2;
// }

// objTest1(obj1);

// console.log(obj1.a);


//?
// function myClassStr(name) {
//      this.name = this.name;
    
//      return this.name;
//     }
    
//     function myClassObj(name) {
//      this.name = name;
//      return () => name;
//     }
    
//     var child1 = new myClassStr('Nodejs');
//     var child2 = new myClassObj('JS');
    
//     console.log(typeof child1, typeof child2);

//?

// var app = require('express')()


// app.use('/users', async function(req, res) {
//  await waitFifteenSec();
//  res.send('Hi');
// })

// var server = app.listen(8080);
// server.setTimeout(10*1000); //10 sec

// server.on('timeout', function() {
//  console.log('timed out')
// })


// function waitFifteenSec() {
//  return new Promise(function(resolve) {
//  setTimeout(function() { resolve(); }, 15000);
//  });
// }