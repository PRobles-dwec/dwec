import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetalles = () => {
    const { id } =  useParams();
    const {datos: blog, error, cargando} = useFetch("http://localhost:8000/blogs/" + id);
    const historial = useHistory();

    const handleEliminarClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => { 
            historial.push("/");
        });

    };

    return ( 
        <div className="blog-detalles">
            { cargando && <div> Cargando...</div> }
            { error && <div> {error} </div> }
            { blog && (
                <article> 
                    <h2>{  blog.titulo }</h2>
                    <p> Escrito por { blog.autor } </p>
                    <div> { blog.body }</div>
                    <button onClick={ handleEliminarClick }> Eliminar Blog </button>
                </article>
            ) } 
        </div>
     );
}
 
export default BlogDetalles;