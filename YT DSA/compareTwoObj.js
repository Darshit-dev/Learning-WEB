function anagram(stringA,stringB){
    try{
    stringA=stringA.toLowerCase();
     stringB=stringB.toLowerCase();
    if(stringA.length!==stringB.length){return false}
    const stringACharCount={}
    for(i=0;i<stringA.length;i++){
      let charA=stringA[i]
    stringACharCount[charA] =stringACharCount[charA]+1||1
      
    }
      let stringBCharCount={}
   for(i=0;i<stringB.length;i++){
     let charB=stringB[i]
      stringBCharCount[charB] =stringBCharCount[charB]+1||1
     
   }
        console.log(JSON.stringify(stringBCharCount))
        console.log(JSON.stringify(stringACharCount))
     if(JSON.stringify(stringACharCount)===JSON.stringify(stringBCharCount)){
       return true}
      else{
        return false 
       }
    }
    catch(err){
      return(err.message)}}
  
  console.log(anagram("AHbi","abhi"))