let usefullMethod = {
    sayhi(){
        console.log("Hi...");
    },
    saybye(){
        console.log("Bye...");
    }

};

class user{
    constructor(){
        this.name = "satya";
    }
}
Object.assign(user.prototype,usefullMethod);

let user1 = new user();
console.log(user1.sayhi());