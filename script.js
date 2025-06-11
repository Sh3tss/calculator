let first = 0;
let second = 0;
let moperator;

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

