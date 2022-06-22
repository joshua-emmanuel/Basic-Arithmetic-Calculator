let firstNumber = prompt("Input first number");
let secondNumber = prompt("Input second number");

let operator = prompt("Choose an operator from the list below: \n+, -, *,  /, %");

if (operator =="+") {
    result = parseInt(firstNumber) + parseInt(secondNumber);
}
else if (operator == "-") {
    result = parseInt(firstNumber) - parseInt(secondNumber);
}
else if (operator == "*") {
    result = parseInt(firstNumber) * parseInt(secondNumber);
}
else if (operator == "/") {
    result = parseInt(firstNumber) / parseInt(secondNumber);
}
else if (operator == "%") {
    result = parseInt(firstNumber) % parseInt(secondNumber);
}
else {
    alert("Your input is invalid. Please refresh your browser, read the instructions and try again");
}

alert(firstNumber + " " + operator + " " + secondNumber + " = " + result);
alert("Refresh your browser to try out another calculation")