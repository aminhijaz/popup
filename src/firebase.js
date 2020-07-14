
import * as firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBc0R43NGLMhdreHYhMQxQxN7MMyVji80w",
    authDomain: "test2020-c1968.firebaseapp.com",
    databaseURL: "https://test2020-c1968.firebaseio.com",
    projectId: "test2020-c1968",
    storageBucket: "test2020-c1968.appspot.com",
    messagingSenderId: "1048891630174",
    appId: "1:1048891630174:web:9cc18039c329550a4a4acf",
    measurementId: "G-4LM3VSYF85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account",
  });
  
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase