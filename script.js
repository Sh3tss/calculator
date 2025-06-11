let first = null;
let second = false;
let moperator = null;
let display = 0;
const displayValue = document.getElementById('dNumbers');
const btnNumbers = document.querySelectorAll('.numb');
const btnoperators = document.querySelectorAll('.op');


btnNumbers.forEach()(btn => {
    btn.addEventListener('click', (event) => {
        const digit = event.target.textContent;

        if (display === 0 || second) {
            display = digit;
            second = false;
        } else {
            display += digit;
        }
        displayNumbers();
        console.log("Actual value of the display:", display);
    });
});

btnoperators.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        const pressOperator = event.target.textContent;

    })
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


function fNumber(){

}
function ope(){
    
}
function sNumber(){
    
}

