const Home = () => {

    const handleClick = () => {
        alert("Boquepasa");
    };

    const handleClickDeNuevo = () => {
        const equipos = ["FC Barcelona", "Real Madrid", "Real Sociedad", "Betis", "Atlético de Madrid", "Athletic Bilbao", "Getafe", "Valladolid", "Girona"];
        var aleatorio = equipos[Math.floor(Math.random() *equipos.length)];        
        var equiposParrafo = document.getElementById("equiposParrafo");
        for(let i = 0; i < equipos.length; i++){
            equiposParrafo.innerHTML = '<h1> Mi equipo es:</h1>' + "<img>" +  aleatorio + "</img>";

        }
    };

    return (
        <div className="home">
            <h2 style={ {
             textAlign: 'center'   
            }}>Página de Inicio</h2>
            <div style={{           
                textAlign: 'center'
            }}>
                 <button onClick={handleClick}> Dale!</button>
                <button onClick= {handleClickDeNuevo }> Dale otra vez!</button>
            </div>
           
            <p id="equiposParrafo"></p>

        </div>
     );
}
 
export default Home;