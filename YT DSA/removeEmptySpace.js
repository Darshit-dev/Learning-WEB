let str = '  ad fd cd '
let newStr = ''
let finalStr = ''

//to remove before space
let flag = 1
for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        flag = 0
    }

    if (flag == 0) {
        newStr += str[i]
    }
}

console.log("😀"+newStr+"😀")
//to remove after space
// let k =0
// for (let j = newStr.length - 1; j >= 0; j--) {
//     if (str[j] !== " ") {
//         flag = 1
//     }
//     if (flag == 1) {
//         finalStr += newStr[k]
//     }
//     k++
//     console.log(k)
// }

console.log(str.length, newStr.length, finalStr.length, "👌"+finalStr+"👌")