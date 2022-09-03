//scenario

/**
 * 1.Register
 * 2.send welcome email
 * 3.login
 * 4.Get user data
 * 5.display data
 */
function wait(s) {
    let ms = s * 1000 + new Date().getTime() //3 send tak kam ko rokana he
    while (new Date() < ms) { }
}

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //suppose this call takes 1 sec time
            console.log("register end")
            resolve();
        }, 2000)
    })
}

function sendmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //suppose this call takes 1 sec time
            console.log("email send")
            resolve()
        }, 3000)
    })

}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //suppose this call takes 1 sec time
            console.log("login end")
            resolve()
        }, 1000)
    })

}
function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //suppose this call takes 1 sec time
            console.log("got data")
            resolve()
        }, 1000)
    })

}
function displaydata() {
    return new Promise((resolve, reject) => {

        setTimeout(() => { //suppose this call takes 1 sec time
            console.log("data displayed ")
            resolve()
        }, 1000)
    })
}

//here we can see callback hell
// register(() => {
//     sendmail(() => {
//         login(() => {
//             getdata(() => {
//                 displaydata()
//             })
//         })
//     })
// })


//!Promise chaining created
//?--one more batter way then promise chaining is that async await
// register() //data = resolve ke andara jo likhte he vo hame mil jata he yaha
//     .then(sendmail)
//     .then(login)
//     .then(getdata)
//     .then(displaydata)
//     .then(() => { console.log("everythig is ok") })
//     .catch((err) => {console.log(err);})

function f1() {
    console.log("1");
    register().then(() => { console.log("2 from f1") })
    wait(1);
    console.log("after 1 sec");
    wait(1)
    console.log("after 2 sec");
    wait(1)
    console.log("after 3 sec");
    console.log("10");

}

function f2() {
    console.log("1");
    register().then(() => { console.log("2 from f2") })
    console.log("last");
}


//!async-await
// async function auth() {
//     await register(); //jab tak register call end nahi hota he tab tak hame age nai badhna he
//     await sendmail();
//     await login()
//     await getdata();
//     await displaydata();
// }
// auth();
// console.log("Other application word");