// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression and display the result
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Using eval here for simplicity, not recommended for production use
    } catch (e) {
        display.value = 'Error';
    }
}
