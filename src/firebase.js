import firebase from 'firebase' 
import 'firebase/firestore'


  const config = {
    apiKey: "AIzaSyB7tvwv4_HOdScOQI9KtUVJiXXDZKG3jwk",
    authDomain: "todo-andremad.firebaseapp.com",
    databaseURL: "https://todo-andremad.firebaseio.com",
    projectId: "todo-andremad",
    storageBucket: "todo-andremad.appspot.com",
    messagingSenderId: "68245428232"
  };
  //firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots : true})

export default firestore