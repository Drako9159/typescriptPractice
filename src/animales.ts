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
