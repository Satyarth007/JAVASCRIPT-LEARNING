// 1. Event Bubbling :- from child to parent 
// 2. Event Capturing :- from parent to child 
// syntax :- addEventListener(event,function,useCapture);
// by default :- False - bubbling | True - capturing 

let x = document.getElementById("b");
let y = document.getElementById("d");

// if we leave the last parameter or set it as false then bubbling will occur 
x.addEventListener('click',btnClick,true);
y.addEventListener('click',divClick,true);
document.body.addEventListener('click',bodyClick,true);

function btnClick(event){
    console.log("button clicked..........");
}
function divClick(event){
    console.log("div clicked..........");
}
function bodyClick(){
    console.log("body clicked..........");
}