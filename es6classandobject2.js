class department {
    constructor(dept) {
        this.dept = dept;
    }
    deptFeature() {
        console.log("awesome salary...");
    }
    deptSuperDemo() {
        console.log("to be called inside child's function ....");
    }
    overridingDemo() {
        console.log("parent's function.. ");
    }
}

class employee extends department {
    constructor(d, emp) {
        super(d); // super keyword helps to ensure that arguments are passed in parents constructor
        this.emp = emp;
    }

    overridingDemo() {
        console.log("child's function..");
    }

    empInfo() {
        super.deptSuperDemo(); // to call parents function

        this.overridingDemo(); // with this keyword we can call the chld's function of same name
        super.overridingDemo(); // with super keyword we can call parent's same function

        console.log(`${this.emp} works in ${this.dept}`);
    }
}

let emp1 = new employee("IT Sector", "satyarth");
console.log(emp1);

console.log(emp1.empInfo());

console.log(emp1.deptFeature());
