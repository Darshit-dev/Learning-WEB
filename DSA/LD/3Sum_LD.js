/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let result =[]
    for(let i=0;i<nums.length-2;i++){
        let j=i+1 
        let k=nums.length-1
        
        while(j<k){
           let sum = nums[j]+nums[k]
            if(sum == -nums[i]){
                result.push([nums[i],nums[j],nums[k]])
                j++;
                k--;
            }
            else if(sum>-nums[i]){
               k-- 
            } 
            else if(sum<-nums[i]){
               j++
            }
        }       
    }
   let finalResult = Array.from(new Set(result.map(JSON.stringify)),JSON.parse)
    return finalResult
};