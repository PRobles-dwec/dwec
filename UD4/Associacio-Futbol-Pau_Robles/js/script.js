var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var horasPartidos = ["14:00", "16:00", "18:00", "20:00", "20:45", "21:00"];
var diasPartidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var jornadesMasc = document.getElementById("jornadesMasc");    
var jornadesFem = document.getElementById("jornadesFem");

function escriureJornades() {  
    let htmlJornadesMasc = "";

    for(let i = 1; i < primeraMasc.length; i++) {
        
        var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
        var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
        var horasPartidosAleatorio = horasPartidos[Math.floor(Math.random() * horasPartidos.length)];
        var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)];
        
        htmlJornadesMasc += "<p>" +  "<b>" + "JORNADA " + i + "</b>" +  "<br/>" + aleatorioLocalMasculino + " - " + aleatorioVisitanteMasculino + "</br>" + diasPartidosAleatorio + "</br>" + horasPartidosAleatorio  + "</p>";       

        localStorage.setItem("jornadasMasculinas", JSON.stringify(aleatorioLocalMasculino) + " - " + JSON.stringify(aleatorioVisitanteMasculino));        
    }
    jornadesMasc.innerHTML = htmlJornadesMasc;
}

function escriureJornadesFem() {  
    let htmlJornadesFem = "";

    for(let i = 1; i < segonaFem.length; i++) {
        
        var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)];
        var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)];   
        var horasPartidosAleatorio = horasPartidos[Math.floor(Math.random() * horasPartidos.length)];
        var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; 

        htmlJornadesFem += "<p>" +  "<b>" + "JORNADA " + i + "</b>" +  "<br/>" + aleatorioLocalFemenino + " - " + aleatorioVisitanteFemenino + "</br>" + diasPartidosAleatorio + "</br>" + horasPartidosAleatorio  + "</p>";       

        localStorage.setItem("jornadasFemeninas", JSON.stringify(aleatorioLocalFemenino) + " - " + JSON.stringify(aleatorioVisitanteFemenino));
    }
    jornadesFem.innerHTML = htmlJornadesFem;
}

function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min)) + min; // Para que no salgan decimales.
}   
        
function escriureResultatsMasc() {
    var resultatsMasc = document.getElementById("resultatsMasc");
    
    let htmlResultatsMasc = "";

    for(let i = 0; i < 10; i++) {
        var resultadoLocalMasculino = getRandom(0,6);
        var resultadoVisitanteMasculino = getRandom(0,6);
        
        htmlResultatsMasc += "<p>" + resultadoLocalMasculino + " - " + resultadoVisitanteMasculino + "</p>";                  

        localStorage.setItem("resultadosMasculinos", JSON.stringify(resultadoLocalMasculino) + " - " + JSON.stringify(resultadoVisitanteMasculino));
    }
    resultatsMasc.innerHTML = htmlResultatsMasc;
}

function escriureResultatsFem() {
    var resultatsFem = document.getElementById("resultatsFem");
    
    let htmlResultatsFem = "";

    for(let i = 0; i < 4; i++) {
        var resultadoLocalFemenino = getRandom(0,6);
        var resultadoVisitanteFemenino = getRandom(0,6);

        htmlResultatsFem += "<p>" + resultadoLocalFemenino + " - " + resultadoVisitanteFemenino + "</p>";                     
        
        localStorage.setItem("resultadosFemeninos", JSON.stringify(resultadoLocalFemenino) + " - " + JSON.stringify(resultadoVisitanteFemenino));             

    }
    resultatsFem.innerHTML = htmlResultatsFem;
}

var resultatsM = document.getElementById("resultatsM");
resultatsM.addEventListener("click", escriureResultatsMasc);