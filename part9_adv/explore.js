/* 
"Time" functions
Run the code below and see how the first function doesn't execute straightaway 
because of the "pause" or delay you added - example of async; code isn't ran in sequence
*/
function sayHello() {
  console.log("I would like to say hello");
}
 //setTimeout() needs 2 params, 1 function then the time
setTimeout(() => {
  sayHello();
}, 4000);

console.log("chaicode");

for(let index = 0; index < 10; index++){
    console.log(index);
}