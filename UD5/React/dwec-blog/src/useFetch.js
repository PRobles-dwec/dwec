import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(true);

    useEffect(()=> {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(res => {            
                if(!res.ok) {
                    throw Error('No se ha podido recuperar la información.');
                }
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setDatos(data);
                setCargando(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("Captura de datos cancelada");
                } else{
                    setCargando(false);
                    setError(err.message);
                }                   
            })
        }, 1000);  
        
        return() => abortController.abort;
    }, [url]);

    return { datos, cargando, error };
};

export default useFetch;