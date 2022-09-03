// function s(){
//     var a  = 10
//     function d(){
//         console.log(a);
//     }
//     d()
// }
// s();

// function x(){
//     var a = 10
//     function y(){
//         console.log(a);
//     }
//     return y //what we do here?
//     //we extract this y function from x function by doing return
// }
// var z = x();
// z()


// function f() {
//     var b = 800;
//     function x() {
//         var a = 10
//         function y() {
//             console.log(a, b);
//         }
//        y()
//     }
//     x()
// }
// f()



// console.log(d);
// const d=10

//!interview question
 function x(){
    for (var i = 1; i <=5;i++) {  //bcz we use war here
        setTimeout(()=>console.log(i),i*1000);   
    }
}
console.log("darshit");
x()