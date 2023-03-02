var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];
var diasPartidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Array con los días de los partidos.

var jornadesMasc = document.getElementById("jornadesMasc"); // Recogemos el elemento donde imprimiremos las jornadas masculinas
var jornadesFem = document.getElementById("jornadesFem"); // Recogemos el elemento donde imprimiremos las jornadas femeninas

var resultatsMasc = document.getElementById("resultatsMasc");
var resultatsFem = document.getElementById("resultatsFem");

function escriureJornades() {   // Función que escribe las jornadas masculinas
    var arrayJornades = []; // Aquí se guardarán las 14 jornadas.    
    let htmlJornades = "";

    if(document.title == "Jornadas Masculinas") {       
        for(let i = 0; i < 10; i++) { // Recorremos hasta que llegue a 10.        
            var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
            var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo visitante masculino, que será aleatorio.

            var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.
            //var horasPartidosAleatorio = horasPartidos[Math.floor(Math.random() * horasPartidos.length)]; // Variable para guardar las horas de los partidos, que será aleatorio.            
            
            while(aleatorioLocalMasculino === aleatorioVisitanteMasculino) {
                aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
            }
            arrayJornades.push({local: aleatorioLocalMasculino, visitante: aleatorioVisitanteMasculino});
            console.log(arrayJornades);            
            
            htmlJornades += "<table>" + "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>" + "<tr>" + "<td>" + aleatorioLocalMasculino + "</td>" + "<td>" + " - " + "</td>" + "<td>" + aleatorioVisitanteMasculino + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                             
        }
        jornadesMasc.innerHTML = htmlJornades;                   
    } else {
        for(let i = 0; i < 4; i++) { // Recorremos para que sólo salgan 4.
        
            var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local femenino, que será aleatorio.
            var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo visitante femenino, que será aleatorio.  

            //var horasPartidosAleatorio = horasPartidos[Math.floor(Math.random() * horasPartidos.length)]; // Variable para guardar las horas de los partidos, que será aleatorio.
            var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.
            
            while(aleatorioLocalFemenino === aleatorioVisitanteFemenino) {
                aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)];
            }

            arrayJornades.push({local: aleatorioLocalFemenino, visitante: aleatorioVisitanteFemenino});
            console.log(arrayJornades);             
            
            htmlJornades += "<table>" + "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>" + "<tr>" + "<td>" + aleatorioLocalFemenino + "</td>" + "<td>" + " - " + "</td>" + "<td>" + aleatorioVisitanteFemenino + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                             
        }  
        jornadesFem.innerHTML = htmlJornades;                                
    }
    localStorage.setItem("jornadas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage. 
    console.log(arrayJornades);    
}

function getRandom(min,max) { // Función para elegir un número aleatorio entre 2 números.
    return Math.floor(Math.random() * (max - min)) + min; // Para que no salgan decimales.
}   

function getRandomHours() {
    let horas = Math.floor(Math.random() * 24);
    let minutos = Math.floor(Math.random() * 60);
    return (horas < 10 ? "0" + horas:horas) + ":" + (minutos < 10 ? "0" + minutos:minutos);    
}

function escriureResultats() { // Función para escribir los resultados masculinos
    
    var arrayResultats = [];

    let htmlResultats = "";

    if(document.title == "Resultados Liga Masculina") {
        for(let i = 0; i < 10; i++) { // Hacemos un bucle para que sólo salgan 10 resultados.
            var resultadoLocalMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local masculino.
            var resultadoVisitanteMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante masculino.
                        
            arrayResultats.push({local: resultadoLocalMasculino, visitante: resultadoVisitanteMasculino}); 
            
            htmlResultats += "<table>" + "<tr>" + "<td>" + "Local" + "</td>" + "<td>" + "  " + "</td>" + "<td>" + "Visitante" + "</td>" + "</tr>" + "<tr>" + "<td>" + resultadoLocalMasculino + "</td>" + "<td>" + " - " + "</td>" + "<td>" + resultadoVisitanteMasculino + "</td>" + "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias. 
        } 
        resultatsMasc.innerHTML = htmlResultats; // Asignamos al elemento dónde íbamos a imprimir los resultados masculinos, la cadena que ahora tiene las variables aleatorias.
    }else {        
        for(let i = 0; i < 4; i++) { // Hacemos un bucle para que sólo salgan 4 resultados.
            var resultadoLocalFemenino = getRandom(0,7); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local femenino.
            var resultadoVisitanteFemenino = getRandom(0,7); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante femenino.           
            
            arrayResultats.push({local: resultadoLocalFemenino, visitante: resultadoVisitanteFemenino});
            
            htmlResultats += "<table>" + "<tr>" + "<td>" + "Local" + "</td>" + "<td>" + "  " + "</td>" + "<td>" + "Visitante" + "</td>" + "</tr>" + "<tr>" + "<td>" + resultadoLocalFemenino + "</td>" + "<td>" + " - " + "</td>" + "<td>" + resultadoVisitanteFemenino + "</td>" + "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                  
        }
        resultatsFem.innerHTML = htmlResultats;
    }
    
    localStorage.setItem("resultados", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage. 
    console.log(arrayResultats);
}

var resultatsM = document.getElementById("resultatsM"); // Recoge el botón para generar resultados masculinos.
resultatsM.addEventListener("click", escriureResultats); // Cuando haga click, que inicie la función para escribir resultados masculinos.