

// types
const message: string = "Hello World";
let number: number;
const bool: boolean = true;
const today: Date = new Date();

// arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [1, 2, 3, 4, 5];

// objects
const user: { name: string; age: number } = {
    name: "Juan",
    age: 20,
};

// functions
function add(a: number, b: number): number /*or void*/ {
    return a + b;
}

const sum = add(1, 2);

// functions with objects
function createUser(user: { name: string; age: number }): string {
    return `User ${user.name}, ${user.age}`;
}

const userCreated = createUser({ name: "Juan", age: 20 });

// custom types
type Dni = {
    number: number;
    readonly letter: string;
};

function show(dni: Dni): string {
    return `Dni ${dni.number}, ${dni.letter}`;
}

const dni: Dni = { number: 12345678, letter: "A" };

interface UserInfo {
    nombre: string;
    
    email: string;
}

function printUserInfo(info: UserInfo) {
    console.log(info);
    console.log(info.email);
}


// combo types
type Id = number | string;
type Beer = {
    readonly name: string,
    price: number,
    brand?: "Beer",
};

type Wine = {
    name: string,
    price: number,
    type: "Wine",
    quality: "Good" | "Bad",
};

const combo: Beer & Wine = {
    name: "Combo",
    price: 100,
    type: "Wine",
    quality: "Good",
};


// interfaces
interface Drink{
    name: string,
}
interface Alcohol extends Drink{
    type: "Alcohol",
    quality: "Good" | "Bad",
    showInfo: () => string,
}

class _Wine implements Alcohol{
    name: string;
    type: "Alcohol";
    quality: "Good" | "Bad";
    constructor(name: string, quality: "Good" | "Bad"){
        this.name = name;
        this.type = "Alcohol";
        this.quality = quality;
    }
    showInfo(){
        return `Wine ${this.name}, ${this.quality}`;
    }
}
interface MixedDrink extends Drink{
    type: string,
    ingredients: Drink[],
}


class Cocktail implements MixedDrink, Alcohol{

    name: string;
    type: "Alcohol";
    ingredients: Drink[];
    quality: "Good" | "Bad";
    constructor(name: string, ingredients: Drink[], quality: "Good" | "Bad"){
        this.name = name;
        this.type = "Alcohol";
        this.ingredients = ingredients;
        this.quality = quality;
    }
    showInfo() : string {
        //this.ingredients.map((ingredient) => ingredient.name).join(", ");
        const ingredients = this.ingredients.reduce((acc, drink) => {
            return acc + drink.name + ", ";
        }
        , "");
        return `Cocktail ${this.name}, ${this.quality}, ${ingredients}`;
    }
}
const bebida = new Cocktail("Mojito", [new _Wine("Vino", "Good"), new _Wine("Vino2", "Good")], "Good");
console.log(bebida.showInfo());

const ad : Drink[] = [new _Wine("Vino", "Good"), new _Wine("Vino2", "Good")];

function showDrinks(drinks: Drink[]){
    drinks.forEach((drink) => {
        console.log(drink.name);
    });
}


// generics
function print<T>(a: T): T {
    return a;
}