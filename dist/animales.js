class Animal {
    comer(comida) {
        console.log("Come" + comida);
    }
}
class Perro extends Animal {
    ladrar() {
        return "woof";
    }
}
const perrito = new Perro();
perrito.comer;
perrito.ladrar;
function acariciarAnimal(dog) {
    dog.getColorPelo("rojo");
}
//extends podemos usar lo que este dentro
//implements debemos usar lo que está
class Gato {
    maullar() {
        return "miau";
    }
    getColorPelo(pelo) {
        return pelo;
    }
}
