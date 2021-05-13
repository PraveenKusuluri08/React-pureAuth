import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
const config = {
  apiKey: "AIzaSyAnViTPAKC3NHaaNqMGMWszmaWji-4_A0w",
  authDomain: "auth-fb-bef39.firebaseapp.com",
  projectId: "auth-fb-bef39",
  storageBucket: "auth-fb-bef39.appspot.com",
  messagingSenderId: "906801271989",
  appId: "1:906801271989:web:1f2473cdedb58338c55afc"
};
firebase.initializeApp(config)

firebase.firestore().settings({timestampsInSnapshots: true})

export const auth =firebase.auth();

export default firebase