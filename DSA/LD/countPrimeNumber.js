var countPrimes = function(n) {
    let prime = Array(n+1).fill(true)
    let count =0
    //not understood below line
    prime[0] = prime[1] = false
    
    for(let i=2;i<n;i++){
        if(prime[i]){
            count++
            //not understand this loop
            for(let j=i*2;j<n;j=j+i){
                console.log(i,j,'👍');
              prime[j] = 0  
            }
        }
    }
    return count
};
console.log(countPrimes(15));

let moveZero = [0,1,0,3,12]
moveZero.splice(0,1)
moveZero.push(0)
console.log(moveZero);