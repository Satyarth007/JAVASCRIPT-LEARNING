// WE USE MATH.random() TO GET RANDOM VALUES .
// IT VALUE LIES IN THE RANGE OF (0 TO 1).

console.log(Math.random());

// FUNCTION TO GET RANDOM VALUE IN PARTICULAR RANGE :-
function getRandom(min,max){
    let x=Math.floor(Math.random()* (max-min+1))+min;

    return x;
}

console.log(getRandom(15,25));