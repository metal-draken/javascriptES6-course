function *select() {
    yield "House";
    yield "Garage";
}

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());



let OBJ = {
    [Symbol.iterator] : gen,
}

function *gen() {
    yield 1;
    yield 2;
}

for (let element of OBJ) {
    console.log(element);
}




function *gen2(end) {
    for (let i=0; i<end; i++) {
        yield i;
    }
}

let it2 = gen2(2);

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());