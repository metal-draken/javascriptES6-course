class AAA {
    constructor() {
        this.name = "Marco";
        this.age = 22;
    }
}

let person = new AAA();

AAA.prototype.age = 27;

let BBB = {
    age: 30,
    greet() {
        console.log("Hello!");
    }

}

Reflect.setPrototypeOf(person, BBB);

console.log(Reflect.getPrototypeOf(person));
console.log(person.name);

Reflect.apply(person.greet, null, []);

console.log(Reflect.get(person, "name"));
Reflect.set(person, "name", "Anna");
console.log(Reflect.get(person, "name"));



console.log(Reflect.ownKeys(person));
console.log(Reflect.ownKeys(AAA));


Reflect.defineProperty(person, "hobbies", {
    writable : true,
    value: ["Sports", "Cooking"]
});

console.log(person.hobbies);

person.hobbies = ["Nothing"];

console.log(person.hobbies);


Reflect.deleteProperty(person, "age");

console.log(person.age);

console.log(Reflect.isExtensible(person));

Reflect.preventExtensions(person);

console.log(Reflect.isExtensible(person));

