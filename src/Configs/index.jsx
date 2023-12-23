import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey:import.meta.env .VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.addScope('user_birthday');
facebookAuthProvider.addScope('email');
facebookAuthProvider.setCustomParameters({
  display: 'popup',
});

export { auth, googleAuthProvider, facebookAuthProvider };
