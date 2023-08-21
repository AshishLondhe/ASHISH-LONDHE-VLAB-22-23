// Get references to HTML elements
const inputString = document.getElementById("inputString");
const sliceBtn = document.getElementById("sliceBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const uppercaseBtn = document.getElementById("uppercaseBtn");
const concatenateBtn = document.getElementById("concatenateBtn");
const outele = document.getElementById("output");

// Event listeners for buttons
sliceBtn.addEventListener("click", sliceString);
lowercaseBtn.addEventListener("click", convertToLowercase);
uppercaseBtn.addEventListener("click", convertToUppercase);
concatenateBtn.addEventListener("click", concatenateStrings);

// Function to perform string slicing
function sliceString() {
  const startIndex = parseInt(prompt("Enter start index:"));
  const endIndex = parseInt(prompt("Enter end index:"));
  
  if (!isNaN(startIndex) && !isNaN(endIndex)) {
    const slicedString = inputString.value.slice(startIndex, endIndex);
    outele.textContent = `Sliced String: ${slicedString}`;
  }
}

// Function to convert to lowercase
function convertToLowercase() {
  const lowercaseString = inputString.value.toLowerCase();
  outele.textContent = `Lowercase: ${lowercaseString}`;
}

// Function to convert to uppercase
function convertToUppercase() {
  const uppercaseString = inputString.value.toUpperCase();
  outele.textContent = `Uppercase: ${uppercaseString}`;
}

// Function to concatenate strings
function concatenateStrings() {
  const secondString = prompt("Enter the second string for concatenation:");
  if (secondString !== null) {
    const concatenatedString = inputString.value + secondString;
    outele.textContent = `Concatenated String: ${concatenatedString}`;
  }
}
