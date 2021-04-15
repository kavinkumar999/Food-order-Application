

//user class

export class User{
    constructor(name, pass){
        this.name = name;
        this.pass = pass;
    }

}

// item class 

export class Item{
    constructor(id,name,quantity,category,price){
        this.id = id
        this.name = name
        this.quantity = quantity
        this.category = category
        this.price = price
    }
}

// order class

export class order{
    constructor(id,item, customer,quantity,price){
        this.id = id
        this.item = item
        this.customer = customer
        this.quantity = quantity
        this.price = price
    }
}

