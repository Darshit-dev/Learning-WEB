//scenario

/**
 * 1.Register
 * 2.send welcome email
 * 3.login
 * 4.Get user data
 * 5.display data
 */
// function wait() {
//   let ms = 3000 + new Date().getTime() //3 send tak kam ko rokana he
//   while (new Date() < ms) { }
// }

function register(callback) {

    setTimeout(() => { //suppose this call takes 1 sec time
        console.log("register end")
        callback();
    }, 2000)
}
function sendmail(callback) {
    setTimeout(() => { //suppose this call takes 1 sec time
        console.log("email send")
        callback();
    }, 1000)
}
function login(callback) {
    setTimeout(() => { //suppose this call takes 1 sec time
        console.log("login end")
        callback();
    }, 3000)
}
function getdata(callback) {
    setTimeout(() => { //suppose this call takes 1 sec time
        console.log("got data")
        callback();
    }, 1000)
}
function displaydata() {

    setTimeout(() => { //suppose this call takes 1 sec time
        console.log("data displayed ")
    }, 1000)
}

//here we can see callback hell
register(() => {
    sendmail(() => {
        login(() => {
            getdata(() => {
                displaydata()
            })
        })
    })
})

console.log("Other application word");