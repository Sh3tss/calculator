function add(){
    console.log("you called the add function");
}
function subt(){
    console.log("you called the subtract function");
}
function mult(){
    console.log("you called the multiply function");
}
function divi(){
    console.log("you called the divide function");
}

function operators(){

}
let input = prompt("choose here");
let choice = input;
switch (choice){
    case add:
        add();
        break;
    case subt:
        subt();
        break;
    case mult:
        mult();
        break;
    case divi:
        divi();
        break;
    
}