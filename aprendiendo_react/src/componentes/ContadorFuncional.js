import React, { useState } from 'react';
import './ContadorFuncional.css';

const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);

    const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad)
    const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad)

    return ( 
        <div>
            <h1>Contador: {cuenta} </h1>
            <button className='boton-contador' onClick={()=>incrementar(props.cantidadAIncrementar)}>Incrementar</button>
            <button className='boton-contador' onClick={()=>disminuir(props.cantidadADisminuir)}>Disminuir</button>
        </div>
     );
}
 
export default ContadorFuncional;