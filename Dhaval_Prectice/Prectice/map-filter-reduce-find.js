//1]map() :
//-In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and 
// non-primitive types.

// let arr = [2,4,6,8];
// let b = arr.map(test);

// function test(x){
//     return x*3
// }
// console.log(b);

//or

// let array = [2,3,4,5,6];
// let res = array.map(el => el*2);
// console.log(res);

//===========================================================================
//2]filter() :
//-The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements 
// from the given array that pass the test implemented by the provided function.

// let array = [2,4,5,3,1,6,7,8,9]  //find a even number

// let res = array.filter(x => (x%2===0))
// console.log(res);

//===========================================================================
//3]reduce() :
//- The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. The final result of
// running the reducer across all elements of the array is a single value.

// const array1 = [1,2,3,4,5,6];

// let initialValue = 0;

// let arr = array1.reduce((prev,curr)=>prev+curr);  //0+1+2+3+4+5+6  => 21

// console.log(arr);

//===========================================================================
//4]find() :
//-The find() method returns the first element in the provided array that satisfies the provided testing 
// function. If no values satisfy the testing function, undefined is returned.

// const arr = [2,4,5,6]
// let res = arr.find(el =>el>6);
// console.log(res);

//===========================================================================
//*]Ternary operator

// function getFree (isMember){
//     return (isMember ? 5 :10)   //syntex (condition ? exprIfTrue : exprIfFalse)
// }

// console.log(getFree(false)); //10
// console.log(getFree(true)); //5
// console.log(getFree(null)); //10

//===========================================================================
//*]forEach()
//-The forEach() method executes a provided function once for each array element.

// let arr=["a","b","C"];

// arr.forEach(el => console.log(el));
//===========================================================================
//Continue 
//-The continue statement is used to skip the current iteration of the loop and the control flow of the 
// program goes to the next iteration.

// program to print the value of i
// for (let i = 1; i <= 5; i++) {

//     // condition to continue    
//     if (i == 3) {
//         continue;
//     }

//     console.log(i);
// }

//===========================================================================
//break
//-The break statement is used to terminate the loop immediately when it is encountered.

// for(let i=1; i<=5; i++){

//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

//===========================================================================
//switch
//-The JavaScript switch statement is used in decision making.

//-The switch statement evaluates an expression and executes the corresponding body that matches the 
// expression's result.

// program using switch statement
// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}.`);


//===========================================================================
//For-in
//-for-in loop is a basic control statement that allows you to loop through the properties of an object.

// let obj = {a:1,b:2,c:3}

// for(let el in obj){
//     console.log(`${el}`)
// }

//===========================================================================
//for-of

//-The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, 
// array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. 
//-It invokes a custom iteration hook with statements to be executed for the value of each distinct property 
// of the object.

// let arr = ["a","b",1]

// for(let el of arr){
//     console.log(el)
// }



