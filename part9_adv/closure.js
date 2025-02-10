function outer (){
    let counter = 4
    return function(){
        counter ++
        return counter
    }
}

let increment = outer()
console.log(increment());
console.log(increment());
console.log(increment()); //it will keep the value in memory, so output is 5,6,7