// Jeronimo Augurusa Franco
// JavaScript for the Calculator html part.

// Funtion that enters the sign depending on what button was pressed.
function calculation(sign) {
    // Reads the data in the inputs
    let textBox = document.querySelector("#first-number");
    // Stores first number
    let firstNumber = parseFloat(textBox.value);

    textBox = document.querySelector("#second-number");
    // Stores second number
    let secondNumber = parseFloat(textBox.value);

    let resultNumber = document.querySelector("#result-number");

    // Check if firstNumber or secondNumber are NaN
    if (isNaN(firstNumber) && isNaN(secondNumber)) {
        alert("Invalid Input. Try again");
        return; // Stop execution if either number is NaN
    }

    // Sign checker
    switch(sign) {
        case "+":
            resultNumber.value = firstNumber + secondNumber;
            break;
        case "-":
            resultNumber.value = firstNumber - secondNumber;
            break;
        case "*":
            resultNumber.value = firstNumber * secondNumber;
            break;
        case "/":
            resultNumber.value = (firstNumber / secondNumber);
            // If infinite float, just fix it to the first two digits
            if(resultNumber.value % 1 !== 0) resultNumber.value = (firstNumber / secondNumber).toFixed(2);
            break;
        case "^":
            resultNumber.value = firstNumber*firstNumber;
            break;
    }

    // Call the history function to add all THIS calculation
    addToHistory(firstNumber, secondNumber, resultNumber.value, sign);
    console.log(firstNumber, secondNumber);

    // Clear the two inputs
    clearInputs('#first-number', '#second-number');
}

// Add to history the previous calculation
function addToHistory(first, second, res, sign) {
    // Select the list to add elements later
    let historyList = document.querySelector('ul');

    // Create a new list item element
    let newListItem = document.createElement('li');

    // Put the name in the new list item element
    switch(sign){
        case '^':
            // Case for the square root
            newListItem.textContent = `${first} ${sign} 2 = ${res}`;
            break;
        default:
            newListItem.textContent = `${first} ${sign} ${second} = ${res}`;
            break;
    }

    // newListItem.style.listStyleType = "none";
    // Add that list item element to the list
    historyList.appendChild(newListItem);
}

// Clear the inputs
function clearInputs(x, y) {
    document.querySelector(x).value = '';
    document.querySelector(y).value = '';
}