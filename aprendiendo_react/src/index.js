import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorClass from './componentes/ContadorClass';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);
  return (
    <>
      {sesion === true ?
      <div>
        <Usuario/>
        <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} />
      <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>
      </div>
      :
      <div>
        <p>No Has Iniciado Sesion</p>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        {/*
        <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>
        */}
      </div>
      }
    </>
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