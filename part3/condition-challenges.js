//1. heck if a number is greater than another number:

/* let num1 = 5;
let num2 = 8;
console.log("I am a regular upper code");
if (num1> num2){
console.log("num1 is greater than num2")
}
else{
    console.log("num1 is not greater than num2")
}
console.log("I am a regular bottom code"); */

//2. Check if a string is equal to another string:
let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername){
    console.log("Pick another username.");
}
else{
    console.log("Good to go");
}

//3. Check if a variable is a number or not
let score = 44;

if(typeof score === 'number'){
    console.log("yass bitch, it's a number")
}
else{
    console.log("Nah dude, it's not a number")
}

//4. Check if a boolean value is true or false
let isTeaReady = false;

if(isTeaReady){
    console.log("Tea is ready, madam.");
}
else{
    console.log("Apologies, it is not yet ready.")
}

//5. Check is array is empty or not

let items = [];

console.log(items.lenth);

if(items.length === 0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}