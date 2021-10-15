import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAlV0Aoegeb7JFHKdje0j71Up454JA3Nzk",
    authDomain: "gyphsbackend.firebaseapp.com",
    databaseURL: "https://gyphsbackend-default-rtdb.firebaseio.com",
    projectId: "gyphsbackend",
    storageBucket: "gyphsbackend.appspot.com",
    messagingSenderId: "417230879699",
    appId: "1:417230879699:web:1067beed8486b6e07f8d26"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp