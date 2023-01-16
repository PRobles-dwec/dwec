const NavBar = () => {
    return ( 
        <nav className="navbar" style={{
            backgroundColor: '#FCDEBE',
        }}>
            <h1>El Blog de DWEC</h1>
            <div className="links">
                <a href="/" style={{
                     color: '#fff',
                     backgroundColor: '#f1356d',
                     borderRadius: '8px'
                                         
                }}>Home</a>
                <a href="/crear" style= { {
                    color: '#fff',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'                                        
                } }>Nuevo Blog</a>
            </div>
        </nav>
    );
}
 
export default NavBar;