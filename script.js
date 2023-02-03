//Declair global variables
let operator = '';
let previousValue = '';
let currentValue = '';

const previousScreen = document.querySelector(".previous");
const currentScreen = document.querySelector(".current");

//keyboard support
window.addEventListener('keydown', handleKeyboard);

//Button eventListeners. 
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (currentValue != "" && previousValue != "") {
        calculate();
        previousScreen.textContent = "";
    };
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    addDecimal();

});

//create clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalculator);
    
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperater(e.target.textContent);
    })
})

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", handleDelete);
    
//Functions for operators, numbers & btns above
function handleNumber(num) {
    if (previousValue !== "" && currentValue !== "" && operator === "") {
        previousValue = "";
        currentScreen.textContent = currentValue;
    }
    if (currentValue.length <= 11) {
        currentValue += num;
        currentScreen.textContent = currentValue;
    }
}
//store value in a variable
function handleOperater(op) {
    if (previousValue === "") {
        previousValue = currentValue;
        operatorCheck(op);
    } else if (currentValue === "") {
        operatorCheck(op);
    } else {
        calculate();
     operator = op;
     currentScreen.textContent = "";
     previousScreen.textContent = previousValue + " " + operator;
    }
}

function operatorCheck(text) {
    operator = text;
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = " ";
    currentValue = "";
}

//create function for + - * ÷ and test in console.log 
function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "x") {
        previousValue *= currentValue;
    } else if (operator === "÷") {
        if (currentValue <= 0) {
            previousValue = "Error";
            displayResults();
            return;
        } 
        previousValue /= currentValue;
    }
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    displayResults();
}

//round numbers
function round(num){
    return Math.round(num * 100000) / 100000;
}

function displayResults() {
    if (previousValue.length <= 11) {
        currentScreen.textContent = previousValue;
    } else {
        currentValue.textContent = previousValue.slice(0, 11) + "...";
    }
    previousScreen.textContent = "";
    operator = "";
    currentValue = "";
}

function clearCalculator() {
    currentValue = "";
    previousValue = "";
    operator = "";
    currentScreen .textContent = "0";
    previousScreen.textContent = "";
}


function addDecimal() {
    if (currentValue.includes(".")) {
        currentValue -= (".")
        currentScreen.textContent = currentValue;
    }
}

function handleDelete() {
    if (currentValue != "") {
        currentValue = currentValue.slice(0, -1);
        currentScreen.textContent = currentValue;
        if (currentValue === "") {
            currentScreen.textContent = "0";
        }
    }
    if (currentValue === "" && previousValue != "" && operator === "") {
        previousValue = previousValue.slice(0, -1);
        currentScreen.textContent = previousValue;
    }
}

function handleKeyboard(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    }
    if (e.key === "Enter" || 
    (e.key === "=" && currentValue != "" && previousValue !="")
    ) {
        calculate();
    }
    if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperater(e.key);
    }
    if (e.key === "*") {
        handleOperater("x");
    }
    if (e.key === ".") {
        addDecimal();
    }
    if (e.key === "Escape") {
        clearCalculator();
    }
    if (e.key === "Backspace") {
        handleDelete()
    }
}

