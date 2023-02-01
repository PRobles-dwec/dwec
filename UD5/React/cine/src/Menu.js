const Menu = () => {
    return ( 
        <ul className="llegenda">
        <li>
            <div className="seient"></div>
            <small> N/A </small>
        </li>
        <li>
            <div className="seient seleccionat"></div>
            <small> Seleccionado </small>
        </li> 
        <li>
            <div className="seient ocupat"></div>
            <small> Ocupado </small>
        </li>
     </ul>
     );
}
 
export default Menu;