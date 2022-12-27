// 1. DOMContentLoaded :- only the dom tree will be created ,no other external files will be loaded 
// 2. load :- all the external files are loaded 

window.addEventListener('DOMContentLoaded',function(){
    console.log("DOM TREE CREATED ");
});

window.addEventListener('load',function(){
    console.log("fully loaded  ");
});

// we can use it with particular elements also
let img=document.getElementById("im1");
img.addEventListener('load',function(){
    console.log("image loaded");
});
