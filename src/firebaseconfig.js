import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCgoLjMuF0Ir2K5IdZtr7FMEcoTH__OVaU',
  authDomain: 'react-chat-930bc.firebaseapp.com',
  projectId: 'react-chat-930bc',
  storageBucket: 'react-chat-930bc.appspot.com',
  messagingSenderId: '877757035445',
  appId: '1:877757035445:web:867ae7a1fe9df9b0dd9ffc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db}
