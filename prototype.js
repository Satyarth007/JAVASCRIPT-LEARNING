// let p1={};

// // let p2={
// //     name:'satyarth'
// // }
// function Person(n){
//     this.name=n;
// }
// // console.log(p1);
// // console.log(p2);
// // console.log(p2.hasOwnProperty('name'));

// let person3 =new Person('satyarth');
// console.log(person3.hasOwnProperty('name'));

// how to make prototypes ?
function person(fn,ln,a){
    this.firstname=fn;
    this.lastname=ln;
    this.age=a;
}

person.prototype.fullname= function(){
    console.log(this.firstname+" "+this.lastname);
}

let person1 = new person('satyarth','tiwari',20);
let person2 = new person('shailja','rani',20);
console.log(person1);
console.log(person2);
console.log(person1.fullname());
console.log(person2.fullname());

// inheritance 

function Creature(age){
    this.age = age;
}
Creature.prototype.breathing = function(name){
    console.log(`${name} breathing.......`);
}

let c1 = new Creature(100);
console.log(c1);

// how to connect the breathing method of creature prototype to person prototype

person.prototype.__proto__= Object.create(Creature.prototype);

// from this , now person can use the breathing method of creature class

console.log(person1.breathing(person1.firstname));