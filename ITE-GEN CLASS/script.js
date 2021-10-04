let array = [1,2,3];

/* NORMAL BEHAVIOR 

console.log(typeof array[Symbol.iterator]);
let it = array[Symbol.iterator]();
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

*/



/* CHANGING THE BEHAVIOR

array[Symbol.iterator] = function() {
    let nextValue = 10;
    return {
        next: function() {
            nextValue++;
            return {
                done: nextValue > 15 ? true : false,
                value: nextValue
            };
        }
    };
} 

for (let element of array) {
    console.log(element);
}

*/


let person = {
    name: "Marco", 
    hobbies: ["Science", "Videogames"],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length ? true : false,
                    value: value
                };
            }
        };
    }
};

for (let hobby of person) {
    console.log(hobby);
}