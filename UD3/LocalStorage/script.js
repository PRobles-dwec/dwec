//Elementos HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById("mostrar");
let eliminar = document.getElementById("eliminar");
let miLocalStorage = document.getElementById("miLocalStorage");

//Funciones
//Crea las LocalStorage
function creaLocalStorage(){
   localStorage.setItem("usuario", "Pau");
   localStorage.setItem("password", "1234");
}

//Muestra LocalStorage
function mostrarLocalStorage() {
    // miLocalStorage.innerHTML = localStorage.getItem("usuario");
    for(let i = 0; i < localStorage.length; i++){
        //const element = localStorage.key(index);
        const element = localStorage.getItem(localStorage.key(index));
        miLocalStorage.innerHTML += element;
    }
}

//Eliminar LocalStorage
function eliminarLocalStorage() {
   localStorage.removeItem("usuario");
   localStorage.removeItem("password");
}

//Eventos
crear.addEventListener("click", creaLocalStorage, false);
mostrar.addEventListener("click", mostrarLocalStorage, false);
eliminar.addEventListener("click", eliminarLocalStorage, false);
