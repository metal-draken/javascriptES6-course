let ABC = Symbol ("Debug");
console.log(ABC);
console.log(typeof ABC);
console.log(ABC.toString());

let OBJ = {
    name: "Max",
    [ABC]: 22,
}

console.log(OBJ);

console.log(Object.keys(OBJ));

let AAA = Symbol.for("Shared");
let BBB = Symbol.for("Shared");

console.log(AAA == BBB);
/* true */


console.log("<------------------------------->")


let symbol1 = Symbol.for("age");
let symbol2 = Symbol.for("age");

let person = {
    name: "Max",
};

function makeAge(AAA) {
    let ageSymbol = Symbol.for("age");
    AAA[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol1]);


console.log("<------------------------------->")


let numbers = [1,2,3];

numbers[Symbol.toPrimitive] = function() {

};

console.log(numbers + 1)


