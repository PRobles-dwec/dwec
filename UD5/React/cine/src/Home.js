import Menu from "./Menu";
import Select from "./Select";
import Comptador from "./Comptador";
import Pantalla from "./Pantalla";


const Home = () => {  
    return (
        <body>
          <div className="home">              
            <Select/>
            <Menu/>
            <Pantalla/>
            <Comptador/>       
        </div>   
        </body>        
        
     );
}

export default Home;
