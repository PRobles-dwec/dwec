//Elementos HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById("mostrar");
let eliminar = document.getElementById("eliminar");
let misCookies = document.getElementById("misCookies");

//Funciones
//Crea las cookies
function creaCookies(){
    let usuarioCookie = "Pau";
    document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);
    document.cookie = "color=rojo;expires=30 Oct 2022 12:00:00 GMT";
}

//Muestra cookies
function mostrarCookies() {
    misCookies.innerHTML = document.cookie;
}

//Eliminar cookies
function eliminarCookies() {
    document.cookie = "color=; max-age=0";
    document.cookie = "usuario=; max-age=0";
}

//Eventos
crear.addEventListener("click", creaCookies, false);
mostrar.addEventListener("click", mostrarCookies, false);
eliminar.addEventListener("click", eliminarCookies, false);

