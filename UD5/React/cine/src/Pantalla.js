import React, { useState } from "react";

const Pantalla = () => {
    const [activa, setActiva] = useState(false);
   
    const handleClick= () => {
        setActiva(!activa);
    }
    return ( 
        <div className="contenidor"> 
            <div className="pantalla"> </div>
                <div className="fila">
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                </div>
                <div className="fila">
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                </div>
                <div className="fila">
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                </div>
                <div className="fila">
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                </div>
                <div className="fila">
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                </div>
                <div className="fila">
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                    <div className="seient ocupat"> </div>
                    <div className="seient" onClick={handleClick} style={{backgroundColor: activa ? "#6feaf6" : "#444451"}}> </div>
                </div>
        </div>
     );
}
 
export default Pantalla;
