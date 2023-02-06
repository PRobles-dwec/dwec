const Header = () => {
  return (     
    <header>
      <div className="photoName">
        <img  src="https://www.aficine.com/wp-content/uploads/2016/01/mao.jpg"/>            
     </div>  
      <input type="search" />           
      <button>Buscar</button>
      <div>
        <button>Inicio </button>
        <button>Peliculas </button>
        <button>Cines </button>
        <button>Promociones </button>    
      </div>                               
    </header>
  );
}
 
export default Header;
