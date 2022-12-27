// DOM mouse events 
let d=document.getElementById("d1");
function display(){
    console.log("MOUSE EVENTS !");
}
// left click 
d.addEventListener('click',display);
// right click
d.addEventListener('contextmenu',display);
// double click
d.addEventListener('dblclick',display);
// mouse down 
d.addEventListener('mousedown',function(){
    console.log("mouse down");
});
// mouse up
d.addEventListener('mouseup',function(){
    console.log("mouse up");
});

// mouse over 
d.addEventListener('mouseover',function(){
    console.log("mouse over");
});