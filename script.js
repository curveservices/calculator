//create functions for + - * % and tesr in console.log

const add = function(a,b) {
    return a+b
};
console.log(add);

const minus = function(a,b) {
    return a - b;
};
console.log(minus);

const multiply = function(array) {
    return array.length
    ? array.reduce((times, nextItem) => times * nextItem )
    :0;
};
console.log(multiply);
//Create a new function 'operate' that takes an operator & 2 
//numbers then calls one of the above functions 
//on the numbers

//create basic HTML calc w/btns for each digit, all above ops 
//An 'equals' btn, A display & a clear(AC) btn.

//create function for display (scorecard rps??) 