interface UserInfo {
  nombre: string;
  email: string;
}
function printUserInfo(info: UserInfo){
    console.log(info)
    console.log(info.email)

}

const mom = {
    nombre: "Maria",
    email: "marija@gmail.com",
    colorFavorito: "White"
}
printUserInfo(mom)