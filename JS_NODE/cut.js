let person = 'Hue'

if (true) {
    let person = 'Haley'

    if (true) {
        let person = 'Harry'
        console.log(person)
    }
}
console.log(person)

///
var EmployeeNumber = {
    company: 'CutShort.io'
}
var emp = Object.create(EmployeeNumber);
delete emp.company
console.log(emp.company);

function lane(x, y) {
    console.log("Which is the " + x + " side");
    return y;
}

console.log(lane("left", 6) / lane("middle", 2) / lane("right", 3));



///

class Calc {
    constructor() {
        this.count = 0
    }

    increase() {
        this.count++
    }
}

const calc = new Calc()
new Calc().increase()
console.log(calc.count)

////
let randomValue = { name: "Prabhat" }
randomValue = 23

if (!typeof randomValue === "string") {
    console.log("It's not a string!")
} else {
    console.log("Yay it's a string!")
}

////
let gradeSheet = function (marksObtained, totalMarks) {
    let percentage = (marksObtained / totalMarks) * 100
    if (percentage >= 90) {
        return "Grade E"
    }

    else if (percentage >= 80) {
        return "Grade A+"
    }

    else if (percentage >= 70) {
        return "Grade A"
    }

    else if (percentage >= 60) {
        return "Grade B+"
    }

    else if (percentage >= 50) {
        return "Grade B"
    }

    else if (percentage >= 40) {
        return "Grade C+"
    }

    else if (percentage >= 30) {
        return "Grade C"
    }

    else {
        return "Fail"
    }
}

console.log(gradeSheet(430, 500))

//

const userDetails = ''

const userID = userDetails[0]

if (' ') {
    console.log('User allowed to login');
} else {
    console.log('Login failed');
}

//
let s = new Set();
s.add(45).add(45).add(10).add(30).add(30);
console.log(s.size);

///
function whatAFunc() {
    this.a = 365;

    return 450;
}

var x = new whatAFunc();
console.log(x.a);



function covertCelsiusToFahrenheit(celsius) {
    var tempInCelsius = celsius;
    var CToF = tempInCelsius * 9 / 5 + 32;
    var temperature = tempInCelsius + '\xB0C is ' + CToF + ' \xB0F.';
    console.log(temperature);
}

function covertFahrenheitToCelsius(fahrenheit) {
    var TempInfahreheit = fahrenheit;
    var FToC = (TempInfahreheit - 32) * 5 / 9;
    var temperature = TempInfahreheit + '\xB0F is ' + FToC + '\xB0C.';
    console.log(temperature);
}

covertCelsiusToFahrenheit(69);
covertFahrenheitToCelsius(51);

///

function* generator(i) {
    yield i;
    yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);

///
var myClass1 = function () {
    return new Number(1);
};

var myClass2 = function () {
    return Number(2);
};

console.log(
    new myClass1 instanceof myClass1,
    new myClass2 instanceof myClass2
);

//
var a = [1, 2, 3, 4, 5, null];
var b = a.map(item => {
    if (item) {
        return item;
    }
});
console.log(b);

///
console.log(
    new Boolean() == true,
    new Boolean("") == true,
    new Boolean("0") == true,
    new Boolean("1") == true,
    new Boolean("true") == true
);


//
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);
console.log(
obj.hasOwnProperty('1'),
obj.hasOwnProperty(1),
set.has('1'),
set.has(1),
)

////////////////////////////////
(function(){
    var arrayNumb = [6, 8, 14, 20, 26, 48];
    Array.prototype.sort = function(a,b){
    return a - b;
    };
    arrayNumb.sort();
    console.log(arrayNumb);
    })();
    
    (function(){
    var numberArray = [6, 8, 14, 20, 26, 48];
    numberArray.sort(function(a,b){
    if(a == b){
    return 0;
    }else{
    return a < b ? -1 : 1;
    }
    });
    console.log(numberArray);
    })();
    
    (function(){
    var numberArray = [6, 8, 14, 20, 26, 48];
    numberArray.sort(function(a,b){
    return a-b;
    });
    console.log(numberArray);
    })();

    ///

    (function test() {
        console.log(
        function () {} instanceof Object,
        function () {} instanceof Function,
        Function instanceof Object,
        Object instanceof Function
        );
        })();

