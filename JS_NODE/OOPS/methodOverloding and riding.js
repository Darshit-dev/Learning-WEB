//method overloading and method overriding

class Vehicle{
    drive(){
        console.log("you drive fom veical");
    }
}

class Car extends Vehicle{
    drive(){
        console.log("you drive the car");
    }
}
    


let car = new Car();
console.log(car.drive()); 
