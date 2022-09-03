function isvalidsub(arr,subseq){
let counter = 0;
for(let i=0;i<arr.length;i++){
    if(subseq[counter]===arr[i]){
        counter++;
    }
}

if(counter ===subseq.length)return true
else return false

}
console.log(isvalidsub([1,2,3,4,6],[6,1,3,4]));



function sendondlargest(arr) {
    let first = -Infinity
    let second = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first
            first = arr[i]
        }else{
            if(arr[i] > second){
                second = arr[i]
            }
        }
    }
    return second

}
console.log(sendondlargest([1, 2, 3, 4,40, 8, 9,25]));

