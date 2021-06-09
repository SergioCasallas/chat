import React from 'react';
import { formatRelative } from 'date-fns';
import './Mensajes.css'

const Menssage = ({
  fechaCreate = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  return (
    <div className='mensajes'>
      {photoURL ? (
        <figure className='mensajes__images'>
          <img
            className='mensajes__image'
            src={photoURL}
            alt='avatar'
          />
        </figure>
      ) : null}
      <div className='mensajes__info-text'>
        {displayName ? <p className='mensajes__name'>{displayName}</p> : null}
        {<p className='mensajes__text'>{text}</p>}
        {fechaCreate?.seconds ? (
          <span className='mensajes__date'>
            {formatRelative(new Date(fechaCreate.seconds * 1000), new Date())}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Menssage;
