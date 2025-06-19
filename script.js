let first = null;
let second = null;
let rsecond = false;
let moperator = null;
let display = 0;
const displayValue = document.getElementById('dNumbers');
const btnNumbers = document.querySelectorAll('.numb');
const btnoperators = document.querySelectorAll('.op');

//function to update the display number, if the rsecond become true so it`s the second number all the digits clicked, if the rsecond is false keep adding to the first
btnNumbers.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const digit = event.target.textContent;

        if (display === 0 || rsecond) {
            display = digit;
            rsecond = false;
        } else {
            display += digit;
        }
        displayNumbers();
        console.log("Actual value of the display:", display);
    });
});
console.log("first number is: ", first);
console.log("first number is: ", second);
console.log("first number is: ", rsecond);
console.log("first number is: ", moperator);



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
        return "Cannot divide by zero!!!";
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



