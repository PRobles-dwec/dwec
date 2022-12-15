/* const text = document.getElementById("text");
const textTag = document.getElementsByTagName("strong");

console.log(text.innerText);
console.log(textTag[0].innerHTML);
console.log(textTag[1]); */


const boton = document.getElementsByTagName("button")[0];

function cuanQuemaoEstas() {
    
    let contador = 0;
    const formulario = document.forms["formulari"];
    let texto = "";
    const resultado = document.getElementById("resultado");
    const consejo = document.getElementById("consejo");
    let i;

    for( i = 0; i < formulario.length; i++) {
        if(formulario.elements[i].checked) {
            
            contador ++;
        }
    }

    resultado.innerHTML = "En principio vas bien (salvo que hayas marcado el check del Madrid...)";

    if(contador > 3){
        resultado.innerHTML = "Deberías empezar a frenar un poco...";
    }
    if(contador > 5){
        resultado.innerHTML = "Si sigues así te quedan dos telediarios...";
    }
    if(contador > 7){
        resultado.innerHTML = "Cementerio cercano?";
    }
    if(contador == 10){
        resultado.innerHTML = "Debes ser un zombi ya... y encima del Madrid!";
    }
}

boton.addEventListener("click", (e) => {
    e.preventDefault();
    cuanQuemaoEstas();
});