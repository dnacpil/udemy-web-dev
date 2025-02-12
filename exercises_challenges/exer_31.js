// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add(a,b) {
    return a + b;
}

// Subtract small value from larger one
function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

// Divide larger value by small
function divide(a,b) {
    if (a > b) {
        return a / b
    }
    else {
        return b / a
    }
}

// Increase value of a by 1
function increment(a,b) {
    return a++;
    return b++;
}

// Decrease value of b by 1
function decrement(a,b) {
    return a--;
    return b--;
}

// Divide larger value by small to find the reminder
function reminder(a,b) {
    return b%a;
}
