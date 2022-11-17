
// LAS FUNCIONES
// setTimeout() y setInterval()

/*
    - setTimeout(funcion_a_llamar, milisegundos):
        Ejecutará la función "funcion_a_llamar" transcurrido 
        el tiempo indicado en "milisegundos".

    - setInterval(funcion_a_llamar, milisegundos): 
        La función "funcion_a_llamar" de manera periódica
        según los milisegundos introducidos en el segundo
        parámetro.
    
    - clearInterval(funcion_setInterval). 
        Parar la ejecución de setInterval.

    - clearTimeout():
        Parar la ejecución iniciada con setTimeout().
*/

let elCrono;

function reloj() {
    let laMevaData = new Date();
    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    if(horas < 10){
        horas = '0' + horas;               
    }

    if(minutos < 10){
        minutos = '0' + minutos;
    }

    if(segundos < 10){
        segundos = '0' + segundos;
    }

    let text = document.getElementById('hora');

    //Método para devolver las horas del objeto Date
    //getHours()

    //Método para devolver los minutos del objeto Date
    //getMinutes()

    //Método para devolver los segundos del objeto Date
    //getSeconds()

    text.innerHTML = horas + ':' + minutos + ':' + segundos;
}

window.onload = function() {
    elCrono = setInterval(reloj, 1000);
}