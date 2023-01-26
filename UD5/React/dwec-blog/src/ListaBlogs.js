import { Link } from "react-router-dom";

const ListaBlogs = (props) => {

    const blogs = props.blogs;
    const titulo = props.titulo;

    return ( 
        <div className="blog-list">
            <h2> { titulo } </h2>
            { blogs.map( (blog) => (
                <div className="blog-preview" key = { blog.id }>
                    <Link to={ `/blogs/${blog.id}` }>  
                        <h2>{ blog.titulo }</h2>                    
                        <h2>Escrito por: { blog.autor }</h2>    
                    </Link>               
                </div>
            )) }    
        </div>
     );
}
 
export default ListaBlogs;