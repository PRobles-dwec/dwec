import { useState } from "react";

const Home = () => {

    const [clicks, setClick] = useState(0);
    const [blogs, setBlogs] = useState([
        {titulo: "Mi nueva web HelloKittyCagues", body: "un texto a mostrar", autor: "Joan", id: 1 },
        {titulo: "Fiesta de Bienvenida", body: "un texto a mostrar", autor: "Pau", id: 2 },
        {titulo: "Pesca del Salmón en Yemen", body: "un texto a mostrar", autor: "Alex", id: 3 },
    ]);

    const handleFastClick = () => {
        setClick(clicks+1);
    }

    return (
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id } style = {{textAlign: "center"}}>
                    <h2>{ blog.titulo }</h2>
                    <p>{ blog.body }</p>
                    <p>Escrito por: { blog.autor }</p>
                </div>
            )) }        
            <div style = {{ textAlign: 'center' }} >
                <p>Has hecho {clicks} clicks</p>              
                <button onClick={handleFastClick}> Dale click</button>               
            </div>
        </div>
     );
}
export default Home;