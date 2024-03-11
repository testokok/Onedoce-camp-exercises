//Exercise 1
function greet(name) {
    console.log('Hi, ', name, '!');
}

greet('Oksana');

//Exercise 2
function isEven(num) {
    let result = num % 2;
    result = 1 ? console.log('False') : console.log('True');
}

isEven(5);

//Exercise 3
function mathOperation(num1, num2, callbackOperation) {
    let result = callbackOperation(num1, num2);
    console.log('Result: ', result);
}

function add(n1, n2) {
    return n1 + n2;
}
function diff(n1, n2) {
    return n1 - n2;
}
function mult(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}

mathOperation(10, 5, mult);

//Exercise 4
let arraysOfNumbers = [1,2,3,4,5];
function applyFunction(functionName, arraysOfNumbers) {
    return functionName(arraysOfNumbers);
}

function add() {
    for(let i = 0; i < arraysOfNumbers.length; i++) {
        arraysOfNumbers.forEach(function(number) {
            console.log('+', arraysOfNumbers[i], '+');
        })
    }
}

applyFunction(add, arraysOfNumbers);
