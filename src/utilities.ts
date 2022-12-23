import { UserContactIfo } from "./types";
function printContactInfo(info: UserContactIfo){
    console.log(info)
    console.log(info.email)
}
const mom = {
    nombre: "Maria",
    email: "marija@gmail.com",
    colorFavorito: "White"
}
printContactInfo(mom)