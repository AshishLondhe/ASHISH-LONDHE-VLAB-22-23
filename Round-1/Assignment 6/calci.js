// Get references to HTML elements
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
var squareBtn = document.getElementById("squareBtn");
var resultElement = document.getElementById("result");
// Event listeners for buttons
addBtn.addEventListener("click", function () { return performOperation("add"); });
subtractBtn.addEventListener("click", function () { return performOperation("subtract"); });
multiplyBtn.addEventListener("click", function () { return performOperation("multiply"); });
divideBtn.addEventListener("click", function () { return performOperation("divide"); });
squareBtn.addEventListener("click", function () { return performOperation("square"); });
// Function to perform different operations
function performOperation(operation) {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var result = 0;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "square":
            result = num1 * num1;
            break;
    }
    resultElement.textContent = "Result: ".concat(result);
}
