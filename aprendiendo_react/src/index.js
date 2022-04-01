import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorClass from './componentes/ContadorClass';
import ContadorFuncional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './elementos/Boton';
import EjemploUserReducer from './componentes/EjemploUseReducer';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);
  return (
    <div className='contenedor'>
      {sesion === true ?
      <div>
        <Usuario/>
        <EjemploUserReducer />
        {/*<ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20}/>*/}
        {/*<ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} />*/}
        {/*<button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button> */}
        <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
      </div>
      :
      <div>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        {/*
        <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>
        */}
      </div>
      }
    </div>
  );
}

//const verificarSesion = (sesion) => {
  //if(sesion === true){
    //return JSX;
  //} else {
    //return <h1>Na has iniciado sesion</h1>
  //}
//}

//ReactDOM.render(verificarSesion(sesion),document.getElementById('root'));
ReactDOM.render(<App/>,document.getElementById('root'));