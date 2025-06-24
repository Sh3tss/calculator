let first = null;
let second = null;
let rsecond = false;
let moperator = null;
let display = '0';
const displayValue = document.getElementById('dNumbers');
const btnNumbers = document.querySelectorAll('.numb');
const btnOperators = document.querySelectorAll('.op');
const btnEqual = document.getElementById('equal');
const btnDot = document.getElementById('dot');
const btnBackSpace = document.getElementById('bspc');
const btnClear = document.getElementById('c');

//function to update the display number, if the rsecond become true so it`s the second number all the digits clicked, if the rsecond is false keep adding to the first
btnNumbers.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const digit = event.target.textContent;

        if (display === '0' || rsecond) {
            display = digit;
            rsecond = false;
        } else {
            display += digit;
        }
        displayNumbers();
        console.log("Actual value of the display:", display);
    });
});

//function to make the operators work
btnOperators.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        const clickedOperator = event.target.textContent;
        if (first === null) {
            first = parseFloat(display);
        }
        moperator = clickedOperator;
        rsecond = true;
    })
})

// function to make the equal operator work
btnEqual.addEventListener('click', (event) => {
    second = parseFloat(display);
    let result = operate(first, second, moperator);
    display = result;
    displayNumbers();
    first = result;
    second = null;
    rsecond = true;
    moperator = null;
})

//creating the function to work with floats
btnDot.addEventListener('click', (event) => {
    if (!display.includes('.')) {
        display += '.';
        displayNumbers();
    }
})

//function to create the clear button
btnClear.addEventListener('click', (event) => {
    first = null;
    second = null;
    rsecond = false;
    moperator = null;
    display = '0';
    displayNumbers();
})

//function to the backspace button
btnBackSpace.addEventListener('click', (event) => {
    if (typeof display !== 'string' || isNaN(parseFloat(display))) {
        display = '0';
    } else if (display === '0') {

    } else if (display.length > 1) {
        display = display.slice(0, -1);
    }else {
        display = '0';
    }
    displayNumbers();
})


function displayNumbers(){
    displayValue.textContent = display;
}
displayNumbers();

function add(a, b){
    return a + b;
}
function subt(a, b){
    return a - b;
}
function mult(a, b){
    return a * b;
}
function divi(a, b){
    if (b === 0){
        return "Cannot divide by zero!";
    }else{
        return a / b;
    }
}



function operate(first, second, moperator){
    switch (moperator){
        case '+':
            return add(first, second);
        case '-':
            return subt(first, second);
        case '*':
            return mult(first, second);
        case '/':
            return divi(first, second);
    }
}



