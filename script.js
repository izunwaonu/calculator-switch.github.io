// program for a simple calculator using switch statement 

// taking the first operand 
const num1 = parseFloat(prompt('Enter first number: '));
// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the secondoperand input

const num2 = parseFloat(prompt('Enter second number: '));
let ans;

switch(operator) {
    case '+':
        ans = num1 + num2;
        document.getElementById("result").innerHTML = `${num1} + ${num2} = ${ans} `;
        break;

    case '-':
         ans = num1 - num2;
         document.getElementById("result").innerHTML =`${num1} - ${num2} = ${ans}`;
        break;

    case '*':
         ans = num1 * num2;
         document.getElementById("result").innerHTML = `${num1} * ${num2} = ${ans}`;
        break;

    case '/':
         ans = num1 / num2;
         document.getElementById("result").innerHTML =`${num1} / ${num2} = ${ans}`;
        break;

    default:
        document.getElementById("result").innerHTML = 'Invalid operator';
        break;
}
