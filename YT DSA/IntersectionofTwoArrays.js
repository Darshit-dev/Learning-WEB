//?O^2

/*
function Intersection(nums1, nums2) {
let interArr = []
   for(let i = 0; i < nums1.length;i++){
    for(let j = 0; j < nums2.length;j++){
        if(nums1[i]==nums2[j]){
            interArr.push(nums1[i])
        }
    }
   }
   return interArr
};

const result =Intersection([5,10,45,64], [15,10,9,78,7,64])
console.log(result);
*/
//TODO: intersection using hash is remaing
//using hasing
function Intersection(nums1, nums2) {
    let i=0 , j=0
    let obj1 = {}
    let obj2 = {}
    while(i<nums1.length){
        obj1[nums1[i]] = obj1[nums1[i]] + 0
    }



}
    const result =Intersection([5,10,45,64], [15,10,9,78,7,64])
    console.log(result);