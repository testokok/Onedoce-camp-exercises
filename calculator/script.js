function calcul(num1, num2, oper1) {
    let result;
    if(oper1 === '+') {
        result = num1 + num2;
    } else if(oper1 === '-') {
        result = num1 - num2;
    } else if(oper1 === '*') {
        result = num1 * num2;
    } else if(oper1 === '/') {
        result = num1 / num2;
    } else {
        result = 'Put +, -, * or /';
    }
    console.log(result);
};

calcul(12, 3, '+');

