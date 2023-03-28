// Array con los equipos de la primera liga masculina.
var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

// Array con los equipos de la segunda liga femenina.
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

// Array con los posibles días de los partidos.
var diasPartidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Array con los días de los partidos.

const jornadesMasc = document.getElementById("jornadesMasc"); // Recogemos el elemento donde imprimiremos las jornadas masculinas
const jornadesFem = document.getElementById("jornadesFem"); // Recogemos el elemento donde imprimiremos las jornadas femeninas

const equips = { // Creamos un objeto para guardar los equipos.
    primeraMasc: this.primeraMasc,
    segonaFem: this.segonaFem,
};
console.log(equips);

const resultatsMasc = document.getElementById("resultatsMasc"); // Recogemos el elemento donde imprimiremos los resultados masculinos.
const resultatsFem = document.getElementById("resultatsFem"); // Recogemos el elemento donde imprimiremos los resultados femeninos.

function escriureJornades() {   // Función que escribe las jornadas masculinas   
    
    if(document.title == "Jornadas Masculinas") {   
        jornadesMasc.style.display= "block";
        jornadesMasc.innerHTML = "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>";    
        
        const numeroDiasPartido = this.primeraMasc.length - 1; // número de jornadas
        const numeroPartidosPorDia = this.primeraMasc.length/2;

        console.log(numeroPartidosPorDia + " partidos por día.");
        console.log(numeroDiasPartido + " días de partido. ");        
        
        const nombresEquipo = this.segonaFem.length;
                
        const nombresEquiposLocales = this.segonaFem.length - 1;
        const nombresEquiposVisitantes = this.segonaFem.length - 1;
        
        let indiceEquipo = this.primeraMasc.length -1;

            for(let i = 0; i < numeroDiasPartido; i++) { // Recorremos hasta que llegue a 10 jornadas masculinas.                   
                var arrayJornades = []; // Aquí se guardarán las 14 jornadas.
                for(let j = 0; j < numeroPartidosPorDia; j++) {
                    var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
                    var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo visitante masculino, que será aleatorio.

                    var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.            
                
                    let partidoMasculino = {local: aleatorioLocalMasculino, visitante: aleatorioVisitanteMasculino};                            

                    arrayJornades.push(partidoMasculino); // Añadimos ambos equipos al array en dónde almacenamos las jornadas.                                                                         
                }                                                                                                  
            }  
            localStorage.setItem("jornadasMasculinas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage.      
            arrayJornades.forEach((partido,index) => {                                        
                jornadesMasc.innerHTML += "<tr>" + "<td>" + partido.local + "</td>" + "<td>" + " - " + "</td>" + "<td>" + partido.visitante + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>"; // Añadimos la cadena y la imprimimos en el elemento dónde queremos imprimirlo. 
                if(index === 0) {
                    partido.local = nombresEquipo[nombresEquiposLocales];
                    partido.local = nombresEquipo[indiceEquipo];
                    indiceEquipo++;
                }   
                if(index === 0) {
                    partido.visitante = nombresEquipo[nombresEquiposVisitantes];
                    partido.visitante = nombresEquipo[indiceEquipo];
                    indiceEquipo--;
                }                                                                 
            });      

        } else {
                jornadesFem.style.display= "block";
                jornadesFem.innerHTML = "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>";    

                const numeroDiasPartido = this.segonaFem.length - 1; // número de jornadas
                const numeroPartidosPorDia = this.segonaFem.length/2;
                
                const nombresEquipo = this.segonaFem.length;
                
                const nombresEquiposLocales = this.segonaFem.length - 1;
                const nombresEquiposVisitantes = this.segonaFem.length - 1;
                
                let indiceEquipo = this.segonaFem.length -1 -1;
                                                
                for(let i = 0; i < numeroDiasPartido; i++) {
                    var arrayJornades = [];
                    for(let j = 0; j < numeroPartidosPorDia; j++) {
                        var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local femenino, que será aleatorio.
                        var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo visitante femenino, que será aleatorio.  
                            
                        var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.
                            
                        let partidoFemenino = {local: aleatorioLocalFemenino, visitante: aleatorioVisitanteFemenino};   
                        arrayJornades.push(partidoFemenino); // Añadimos ambos equipos al array en dónde almacenamos las jornadas.                                                    
                    }                                            
                }                
                
                localStorage.setItem("jornadasFemeninas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage.
                                
                arrayJornades.forEach((partido,index) => {                                        
                    jornadesFem.innerHTML += "<tr>" + "<td>" + partido.local + "</td>" + "<td>" + " - " + "</td>" + "<td>" + partido.visitante + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>"; // Añadimos la cadena y la imprimimos en el elemento dónde queremos imprimirlo. 
                    if(index === 0) {
                        partido.local = nombresEquipo[nombresEquiposLocales];
                        partido.local = nombresEquipo[indiceEquipo];
                        indiceEquipo++;
                    }   
                    if(index === 0) {
                        partido.visitante = nombresEquipo[nombresEquiposVisitantes];
                        partido.visitante = nombresEquipo[indiceEquipo];
                        indiceEquipo--;
                    }                                                                 
                });                                                                                                                                 
            }                                
        console.log(arrayJornades);     
    }

function getRandom(min,max) { // Función para elegir un número aleatorio entre 2 números.
    return Math.floor(Math.random() * (max - min)) + min; // Para que no salgan decimales.
}   

function getRandomHours() { // Función que hará que las horas sean aleatorias.
    let horas = Math.floor(Math.random() * 24); // Variable para las horas. Recoge las 24 horas de un día.
    let minutos = Math.floor(Math.random() * 60);  // Variable para los minutos. Recoge 60 segundos.
    return (horas < 10 ? "0" + horas:horas) + ":" + (minutos < 10 ? "0" + minutos:minutos); // Devolverá las horas y los minutos, que siempres serán menores que 10.   
}

function escriureResultats() { // Función para escribir los resultados
    var arrayResultats = []; // Array para guardar los resultados.    
    
    if(document.title == "Resultados Liga Masculina") { // Si el título de la página es el mismo.               
        resultatsMasc.style.display = "block";
        resultatsMasc.innerHTML = "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>"; // Creamos la cabecera de la tabla.

        var equipoMasculino = JSON.parse(localStorage.getItem("jornadasMasculinas")); // Recogemos las jornadas masculinas guardadas en el LocalStorage.
        if(equipoMasculino == null) {
            console.log("Falta generar equipos masculinos");
            resultatsMasc.style.display = "none";
        }else {
            equipoMasculino.forEach((element, index)=> { // Recorremos cada uno de los elementos que están en el array de equipos masculinos.
                var resultadoLocalMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local masculino.
                var resultadoVisitanteMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante masculino.

                arrayResultats.push({local: resultadoLocalMasculino, visitante: resultadoVisitanteMasculino}); // Metemos ambos resultados en el array de resultados.
                                
                resultatsMasc.innerHTML += "<tr>" + "<td>" + element.local + "</td>" + "<td>" + resultadoLocalMasculino + " - " + resultadoVisitanteMasculino + "</td>" + "<td>" + element.visitante + "</td>" + "</tr>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.
                // También imprimimos los equipos.                       
            });        
            localStorage.setItem("resultadosMasculinos", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage.       
        }          
    }else {                                              
        resultatsFem.style.display = "block";
        resultatsFem.innerHTML = "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>";  // Creamos la cabecera de la tabla.                     
            
        var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasFemeninas")); // Recogemos las jornadas femeninas guardadas en el LocalStorage.

        if(jornadasAuxFem == null) {
            console.log("Falta generar equipos femeninos.");
            resultatsFem.style.display = "none";
        }else {
            jornadasAuxFem.forEach((element, index) => { // Recorremos cada uno de los elementos que están en el array de equipos femeninos.
                console.log(element.local + " - " + element.visitante);
                var resultadoLocalFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local femenino.
                var resultadoVisitanteFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante femenino.
                            
                arrayResultats.push({local: resultadoLocalFemenino, visitante: resultadoVisitanteFemenino}); // Recogemos las jornadas femeninas guardadas en el LocalStorage.

                resultatsFem.innerHTML += "<tr>" + "<td>" + element.local + "</td>" + "<td>" + resultadoLocalFemenino + " - " + resultadoVisitanteFemenino + "</td>" + "<td>" + element.visitante + "</td>" + "</tr>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.
                // También imprimimos los equipos.                       
            });                
            localStorage.setItem("resultadosFemeninos", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage. 
        }        
    }        
    if(arrayResultats.length == 0) {
        console.log("Array vacío.")
    }    
    
    const resultats = { // Creamos un objeto para guardar los resultados.
        arrayResultats: arrayResultats,
    };
    console.log(resultats);       
}

function comprobarQuiniela() {
    const resultados_tabla = document.getElementById("resultados_tabla"); // Recogemos el elemento en dónde imprimiremos la tabla.
    resultados_tabla.style.display = "block"; // Decimos que los resultados de la tabla los muestre.

    resultados_tabla.innerHTML =  "<th>" + "Resultados" + "</th>"; // Creamos la cabecera de la tabla.

    var resultadosAuxMasc = JSON.parse(localStorage.getItem("resultadosMasculinos")); // Recogemos los resultados masculinos del LocalStorage.
    var resultadosAuxFem = JSON.parse(localStorage.getItem("resultadosFemeninos")); // Recogemos los resultados femeninos del LocalStorage.

    var explicacionPronosticos = document.getElementById("explicacionPronosticos");
    var boton = document.getElementById("boton");

    explicacionPronosticos.style.display = "block";
    boton.style.display = "block";

    var contador = document.getElementById("contador");
    if(resultadosAuxMasc == null || resultadosAuxFem == null) {
        alert("No están todos los resultados disponibles. Pruebe más tarde.");
        console.log("Faltan generar resultados.");
        resultados_tabla.style.display = "none";
        aciertos.style.display = "none"; // Decimos que los resultados de la tabla los muestre.
    }
    /* if(document.querySelector("input[type='radio']")) {
        alert("Marca tus pronósticos");
        resultados_tabla.style.display = "none";
        aciertos.style.display = "none";
    } */else {
        var resultadosAux = resultadosAuxMasc.concat(resultadosAuxFem); // Creamos un nuevo array juntando los resultados.
        console.log(resultadosAux);
        aciertos.style.display = "block";

        let contadorAciertos = 0;

        resultadosAux.forEach((element, index) => { // Recorremos el array de los resultados.
            if(element.local > element.visitante) { // Si el resultado local, es mayor que el resultado visitante.
                resultados_tabla.innerHTML += "<tr>"+ "<td>" + "1" + "</td>" + "</tr>"; // Imprimimos que es 1, haciendo referencia a que el local es mayor que el visitante.        
                contadorAciertos++;
                //resultados_tabla.classList.add("acierto");
            }
            if(element.local == element.visitante) { // Si el resultado local, es igual que el resultado visitante.
                resultados_tabla.innerHTML += "<tr>"+ "<td>" + "X" + "</td>" + "</tr>"; // Imprimimos que es X, haciendo referencia a que el local es igual al visitante.             
                contadorAciertos++;
                //resultados_tabla.classList.add("acierto");
            }
            if(element.local < element.visitante) { // Si el resultado local, es menor que el resultado visitante.
                resultados_tabla.innerHTML += "<tr>"+ "<td>" + "2" + "</td>" + "</tr>"; // Imprimimos que es 2, haciendo referencia a que el local es menor que el visitante.          
                contadorAciertos++;
                //resultados_tabla.classList.add("acierto");
            } else {
                resultados_tabla.classList.add("error");
            } 
           
        });
        contador.innerText = contadorAciertos;
    }
    
    const resultatsAux = {
        resultadosAux: resultadosAux,
    };
    if(resultadosAux === undefined) {
        console.log("Falta que generes resultados para que se guarden en el objeto de resultados.");
    } else{
        console.log(resultatsAux);
    }    
}

function dibuixarTaulaPronostics() {      
    var div = document.getElementById("contenedor_tabla");     
    var tabla = document.createElement("table");
    tabla.id = "pronosticos_tabla";
    var tblBody = document.createElement("tbody");   
    
    var aciertos = document.getElementById("aciertos");

    aciertos.style.display = "none";
    
    var jornadasAuxMasc = JSON.parse(localStorage.getItem("jornadasMasculinas")); // Recogemos los equipos masculinos del LocalStorage.
    var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasFemeninas")); // Recogemos los equipos femeninos del LocalStorage.        

    tabla.innerHTML = "<th>" + "Jornadas" + "</th>" +"<th>" + "Partidos" + "</th>" + "<th>" + "1" + "</th>" + "<th>" + "X" + "</th>" + "<th>" + "2" + "</th>";
    if(jornadasAuxMasc == null || jornadasAuxFem == null) {
        alert("Jornadas no disponibles. Pruebe más tarde.");
        console.log("Faltan generar jornadas.");
        tabla.style.display = "none";
        aciertos.style.display = "none";
        resultados_tabla.style.display = "none"; // Decimos que los resultados de la tabla los muestre.
    } else {
        // Creando las celdas 
        var jornadasAux = jornadasAuxMasc.concat(jornadasAuxFem); // Juntamos ambos arrays, para hacer uno nuevo.
        jornadasAux.forEach((element, index) => { // Recorremos el nuevo array de jornadas.
            var fila = document.createElement("tr");
            
            var celda1 = document.createElement("td");
            var celdaTexto1 = document.createTextNode(index+1);
            celda1.appendChild(celdaTexto1);
                        
            var celda2 = document.createElement("td");
            var celdaTexto2 = document.createTextNode(element.local + " vs " + element.visitante);
            celda2.appendChild(celdaTexto2);
                                 
            fila.appendChild(celda1);
            fila.appendChild(celda2);
           
            for(let i = 0; i < 3; i++) {
                var celdaInputs1 = document.createElement("td");

                var celdaTextoInputs1 = document.createElement("input");
                celdaTextoInputs1.type = "radio";
                celdaTextoInputs1.required = "true";
                celdaTextoInputs1.name = "pronosticos";

                var celdaInputsX = document.createElement("td");

                var celdaTextoInputsX = document.createElement("input");
                celdaTextoInputsX.type = "radio";
                celdaTextoInputsX.required = "true";
                celdaTextoInputsX.name = "pronosticos";

                var celdaInputs2 = document.createElement("td");

                var celdaTextoInputs2 = document.createElement("input");
                celdaTextoInputs2.type = "radio";
                celdaTextoInputs2.required = "true";
                celdaTextoInputs2.name = "pronosticos";
               
                celdaInputs1.appendChild(celdaTextoInputs1);
                celdaInputsX.appendChild(celdaTextoInputsX);
                celdaInputs2.appendChild(celdaTextoInputs2);
                
            }

            fila.appendChild(celdaInputs1);
            fila.appendChild(celdaInputsX);
            fila.appendChild(celdaInputs2);
            
            tblBody.appendChild(fila);
            tabla.appendChild(tblBody);

            div.prepend(tabla);
            
        }); 
        const jornadesAux = { // Creamos un objeto para guardar los resultados.
            jornadasAux: jornadasAux,
        };
        if(jornadasAux === undefined) {
            console.log("Falta que generes jornadas para guardarlas en el objeto dónde se guardan las jornadas.");        
        } else {
            console.log(jornadesAux); 
        }                
    } 


}

function programacionDiasPartido() {    
    const numeroPartidosPorDia = this.teams.length/2; // número de partidos por jornadas.
    for(let i = 0; i < numeroDiasPartido; i++) {
        const diaPartido = [];
        for(let j = 0; j < numeroPartidosPorDia; j++) {
            let partido = {local: visitante, visitante: visitante};
            diaPartido.push(partido);
        }
        this.HorarioPartido.push(diaPartido);
    }
}

function equipoLocal() {
    const nombresEquipo = this.teams.map (team => team.name);
    const nombresEquiposLocales = this.teams.length - 1;
    let indiceEquipo = this.teams.length - 1 -1;
    this.HorarioPartido.forEach(diaPartido => {
        diaPartido.forEach(function(partido, index) {
            // Arrays siempre empiezan en 0.
            if(index === 0) {
                partido.local = nombresEquipo[nombresEquiposLocales];
                // Para los demás partidos, que no son el primero.
                partido.local = nombresEquipo[indiceEquipo];
                indiceEquipo++;
            }
        });
    }); 
}

function equipoVisitante() {
    const nombresEquipo = this.teams.map (team => team.name);
    const nombresEquiposVisitantes = this.teams.length - 1;
    let indiceEquipo = this.teams.length - 1 -1;
    this.HorarioPartido.forEach(diaPartido => {
        diaPartido.forEach(function(partido, index) {
            // Arrays siempre empiezan en 0.
            if(index === 0) {
                partido.visitante = nombresEquipo[nombresEquiposVisitantes];
                // Para los demás partidos, que no son el primero.
                partido.visitante = nombresEquipo[indiceEquipo];
                indiceEquipo--;
            }
        });
    }); 
}

if(document.title == "Apuestas Deportivas") { // Si el título del documento es igual.        
    dibuixarTaulaPronostics(); // Llamamos a la función para dibujar la tabla de quinielas.
}