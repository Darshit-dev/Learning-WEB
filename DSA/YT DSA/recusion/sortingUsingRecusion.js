let arr = [2,3,1,4]
//two way - iteration  or recursion

let i=0;
let j=1;
function sortIt(arr){

    if(arr[i]<arr[j]){
        i++;
        j++;
        sortIt(arr)
    }else{
        [arr[i], arr[j]] = [arr[j],arr[i]]
    }

}
console.log(sortIt(arr))