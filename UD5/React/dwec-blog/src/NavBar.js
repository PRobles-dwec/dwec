import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>El Blog de DWEC</h1>
            <div className="links">
                <Link to="/" style={{
                     color: '#fff',
                     backgroundColor: "#f1356d",
                     borderRadius: '8px'                                         
                }}>Home</Link>
                <Link to="/crear" style= { {
                    color: '#fff',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'                                        
                } }>Nuevo Blog</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;