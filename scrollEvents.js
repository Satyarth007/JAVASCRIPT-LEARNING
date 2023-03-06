// SCROLL EVENTS :- 

// scroll : all way scrolling 
// window.addEventListener('scroll',function(){
//     console.log("scrolling .....");
// });

// wheel :- scroll in which direction 

// window.addEventListener('wheel',function(event){
//     if(event.deltaY < 0){
//         console.log("scroll up .........");
//     }
//     else if(event.deltaY > 0 ){
//         console.log("scroll down .......");
//     }
//     else if(event.deltaX == 0){
//         console.log("scroll left ......");
//     }
// });

// we can changethe attributes according scroll pixels 
// 'window.pageXoffset' and 'window.pageYoffset'  helps to do that :-

window.addEventListener("scroll",function(){
    if(window.pageYOffset > 150){
        document.body.style.background="red";
    }
    else{
        document.body.style.background="white";
    }
});