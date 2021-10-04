let ABC = new Set([1,1,1,2,3,5]);

for (element of ABC) {
    console.log(element);
};

ABC.add(2);

console.log(ABC);

ABC.delete(3)

console.log(ABC);

/*ABC.clear()*/


let obj1 = {a:1};
let obj2 = {b:2};

let XXX = new WeakSet([obj1, obj2, obj2]);

console.log(XXX);
console.log(XXX.has(obj1));