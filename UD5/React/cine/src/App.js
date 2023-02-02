import Menu from "./Menu";
import Select from "./Select";
import Comptador from "./Comptador";
import Pantalla from "./Pantalla";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Select/>
      <Menu/>
      <Pantalla/>
      <Comptador/>
      {/* ME FALTA IMPLEMENTAR EL JS y EL CSS. */}
    </div>
  );
}

export default App;
