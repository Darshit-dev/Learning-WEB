//What is JSON? What do the function json.parse and json.stringify do?

//-->Json stands for Javascript object notation.
//-->Json is a data exchange formate consisting key-value pair.
//-->Json is a light waight formate for storing and transporting data.
//-->Jason is often used when data is sent from a server to a web page.

//1]jSON.parse()
//Convert a string to object

let obj = '{"Name":"User", "Age":23}'

let res = JSON.parse(obj);

console.log(typeof res);
console.log(res);

//1]jSON.stringify()
//Convert a object to stringify

let obj1 = {"Name":"User", "Age":23};

let b = JSON.stringify(obj1);

console.log(typeof b);
console.log(b);