// Abstracta se usa para otras clases
// Una interfaz con funcionalidad
class Poligono {
}
class Rectangulo2 extends Poligono {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    getArea() {
        return this.alto * this.ancho;
    }
}
