// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAnUXFwHSmhf_Da5PU87DAKWFBHBo3ig",
  authDomain: "fir-auth-578cb.firebaseapp.com",
  projectId: "fir-auth-578cb",
  storageBucket: "fir-auth-578cb.appspot.com",
  messagingSenderId: "391552320916",
  appId: "1:391552320916:web:63444ca6949838df503b81"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };