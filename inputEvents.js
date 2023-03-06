// blur,focus,change,input

let x= document.getElementById("myInput");

x.addEventListener('focus',function(){
    x.style.background="yellow";
});
x.addEventListener('blur',function(){
    x.style.background="white";
});
// change logs when any change occurs and focus removes
x.addEventListener('change',function(){
    console.log(this.value);
});
// input logs after each input
x.addEventListener('input',function(){
    console.log(this.value);
});