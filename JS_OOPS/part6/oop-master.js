
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function (params){
        return `${this.make} car got started in ${this.year}`;
    }
}
console.log(car.start());

//Functional constructors
function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person("John", 20)
//console.log(john.name)

function Animal(type){
    this.type = type
}
//Example of prototype chain, e.g. injecting a functiom
Animal.prototype.speak = function(){
    return`${this.type} makes a sound`
}
Array.prototype.hitesh = function(){
    return `Custom method ${this}`
}
let myArray = [1,2,3];
console.log(myArray.hitesh())

class Vehicle {
    constructor (make, model){
        this.make = make
        this.model = model
    }

    //methods - functions in a class - don't need the function keyword
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

//Inheritance
class Car extends Vehicle {
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}
let myCar = new Car("Toyota", "Corola")
console.log(myCar.start());
console.log(myCar.drive());

//Encapsulation: restricting direct access to the object data
class BankAccount{
    #balance = 0;
    //to access the above variable, you'll need a custom method

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance())

//Abstraction: hides the complex implementation details

class CoffeeMachine{
    start(){
        //cal DB
        //filter value
        return `Starting machine...`
    }
    brew(){
        //complex calculation
        return `Brewing coffee`;
    }
    pressStartButton(){
       let msgone = this.start();
       let msgTwo = this.brew();
       return `${msgone} + ${msgTwo}`;
    }
}
let myMachine = new CoffeeMachine();
//console.log(myMachine.start());
//console.log(myMachine.brew());
console.log(myMachine.pressStartButton());

//Polymorphism: the ability of something to have or to be displayed in more than one form

class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}


let bird = new Bird();
let penguin = new Penguin();
//console.log(bird.fly());
//console.log(penguin.fly());

// Static methods
class Calculator{
    static add (a,b){
        return a + b
    }
}

/* Only class can call static methods, e.g. if you try the following, you'll get an error:
let miniCalc = new Calculator();
console.log(miniCalc.add(2,3));
*/
console.log(Calculator.add(2,3))

//Getters & Setters

class Employee{

    constructor(name, salary){
        if (salary < 0){
            throw new Error("Salary cannot be negative");
        }
        this.name = name
        this._salary = salary
    }
    //name needs to match
    get salary(){
        return `You are not allowed to see salary`;

    }

    set salary(value){
        if (value < 0){
            console.log("Invalid salary")
        }
        else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice, 50000")
console.log(emp.salary);

/* you can also just make salary private, 
e.g. #salart, the getters and setters code will remain the same 
because when you call the method with underscore it will still show the salary even though you don't mean for it to
but getters and setters is a way to add control on who can get and set the values */