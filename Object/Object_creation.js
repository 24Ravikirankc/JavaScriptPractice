var person = { 'age': 32, 'name': 'Kiran' };
//person.getName = function() { return person.name };

console.log(person.age);
console.log(person.name);
//console.log(person.getName());

person.age = 34;
console.log(`${person.name} is ${person.age} years old`);

// constructor function

function Item(name, maker) {

    this.name = name;
    this.maker = maker;
    this.getInfo = function () {
        return `${this.name} - ${this.maker}`
    };
 }

var item = new Item('IPhone', 'Apple');
console.log(item.getInfo());


// class keyword

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
}

let car1 = new Vehicle('Ertigo', 'Suzuki');
let car2 = new Vehicle('Santro', 'Hyundai');

console.log(car1.name); 
console.log(car2.name); 

// Object constructor

var book = new Object();

book.name = "7 Habits Of Highly Effective People",
book.getName = function() {
  return this.name ; 
};

console.log(book.getName());