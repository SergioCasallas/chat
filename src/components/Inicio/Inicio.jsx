import React from 'react';
import './Inicio.css';
import SignInImage from '../../images/password.png';

const Inicio = ({ singInGoogle }) => {
  return (
    <div className='inicio'>
      <span className='inicio__title'>Bienvenido</span>
      <figure className='inicio__images'>
        <img className='inicio__image' src={SignInImage} alt='imageSingIn'/>
      </figure>
      <p className='inicio__paragraph'>
        Accede con tu cuenta de gmail, asi tendremos de una forma mas segura tus
        mensajes.
        <br />
        Te estamos esperando.
      </p>
      <button className='inicio__button' onClick={singInGoogle}>
        Acceder Google
      </button>
    </div>
  );
};

export default Inicio;
