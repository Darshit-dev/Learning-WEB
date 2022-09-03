//?Sliding window technique

//!find the consiqutive k number largest sum


//n=8w=3n-w+1=>8-3+1=>6
// total number of window formof sizewin an array having sizen=>n-w+1
// brute force Naive approach
let arr =[1,3,-1,3,5,3,6,7]
let n=arr.length;
let w=3;
let result=[];

for(let currWindow=0;currWindow<n-w+1;currWindow++){
    let max=arg[currWindow];
    for(let i=carrWindow;i<currWindow+w;i++){
             if(max<arr[i]){
                max=arr[currWindow];
            }
    }
    result.push(max);
}
console.log(result);