// function find(num) {
//     let end = num[num.length - 1]
//     let result = ""
//     let index


//     for (let i = num.length - 2; i >= 0; i--) {
//         if (end >num[i]) {
//             index = i
//             break;
//         }
//     }
//     result =  num.slice(index, num.length - 1).split("").sort().join("") + end  +num.slice(0, index) 
//     return result;
// }

function club(str) {
    let last = str.length - 1
    let arr = str.split("")
    console.log(arr)
    let max = Math.max(...arr)
    index = str.indexOf(max)
    if (arr[index] > arr[index - 1]) {
        [arr[index - 1], arr[last]] = [arr[last], arr[index - 1]]
    }
    [arr[index], arr[last]] = [arr[last], arr[index]]
    return arr.join('')//526479
}
//input = 524976
console.log(club("524976"));

                                                            =