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
        } else if (display.length < 10) {
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
        handleOperatorInput(clickedOperator);
    })
})

// function to make the equal operator work
btnEqual.addEventListener('click', keyEqual);

//creating the function to work with floats
btnDot.addEventListener('click', keyDot);

//function to create the clear button
btnClear.addEventListener('click', keyClear);

//function to the backspace button
btnBackSpace.addEventListener('click', keyBackSpace);

// function to add the keyboard support
window.addEventListener('keydown', (event) =>{
    const keyPressed = event.key;

    if (/\d/.test(keyPressed)) {
        if (display === '0' || rsecond) {
            display = keyPressed;
            rsecond = false;
        } else if (display.length <10) {
            display += keyPressed;
        }
        displayNumbers();
        console.log("Key pressed:", keyPressed);
    } else if (['+', '-', '*', '/'].includes(keyPressed)) {
        handleOperatorInput(keyPressed);
    } else if (keyPressed === '=' || keyPressed === 'Enter') {
        keyEqual();
    } else if (keyPressed === '.' || keyPressed === ',') {
        keyDot();
    } else if (keyPressed === 'Backspace') {
        keyBackSpace();
        event.preventDefault();
    }else if (keyPressed === 'c' || keyPressed === 'Delete'){
        keyClear();
    }
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
        return "Error404";
    }else{
        return a / b;
    }
}

// function to encapsulate the btnequal function to work with the keyboard too
function keyEqual() {
    if (first === null || moperator === null || (rsecond && parseFloat(display) === first)) { 
        return;
    }
    second = parseFloat(display);
    let result = operate(first, second, moperator);

    if (typeof result === 'string' || isNaN(result)) {
        display = (typeof result === 'string') ? result : 'Error';
        displayNumbers();
        first = null;
        second = null;
        rsecond = true;
        moperator = null;
    } else if (result.toString().length > 10) { 
        result = parseFloat(result.toFixed(3));
        display = result;
        displayNumbers();
        first = result;
        second = null;
        rsecond = true;
        moperator = null;
    } else { 
        display = result;
        displayNumbers();
        first = result;
        second = null;
        rsecond = true;
        moperator = null;
    }
}

// function to encapsulate the btndot function to work with the keyboard too
function keyDot() {
    if (!display.includes('.')) {
        display += '.';
        displayNumbers();
    }
}

// function to encapsulate the clear function to work with the keyboard too
function keyClear() {
    first = null;
    second = null;
    rsecond = false;
    moperator = null;
    display = '0';
    displayNumbers();
}

// function to encapsulate the backspace function to work with the keyboard too
function keyBackSpace() {
    if (typeof display !== 'string' || isNaN(parseFloat(display))) {
        display = '0';
    } else if (display === '0') {

    } else if (display.length > 1) {
        display = display.slice(0, -1);
    }else {
        display = '0';
    }
    displayNumbers();
}

// function to encapsulate the btnoperators function to work with the keyboard too
function handleOperatorInput(operatorChar) {
    if (first === null) {
        first = parseFloat(display);
    }
    moperator = operatorChar;
    rsecond = true;
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



