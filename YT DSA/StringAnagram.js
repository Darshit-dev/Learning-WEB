//string Anagram
//'hello' --> 'llheo'
//'darshit'--> 'atdirsh'
//?what is Anagram
//condition to check AnaGram
//both string's length should be same
//both string should contain same characters but in different arrangment

//{h:0,e:0,1:0,0:0} --- if that char in present in 2nd string we decrement by one after every matches

function isAnagram(string1, string2) {

    if (string1.length !== string2.length) return false;

    let counter = {}
    for (const letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;

    }
    
    console.log(counter);
    for (const item of string2) {
        if (!counter[item]) {
            return false;
        }
        counter[item] += -1
        console.log("👈",counter);
    }
    return true;
}
const check = isAnagram("aab", "aba")
console.log(check);