//closures - function with it's lexical scope forms a closures



function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  console.log(add5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  