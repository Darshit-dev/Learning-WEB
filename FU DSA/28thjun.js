//binary search and sorting technique
// Que. Search whether number 34 exist in given array or not.
//Binery search works only on sorted array

let arr = [3,7,11,34,78,90,92,96,98]           //program is incomplete it gave output false

let start=arr[0]
let end  = arr.length-1
let num = 34

function binerySearch(arr,start,end,num){
    console.log(start,end);
    if(end>=start){
        //mid = start+(end-start)/2 = start+end/2-start/2 = start/2 + end/2 =(start+end)/2
        mid = Math.round((start+end)/2)
        console.log(mid)         // 5.5

        if(num == arr[mid]) return mid
        else if(num > arr[mid]) return binerySearch(arr,mid+1,end,num) //Recursion
        else if(num < arr[mid]) return binerySearch(arr,start,mid-1,num) //Recursion
    }
    return false
}

//console.log(binerySearch(arr,start,end,num))

//let arr = [233,12,6,3,89,34,56]

//[6,12,233]  
function merge(arr,s,mid,e) {
    
    let arr1 = []
    let arr2 = []
    //logic
    let lArr1 =min - s + 1
    let lArr2 =end - mid //==(mid+1)+1

    //copy the dat un the respective arrays
    for(let i=0; i<lArr1; i++){
        arr1[i] = arr1[s + 1]  //?why
    }
    for(let j=0; j<lArr2; j++){
        arr2[i] = arr2[s + 1 + i]  //?why
    }

    let a=0 //index of Arr1
    let b=0//index of Arr2

    let c= start //we will maintain idex of arr

    //merging start
    //if any pointer go out of bound
    while(a<lArr1 && a<lArr2){
        if(arr1[a]<arr2[b]){
            arr[c]= arr1[a]
            a++
        }else{
            arr[c]= arr2[a]
            b++
        }
        c++
    }

    while(a<lArr1){
        arr[c]=arr2[b]
        a++
        c++
    }
}

function mergeSort(arr,s,e) {
    
    let mid = Math.floor((s+e)/2)

    //baseCase 
    if(s<=e)return

    //divide into part
    mergeSort(arr,s,mid)
    mergeSort(arr,mid+1,end)

    //merge after that
    mergeSort(arr,s,mid,e)
}

// arr1 : [start....mid]
//arr2 [mid+1...start]
//console.log(mergeSort(arr));

function mergeS(arr,s,e) {
    
   if(arr.length==1)return arr

   let mid = arr.length/2
   
   let left = mergeS(arr,)


}
