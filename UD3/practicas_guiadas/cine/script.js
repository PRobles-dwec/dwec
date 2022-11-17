const contenidor = document.querySelector('.contenidor');
const seients = document.querySelectorAll('.fila .seient:not(.ocupat) ');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let preuDelTicket = +peliculaSelect.value;

ompleUI();

//Actualitza els totals
function actualitzaSeleccioSeients(){
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');
    
    const seientsIndex = [...seientsSeleccionats].map((seient) => [...seients].indexOf(seient));

    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));

    const contadorSeientsSeleccionats = seientsSeleccionats.length;
    contador.innerHTML = contadorSeientsSeleccionats;
    total.innerHTML = contadorSeientsSeleccionats * preuDelTicket;
}

//Guarda a LocalStorage l'índex i el preu de la pelicula seleccionada
function guardaInfoPelicula(indexPelicula, preuPelicula) {
    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula);
    localStorage.setItem('preuPeliculaSeleccionada', preuPelicula);
}

//Recupera info del localStorage i omple la UI
function ompleUI() {
    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    if(seientsSeleccionats !== null && seientsSeleccionats.length > 0){
        seients.forEach((seient, index)=> {
            //console.log(seient);
            //console.log(index);

            if(seientsSeleccionats.indexOf(index) > -1){
                seient.classList.add('seleccionat');
            }
        });
    }

    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');

    if(indexPeliculaSeleccionada !== null) {
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const preuPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');

    if(preuPeliculaSeleccionada !== null) {
        preuDelTicket = +preuPeliculaSeleccionada;
    }
}

/* EVENTOS */
contenidor.addEventListener('click', (e) => {
    if(e.target.classList.contains('seient')
        && !e.target.classList.contains('ocupat')){
        e.target.classList.toggle('seleccionat');
        
        actualitzaSeleccioSeients();
    }
});

peliculaSelect.addEventListener('change', (e)=> {
    preuDelTicket = +e.target.value;

    guardaInfoPelicula(e.target.selectedIndex, e.target.value);

    actualitzaSeleccioSeients();
});

actualitzaSeleccioSeients();