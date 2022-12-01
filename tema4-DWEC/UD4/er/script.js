/*
RegExp

/Patrón/Modificadores

*/

let patron = /dwec/i; //Búsqueda que no distingue entre mayúsculas y minúsculas.

let cadena = "HolatalDWec33 @3s equetedwec boquepasa DWEC y tal y tal.";

let posicion = cadena.search(patron);

//cadena = "probles19088@iesjoanramis.org";

// patron = /\w/g;
// patron = /\d/g;
// patron = /\W/g;
// patron = /\S/g;

patron = /DWec+33hola/gi;

cadena = "cada 10 100 o cada 1000 veces";

patron = /\d{2,3}/g;

let resultado = cadena.match(patron);

console.log(resultado);

