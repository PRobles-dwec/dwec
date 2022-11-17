
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
//Declaración de variables
let elCrono;
let laMevaData = new Date();

//Capturamos los elementos HTML con los que trabajremos.
let display = document.getElementById('display');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

//Iniciar el cronómetro
resetear();

function crono() {

    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    segundos += 1;

    if(segundos == 60) {
        segundos = 0;
        minutos += 1;
        laMevaData.setMinutes(minutos);
    }

    if(horas < 10) {
        horas = '0' + horas;               
    }

    if(minutos < 10) {
        minutos = '0' + minutos;
    }

    if(segundos < 10) {
        segundos = '0' + segundos;
    }

    laMevaData.setSeconds(segundos);

    //Método para devolver las horas del objeto Date
    //getHours()

    //Método para devolver los minutos del objeto Date
    //getMinutes()

    //Método para devolver los segundos del objeto Date
    //getSeconds()

    display.innerHTML = horas + ':' + minutos + ':' + segundos;
}

function iniciar() {
    elCrono = setInterval(crono, 1000);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
}

function parar() {
    clearInterval(elCrono);
    stop.disabled = true;
    start.disabled = false;
    start.innerHTML = 'Continuar';
    reset.disabled = false;
}

function resetear() {
    laMevaData.setHours(0,0,0,0);
    display.innerHTML = "00:00:00";
    start.disabled = false;
    stop.disabled = true;
    start.innerHTML = 'Comenzar';
    reset.disabled = true;
}

//Eventos
start.addEventListener('click', iniciar, false);

stop.addEventListener('click', parar, false);

reset.addEventListener('click', resetear, false);