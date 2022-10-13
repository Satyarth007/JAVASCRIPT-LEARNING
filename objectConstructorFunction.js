function Student(fn,ln,age,g){
    this.firstName=fn,
    this.lastName=ln;
    this.age=age;
    this.class=g;

    // this.getname=function(){
    //     return this.firstName+" "+this.lastName;
    // }
}

var student1=new Student("satyarth","tiwari",20,3);
var student2=new Student("shailja","rani",20,3);

// PROTOTYPE KEYWORD:- used to add properties to a class

Student.prototype.nationality="INDIAN";
Student.prototype.getname=function(){
    return this.firstName+" "+this.lastName;
}


// HOW TO ADD PROPERTY TO A PARTICULAR OBJECT ONLY? 

student1.course="B.TECH"

console.log(student1);
console.log(student1.getname()+" "+student1.nationality);
console.log(student1.course);
console.log(student2);
console.log(student2.getname()+" "+student2.nationality);

