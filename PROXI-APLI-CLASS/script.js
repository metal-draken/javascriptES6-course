let person = {
    name: "Max",
    age: 30,
};

let handler = {
    get: function(target, property) {
        return property in target ? target[property] : "Non existant";
    },
    set: function(target, property, value) {
        if (value.length >=2) {
            Reflect.set(target, property, value)
        }
    }
};

let prx = new Proxy (person, handler);

console.log(prx.name);
console.log(prx.age);
console.log(prx.hobbies);

prx.name = "Maximilian";

console.log(prx.name);