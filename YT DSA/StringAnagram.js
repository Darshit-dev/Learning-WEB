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
        console.log("👈", counter);
    }
    return true;
}


function anagram(str, str2) {
    if (str.length !== str2.length) return false;

    let arr = Array(26).fill(0)
    let i = 0
    while (i < str.length) {
        arr[str[i].charCodeAt() - 97] += 1
        i++
    }
    console.log(arr);

    while (i < str.length) {
        arr[str[i].charCodeAt() - 97] += 1
        i++
    }

    let j = 0
    while (j < str2.length) {
        arr[str2[j].charCodeAt() - 97] -= 1
        j++
    }

    k = 0
    while (k < arr.length) {
        if (arr[k] == 0) {
            k++
        } else {
            return false
        }

    }
    return true

}


const check = anagram("aab", "aba")
console.log(check);


//approach
/*
 1.Ek aaray lena
 2.Usme 26 size rkhna
 3.Mtlb a 0 index pe jayega ar z 25th index m
 4.Fr wo string di hai na
 5.Uske uske index k hisab se rkhte jana wo array m
 6.Ar increment krte jana jitne bhi no of times wo string m aayega
 7.Fr jo dusri string rhegi usme agr wo character mil gya to array m decrement krte jana
 8.Fr last m check krnna aaray m sab 0 hai ki ni
 9.Agr 0 hai to anagram hai
 10. Else ni hai to
 */