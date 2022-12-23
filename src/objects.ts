let carro = {
  fabricante: "Toyota",
  modelo: "Prius",
  anho: 2022,
};

let carroTypeScript: {
  fabricante: string;
  modelo: string;
  anho: number;
  color?: string //Este campo es opcional con ?
};

function getCar(car: { fabricante: string; modelo: string; anho: number }) {
  console.log(`${car.fabricante} ${car.modelo} ${car.anho}`);
}

getCar(carro);
