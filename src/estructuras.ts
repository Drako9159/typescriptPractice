class Carro {
  fabricante: string;
  modelo: string;
  anho: number;
  isElectric: boolean;
}
class Trailer {
  fabricante: string;
  modelo: string;
  anho: number;
  capacidad: number;
}
const vehiculo = {
  fabricante: "Ford",
  modelo: "Fiesta",
  anho: 2020,
};
function printCar(car: { fabricante: string; modelo: string; anho: number }) {
  console.log(`${car.fabricante} ${car.modelo} ${car.anho}`);
}
printCar(new Carro())
printCar(new Trailer())
printCar(vehiculo)