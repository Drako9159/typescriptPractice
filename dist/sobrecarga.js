//Ancho y alto solo de pueden usar en la clase como protected
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    getArea() {
        return this.ancho * this.alto;
    }
    toString() {
        return `Cuadrado con ancho de ${this.ancho} y alto de ${this.alto}`;
    }
}
class Cuadrado extends Rectangulo {
    constructor(ancho) {
        super(ancho, ancho);
    }
    toString() {
        return `Cuadrado con lados de ${this.ancho}`;
    }
}
let cuadro = new Cuadrado(5);
console.log(cuadro.toString());
