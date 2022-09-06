let s="Satyarth is a GOOD boy.";

//includes method:-
let include=s.includes("good");

// replace method :-
let x=s.replace(/good/i,"bad");  // this makes it case insensitive. using this ->     /string/i
console.log(x);

let str="stop global warming, stop carbon emission.";
let y=str.replace(/stop/g,"ban");  // this helps to change all string . using this ->     /string/g
console.log(y);

