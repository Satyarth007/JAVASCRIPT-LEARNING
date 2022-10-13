let food ={
    name: 'dosa',
    price: 50,

    get getitem(){
        return this.name+" : "+this.price;
    },

    set setname(n){
         this.name=n.toUpperCase();
    },
    set setprice(p){
        this.price=p;
   },

};

food.setname="idli";
food.setprice=50;
console.log(food.getitem);
food.setname="maggie";
food.setprice=30;
console.log(food.getitem);
console.log(food);