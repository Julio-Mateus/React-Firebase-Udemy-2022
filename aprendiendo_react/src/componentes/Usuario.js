import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';

const Usuario = () => {
  const pais = null;
  const amigos = ['Kronos', 'Kate', 'Cesar'];

  return(
    <div>
      <Titulo usuario='Kate'/>
      <Titulo usuario = "Kronos" color='blue' />
      <Parrafo>Tu lista de amigos es:</Parrafo>
      {pais && <p>Tu eres de: {pais}</p>}
      <ul>
        {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
      </ul>
      <Parrafo>Que tengas buen día. Saludos!</Parrafo>
    </div>
  );
};

const Parrafo = styled.p`
  margin: 20px 0;
`;

export default Usuario;