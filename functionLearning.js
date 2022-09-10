// ALL ABOUT FUNCTIONS IN JAVASCRIPT :- 
//===============================================================================================================
// EMPTY FUNCTION :-
function mulTable(){
    for(i=0;i<=10;i++){
        document.write(`2 x ${i}= ${2*i}`);
        document.write("<br>")
    }
}

mulTable();   
//=================================================================================================================
// PARAMETERISED FUNCTION :-

document.write("HELLO <br>")
mulParameterTable(5);  

function mulParameterTable(num){
    for(i=0;i<=10;i++){
        document.write(`${num} x ${i}= ${num*i}`);
        document.write("<br>")
    }
}
//================================================================================================================
// THE ARGUMENT OBJECT :-
// In this we can pass any no. of arguments to a function , and the arguments will stored into a "arguments" array
// EX 1 :- 
    function add (){
        console.log(arguments.length);
    }
add(2,1);         // 2
add(2,1,9);       // 3
add(2,1,5,7);     // 4

// EX 2 :-
    function ADDITION(){
        if(arguments.length == 0){
            alert(" NO ARGUMENTS PASSED !")
        }else{
            let sum=0;
            for(let i=0;i< arguments.length;i++){
                sum+=arguments[i];
            }
           console.log(sum);
        }
    }
    ADDITION(5,4,6);
    // WE CAN STORE FUNCTIONS INSIDE VARIABLES TOOO :-
   // let add= ADDITION;
   // add(5,4,6);

 //===========================================================================================================  
 // RETURNING FUNCTION :- 
 function compare(a,b){
    if(a>b){
        return 1;
    }else{
        return -1;
    }
 } 
 let answer=compare(2,3);
 console.log(answer);
 console.log(compare(9,6));
 //============================================================================================================