let a = [2,-5,4,5,4,6,-5]
let b= [16,36,44,25]
let obj1 = {}


//to make entries of all the ele
// objA={
//     "2":2,
//     "4":1,
//     "6":1
//     }

// objB={
//         "16":1,
//         "36":1,
//         "4":2
//         }

//key in obj - to run for loop on obj
for (let i in a){
    obj1[a[i]] +=1 
}

for(let i in b){
   obj2[b[i]] +=1
}

for(key in obj1){
    obj2[key*key] == obj1[key]
}