let datos = [13, -5, -9, 0, 8, 0 ,2];

//filter 
function natural(dato){
    return dato >= 0;
}

console.log(datos);
//console.log(datos.filter(natural));

//find()
//console.log(datos.find(natural));

//forEach()
/* let dias = ["lunes","martes","miércoles","jueves","viernes","sábado", "domingo"];
   let texto = document.getElementById("texto");

   function miTexto(item, index) {
        texto.innerHTML += "index[" + index + "]" + item + "<br/>";
    } 
*/

//dias.forEach(miTexto);

//includes()

let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
//console.log(datos.includes(-5));
//console.log(dias.includes("miércoles"));

//indexOf()
//console.log(datos.indexOf(0));

//lastIndexof()
//console.log(datos.lastIndexOf(0));

//pop()
// let ultimo = datos.pop();
// console.log(ultimo);
// console.log(datos);

//push()
//datos.push(87);
//let datos2 = [100, 200, 300];
//datos.push(...datos2);
//console.log(datos);
//console.log(valor);

//shift()
// let primero = datos.shift();
// console.log(datos);
// console.log(primero);

//slice()
// let datos2 = datos.slice(2);
// console.log("datos: " + datos);
// console.log("datos2: " + datos2);

//sort()
console.log(datos.sort());
console.log(datos.sort((a,b) => a - b));
console.log(dias.sort());

