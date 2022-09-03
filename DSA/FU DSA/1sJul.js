//!we have given array as input containing 0's and 1's we need to sort the array
//need to times iteration
function sortZerone(arr) {
  let curr = 0, count0 = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count0++
    }
  }
  let count1 = arr.length - count0

  while (count0 > 0) {
    arr[curr] = 0
    count0--
    curr++
  }

  while (count1 > 0) {
    arr[curr] = 1
    count1--
    curr++;
  }
  return arr
}
//?n+count0+count1 == 2n => ~n
console.log(sortZerone([1, 0, 1, 0, 0, 1, 1]))


//TODO:can do by using only one iteration?
//? =>by using two pointer with start and end
//? =>swap and go further 
function sort01(arr) {
  let s = 0, e = arr.length - 1

  while (s < e) {
    if (arr[s] == 1 && arr[e] == 0) {
      [arr[s], arr[e]] = [arr[e], arr[s]]

    }
    else if (arr[e] == 1) e--
    else if (arr[s] == 0) s++
  }
  return arr
}
console.log(sort01([1, 0, 1, 0, 0, 1, 1, 0]));



//!in an array ,findThe elements without a pair (or those that are present in odd number)
//?Ex. [11,1,7,1,2,2,3,3,3,48,4,4,48] -here 3 and 7
//? => jiska bhi freCount %2 == 1 (odd) hoaga vo number without pair he
//? => we use map here (whenever we need to deal with frq, we use map)
function withoutPair(arr) {
  let map = new Map();

  for (let curr of arr) {
    map.get(curr) == undefined ? map.set(curr, 1) : map.set(curr, map.get(curr) + 1)

  }
  console.log(map);

  for (const [key, val] of map) {
    if (val % 2 == 1) {
      console.log("num without pair", key);
    }
  }
}
withoutPair([11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 48, 4, 4, 48]);



//!Write a function to calculate the Max sum of three consecutive element in an ARRAY
//? ==>Approach
//?==>Sliding window

function max3elSum(arr, k) {
  let sum = 0;
  let i = 0
  for (; i < k; i++) {
    sum += arr[i]
  }
  console.log(sum);

  let max = -Infinity;
  let j = i

  while (j < arr.length) {
    sum = sum + arr[j + 1] - arr[j - k + 1]
    if (sum > max) {
      max = sum
      console.log(sum);
    }
    j++
  }
  return max

}
console.log(max3elSum([8, 1, 3, 9, 6, 2, 11, 7], 3))

//TODO : LAB 2
