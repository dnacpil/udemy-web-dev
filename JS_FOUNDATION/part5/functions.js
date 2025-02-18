/* 
1. Write a function named makeTea that takes one parameter, typeOfTea,
and returns a string like "Making green tea" when called "green tea". 
Store the result in a variable named teaOrder.
*/
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea")

/* 
2. Create a function named orderTea that takes one param - teaType.
Inside this function, create another function named confirmOrder
that returns a message like `Order confirmed for chai`
Call confirmOrder from within teaOrder and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai";
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("peppermint tea");
console.log(orderConfirmation); 

/* 
3. Write an arrow function named calculateTotal that takes two params:
price and quantity.
The funtion should return the total cost by multiplying price and quantity.
Store the result in a variable named totalCost.
*/

/* let calculateTotal = (price, quantity) => {
    let totalCost = price * quantity;
    return totalCost;
}

calculateTotal(2,3); */

//OR put it all in one line (don't break the line) so it gives an implicit return

const calculateTotal = (price, quantity) => price * quantity

let totalCost = calculateTotal(499 * 9);

/* 
4. Write a function named processTeaOrder 
that takes another function makeTea as a param 
and calls it with the argument earl grey.
Return the result of calling makeTea.
*/
function makeTea(someTypeOfTea){
    return `maketea: ${someTypeOfTea}`
}
function processTeaOrder(teaFunction){ //remember that the param is just a placeholder so you don't need to specify makeTea, think of it as a nickname
    return teaFunction("earl grey")
}

let order = processTeaOrder(makeTea);
console.log(order);


/* 
5. Write a function named createTeaMaker that returns another function.
The returned function should take 1 param - teaType, and return a message like
"Making green tea."
Store the returned function in a variable named named teaMaker 
and call it with "green tea".
*/

function createTeaMaker(){
    return function anotherFunction(teaType){
        return `Making${teaType}`;
    };
}let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
// Or let result = teaMaker("green tea")
//console.log(result)

