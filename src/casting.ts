//Para parsear datos
let x: unknown = "Hola";

function saludar(saludo: string) {
  console.log(saludo);
}
//Para forzar primero de transforma a unknow porque se transforma en lo que sea
// como unknow string
saludar(x as string);
