// ARRAY FUNCTIONS IN JAVASCRIPT-----------------------------------------------------------
let arr=["satyarth","suraj","rishab","zeeshan"];
// most functions are same as JAVA
console.log(arr);  

arr.push("bikash");         // push function :- inserts data at the last of array.
console.log(arr); 

arr.unshift("anshuman");   // unshift function :- inserts data at the begining of array.
console.log(arr); 

arr.pop();                // pop function :- deletes data at the last of array.
console.log(arr); 

arr.shift();             // shift function :- deletes data at the begining of array.
console.log(arr); 

//arr.splice(1,2);      // splice function :- deletes particular data using index and  length. 
//console.log(arr);

// how to make array empty :-
//1. arr=[];
//2. arr.length=0;

console.log(arr.indexOf("suraj"));      // returns index of particular element.

let text1="This is a randoom text";
let newArr=text1.split(" ");           // split function :- helps to convert string into array.
console.log(newArr);

let text2=newArr.join(" ");           // join function :- helps to join the array elements in particular style.
console.log(text2);

let x=arr.reverse();                  // reverses the array 

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}