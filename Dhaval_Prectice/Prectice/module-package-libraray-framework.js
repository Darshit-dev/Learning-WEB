//module : A module is a set of a function or method ready to be used somewhere else.

//weite here a set of module...
function add(a,b){
    return a+b
}

function minus(a,b){
    return a-b
}

function multiplay(a,b){
    return a*b
}

function divided(a,b){
    return a/b
}

//callculate
console.log(add(3,2));
console.log(minus(3,2));
console.log(multiplay(3,2));
console.log(divided(2,2));

//=============================================================================================
//package : A package is a collection of a package.
//-->let understand in a simple way, you make a one folder (calculator), inside a cal folder you have to 
//  add a add.js , minus.js, and so on file and simple you have to calculte a some times you have to use a package.


//=============================================================================================
//Library :
// A library is a piece of reusable code that provides some well-tested functionality through a well-defined 
// interface. It can contain one or more modules. From previous example, we could group together add, 
// subtract, multiply, and divide modules in my-calculator library. A real example would be lodash

//=============================================================================================
//Framework:
//-Framework is a collection of libraries and configurations put together in a basic structure/skeleton 
// that can be used to build a software or application. Essentially, the framework tells you how and where 
// to add your code about what, and then runs it for you. For example:

//-Express JS is a web framework built for Node JS. With the help of Express JS we create web applications 
// (mostly backend APIs).

//=============================================================================================