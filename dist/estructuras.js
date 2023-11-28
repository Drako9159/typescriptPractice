class Carro {
}
class Trailer {
}
const vehiculo = {
    fabricante: "Ford",
    modelo: "Fiesta",
    anho: 2020,
};
function printCar(car) {
    console.log(`${car.fabricante} ${car.modelo} ${car.anho}`);
}
printCar(new Carro());
printCar(new Trailer());
printCar(vehiculo);
