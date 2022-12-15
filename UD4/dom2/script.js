const input = document.querySelector('input');
const parrafo = document.querySelector('p'); 
const boton = document.querySelector('button');
const color = document.querySelector('#color');
const hola = 10;

boton.addEventListener("click", (e) => {
    parrafo.innerHTML = eval(input.value);
});

function colores() {
    document.querySelector('.ejemplo').style.backgroundColor = "red";
    document.querySelector('p').innerHTML = "rojo";
}

color.addEventListener("click", () => {
    colores();

    const nuevoParrafo = document.createElement('p');
    const contenidoNuevoParrafo = document.createTextNode("Soy un párrafo nuevo");

    nuevoParrafo.appendChild(contenidoNuevoParrafo);

    document.body.appendChild(nuevoParrafo);

    const prova = document.getElementById("prova");

    const nuevonuevoParrafo = document.createElement("p");
    nuevonuevoParrafo.appendChild(contenidoNuevoParrafo);

    prova.appendChild(nuevonuevoParrafo);

    let parrafos = document.querySelectorAll("p");
    
    document.body.removeChild(parrafos[1]);
    //parrafos[1].removeChild();
});
