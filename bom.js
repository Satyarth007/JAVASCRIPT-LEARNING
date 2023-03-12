// BOM :- Browser Object Model
//---------------------------- 

// - BOM is used to interact with the browser.
// - Window object represents a window in browser.
// - An object of window is automaticallyt created by the browser.
// - All global JS objects , functions and variable with 'var' keyword automatically becomes members of window object.
// - Global variables are properties of windpw object.
// - Global functions are methods of window objects.

// ex1:- both log statements output same value.
var x="hi......";
console.log(x);
console.log(window.x);

// ex2:- both function calls are same.
function xyz(){
    console.log("ia m global window function!");
}
xyz();
window.xyz();

// some methods of window object:-
// 1. innerHeight and innerWidth - gives ehight width of website part
// 2. outerHeight and outerWidth - gives height and width of browser part

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);

// 3. open() - to open another window of browser 

// syntax - window.open(url,name,features);
// ex-
let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3= document.getElementById("btn3");
let url= "https://www.google.com";
let features="height=500,width=500";
let win;

btn1.addEventListener("click",function(){
    win=window.open(url,"google",features);
});
btn2.addEventListener("click",function(){
    window.open("https://www.facebook.com","google");
});
btn3.addEventListener("click",function(){
    win.close();
});
