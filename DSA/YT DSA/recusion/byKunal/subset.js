//!skip 'a' char from string
//?by using params
function skipChar(p,up) {
    if(up ==''){
        console.log(p);
        return
    }
    let ch = up[0]
    if(ch=='a'){//skip it
        skipChar(p,up.slice(1))
    }else{//add it
        skipChar(p+ch,up.slice(1))
    }

}
//skipChar('',"baccad")
//?returning a string
function skipAchar(up) {
    if(up ==''){
        return "";
    }
    let ch = up[0]
    if(ch=='a'){//skip it
       return skipAchar(up.slice(1))
    }else{//add it
        return ch + skipAchar(up.slice(1))
    }

}
console.log(skipAchar("baccad"))


