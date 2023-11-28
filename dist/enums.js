//Grupo de contantes
var Cordenadas;
(function (Cordenadas) {
    Cordenadas[Cordenadas["Latitud"] = 59] = "Latitud";
    Cordenadas[Cordenadas["Longitud"] = 23] = "Longitud";
})(Cordenadas || (Cordenadas = {}));
let latitudCor = Cordenadas.Latitud;
//error
//Cordenadas.Latitud = 2
console.log(latitudCor);
