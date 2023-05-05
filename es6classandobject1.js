class person{
    constructor(name,age){  
        this.name = name;
        this.age = age;
    }

    // all the non-static functions will be in the prototype of the class 
    sayhi(){
        console.log("hi....");
    }

    static hello(){
        console.log("hello...");
    }

    static p = 'IamBatman';
}
 let person1 = new person('satyarth',20);

 // static members are part of class and not of the object 
 person.hello();
 console.log(person.p);

 console.log(person1);
 console.log(person1.sayhi());