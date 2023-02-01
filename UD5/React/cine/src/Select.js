const Select = () => {
    return ( 
        <div className="contenidor-pelicula">
            <h1>Ocimax Mahón</h1>
        <label>Escoja una película</label>
        <select id="pelicula">
            <option value="10"> Black Panther: Wakanda Forever (10€) </option>
            <option value="12"> Smile (12€) </option>
            <option value="8"> Los renglones torcidos de Dios (8€) </option>
            <option value="9"> Halloween: El final (9€) </option>
        </select>
    </div>    
    );
}

export default Select;