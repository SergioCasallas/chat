import React, { useEffect, useState } from 'react';
import { auth, db } from './firebaseconfig';
import Channel from './components/Channel/Channel';
import firebase from 'firebase';
import Inicio from './components/Inicio/Inicio.jsx';
import Loader from './components/Loader/Loader.jsx';

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  console.log(auth.currentUser);
  const [x, setX] = useState(false);
  const singInGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    try {
      auth.signInWithPopup(provider);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setX(true);
    });
  });
  const signOut = () => {
    auth.signOut();
  };
  return x ? (
    <div className='app'>
      {user ? (
        <div className='app-content'>
          <Channel signOut={signOut} user={user} db={db} />
        </div>
      ) : (
        <Inicio singInGoogle={singInGoogle} />
      )}
    </div>
  ) : (
    <Loader />
  );
}

export default App;
