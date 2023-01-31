//Declair global variables
let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function () {
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector('.decimal');

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

   //button Event Listeners. populate the display screen,
   //store value in a variable
    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperater(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    //create clear button
    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = 0;
    })

    equal.addEventListener("click", function(){
        calculate();
    })
})


// //function for operators and numbers selection
function handleNumber(num){
    if(currentValue.length <= 7) {
        currentValue += num;
    }
}

function handleOperater(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

//create function for + - * ÷ and test in console.log 
function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else{
        previousValue /= currentValue;
    }
    console.log(previousValue)
}






















// let num1 = 0;
// let tempNum1Array = [];
// let num2 = 0;
// let tempNum2Array = [];
// let savedFirstValue = 0;
// let operator = '';
// let tempOperatorArray = [];


//OPERATORS
//create functions for + - * % and test in console.log 
// function add(num1, num2) {
//     let addValue = (num1 + num2);
//     let round = Math.round((addValue + Number.EPSILON) *100) /100;
//     round = round.toFixed(2);
//     console.log('add',round);
//     const calcDisplay = document.querySelector('#display');
//     calcDisplay.textContent = round;
// }
// function subtract(num1, num2) {
//     let minusValue = (num1 - num2);
//     let round = Math.round((minusValue + Number.EPSILON) *100) /100;
//     round = round.toFixed(2);
//     console.log('add',round);
//     const calcDisplay = document.querySelector('#display');
//     calcDisplay.textContent = round;
// }
// function multiply(num1, num2) {
//     let timesValue = (num1 * num2);
//     let round = Math.round((timesValue + Number.EPSILON) *100) /100;
//     round = round.toFixed(2);
//     console.log('add',round);
//     const calcDisplay = document.querySelector('#display');
//     calcDisplay.textContent = round;
// }
// function divide(num1, num2) {
//     let divideValue = (num1 / num2);

//     //ERROR check for division by 0
//     if (divideValue== "Infinity") {
//         return alert("Error! cannot divide by 0");
//     } else {
//     let round = Math.round((divideValue + Number.EPSILON) *100) /100;
//     round = round.toFixed(2);
//     console.log('add',round);
//     const calcDisplay = document.querySelector('#display');
//     calcDisplay.textContent = round;
//    }
//};
//TODO - fix bug of float input = NaN decimals
//OPERATORS

//Create function 'operate' take operator & 2 nums & calls above functions
//Switch statement
// function operate(operator, num1, num2) {
//     switch(operator) {
//          case "+":
//              console.log("passing through switch +")
//              add(num1, num2);
//              break;
//          case '-':
//              console.log('passing through switch -')
//              subtract(num1, num2);
//              break;
//          case 'x':
//              console.log('passing through switch x')
//              multiply(num1, num2);
//              break;
//          case '/':
//              console.log('passing through switch /')
//              divide(num1, num2);
//              break;
//          default:
//              alert("Error didn't recieve operator ");
//     }
// } 




// function getOperatorSelection() {
//     const operatorButtons = document.querySelectorAll(".operator");
//     operatorButtons.forEach((button) => {
//         button.addEventListener('click', ()=> {
//             operator = button.getAttribute("value")
//             tempOperatorArray.push(operator);
//             //get decimal btn if disabled from prev click
//             document.getElementById("decimal").disabled = false;
            
//             //check multi operand exsists and needs calculating
//             if ((tempNum1Array != "") && (tempNum2Array != "")) {
//                 const calcDisplay = document.querySelector("#display");
//                 num1 = tempNum1Array.join("");
//                 num2 = tempNum2Array.join("")
//                 num1 = parseFloat(num1);
//                 num2 = parseFloat(num2);
//                 let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
//                 operate(tempOperator,num1,num2);
//                 let tempStringValue = calcDisplay.textContent;
//                 tempNum1Array = [];
//                 tempNum2Array = [];
//                 num1 = 0;
//                 num2 = 0;
//                 tempNum1Array.push(tempStringValue);
//                 num1 = tempNum1Array.join("");
//             }
//         })
//     })
// }
// //function for numbers
// function number()




// //somewhere

// //DOM Clear button location.reload
// const clearBtn = document.querySelector(".clear");
// clearBtn.addEventListener('click', () => {location.reload(); });

// //DOM for +/-  button append to numArray1 and display out
// const signbtn = document.querySelector('.sign');
//     signbtn.addEventListener('cleck', ()=> {
//         if (operator == "") {
//             const calcDisplay = document.querySelector('#display');
//             console.log('negative button registered');
//             tempNum1Array.splice(0, 1. (tempNum1Array[0]* -1).toString());
//             console.log('append the array with a negative number: ', tempNum1Array);
//             num1 = tempNum1Array.join("");
//             calcDisplay.textContent = num1
//         } else {
//         //apend +/- to num2array and display out
//         const calcDisplay = document.querySelector('#display');
//         console.log('negative button registered');
//         tempNum2Array.splice(0, 1, (tempNum2Array[0] * -1).toString());
//         console.log("append the array with negative number on num2: ", tempNum2Array);
//         num2 = tempNum2Array.join("");
//         calcDisplay.textContent = num2;
//         }
//     })

// //DOM for decimal button
// const decimalBtn = document.querySelector("#decimal");
// decimalBtn.addEventListener('click', ()=> {
//     console.log('decimal pressed');
//     let decimalBtn = ".";
//     const calcDisplay = document.querySelector('#display');
//     if (operator == "") {
//         const calcDisplay = document.querySelector('#display');
//         tempNum1Array.push(decimalBtn);
//         num1 = tempNum1Array.join("");
//         calcDisplay.textContent = num1;
//         document.getElementById("decimal").disabled = false;
//     } else {
//         const calcDisplay = document.querySelector('#display');
//         tempNum2Array.push(decimalBtn);
//         num2 = tempNum2Array.join("");
//         calcDisplay.textContent = num2;
//         document.getElementById("decimal").disabled = true;

//     }
// })
   


