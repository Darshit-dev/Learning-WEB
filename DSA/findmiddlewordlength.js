//hexaview
function findLength(str) {
  let newStr = str.replace(/\./g,"").split(' ')
  console.log(newStr);
  let length = Math.ceil(newStr.length/2)
  console.log(length);
  return newStr[length]
}
console.log(findLength("Hexaview is Hiring and. yes aff"))

//find 3rd most acccoring characters
function findac(str){
  let map = {}
  for(let el of str){
     map[el] = map[el] +1 || 1
  }
  console.log(map);

}
console.log(findac('aabsrgar'));

//prime number for give range
