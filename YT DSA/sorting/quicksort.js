
let arr = [4,8,2,1,5,7,6,3]           //program is incomplete it gave output false

let s=arr[0]
let e  = arr.length-1

function partition(arr,s,e){
    let pivot =arr[s]
    let count =0

    //count the number from arr which is less then pivot
    for (let i = s+1; i < e; i++) {
        if(arr[i]<= pivot){
            count++
        }
        
    }

    //place pivot at right place
    let pivotIndex = s + count
    arr[pivotIndex] = arr[pivotIndex]+arr[s]
    arr[s] = arr[s] + arr[pivotIndex] 
    arr[pivotIndex] = arr[pivotIndex]-arr[s]

    //left and right wala part sambhal lete he
    //by using pointer
    let i=s,j=e


    

}


function quicksort(arr,s,e) {
    if(s>=e)return 

    //do partition of array
    if (s>=e) return

    //partition of array
    let p = partition(arr,s,e)

    //left part sort array
    quicksort(arr,s,p-1)

    //sort right part 
    quicksort(arr,p+1,e) 


}
//console.log(quicksort(arr,s,e));


//?Udemy
function pivot(arr,start=0,end=arr.length-1){
console.log(arr);
 //swap function
 function swap(arr,a,b){
    arr[a] = arr[a]+arr[b];
    arr[b] = arr[a]-arr[b];
    arr[a] = arr[a]-arr[b];
 }

 let pivot = arr[start]
 console.log(pivot);
  let swapIndex =start;
console.log(swapIndex);
  for(let i=start+1; i<arr.length; i++){
    if(pivot>arr[i]){
        swapIndex++
        console.log(swapIndex,i)
        swap(arr,swapIndex,i)
        console.log(arr);
  }

}
}
//pivot(arr)



//!Udemy sir code
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          console.log(pivotIndex);
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
  console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
  
  
  
  
  // [4,6,9,1,2,5,3]
  // [3,2,1,4,6,9,5]
  //        4
  //  3,2,1    6,9,5
  //      3      6
  //  2,1      5  9
  //    2
  //  1
  