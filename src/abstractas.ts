// Abstracta se usa para otras clases
// Una interfaz con funcionalidad

abstract class Poligono {
  public abstract getArea(): number;
}
class Rectangulo2 extends Poligono {
  public constructor(
    protected readonly ancho: number,
    protected readonly alto: number
  ) {
    super();
  }
  public getArea(): number {
    return this.alto * this.ancho;
  }
}
