import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyD1Kj82MJ-BtBuX5NQ6iiZ9U-eFGzoArCo",
  authDomain: "nate-drops-coderhouse.firebaseapp.com",
  projectId: "nate-drops-coderhouse",
  storageBucket: "nate-drops-coderhouse.appspot.com",
  messagingSenderId: "256568611068",
  appId: "1:256568611068:web:435fc7e62ac313deea4779",
  measurementId: "G-6L5MK1J68T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 


export { db };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

