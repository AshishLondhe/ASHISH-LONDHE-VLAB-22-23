// Get references to HTML elements
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const subtractBtn = document.getElementById("subtractBtn") as HTMLButtonElement;
const multiplyBtn = document.getElementById("multiplyBtn") as HTMLButtonElement;
const divideBtn = document.getElementById("divideBtn") as HTMLButtonElement;
const squareBtn = document.getElementById("squareBtn") as HTMLButtonElement;
const resultElement = document.getElementById("result") as HTMLParagraphElement;

// Event listeners for buttons
addBtn.addEventListener("click", () => performOperation("add"));
subtractBtn.addEventListener("click", () => performOperation("subtract"));
multiplyBtn.addEventListener("click", () => performOperation("multiply"));
divideBtn.addEventListener("click", () => performOperation("divide"));
squareBtn.addEventListener("click", () => performOperation("square"));

// Function to perform different operations
function performOperation(operation: string) {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  let result = 0;

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

  resultElement.textContent = `Result: ${result}`;
}
