//!find subseqaunce of string "abc"

function subseq(p,up){
 if(up.length==0){
    console.log(p);
    return
 }

 //take string first char
 let ch=up[0]

 //now we have two choice ither taker it or ignore it

 subseq(p+ch,up.slice(1)) //take it
 subseq(p,up.slice(1)) //ignore it 
}
subseq('','abc')

//?If i want to add these value into the array how can i do this? whithout making new array outside
//?  

function subseq(p,up){
    if(up.length==0){ 
       let arr = [];
       arr.push(p);
       return arr
    }
   
    //take string first char
    let ch=up[0]
   
    //now we have two choice ither taker it or ignore it
   
    let left = subseq(p+ch,up.slice(1)) //take it
    console.log(left);
    let right =subseq(p,up.slice(1)) //ignore it 
    left.concat(right)
    return left
   }
   //!not run properly
console.log(subseq('','abc'))
