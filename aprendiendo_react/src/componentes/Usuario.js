import React from 'react';
import {Titulo} from './Titulo';

const Usuario = () => {
  const pais = null;
  const amigos = ['Kronos', 'Kate', 'Cesar'];

  return(
    <div>
      <Titulo usuario='Kate'/>
      <Titulo usuario = "Kronos" color='blue' />
      <p>Tu lista de amigos es:</p>
      {pais && <p>Tu eres de: {pais}</p>}
      <ul>
        {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
      </ul>
      <p>Que tengas buen día. Saludos!</p>
    </div>
  );
};

export default Usuario;