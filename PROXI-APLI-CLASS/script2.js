let person = {
    name: "Max",
    age: 30,
};

let handler = {
    get: function(target, property) {
        return property in target ? target[property] : "Non existant";
    },
    
};

let prx = new Proxy ({}, handler);

Reflect.setPrototypeOf(person, prx)

console.log(prx.hobbies);









function log(message) {
    console.log("Log created: " + message);
}

let handler2 = {
    apply: function(target, thisArg, argumentsList) {
        if (argumentsList.length == 1) {
            return Reflect.apply (target, thisArg, argumentsList);
        }
    }
};

let prx2 = new Proxy (log, handler2);

prx2("Hello");
prx2("Hello", 10);










let person3 = {
    name: "Maximus"
};

let handler3 = {
    get: function(target, property) {
        return Reflect.get(target, property)
    }
};

let {prx3, revoke} = Proxy.revocable(person3, handler3);

console.log(prx3.name);


/*revoke();
console.log(prx3.name);*/