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

interface Animal2 {
  isAlive: boolean;
}
interface Mamifero extends Animal2 {
  getColorPelo(pelo: string): string;
}
interface Perro extends Mamifero {
  getExpecie(): string;
}
function acariciarAnimal(dog: Perro) {
  dog.getColorPelo("rojo");
}
//extends podemos usar lo que este dentro
//implements debemos usar lo que está
class Gato implements Mamifero {
  isAlive: boolean;

  maullar() {
    return "miau";
  }
  getColorPelo(pelo: string) {
    return pelo;
  }
}
