// Function to find the greatest number among three
function findGreatestNumber(num1, num2, num3) {
    let greatest;

    if (num1 >= num2 && num1 >= num3) {
        greatest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        greatest = num2;
    } else {
        greatest = num3;
    }

    return greatest;
}

// Prompt the user for three numbers
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

// Check if inputs are valid numbers
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    // Find and display the greatest number
    let greatestNumber = findGreatestNumber(number1, number2, number3);
    console.log("The greatest number is: " + greatestNumber);
} else {
    console.log("Please enter valid numbers.");
}