function kUniwQueChar(arr, unqCharLength) {
    let start = 0;
    let pointer = 0;
    let unqCounter = {}
    let CounterSize = Object.keys(unqCounter).length;
    let max = -Infinity;
    while (start < arr.length) {
        //if map size is more than uniqchar length --//?we perform add operation to that map
        if (CounterSize < unqCharLength) {
            unqCounter[arr[pointer]] = (unqCounter[arr[pointer]] || 0) + 1
            pointer++;
        }
        //this is our main portion
        else if (CounterSize == unqCharLength) {
            //we have got right substr , so now we need to store it's length to max
            
            let Wsize = pointer - start + 1
            if(Wsize >max){
                max = Wsize
            }
            pointer++
        }
        else if (CounterSize > unqCharLength) {
            
            while(CounterSize > unqCharLength){
                unqCounter[arr[start]] = - 1
                if(unqCounter[arr[start]]==0){
                    delete unqCounter[arr[start]]
                }
                start++
            }
            pointer++
        }
        
    }
    return max
}

let result = kUniwQueChar("aabacbebebe", 3);
console.log(result);
/*//?Point to remember
=> will use map for unq char not set ,but why?


*/