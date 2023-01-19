import { useState } from "react";
import Footer from "./Footer";
import ListaBlogs from "./ListaBlogs";

const Home2 = () => {
    const [blogs, setBlogs] = useState([
        {titulo: "Mi nueva web HelloKittyCagues", body: "Este texto es de prueba", autor: "Joan", id: 1 },
        {titulo: "Fiesta de Bienvenida", body: "Esta es la mejor fiesta a la que podrás asistir", autor: "Pau", id: 2 },
        {titulo: "Pesca del Salmón en Yemen", body: "Realmente es difícil pescar en Yemen, pero se intentará.", autor: "Alex", id: 3 },
    ]);
    
    return ( 
        <div className="home">    
            <ListaBlogs blogs={ blogs } titulo="Listado Completo de Blogs" />
            <Footer></Footer>
        </div>
     );
}
 
export default Home2;