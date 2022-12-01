const comprova = document.getElementById("apagaelmovil");
const mensaje = document.getElementById("mensaje");
const aqui = document.getElementById("aqui");

comprova.addEventListener("click", (e) => {
    
    mensaje.innerHTML = "";
    let x = aqui.value;

    try {
        
        if(x == "") throw "Está vacío!";

        if(isNaN(x)) throw "No es un número!";

        if(x < 5) throw "No llega!";

        if(x > 10) throw "Se ha pasado!";

    } catch (error) {
        
        mensaje.innerHTML = "Ha ocurrido un error: " + error;


    }

}, false);


