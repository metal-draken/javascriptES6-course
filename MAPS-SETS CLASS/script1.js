let cardAce = {
    name: "Ace of spades"
};

let cardKing = {
    name: "King of clubs"
};

let deck = new Map();
deck.set("as", cardAce);
deck.set("kc", cardKing);

console.log(deck);
console.log(deck.size);
console.log(deck.get("as"));

/*deck.delete("as");
console.log(deck.size);

deck.clear();*/

console.log(deck.keys);

for (ABC of deck.keys()) {
    console.log(ABC);
}

for (ABC of deck.values()) {
    console.log(ABC);
}

for (ABC of deck.entries()) {
    console.log(ABC);
}

for (ABC of deck) {
    console.log(ABC);
}

let key1 = {a:1};
let key2 = {b:2};

let deck2 = new WeakMap();
deck2.set(key1, cardAce);
deck2.set(key2, cardKing);

console.log(deck2.get(key1));