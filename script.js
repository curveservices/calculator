//create function for display (scorecard rps??) 
function display()
//Button Event Listeners
const buttons = document.querySelectorAll('button');

buttons.forEach((button)=> {
    button.addEventListener('click', () =>{
        userSelection = button.dataset.type;
        display(userSelection)
        console.log(userSelection)
    })
})
//Functions to populate the display, store value in a variable
//somewhere


//temporary prompts to test
// let a = prompt('enter a number');
// let b = prompt('enter another');
// let c = prompt('select an operator')
// let num1 = parseInt(a);
// let num2 = parseInt(b);
// let operator = c;
// console.log('num1',num1);
// console.log('num2', num2)
// console.log('operator used', operator)
//temporary prompts to test

//OPERATORS
//create functions for + - * % and test in console.log 
function add(num1, num2) {
    let addValue = (num1 + num2);
    console.log('add', addValue);
    //return addValue
}
function subtract(num1, num2) {
    let minusValue = (num1 - num2);
    console.log('minus', minusValue);
    //return minusValue    
}
function multiply(num1, num2) {
    let timesValue = (num1 * num2);
    console.log('times', timesValue) ;
    //return timesValue
}
function divide(num1, num2) {
    let divideValue = (num1 / num2);
    console.log('divide', divideValue); 
    //return divideValue
};
//TODO - fix bug of float input = NaN decimals
//OPERATORS

//2 Create function 'operate' that takes an operator & 2 
//numbers then calls one of the above functions on the numbers
//Switch statement?
function operate(operator, num1, num2) {
    switch(operator) {
         case "+":
             console.log("passing through switch +")
             add(num1, num2);
             break;
         case '-':
             console.log('passing through switch -')
             subtract(num1, num2);
             break;
         case 'x':
             console.log('passing through switch x')
             multiply(num1, num2);
             break;
//Display snarky error message if the user tries to divide by 0
         case '/':
             console.log('passing through switch /')
             if(num2 === 0) //return ( "Don't be stupid")
                 console.log( "Don't be stupid");
             else divide(num1, num2);
             break;
         default:
             alert("Error didn't recieve operator ");
    }
} 
operate(operator,num1,num2)


