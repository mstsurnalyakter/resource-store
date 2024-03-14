

class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('car');
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat,tickPrice){
        super(name,price);
        this.seat = seat;
        this.tickPrice = tickPrice;
    }

}

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
    
}