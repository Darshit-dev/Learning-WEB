function greeting(a, b) {
  console.log(a + b)
}

function processUserInput(callback) {
  let a = 2
  let b = 5

  callback(a, b);
}

processUserInput(greeting);

function f2(a, b) {
  console.log(a + b)
}
function f1(f2) {
  return new Promise((resolve, reject) => {
    let a = 2, b = 5
    resolve(f2(a, b))
  })
}
f1(f2).then(console.log("done"))
  .catch()

