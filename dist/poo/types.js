// types
const message = "Hello World";
let number;
const bool = true;
const today = new Date();
// arrays
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];
// objects
const user = {
    name: "Juan",
    age: 20,
};
// functions
function add(a, b) {
    return a + b;
}
const sum = add(1, 2);
// functions with objects
function createUser(user) {
    return `User ${user.name}, ${user.age}`;
}
const userCreated = createUser({ name: "Juan", age: 20 });
function show(dni) {
    return `Dni ${dni.number}, ${dni.letter}`;
}
const dni = { number: 12345678, letter: "A" };
function printUserInfo(info) {
    console.log(info);
    console.log(info.email);
}
const combo = {
    name: "Combo",
    price: 100,
    type: "Wine",
    quality: "Good",
};
class _Wine {
    constructor(name, quality) {
        this.name = name;
        this.type = "Alcohol";
        this.quality = quality;
    }
    showInfo() {
        return `Wine ${this.name}, ${this.quality}`;
    }
}
class Cocktail {
    constructor(name, ingredients, quality) {
        this.name = name;
        this.type = "Alcohol";
        this.ingredients = ingredients;
        this.quality = quality;
    }
    showInfo() {
        //this.ingredients.map((ingredient) => ingredient.name).join(", ");
        const ingredients = this.ingredients.reduce((acc, drink) => {
            return acc + drink.name + ", ";
        }, "");
        return `Cocktail ${this.name}, ${this.quality}, ${ingredients}`;
    }
}
const bebida = new Cocktail("Mojito", [new _Wine("Vino", "Good"), new _Wine("Vino2", "Good")], "Good");
console.log(bebida.showInfo());
const ad = [new _Wine("Vino", "Good"), new _Wine("Vino2", "Good")];
function showDrinks(drinks) {
    drinks.forEach((drink) => {
        console.log(drink.name);
    });
}
// generics
function print(a) {
    return a;
}
