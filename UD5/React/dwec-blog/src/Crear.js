import { useState } from "react";
import { useHistory } from "react-router-dom";

const Crear = () => {

    const [titulo, setTitulo] = useState('');
    const [body, setBody] = useState('');
    const [autor, setAutor] = useState('Joan');
    const [actualizando, setActualizando] = useState(false);
    const historial = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { titulo, body, autor };

        setActualizando(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Nuevo blog añadido");
            setActualizando(false);
            //historial.go(-1);
            historial.push('/');
        });


    };

    return (  
        <div className="crear">
            <h2> Añadir un nuevo Blog </h2>
            <form onSubmit = { handleSubmit }>
                <label> Título: </label>
                <input type="text" 
                    required 
                    value = { titulo } 
                    onChange = { (e) => setTitulo(e.target.value) }
                />
                <label> Contenido: </label>
                <textarea 
                    required 
                    value = { body } 
                    onChange = { (e) => setBody(e.target.value) }>
                </textarea>
                <label> Autor: </label>
                <select value = { autor } onChange = {(e) => setAutor(e.target.value)}>
                    <option value="Joan">Joan</option>
                    <option value="Pau">Pau</option>
                </select>
                { !actualizando && <button> Añadir Blog </button> }
                { actualizando && <button disabled> Añadiendo Blog... </button> }

            </form>
        </div>
    );
}
 
export default Crear;