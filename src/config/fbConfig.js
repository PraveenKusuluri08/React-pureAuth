import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
const config = {
  apiKey: "AIzaSyCiWSM8ILjnwG9xa8dSQQTgJKLscQUoTL0",
  authDomain: "functions-a1e55.firebaseapp.com",
  databaseURL: "https://functions-a1e55-default-rtdb.firebaseio.com",
  projectId: "functions-a1e55",
  storageBucket: "functions-a1e55.appspot.com",
  messagingSenderId: "1040882111748",
  appId: "1:1040882111748:web:832c710ea8f5b52950ac51"
};
firebase.initializeApp(config)

firebase.firestore().settings({timestampsInSnapshots: true})

export const auth =firebase.auth();

export default firebase