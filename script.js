//Declair global variables
let operator = '';
let previousValue = '';
let currentValue = '';

const previousScreen = document.querySelector(".previous");
const currentScreen = document.querySelector(".current");

//keyboard support

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
        currentValue -= ".";
    }
}