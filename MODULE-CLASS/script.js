/*import {KeyValue} from "./external.js";
import {test} from "./external.js";*/


/*import {KeyValue, test as TT} from "./external.js";
console.log(KeyValue);
TT();

import ab from "./external.js";
console.log(ab);

import XXX from "./external.js";
console.log(XXX);


class People {
    constructor(NN) {
        this.name = NN;
    }
    greet() {
        console.log("Hello!" + " my name is " + this.name);

    }
}

let person = new People("Marco");
console.log(person.name);
person.greet();

class Superman extends People {
    constructor(){
        super("Marco");
        this.age = 37;
    }
    greet() {
        console.log("Hello, I feel super!")
    }
    greetTwiceA() {
        this.greet();
        this.greet();
    } 
    greetTwiceB() {
        super.greet();
        super.greet();
    }
}

let marco =  new Superman;

console.log(marco.name);
console.log(marco.age);
marco.greetTwiceA();
marco.greetTwiceB();


class Helper {
    static logTwice(message) {
        console.log(message);
        console.log(message);
    }
}

Helper.logTwice("Logged!");*/


/*
class Person {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        }
        console.log("Rejected!");
    }
}

let person = new Person ("Max");

console.log(person._name);
console.log(person.name);
person.name = "Anna";
console.log(person.name);
*/


class Dogs {
    constructor(name) {
       this.name = name;
    }
}

let tequila = new Dogs ("Tequila");

console.log(tequila.name);




class Dogs2 {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.lenght > 3) {
            this._name = value;
        }
        else {
            console.log("Rejected");
        }
    }
}

let tequila2 = new Dogs2 ("Tequila2");

console.log(tequila2._name);
console.log(tequila2.name);






class Dogs3 {
    constructor(XXX) {
        this._nombre = XXX;
    }

    get name() {
        return this._nombre.toUpperCase();
    }

    set name(value) {
        if (value.lenght > 3) {
            this._nombre = value;
        }
        else {
            console.log("Rejected");
        }
    }
}

let tequila3 = new Dogs3 ("Tequila3");

console.log(tequila3._nombre);
console.log(tequila3.name);
