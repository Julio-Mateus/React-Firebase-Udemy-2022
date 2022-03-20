import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';


const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);
  return (
    <>
      {sesion === true ?
      <div>
        <Usuario/>
      <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>
      </div>
      :
      <div>
        <p>No Has Iniciado Sesion</p>
        <FormularioInicioSesion />
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