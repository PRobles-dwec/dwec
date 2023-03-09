// Array con los equipos de la primera liga masculina.
var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

// Array con los equipos de la segunda liga femenina.
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

var diasPartidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Array con los días de los partidos.

var jornadesMasc = document.getElementById("jornadesMasc"); // Recogemos el elemento donde imprimiremos las jornadas masculinas
var jornadesFem = document.getElementById("jornadesFem"); // Recogemos el elemento donde imprimiremos las jornadas femeninas

const resultatsMasc = document.getElementById("resultatsMasc"); // Recogemos el elemento donde imprimiremos los resultados masculinos.
const resultatsFem = document.getElementById("resultatsFem"); // Recogemos el elemento donde imprimiremos los resultados femeninos.

var tabla = document.getElementById("tabla");  // Recogemos el elemento en el que vamos a imprimir la tabla.

function escriureJornades() {   // Función que escribe las jornadas masculinas
    var arrayJornades = []; // Aquí se guardarán las 14 jornadas.
    let htmlJornades = "";  // Hacemos una cadena vacía, en la que imprimiremos las jornadas.          

    if(document.title == "Jornadas Masculinas") {       
        for(let i = 0; i < 10; i++) { // Recorremos hasta que llegue a 10 jornadas masculinas.        
            var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
            var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo visitante masculino, que será aleatorio.

            var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.            
            
            while(aleatorioLocalMasculino === aleatorioVisitanteMasculino) { // Mientras el equipo local y el equipo visitante, sean el mismo.
                aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Le diremos que el equipo visitante, lo haga aleatorio, para que no se repitan.
            }                        

            arrayJornades.push({local: aleatorioLocalMasculino, visitante: aleatorioVisitanteMasculino}); // Añadimos ambos equipos al array en dónde almacenamos las jornadas.
            
            localStorage.setItem("jornadasMasculinas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage. 
            
            console.log(arrayJornades);            
            
            htmlJornades += "<table>" + "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>" + "<tr>" + "<td>" + aleatorioLocalMasculino + "</td>" + "<td>" + " - " + "</td>" + "<td>" + aleatorioVisitanteMasculino + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                                         
        }
        jornadesMasc.innerHTML = htmlJornades; // Añadimos la cadena y la imprimimos en el elemento dónde queremos imprimirlo.                  
    } else {
        for(let i = 0; i < 4; i++) { // Recorremos para que sólo salgan 4 jornadas femeninas..        
            var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local femenino, que será aleatorio.
            var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo visitante femenino, que será aleatorio.  
           
            var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.
            
            while(aleatorioLocalFemenino === aleatorioVisitanteFemenino) { // Mientras el equipo local y el equipo visitante, sean el mismo.
                aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Le diremos que el equipo visitante, lo haga aleatorio, para que no se repitan.
            }
                        
            arrayJornades.push({local: aleatorioLocalFemenino, visitante: aleatorioVisitanteFemenino}); // Añadimos ambos equipos al array en dónde almacenamos las jornadas.
            console.log(arrayJornades);             
            
            htmlJornades += "<table>" + "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>" + "<tr>" + "<td>" + aleatorioLocalFemenino + "</td>" + "<td>" + " - " + "</td>" + "<td>" + aleatorioVisitanteFemenino + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.                             
        }  
        jornadesFem.innerHTML = htmlJornades; // Añadimos la cadena y la imprimimos en el elemento dónde queremos imprimirlo. 
        localStorage.setItem("jornadasFemeninas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage.                               
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
    let htmlResultats = ""; // Cadena vacía para imprimir más tarde los resultados.

    if(document.title == "Resultados Liga Masculina") { // Si el título de la página es el mismo.               
        const tabla = document.createElement("table"); // Creamos una tabla.

        tabla.innerHTML = "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>"; // Creamos la cabecera de la tabla.

        var equipoMasculino = JSON.parse(localStorage.getItem("jornadasMasculinas")); // Recogemos las jornadas masculinas guardadas en el LocalStorage.
        
        equipoMasculino.forEach((element, index)=> { // Recorremos cada uno de los elementos que están en el array de equipos masculinos.
            console.log(element.local);  
            var resultadoLocalMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local masculino.
            var resultadoVisitanteMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante masculino.

            arrayResultats.push({local: resultadoLocalMasculino, visitante: resultadoVisitanteMasculino}); // Metemos ambos resultados en el array de resultados.
                               
            htmlResultats += "<table>" + "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>" + "</tr>" + "<tr>" + "<td>" + element.local + "</td>" + "<td>" + resultadoLocalMasculino + " - " + resultadoVisitanteMasculino + "</td>" + "<td>" + element.visitante + "</td>" + "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.
            // También imprimimos los equipos.                       
        });
        
        localStorage.setItem("resultadosMasculinos", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage. 
        resultatsMasc.innerHTML = htmlResultats; // Asignamos al elemento dónde íbamos a imprimir los resultados masculinos, la cadena que ahora tiene las variables aleatorias.
    }else {                                          
        const tabla = document.createElement("table"); // Creamos una tabla.

        tabla.innerHTML = "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>";  // Creamos la cabecera de la tabla.                     
            
        var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasFemeninas")); // Recogemos las jornadas femeninas guardadas en el LocalStorage.

        jornadasAuxFem.forEach((element, index) => { // Recorremos cada uno de los elementos que están en el array de equipos femeninos.
            console.log(element.local + " - " + element.visitante);
            var resultadoLocalFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local femenino.
            var resultadoVisitanteFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante femenino.
                        
            arrayResultats.push({local: resultadoLocalFemenino, visitante: resultadoVisitanteFemenino}); // Recogemos las jornadas femeninas guardadas en el LocalStorage.

            htmlResultats += "<table>" + "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>" + "</tr>" + "<tr>" + "<td>" + element.local + "</td>" + "<td>" + resultadoLocalFemenino + " - " + resultadoVisitanteFemenino + "</td>" + "<td>" + element.visitante + "</td>" + "</tr>" + "</table>"; // Asignamos las variables declaradas a la cadena vacía, en dónde guardaremos las variables aleatorias.
            // También imprimimos los equipos.                       
        });
        
        resultatsFem.innerHTML = htmlResultats; // Asignamos al elemento dónde íbamos a imprimir los resultados femeninos, la cadena que ahora tiene las variables aleatorias.
        localStorage.setItem("resultadosFemeninos", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage. 
    }    
    
    console.log(arrayResultats);
}

function comprobarQuiniela() {
    const resultados_tabla = document.getElementById("resultados_tabla"); // Recogemos el elemento en dónde imprimiremos la tabla.
    resultados_tabla.style.display = "block"; // Decimos que los resultados de la tabla los muestre.
    resultados_tabla.innerHTML =  "<th>" + "Resultados" + "</th>"; // Creamos la cabecera de la tabla.

    var resultadosAuxMasc = JSON.parse(localStorage.getItem("resultadosMasculinos")); // Recogemos los resultados masculinos del LocalStorage.
    var resultadosAuxFem = JSON.parse(localStorage.getItem("resultadosFemeninos")); // Recogemos los resultados femeninos del LocalStorage.

    var resultadosAux = resultadosAuxMasc.concat(resultadosAuxFem); // Creamos un nuevo array juntando los resultados.
    console.log(resultadosAux);
    
    resultadosAux.forEach((element, index) => { // Recorremos el array de los resultados.
        console.log(element.local + " - " + element.visitante);
        if(element.local > element.visitante) { // Si el resultado local, es mayor que el resultado visitante.
            resultados_tabla.innerHTML += "<tr>"+ "<td>" + "1" + "</td>" + "</tr>"; // Imprimimos que es 1, haciendo referencia a que el local es mayor que el visitante.        
        }
        if(element.local == element.visitante) { // Si el resultado local, es igual que el resultado visitante.
            resultados_tabla.innerHTML += "<tr>"+ "<td>" + "X" + "</td>" + "</tr>"; // Imprimimos que es X, haciendo referencia a que el local es igual al visitante.             
        }
        if(element.local < element.visitante) { // Si el resultado local, es menor que el resultado visitante.
            resultados_tabla.innerHTML += "<tr>"+ "<td>" + "2" + "</td>" + "</tr>"; // Imprimimos que es 2, haciendo referencia a que el local es menor que el visitante.          
        }     
    });
    if(document.getElementById('input1_"+index+"').checked == false & document.getElementById('inputX_"+index+"').checked == false & document.getElementById('input2_"+index+"').checked == false) { // Si ninguno de los inputs han sido seleccionados.
        alert("Marca tus pronósticos");
    }else {
        alert("Tienes un total de 0 aciertos");
    }          
}

function dibuixarTaulaPronostics() {        
    const pronosticos_tabla = document.getElementById("pronosticos_tabla"); // Recogemos el elemento en dónde imprimiremos la tabla.    

    pronosticos_tabla.innerHTML =  "<tr><th>" + "Jornadas" + "</th>" + "<th>" + "Partidos" + "</th>" + "<th>" + "Pronósticos" + "</th>" + "</tr>"; // Creamos la cabecera de la tabla.    
    
    var jornadasAuxMasc = JSON.parse(localStorage.getItem("jornadasMasculinas")); // Recogemos los equipos masculinos del LocalStorage.
    var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasFemeninas")); // Recogemos los equipos femeninos del LocalStorage.

    var jornadasAux = jornadasAuxMasc.concat(jornadasAuxFem); // Juntamos ambos arrays, para hacer uno nuevo.
    console.log(jornadasAux);
   
    jornadasAux.forEach((element, index) => { // Recorremos el nuevo array de jornadas.
        console.log(element.local);
        console.log(element.visitante);

        // Imprimimos los valores que deseamos recoger de dicho array.
        pronosticos_tabla.innerHTML += "<tr>" + "<td>" + (index + 1) + "</td>" + "<td>" + element.local + " vs " + element.visitante +  "</td>" + 
        "<td>" + "<input type='radio' name='"+index+"' value='input1' id='input1_"+index+"' required> <input type='radio' name='"+index+"' value='inputX' id='inputX_"+index+"' required> <input type='radio' name='"+index+"' value='input2' id='input2_"+index+"' required> </td>"+ "</tr>";
    });
    
}
    if(document.title == "Apuestas Deportivas") { // Si el título del documento es igual.
        dibuixarTaulaPronostics(); // Llamamos a la función para dibujar la tabla de quinielas.
    }