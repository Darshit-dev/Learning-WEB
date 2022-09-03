//native approach
function bubble(arr){
 for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(arr);
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
 
}
return arr
}

console.log(bubble([37,45,29,8]))

function bubbleSortNum(arr){
    for(let i = arr.length; i > 0; i--){
      for (let j = 0; j < i-1; j++) {
        if(arr[j] > arr[j+1]){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
      }
    }
    return arr
  }
console.log(bubbleSortNum([37,45,29,8]));

function name(...args) {
  console.log(args);
}
name(1,2,3)