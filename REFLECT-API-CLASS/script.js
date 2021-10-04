class ABC {
    constructor(XXX) {
        this.name = XXX;
    }
}

class YYY {
    constructor(XXX) {
        this.age = 33;
        }
    ZZZ() {
    console.log("probando ando");
    }
}

let person = Reflect.construct(ABC, ["Max"], YYY);

console.log(person.name);
console.log(person.age);

console.log(person.__proto__ === YYY.prototype);

person.ZZZ();






class PPP {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
       console.log ("Hello, I'm " + this.name);
    }
}

let people = Reflect.construct(PPP, ["Max"]);

Reflect.apply(people.greet, people, []);
Reflect.apply(people.greet, {}, []);
Reflect.apply(people.greet, { name : "Pepito"}, []);