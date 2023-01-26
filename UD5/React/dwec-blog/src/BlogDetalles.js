import { useParams } from "react-router-dom";

const BlogDetalles = () => {
    const { id } =  useParams();

    return ( 
        <div className="blog-detalles">
            <h2> Detalles del blog - { id } </h2>
        </div>
     );
}
 
export default BlogDetalles;