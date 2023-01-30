import { Link } from "react-router-dom";

const AndeVas = () => {
    return ( 
        <div className="ande-vas"> 
            <h2>¡Dónde vas, crack!</h2>
            <p>La página no existe o no está disponible. Casi crack.</p>
            <button> <Link to= "/"> Volver a Home </Link>  </button> 
        </div>
     );
}
 
export default AndeVas;