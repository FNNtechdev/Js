// Simple Calculator

let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    alert("Error: Division by zero");
  } else {
    result = num1 / num2;
  }
} else {
  alert("Invalid operator");
}

if (result !== undefined) {
  alert("Result: " + result);
}
