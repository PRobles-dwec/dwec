import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import React from 'react';

function App() {
  
  return (  
    <div className="App">
      <Header/>
      <div className="contenido"> 
        <Home/>
        <Footer/>
      </div>          
    </div>
    
  );
}

export default App;
