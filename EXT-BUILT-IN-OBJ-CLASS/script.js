let obj1 = {
    a: 1
}

let obj2 = {
    b: 2
}

let objX = Object.assign(obj1, obj2);
console.log(objX);

let objY = Object.assign({}, obj1, obj2);
console.log(objY);


  

let person = {
    name: "Marco",
}

let boss = {
    name: "Nobody",
    profession: "Nothing",
}

Object.setPrototypeOf(person, boss);
console.log(person.name);
console.log(person.profession);





let number1 = -10;
let number2 = 6.32;
let number3 = 8.68;
let number4 = -1.56;

console.log(Math.sign(number1));
console.log(Math.sign(number2));
console.log(Math.trunc(number3));
console.log(Math.trunc(number4));



let namee = "Marco";
console.log(namee.startsWith("Ma"));
console.log(namee.startsWith("Ma"));
console.log(namee.includes("arc"));


let ABC = Array.of(4,7,9);
console.log(ABC);

let XXX = Array.from(ABC, value => value*2);
console.log(XXX);

let BBB = [10,20,30,40];
BBB.fill(100,2,3);
console.log(BBB);




let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function findCherries(fruit) {
      return fruit.name === "cherries";
  }

  console.log(inventory.find(findCherries));


  let array = [10,20,30];
  let it = array.entries();

  for (let element of it) {
      console.log(element);
  }