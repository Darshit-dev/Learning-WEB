
let info = {
    name: "raj",
    city: "surat",

}

let info1 = {
    name: "virat",
    city: "rajkot"
}


function bio(age) {
    console.log(`my name is ${this.name}. i am from ${this.city}. i am ${age} years old. `)
}

let res = bio.bind(info1)
res(27)