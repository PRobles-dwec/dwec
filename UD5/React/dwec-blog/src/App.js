import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Crear from './Crear';
import BlogDetalles from './BlogDetalles';
import AndeVas from './Andevas';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />        
          <div className='contenido'>
            <Switch>
              <Route exact path ="/">
                <Home />
              </Route>
              <Route path ="/crear/">
                <Crear />
              </Route>
              <Route path ="/blogs/:id">
                <BlogDetalles />
              </Route>
              <Route path ="*">
                <AndeVas />
              </Route>
            </Switch>         
          </div>
      </div>
    </Router>
  );
}

export default App;