//!reverse string
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

//console.log(reverse("darshit"))

//!wether the sring is palidrom or not
//?palindrome : words (number or string) that read the same backwards as well
//ex. radar => radar  , || madam || refer || hi

function isPlr(str) {
  if (str.length <= 1) return true;

  //wether the first and last ele was matching or not
  return str[0] == str.slice(-1) && isPlr(str.slice(1, -1));
}
console.log(isPlr("121"));

//?2nd way
function isPlr2(str) {
  if (str.length <= 1) return true;
  //wether the first and last ele was matching or not
  if (str[0] == str.slice(-1)) return isPlr(str.slice(1, -1));
}

//console.log(isPlr2("1245"));

//!program to flatten array : [1,2,[3,4,5]] = [1,2,3,4,5]

//function flatten(arr) {}


//TODO : by shadab sir
//we will convert string into array



