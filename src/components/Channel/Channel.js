import React, { useRef, useState, useEffect } from 'react';
import firebase from 'firebase';
import './Channel.css';
import Menssage from '../Menssage/Menssage';

const Channel = ({ signOut, user = '', db = '' }) => {
  const [menssages, setMenssages] = useState([]);
  const [newMenssage, setNewMenssage] = useState('');
  const { displayName, photoURL, uid } = user;
  const listRef = useRef();
  useEffect(() => {
    if (db) {
      const getData = db
        .collection('mensajes')
        .limit(50)
        .orderBy('fechaCreate')
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMenssages(data);
        });
      return getData;
    }
  }, [db]);
  const addMenssage = (e) => {
    setNewMenssage(e.target.value);
  };

  useEffect(() => {
    listRef.current.addEventListener('DOMNodeInserted', (e) => {
      const { currentTarget: target } = e;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }, [listRef]);

  const sendData = (e) => {
    e.preventDefault();

    if (db) {
      db.collection('mensajes').add({
        text: newMenssage,
        fechaCreate: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
    }
    setNewMenssage('')
  };
  return (
    <div className='channel'>
      <header className='channel__header'>
        <span className='channel__logotipo'>
          CASALLAS
        </span>
        <button className='channel__header-button' onClick={signOut}>
          SignOut
        </button>
      </header>
      <ul ref={listRef} className='channel__list'>
        {menssages.map((menssage) => (
          <li className='channel__list-item'>
            <Menssage {...menssage} />
          </li>
        ))}
      </ul>
      <form onSubmit={sendData} className='channel__form'>
          <input
            // maxLength='200'
            className='channel__input'
            type='text'
            value={newMenssage}
            onChange={addMenssage}
            required
            placeholder='Escribe un mensaje'
          />
        <button className='channel__send-form' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Channel;
