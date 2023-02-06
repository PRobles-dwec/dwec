var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];
var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)];

var aleatorioLocalFemenino = segonaFem[Math.floor(Math.random() * segonaFem.length)];
var aleatorioVisitanteFemenino = segonaFem[Math.floor(Math.random() * segonaFem.length)];

function escriureJornades(event) {
    //event.preventDefault();
    var jornadesMasc = document.getElementById("jornadesMasc");
    var jornadesFem = document.getElementById("jornadesFem");
    
    for(let i= 0; i < primeraMasc.length; i++) {
            jornadesMasc.innerHTML = "20:00 " +  aleatorioLocalMasculino + " vs " + aleatorioVisitanteMasculino + "<br>";
    }
    for(let i= 0; i < segonaFem.length; i++) {
        jornadesFem.innerHTML = "18:00 " + aleatorioLocalFemenino + " vs " + aleatorioVisitanteFemenino + "<br>";
    }
}
function getRandom(min,max) {
    return MathMath.floor(Math.random() * (max - min)) + min;
}

escriureJornades();
