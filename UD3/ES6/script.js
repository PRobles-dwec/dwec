const nombres = [];
console.log(nombres);

/* nombres.push('Jander');
console.log(nombres[0]);
const ultimoNombre = nombres.pop();
console.log(ultimoNombre);
console.log(nombres);
const otrosNombres = []; */
//otrosNombres = nombres;

//DESESTRUCTURACIÓN
const personaje = ['Rick', 'Daryl', 'Carol', 'Maggie', 'Rosita'];
const [sheriff, motorista, luchadora, madreguerrera2, madreguerrera] = personaje;
/* console.log(personaje);
console.log(guerrera);
console.log(sheriff);
console.log(motorista);
console.log(luchadora); */

const masPersonajes = {
    nombre: "Eugene",
    apellido: "Porter",
    edad: 28,
    armas: ['Inteligencia', 'Hacha', 'Cuchillo de caza']
};

/* const{ nombre,apellido, armas } = masPersonajes;
console.log(nombre);
console.log(armas);
const[virtud,espada] = armas;
console.log(virtud); */

const nombrePersonaje = 'Daryl';
const razaPersonaje = 'Humano';
const armasPersonaje = [{tipo: 'Ballesta', cantidad: 1}, {tipo: 'Flechas', cantidad: 1000}];
const requetePersonaje = {
    nombre: nombrePersonaje,
    raza: razaPersonaje,
    armas: armasPersonaje,
    edad: 45
};

// console.log(requetePersonaje);

const requetePersonaje2 = {
    nombrePersonaje,
    razaPersonaje,
    armasPersonaje,
    edad: 30
};

console.log(requetePersonaje2);