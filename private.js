class emp{
    #name="";
    
    constructor(n){
        this.#name=n;

    }
    #getname(){
        console.log(this.#name);
    }
    pubfun(){
        this.#getname();
    }
}

let emp1 = new emp("satya");
console.log(emp1.pubfun());

