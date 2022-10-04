/* EVERY OBJECT HAS TWO ASPECTS :-
    1. PROPERTIES
    2. ACTION/ FUNCTION

    EX :- HUMAN => 
                    Properties: {HEIGHT, WEIGHT,SEX,AGE,ETC}
                    Functions : {eat,sleep,run,walk,etc}

*/

// HOW TO MAKE OBJECTS IN JAVASCRIPT:-
//==============================================================================================================
// PROPERTIES :- 
let person = {
    name: 'satyarth',
    sex: 'male',
    age: 20
};
console.log(person.age);

// ADD A PROPERTY :-
person.employeed = 'true';   // this will add an another property in the person object
console.log(person);     // output :- {name: 'satyarth', sex: 'male', age: 20, employeed: 'true'}

// DELETE A PROPERTY :- 
delete person.employeed;  // this will delete the employeed property of person object
console.log(person);     // output :- {name: 'satyarth', sex: 'male', age: 20}

// PROPERTY CHECK :-
console.log('height' in person); // return false bcz this property doesn't exist in person 
console.log('name' in person); // return true bcz this property exist in person 


// HOW TO ITERATE THROUGH THE PROPERTIES :-
// We will use for-in loop 
for (let key in person) {
    console.log(key + ' : ' + person[key]);
}
// NOTE :- we can't use dot operator inside 'for-in' loop to see the property values.

//==============================================================================================================
// METHODS :-
//---------
//TYPE 1:- annonymous method
person.sayHello = function () {
    console.log("Hii SATYARH!");
};
person.sayHello();

// TYPE 2:-   call through function
function greet(){
    console.log("HEY SATY BABY");
}
person.hello=greet;
person.hello();

// TYPE 3:- method inside the object 

let vehicle = {
    brand: 'tata',
    color: 'red',
    price: 5000000,

    intro: function(){
        console.log('hey I am TATA');
    }
};

vehicle.intro();

//TYPE 4:- 
let movie = {
    genre: 'action',
    actor: 'tom cruise',
    budget: 5000000,

    intro(){
        console.log('hey I am'+this.actor+' presenting my new movie'); //this points to current object data
    }
};

movie.intro();

