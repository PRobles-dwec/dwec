/* // Arrays con los equipos masculinos y femeninos.
var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var horasPartidos = ["14:00", "16:00", "18:00", "20:00", "20:45", "21:00"]; // Array con las horas de los partidos.
var diasPartidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Array con los días de los partidos.

var jornadesMasc = document.getElementById("jornadesMasc"); // Recogemos el elemento donde imprimiremos las jornadas masculinas
var jornadesFem = document.getElementById("jornadesFem"); // Recogemos el elemento donde imprimiremos las jornadas femeninas

var arrayResultados = []; // Aquí se guardarán los 14 resultados.

function escriureJornades() {   // Función que escribe las jornadas masculinas
    var arrayJornades = []; // Aquí se guardarán las 14 jornadas.

    let htmlJornadesMasc = ""; // Creamos una cadena vacía, para usarla más adelante.

    for(let i = 0; i < 10; i++) { // Recorremos hasta que llegue a 10.
        
        var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
        var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo visitante masculino, que será aleatorio.
        var horasPartidosAleatorio = horasPartidos[Math.floor(Math.random() * horasPartidos.length)]; // Variable para guardar las horas de los partidos, que será aleatorio.
        var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.
        
        arrayJornades.push(aleatorioLocalMasculino + " - " + aleatorioVisitanteMasculino);
        console.log(arrayJornades);
        // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias. 
        htmlJornadesMasc += "<p>" +  "<br/>" + aleatorioLocalMasculino + " - " + aleatorioVisitanteMasculino + "</br>" + diasPartidosAleatorio + "</br>" + horasPartidosAleatorio  + "</p>";                   
        
        localStorage.setItem("jornadas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage.                   
    }
    jornadesMasc.innerHTML = htmlJornadesMasc; // Asignamos la cadena al elemento dónde queremos imprimir la información.
}

function escriureJornadesFem() {  // Función que escribe las jornadas femeninas
    let htmlJornadesFem = ""; // Creamos una cadena vacía, para usarla más adelante.

    for(let i = 1; i < 5; i++) { // Recorremos para que sólo salgan 4.
        
        var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local femenino, que será aleatorio.
        var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo visitante femenino, que será aleatorio.  
        var horasPartidosAleatorio = horasPartidos[Math.floor(Math.random() * horasPartidos.length)]; // Variable para guardar las horas de los partidos, que será aleatorio.
        var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.

        arrayJornades.push(aleatorioLocalFemenino + " - " + aleatorioVisitanteFemenino);
        console.log(arrayJornades);
         // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias. 
        htmlJornadesFem += "<p>" +  "<b>" + "JORNADA " + i + "</b>" +  "<br/>" + aleatorioLocalFemenino + " - " + aleatorioVisitanteFemenino + "</br>" + diasPartidosAleatorio + "</br>" + horasPartidosAleatorio  + "</p>";       
        
        localStorage.setItem("jornadas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage. 
    }

    jornadesFem.innerHTML = htmlJornadesFem; // Asignamos la cadena al elemento dónde queremos imprimir la información.
}

function getRandom(min,max) { // Función para elegir un número aleatorio entre 2 números.
    return Math.floor(Math.random() * (max - min)) + min; // Para que no salgan decimales.
}   
        
function escriureResultatsMasc() { // Función para escribir los resultados masculinos
    var resultatsMasc = document.getElementById("resultatsMasc");
    
    let htmlResultatsMasc = "";

    for(let i = 0; i < 10; i++) { // Hacemos un bucle para que sólo salgan 10 resultados.
        var resultadoLocalMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local masculino.
        var resultadoVisitanteMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante masculino.
         
        htmlResultatsMasc += "<p>" + resultadoLocalMasculino + " - " + resultadoVisitanteMasculino + "</p>";  // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                 
        arrayResultados.push(resultadoLocalMasculino + " - " + resultadoVisitanteMasculino);

        console.log(arrayResultados);
        localStorage.setItem("resultados", JSON.stringify(arrayResultados)); // Guardamos las variables en el LocalStorage. 
    }
    resultatsMasc.innerHTML = htmlResultatsMasc; // Asignamos al elemento dónde íbamos a imprimir los resultados masculinos, la cadena que ahora tiene las variables aleatorias.
}

function escriureResultatsFem() {  // Función para escribir los resultados femeninos
    var resultatsFem = document.getElementById("resultatsFem");
    
    let htmlResultatsFem = "";

    for(let i = 0; i < 4; i++) { // Hacemos un bucle para que sólo salgan 4 resultados.
        var resultadoLocalFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local femenino.
        var resultadoVisitanteFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante femenino.

        htmlResultatsFem += "<p>" + resultadoLocalFemenino + " - " + resultadoVisitanteFemenino + "</p>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                  
        
        arrayResultados.push(resultadoLocalFemenino + " - " + resultadoVisitanteFemenino);

        console.log(arrayResultados);
        localStorage.setItem("resultados", JSON.stringify(arrayResultados)); // Guardamos las variables en el LocalStorage.          
    }
    resultatsFem.innerHTML = htmlResultatsFem; // Asignamos al elemento dónde íbamos a imprimir los resultados femeninos, la cadena que ahora tiene las variables aleatorias.
}
function comprobarQuiniela() { // Función para comprobar la quiniela    
    resultatsM.disabled = false; // Esto desactivará el botón para generar resultados masculinos.
}

var resultatsM = document.getElementById("resultatsM"); // Recoge el botón para generar resultados masculinos.
resultatsM.addEventListener("click", escriureResultatsMasc); // Cuando haga click, que inicie la función para escribir resultados masculinos.

// var Quiniela = document.getElementById("Quiniela"); // Recoge el botón para comprobar la quiniela.
// Quiniela.addEventListener("click", comprobarQuiniela); // Cuando haga click, que inicie la función para escribir resultados masculinos.

// COSAS QUE FALTAN:
    // Falta comprobar que los equipos de las jornadas no se repitan.
    // Comprobar las apuestas. */