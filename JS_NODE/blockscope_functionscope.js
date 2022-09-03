///!function scope and block scope in javascript
/*It's all about the type of following keywords 
depending upon specific condition.
'var' is function scope.
'let' and 'const' are block scope.
Function scope is within the function.
Block scope is within curly brackets.For example:*/
{
    var age = 50;
    var temp = age + 10;
    if (age > 40) {
        var age = temp;
        console.log(`Your brother ${age} years old than you!`);
    }
    console.log(age);
}

//Output: Your brother 60 years old than you!

/*Note:But if we type console.log(age) outside the block scope than
the previous value of 'age' with 'var' keyword has been vanished that is:

>console.log(age);
>60

But in case of 'let' and 'const' keywords the previous value of
'var' in the previous example is not vanished here's an example:*/
{
    var age = 50;
    var temp = age + 10;
    if (age > 40) {
        let age = temp;
        console.log(`Your brother ${age} years old than you!`);
    }
    console.log(age);
}

/*Output: Your brother 60 years old than you!
Note: The output would still same but if we type 'console.log(age)' 
outside the block scope than the previous value of 'age' with 'var' keyword
has not been vanished that is:

>console.log(age);
>50
*/