import NavBar from './NavBar';
import Home from './Home';

function App() {
  const titulo = "Bienvenidos al Blog de DWEC";
  let meGusta = 666;
  const persona = {
    nombre: "Pau",
    apellido:"Robles"
  };
  const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const links = ["https://www.youtube.com/watch?v=CocEMWdc7Ck", "https://www.youtube.com/watch?v=izGwDsrQ1eQ", "https://www.youtube.com/watch?v=djV11Xbc914"];
  return (
    <div className="App">
      <NavBar />
      
      {
        /* <ul>
          {
            links.map((value,index) => {
              return <li key={index}> {index + 1} <a href= {value}> {value} </a> </li>
            })
          }
        </ul> */
      }
      <div className='contenido'>
        <Home />
        {
          /* <h1>{ titulo }</h1>
            {10}
            <p> { "Hola a todos!" } </p>
            <p>{ "Me gusta: "  + meGusta }</p>
            <p>{ "Nombre: "  + persona.nombre }</p>
            <p>{ "Apellido: "  + persona.apellido }</p>
            <p>{ [ 1, 2, 3, 4434 ] }</p>
            <a href= {link} target="_blank">Google</a>
            <p> <a href= {links[0]} target="_blank">SHAKIRA</a> </p>
            <p> <a href= {links[1]} target="_blank">Careless Whisper</a> </p>
            <p> <a href= {links[2]} target="_blank">Take On Me</a> </p>
          */
        }
        
      </div>
    </div>
  );
}

export default App;
