import ListaBlogs from "./ListaBlogs";
import useFetch from "./useFetch";

const Home = () => {

    const { datos: blogs, cargando, error } = useFetch('http://localhost:8000/blogs');

   /*  const [blogs, setBlogs] = useState([
        // {titulo: "Mi nueva web HelloKittyCagues", body: "Este texto es de prueba", autor: "Joan", id: 1 },
        // {titulo: "Fiesta de Bienvenida", body: "Esta es la mejor fiesta a la que podrás asistir", autor: "Pau", id: 2 },
        // {titulo: "Pesca del Salmón en Yemen", body: "Realmente es difícil pescar en Yemen, pero se intentará.", autor: "Joan", id: 3 },
    ]); */

   

    // const handleEliminarBlog = (id) => {
    //     const blogsAux = blogs.filter(b => b.id !=  id);
    //     console.log(blogsAux);
    //     setBlogs(blogsAux);
    // };   
   
    return (
        <div className="home">  
            {error && <div id="error"> { error } </div>}
            { cargando && <div id="cargando"><h2> Cargando... </h2></div> }
            { blogs && <ListaBlogs blogs={ blogs } titulo="Listado Completo de Blogs Y Más" /> }
        </div> 
     );
}

export default Home;