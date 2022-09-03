function animalCount(animals){
 let animalFreq = {}
 
 for(let animal of animals){
    if(animalFreq[animal]){
        animalFreq[animal] +=1
    }else{
        animalFreq[animal] =1
    }
 }
 console.log(animalFreq);
}
animalCount('cat','goat','dog','cat','cat')


