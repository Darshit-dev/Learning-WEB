// problem find the maximum occourance ofachaeter in an array
const arr= ['1','8','8','6','1','2','5','5','5','1','9','9','2']
// 1->5,8->3,6->2,2->2,5->3,9->3,0->2
// naive approach
// let max_occourance=0;
// for(leti=0;i<arr.length;i++){
//     let currCharacterCount=0;
//     for(letj=0;j<arr.length;j++){
//         if(a[i]==a[j]){
//             currCharacterCount=currCharacterCount+1;
//         }
//     if(currCharacterCount>max_occourance){
//         max_occourance=currCharacterCount;   
//     }                  

////2ndway
// let freqobject();
// // freqobject[1]insertion access and deletion0(1)
// for(leti=0;i<arr.length;i++)
//    if(freqobject.hasOwnProperty(arr[i])){
//        freqobject[arr[i]]+1;
//        if(max_occourance<freqobject[arr[1]]){
//            max_occourance freqobject[arr[i]);
//            max_occourance_character=arr[i];
//        }
//    }
//    else{
//         freqobject[arr[i])=1;
//    }
// console.log(max_occourance,">>> >>,max_occourance_character)