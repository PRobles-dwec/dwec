var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var jornadesMasc = document.getElementById("jornadesMasc");    
var jornadesFem = document.getElementById("jornadesFem");

function escriureJornades() {        
    let i = 0;
    while(i < primeraMasc.length) {
        i++;
        var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
        var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
        jornadesMasc.innerHTML += "20:00 " +  aleatorioLocalMasculino + " - " + aleatorioVisitanteMasculino + "<br>";
    }
    if(jornadesMasc.style.visibility = "visible") {
        jornadesMasc.style.visibility = "visible";
        jornadesFem.style.visibility = "hidden";
    }    
}

function escriureJornadesFem() {       
    let i = 0;
    while(i < segonaFem.length) {
        i++;
        var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * primeraMasc.length)];
        var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * primeraMasc.length)];    
        jornadesFem.innerHTML += "20:00 " +  aleatorioLocalFemenino + " - " + aleatorioVisitanteFemenino + "<br>";        
    }
    if(jornadesFem.style.visibility = "visible") {
        jornadesFem.style.visibility = "visible";
        jornadesMasc.style.visibility = "hidden";
    }
}

function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min)) + min; // Para que no salgan decimales.
}

var resultadoLocalMasculino = getRandom(0,6);
var resultadoVisitanteMasculino = getRandom(0,6);

var resultadoLocalFemenino = getRandom(0,6);
var resultadoVisitanteFemenino = getRandom(0,6);

function escriureResultatsMasc() {
    var resultatsMasc = document.getElementById("resultatsMasc");
    resultatsMasc.innerHTML += resultadoLocalMasculino + " - " + resultadoVisitanteMasculino + "<br>";
}

function escriureResultatsFem() {
    var resultatsFem = document.getElementById("resultatsFem");
    resultatsFem.innerHTML += resultadoLocalFemenino + " - " + resultadoVisitanteFemenino + "<br>";
}


let resultatsM = document.getElementById("resultatsM");
resultatsM.addEventListener("click", escriureResultatsMasc, false);

let resultatsF = document.getElementById("resultatsF");
resultatsF.addEventListener("click", escriureResultatsFem, false);