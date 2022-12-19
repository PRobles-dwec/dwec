/* WEB WORKER */

const botones = document.getElementsByTagName("button");
resultat = document.getElementById("resultat");

let w;

function startWebWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("treballador.js");
        }
        w.onmessage = function(event) {
            resultat.innerHTML = event.data;
        };
    } else {
        resultat.innerHTML = "¡Fallo al ejecutar el Worker!";
    }
}

function stopWebWorker() {
    w.terminate();
    w = undefined;
}

//Eventos
const b0 = botones[0];
b0.addEventListener("click", ()=>{
    //console.log("b0");
    startWebWorker();
}, false);

botones[1].addEventListener("click", ()=>{
    //console.log("b0");
    stopWebWorker();
}, false);