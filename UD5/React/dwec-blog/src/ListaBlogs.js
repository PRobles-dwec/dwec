const ListaBlogs = ({blogs, titulo}) => {

    return ( 
        <div className="blog-list">
            <h2>{titulo}</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.titulo }</h2>
                    <p>{ blog.body }</p>
                    <p>Escrito por: { blog.autor }</p>
                </div>
            )) }    
        </div>
     );
}
 
export default ListaBlogs;