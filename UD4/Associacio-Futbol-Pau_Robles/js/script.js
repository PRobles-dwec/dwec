// Array con los equipos de la primera liga masculina.
var primeraMasc = ["Almería", "Athletic Club", "Atlético de Madrid", "FC Barcelona", "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe", "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

// Array con los equipos de la segunda liga femenina.
var segonaFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem", "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem", "R.Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem", "Valencia Fem", "Villarreal Fem"];

// Array con los posibles días de los partidos.
var diasPartidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const jornadesMasc = document.getElementById("jornadesMasc"); // Recogemos el elemento donde imprimiremos las jornadas masculinas
const jornadesFem = document.getElementById("jornadesFem"); // Recogemos el elemento donde imprimiremos las jornadas femeninas

const equips = { // Creamos un objeto para guardar los arrays de los equipos.
    primeraMasc: this.primeraMasc,
    segonaFem: this.segonaFem,
};
console.log(equips);

const equipsMasculins = { // Creamos un objeto para guardar los arrays de los equipos.
    primeraMasc: this.primeraMasc,
};
console.log(equipsMasculins);
console.log(Object.values(equipsMasculins));

const equipsFemenins = { // Creamos un objeto para guardar los arrays de los equipos.
    segonaFem: this.segonaFem,
};
console.log(equipsFemenins);
console.log(Object.values(equipsFemenins));

const resultatsMasc = document.getElementById("resultatsMasc"); // Recogemos el elemento donde imprimiremos los resultados masculinos.
const resultatsFem = document.getElementById("resultatsFem"); // Recogemos el elemento donde imprimiremos los resultados femeninos.

function escriureJornades() {   // Función que escribe las jornadas masculinas   
    
    if(document.title == "Jornadas Masculinas") {  // Si el título de la página es igual. 
        jornadesMasc.style.display= "block"; // Mostramos el div de las jornadas masculinas.
        jornadesMasc.innerHTML = "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>"; // Imprimimos la cabecera.  
        
        const numeroDiasPartido = this.primeraMasc.length - 1; // Número de partidos.
        const numeroPartidosPorDia = this.primeraMasc.length/2; // Número de partidos que hay cada día. 

        console.log(numeroPartidosPorDia + " partidos por día.");
        console.log(numeroDiasPartido + " días de partido. ");                               

            for(let i = 0; i < numeroDiasPartido; i++) { // Recorremos hasta que llegue a 10 jornadas masculinas.                   
                var arrayJornades = []; // Aquí se guardarán las 14 jornadas.
                for(let j = 0; j < numeroPartidosPorDia; j++) { // Recorremos los partidos que hay por día.
                    var aleatorioLocalMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
                    var aleatorioVisitanteMasculino  = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo visitante masculino, que será aleatorio.                    
                    
                    if(aleatorioLocalMasculino === aleatorioVisitanteMasculino) { // Si el equipo local y visitante son iguales.
                        var aleatorioLocalMasculino = primeraMasc[Math.floor(Math.random() * primeraMasc.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
                    }
                    let partidoMasculino = {local: aleatorioLocalMasculino, visitante: aleatorioVisitanteMasculino}; // Le decimos que guarde los partidos para más tarde.                          

                    arrayJornades.push(partidoMasculino); // Añadimos ambos equipos al array en dónde almacenamos las jornadas.                                                                         
                }                                                                                                  
            }  
            localStorage.setItem("jornadasMasculinas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage.      
                        
            arrayJornades.forEach((partido) => { // Recorremos el array de las jornadas.
                var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.                                                        
                                
                jornadesMasc.innerHTML += "<tr>" + "<td>" + partido.local + "</td>" + "<td>" + " - " + "</td>" + "<td>" + partido.visitante + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>"; // Imprimimos los elementos.                                                                                                     
            });

            const jornadesMasculines = { // Creamos un objeto para guardar los resultados.
                arrayJornades: arrayJornades,
            };
                        
            console.log(Object.values(jornadesMasculines)); 
                        
        } else {
                jornadesFem.style.display= "block"; // Mostramos el lugar dónde imprimiremos las jornadas femeninas.
                jornadesFem.innerHTML = "<tr>" + "<th>" + "Local" + "</th>" + "<th>" + "  " + "</th>" + "<th>" + "Visitante" + "</th>" + "<th>" + "Hora" + "</th>" + "<th>" + "Día" + "</th>" + "</tr>"; // Imprimimos los elementos.       

                const numeroDiasPartido = this.segonaFem.length - 1; // Número de partidos.
                const numeroPartidosPorDia = this.segonaFem.length/2; // Número de partidos por día.
                                
                var jornadasFemApuestas = []; // Array dónde guardaremos 4 jornadas aleatorias femeninas, para luego imprimirlas en las apuestas.        
                
                for(let i = 0; i < numeroDiasPartido; i++) { // Recorremos el número de partidos
                    var arrayJornades = []; // Aquí guardaremos el array de jornadas.
                    for(let j = 0; j < numeroPartidosPorDia; j++) { // Recorremos el número de partidos por día.
                        var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local femenino, que será aleatorio.
                        var aleatorioVisitanteFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo visitante femenino, que será aleatorio.                                                      
                        
                        if(aleatorioLocalFemenino === aleatorioVisitanteFemenino) { // Si el equipo local y visitante son iguales.
                            var aleatorioLocalFemenino = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local masculino, que será aleatorio.
                        }

                        let partidoFemenino = {local: aleatorioLocalFemenino, visitante: aleatorioVisitanteFemenino}; // Guardamos las variables aleatorias, para meterlas en el array.  
                        arrayJornades.push(partidoFemenino); // Añadimos ambos equipos al array en dónde almacenamos las jornadas.                                                    
                    }                                            
                }                
                
                localStorage.setItem("jornadasFemeninas", JSON.stringify(arrayJornades)); // Guardamos las variables en el LocalStorage.
               
                arrayJornades.forEach((partido) => { // Recorremos el array de jornadas                    
                    var diasPartidosAleatorio = diasPartidos[Math.floor(Math.random() * diasPartidos.length)]; // Variable para guardar los días de los partidos, que será aleatorio.                                      
                    jornadesFem.innerHTML += "<tr>" + "<td>" + partido.local + "</td>" + "<td>" + " - " + "</td>" + "<td>" + partido.visitante + "</td>" + "<td>" + getRandomHours() + "</td>" + "<td>" + diasPartidosAleatorio + "</td>"+ "</tr>"; // Añadimos la cadena y la imprimimos en el elemento dónde queremos imprimirlo.                                                                                 
                });  

                while(jornadasFemApuestas.length < 4) { // Mientras el tamaño de las jornadas femeninas de apuestas sea menor que la cantidad de jornadas femeninas de las apuestas.                    
                    const randomIndex = elegirAleatorio(); // Variable que llama a una función para elegir de forma aleatoria.
                    if(!norepetido(arrayJornades[randomIndex], jornadasFemApuestas)) { // Si está repetido.
                        jornadasFemApuestas.push(arrayJornades[randomIndex]); // Pondremos el índice aleatorio, dentro del array de las jornadas femeninas de las apuestas.
                    }

                    if(aleatorioLocalFemenino === aleatorioVisitanteFemenino) { // Si los equipos son los mismos.
                        var aleatorioLocalFemenino  = segonaFem[Math.floor(Math.random() * segonaFem.length)]; // Variable para guardar el equipo local femenino, que será aleatorio.
                    }                                       
                    let partidoFemeninoApuesta = {local: aleatorioLocalFemenino, visitante: aleatorioVisitanteFemenino}; // Metemos ambos equipos en una variable, para luego pasarlo al array.
                    jornadasFemApuestas.push(partidoFemeninoApuesta); // Metemos la variable con ambos equipos en el array.                                                 
                }                     
                
                localStorage.setItem("jornadasApuestasFemeninas", JSON.stringify(jornadasFemApuestas)); // Guardamos las jornadas femeninas de las apuestas en el LocalStorage.

                const jornadesFemenines = { // Creamos un objeto para guardar los resultados.
                    arrayJornades: arrayJornades,
                };                
            console.log(Object.values(jornadesFemenines));     
            console.log(jornadasFemApuestas);            
        }
    console.log(arrayJornades); 
}

function elegirAleatorio () { // Función para elegir valor aleatorio.
    return Math.floor(Math.random() * (4)); // Sólo hasta 4.
}

function norepetido(actual, jornadasValidas) { // Función que devuelve las jornadas que no estén repetidas.
    return jornadasValidas.includes(actual); // Devolverá las jornadas actuales que sean válidas, es decir, que ya existen.
}

function getRandom(min,max) { // Función para elegir un número aleatorio entre 2 números.
    return Math.floor(Math.random() * (max - min)) + min; // Para que no salgan decimales.
}   

function getRandomHours() { // Función que hará que las horas sean aleatorias.
    let horas = Math.floor(Math.random() * 24); // Variable para las horas. Recoge las 24 horas de un día.
    let minutos = Math.floor(Math.random() * 60);  // Variable para los minutos. Recoge 60 segundos.
    return (horas < 10 ? "0" + horas:horas) + ":" + (minutos < 10 ? "0" + minutos:minutos); // Devolverá las horas y los minutos, que siempres serán menores que 10.   
}

function escriureResultats() { // Función para escribir los resultados.
    var arrayResultats = []; // Array para guardar los resultados.    
    
    if(document.title == "Resultados Liga Masculina") { // Si el título de la página es el mismo.               
        resultatsMasc.style.display = "block"; // Mostramos dónde se imprimen los resultados masculinos.
        resultatsMasc.innerHTML = "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>"; // Creamos la cabecera de la tabla.

        var equipoMasculino = JSON.parse(localStorage.getItem("jornadasMasculinas")); // Recogemos las jornadas masculinas guardadas en el LocalStorage.

        if(equipoMasculino == null) { // Si no hay equipos masculinos.
            alert("Faltan jornadas masculinas.");            

            resultatsMasc.style.display = "none"; // No mostramos dónde se imprimen los resultados masculinos.
        }else {
            equipoMasculino.forEach((element)=> { // Recorremos cada uno de los elementos que están en el array de equipos masculinos.
                var resultadoLocalMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local masculino.
                var resultadoVisitanteMasculino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante masculino.

                arrayResultats.push({local: resultadoLocalMasculino, visitante: resultadoVisitanteMasculino}); // Metemos ambos resultados en el array de resultados.
                                
                resultatsMasc.innerHTML += "<tr>" + "<td>" + element.local + "</td>" + "<td>" + resultadoLocalMasculino + " - " + resultadoVisitanteMasculino + "</td>" + "<td>" + element.visitante + "</td>" + "</tr>"; // Imprimimos las variables aleatorias. También imprimimos los equipos.                                       
            });        
            localStorage.setItem("resultadosMasculinos", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage.  
            
            const resultatsMasculins = { // Creamos un objeto para guardar los resultados.
                arrayResultats: arrayResultats,
            };
            console.log(Object.values(resultatsMasculins)); 
        }                   
    }else {                                              
        resultatsFem.style.display = "block"; // Mostramos dónde se imprimen los resultados femeninos. 
        resultatsFem.innerHTML = "<th>" + "Local" + "</th>" + "<th>" + "Resultado" + "</th>" + "<th>" + "Visitante" + "</th>";  // Creamos la cabecera de la tabla.                     
            
        var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasFemeninas")); // Recogemos las jornadas femeninas guardadas en el LocalStorage.

        if(jornadasAuxFem == null) { // Si no hay jornadas femeninas.
            alert("Faltan jornadas femeninas.");
            resultatsFem.style.display = "none"; // No mostramos dónde se imprimen los resultados masculinos.
        }else {
            jornadasAuxFem.forEach((element) => { // Recorremos cada uno de los elementos que están en el array de equipos femeninos.
                var resultadoLocalFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo local femenino.
                var resultadoVisitanteFemenino = getRandom(0,6); // Variable que devuelve un número aleatorio entre 0 y 6, para el equipo visitante femenino.
                            
                arrayResultats.push({local: resultadoLocalFemenino, visitante: resultadoVisitanteFemenino}); // Recogemos las jornadas femeninas guardadas en el LocalStorage.

                resultatsFem.innerHTML += "<tr>" + "<td>" + element.local + "</td>" + "<td>" + resultadoLocalFemenino + " - " + resultadoVisitanteFemenino + "</td>" + "<td>" + element.visitante + "</td>" + "</tr>"; // Imprimimos las variables aleatorias. También imprimimos los equipos.                
            });                
            localStorage.setItem("resultadosFemeninos", JSON.stringify(arrayResultats)); // Guardamos las variables en el LocalStorage. 
        }      
        const resultatsFemenins = { // Creamos un objeto para guardar los resultados.
            arrayResultats: arrayResultats,
        };
        console.log(Object.values(resultatsFemenins));             
    }        
    if(arrayResultats == undefined) { // Si no hay resultados.
        console.log("Array vacío.")
    }    
}

function comprobarQuiniela() { // Función para comprobar las apuestas.
    var div = document.getElementById("contenedor_tabla"); // Creamos un div.
    var tabla2 = document.createElement("table"); // Creamos una tabla.
    tabla2.id = "resultados_tabla"; // La tabla tendrá una id.
    var tblBody = document.createElement("tbody"); // Creamos un cuerpo para la tabla.

    tabla2.style.display = "block"; // Decimos que los resultados de la tabla los muestre.

    tabla2.innerHTML =  "<th>" + "Resultados" + "</th>"; // Creamos la cabecera de la tabla.

    var resultadosAuxMasc = JSON.parse(localStorage.getItem("resultadosMasculinos")); // Recogemos los resultados masculinos del LocalStorage.
    var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasApuestasFemeninas")); // Recogemos los resultados femeninos del LocalStorage.
    var resultadosAuxFem = JSON.parse(localStorage.getItem("resultadosFemeninos"));

    var explicacionPronosticos = document.getElementById("explicacionPronosticos"); // Recogemos el tutorial que explica cómo hacer apuestas.
    var boton = document.getElementById("boton"); // Recogemos el botón.

    explicacionPronosticos.style.display = "block"; // Mostramos el tutorial.
    boton.style.display = "block"; // Mostramos el botón.

    var contador = document.getElementById("contador"); // Recogemos el lugar dónde imprimiremos el contador.
    if(resultadosAuxMasc == null || resultadosAuxFem == null || jornadasAuxFem == null) { // Si no hay resultados masculinos o femeninos.
        alert("No están todos los resultados disponibles. Pruebe más tarde.");
        console.log("Faltan generar resultados.");
        tabla2.style.display = "none"; // No mostramos la tabla de resultados.
        aciertos.style.display = "none"; // Decimos que los resultados de la tabla los muestre.

    } else {
        boton.style.display = "none"; // Ocultamos el botón.
        var resultadosAux = resultadosAuxMasc.concat(jornadasAuxFem); // Creamos un nuevo array juntando los resultados.
        aciertos.style.display = "block"; // Mostramos el lugar dónde imprime los aciertos.

        let contadorAciertos = 0; // Variable que cuenta los aciertos.
        tabla2.innerHTML = "<th>" + "Resultados" + "</th>"; // Creamos la cabecera para la tabla de resultados.    

        resultadosAux.forEach((element,index) => { // Recorremos el array de los resultados.
            var fila = document.createElement("tr"); // Creamos las filas.
            
            var celda = document.createElement("td"); // Creamos las celdas.  

            var celdaTexto1 = document.createTextNode("1"); // Creamos el texto para la celda, que escribirá 1.            
            var celdaTextoX = document.createTextNode("X"); // Creamos el texto para la celda, que escribirá X.            
            var celdaTexto2 = document.createTextNode("2"); // Creamos el texto para la celda, que escribirá 2.            

            var miApuesta = document.querySelectorAll("select"); // Recogemos los selects.
            var option = miApuesta[index];
            
            if(element.local > element.visitante & option.value === "1") { // Si el resultado local, es mayor que el resultado visitante y el valor del option es 1.               
                contadorAciertos++; // Incrementamos el contador de aciertos.
                celda.appendChild(celdaTexto1); // Añadimos el texto de la primera celda a la celda.          
                celda.style.padding = "15px"; // Le ponemos padding.
                celda.style.backgroundColor = "green"; // Le ponemos color de fondo.
                console.log("Has acertado");
            } 

            if(element.local > element.visitante & option.value !== "1") { // Si el resultado local, es mayor que el resultado visitante y el valor del option es diferente a 1.               
                celda.appendChild(celdaTexto1); // Añadimos el texto de la primera celda a la celda.                
                celda.style.padding = "15px"; // Le ponemos padding.
                celda.style.backgroundColor = "red"; // Le ponemos color de fondo.
                console.log("Has fallado");
            } 

            if(element.local === element.visitante & option.value === "X") { // Si el resultado local, es mayor que el resultado visitante y el valor del option es X. 
                contadorAciertos++; // Incrementamos el contador de aciertos.                                             
                celda.appendChild(celdaTextoX);  // Añadimos el texto de la segunda celda a la celda. 
                celda.style.padding = "15px"; // Le ponemos padding.
                celda.style.backgroundColor = "green"; // Le ponemos color de fondo.
                console.log("Has acertado");
            } 

            if(element.visitante === element.local & option.value !== "X") { // Si el resultado local, es mayor que el resultado visitante y el valor del option es diferente a X.                                        
                celda.appendChild(celdaTextoX);  // Añadimos el texto de la segunda celda a la celda. 
                celda.style.padding = "15px"; // Le ponemos padding.
                celda.style.backgroundColor = "red"; // Le ponemos color de fondo.
                console.log("Has fallado");
            }  

            if(element.visitante > element.local & option.value === "2") { // Si el resultado local, es mayor que el resultado visitante.   
                contadorAciertos++; // Incrementamos el contador de aciertos.                                         
                celda.appendChild(celdaTexto2);  // Añadimos el texto de la tercera celda a la celda. 
                celda.style.padding = "15px"; // Le ponemos padding.
                celda.style.backgroundColor = "green"; // Le ponemos color de fondo.
                console.log("Has acertado");
            }  
            
            if(element.visitante > element.local & option.value !== "2") { // Si el resultado local, es mayor que el resultado visitante.                                        
                celda.appendChild(celdaTexto2);  // Añadimos el texto de la tercera celda a la celda. 
                celda.style.padding = "15px"; // Le ponemos padding.
                celda.style.backgroundColor = "red"; // Le ponemos color de fondo.
                console.log("Has fallado");
            }  
                           
            celda.style.padding = "15px"; // Le ponemos padding.

            fila.appendChild(celda); // Añadimos la celda a la fila, con todos los textos de las respectivas celdas.
            tblBody.appendChild(fila); // Añadimos la fila al cuerpo de la tabla.
            tabla2.appendChild(tblBody); // Añadimos el cuerpo de la tabla a la tabla.
            div.appendChild(tabla2); // Añadimos la tabla al div, dónde está el contenedor de la tabla.
        });
        contador.innerText = contadorAciertos; // Escribimos el contador de aciertos en el contador del HTML.
        
        if(contadorAciertos == 14) { // Si las acierta todas.
            alert("Has acertado todos los resultados!");
        }
        if(contadorAciertos == 0) { // Si las falla todas.
            alert("No has acertado ninguno de los resultados... Prueba en la siguiente quiniela.");
        }
    }
            
    const resultatsAux = { // Guardamos los resultados en un objeto.
        resultadosAux: resultadosAux,
    };

    if(resultatsAux === undefined) { // Si no hay resultados
        console.log("Falta que generes resultados para que se guarden en el objeto de resultados.");        
    }   
}

function dibuixarTaulaPronostics() { // Función para dibujar la tabla de apuestas.     
    var div = document.getElementById("contenedor_tabla"); // Recogemos el contenedor dónde irá la tabla.
    var tabla = document.createElement("table"); // Creamos la tabla.
    tabla.id = "pronosticos_tabla"; // Ponemos un id a la tabla.
    var tblBody = document.createElement("tbody"); // Creamos un cuerpo para la tabla.
    
    var aciertos = document.getElementById("aciertos"); // Recogemos el lugar dónde se muestran los aciertos.
    aciertos.style.display = "none"; // No lo mostramos todavía.
    
    var jornadasAuxMasc = JSON.parse(localStorage.getItem("jornadasMasculinas")); // Recogemos los equipos masculinos del LocalStorage.
    var jornadasAuxFem = JSON.parse(localStorage.getItem("jornadasApuestasFemeninas")); // Recogemos los equipos femeninos del LocalStorage.        

    tabla.innerHTML = "<th>" + "Jornadas" + "</th>" +"<th>" + "Partidos" + "</th>" + "<th>" + "Apuesta" +"</th>"; // Creamos la cabecera de la tabla.
    if(jornadasAuxMasc == null || jornadasAuxFem == null) { // Si no hay jornadas masculinas o femeninas.
        alert("Jornadas no disponibles. Pruebe más tarde.");
        console.log("Faltan generar jornadas.");
        tabla.style.display = "none"; // Ocultamos la tabla.
        aciertos.style.display = "none"; // Ocultamos los aciertos.
        boton.style.display = "none"; // Ocultamos el botón.
    } else {                
        var jornadasAux = jornadasAuxMasc.concat(jornadasAuxFem); // Juntamos ambos arrays, para hacer uno nuevo.

        jornadasAux.forEach((element, index) => { // Recorremos el nuevo array de jornadas.
            var fila = document.createElement("tr"); // Creamos filas.
                         
            var celda1 = document.createElement("td"); // Creando la primera celda.
            var celdaTexto1 = document.createTextNode(index+1); // Creando el texto de la primera celda.
            celda1.appendChild(celdaTexto1); // Añadimos el texto de la primera celda a la primera celda.
                        
            var celda2 = document.createElement("td"); // Creando la segunda celda.
            var celdaTexto2 = document.createTextNode(element.local + " vs " + element.visitante); // Creando el texto de la segunda celda.
            celda2.appendChild(celdaTexto2); // Añadimos el texto de la segunda celda a la segunda celda.
                                 
            fila.appendChild(celda1); // Añadimos la primera celda a la fila.
            fila.appendChild(celda2); // Añadimos la segunda celda a la fila.
                       
            var celdaInputs1 = document.createElement("td"); // Creamos la celda para los selects.
 
            var celdaTextoInputs1 = document.createElement("select"); // Creamos los selects.            

            var ganaLocal = document.createElement("option"); // Creamos el primer option.
            ganaLocal.setAttribute("value", "1"); // Le decimos que su valor sea 1.
            var ganaLocalTexto = document.createTextNode("Gana el equipo local."); // Creamos el texto para que lo elija el usuario.        
            ganaLocal.appendChild(ganaLocalTexto); // Añadimos el texto anterior al primer option.
            
            var empate = document.createElement("option"); // Creamos el segundo option.
            empate.setAttribute("value", "X"); // Le decimos que su valor sea X.
            var empateTexto = document.createTextNode("Empate entre ambos equipos."); // Creamos el texto para que lo elija el usuario.            
            empate.appendChild(empateTexto); // Añadimos el texto anterior al segundo option.

            var ganaVisitante = document.createElement("option"); // Creamos el segundo option.
            ganaVisitante.setAttribute("value", "2"); // Le decimos que su valor sea 2.
            var ganaVisitanteTexto = document.createTextNode("Gana el equipo visitante."); // Creamos el texto para que lo elija el usuario.            
            ganaVisitante.appendChild(ganaVisitanteTexto); // Añadimos el texto anterior al tercer option.

            celdaInputs1.appendChild(celdaTextoInputs1); // Añadimos los selects creados a la celda creada para los selects.               
            celdaTextoInputs1.appendChild(ganaLocal); // Añadimos el primer option.
            celdaTextoInputs1.appendChild(empate); // Añadimos el segundo option.
            celdaTextoInputs1.appendChild(ganaVisitante); // Añadimos el tercer option.

            fila.appendChild(celdaInputs1); // Añadimos la celda de los selects a la fila.
            
            tblBody.appendChild(fila); // Añadimos la fila al cuerpo de la tabla.
            tabla.appendChild(tblBody); // Añadimos el cuerpo de la tabla a la tabla.

            div.prepend(tabla); // Añadimos la tabla al contenedor de la tabla,
        }); 
        const jornadesAux = { // Creamos un objeto para guardar los resultados.
            jornadasAux: jornadasAux,
        };
        if(jornadesAux === undefined) { // Si las jornadas no están definidas.
            console.log("Falta que generes jornadas para guardarlas en el objeto dónde se guardan las jornadas.");        
        }         
        console.log(Object.values(jornadesAux));                     
    } 
}

if(document.title == "Apuestas Deportivas") { // Si el título del documento es igual.        
    dibuixarTaulaPronostics(); // Llamamos a la función para dibujar la tabla de quinielas.
}

fetch('https://v3.football.api-sports.io/teams?league=140&season=2022', { // Recogemos los equipos masculinos, de la temporada actual.
    "method": "GET",
    "headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "9c4059ca2ce40d598ec7e43ca7aaa787"
	}
})  
.then(response => {
    console.log(response.json()); // Mostramos los equipos masculinos.
})
.catch(err => {
    console.log(err);
});

fetch('https://v3.football.api-sports.io/teams?league=142&season=2022', { // Recogemos los equipos femeninos, de la temporada actual.
    "method": "GET",
    "headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "9c4059ca2ce40d598ec7e43ca7aaa787"
	}
})  
.then(response => {
    console.log(response.json()); // Mostramos los equipos femeninos.
})
.catch(err => {
    console.log(err);
});

fetch("https://v3.football.api-sports.io/standings?league=140&season=2022", { // Recogemos las jornadas masculinas, de la temporada actual.
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "9c4059ca2ce40d598ec7e43ca7aaa787"
	}
})
.then(response => {
	console.log(response.json()); // Mostramos las jornadas masculinas.
})
.catch(err => {
	console.log(err);
});

fetch("https://v3.football.api-sports.io/standings?league=142&season=2022", { // Recogemos las jornadas femeninas, de la temporada actual.
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "9c4059ca2ce40d598ec7e43ca7aaa787"
	}
})
.then(response => {
    console.log(response.json()); // Mostramos las jornadas femeninas.
})
.catch(err => {
	console.log(err);
});