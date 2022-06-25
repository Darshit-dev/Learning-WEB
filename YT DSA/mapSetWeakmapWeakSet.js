
//?Map,set ,wekSet ,weakMap

//?set
//it contain only unq value
//onject Contructor
//add,clear,has,
let myArray = [5, 4, 3, 5, 6, 4, 3]
let obj = new Set(myArray);

//let's try with prototype
// console.log(obj.add(7))
// obj.delete(5)
// console.log(obj)
// for(let key of obj){
//     console.log(key);
// }
//?  MAP

//data stored into key value pair
// value can be intred by for or loop or by  foreach loop

let myMap = new Map([["a2","ajay"],["a1","vikas"]]);
myMap.set("a3","ajaya") // to set key value pair
//console.log(myMap.get("a1")); // to find value of that perticuler key
console.log(myMap);

//how to interate
for(let [key,value] of myMap){
    console.log(key,value);
}

myMap.forEach((key,value)=>{
    console.log(key,value)
})

