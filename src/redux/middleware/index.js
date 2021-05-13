import {
  authRequest,
  authSuccess,
  authFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} from "../actions/actionCreators"

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch(authRequest())
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        console.log(res)
        dispatch(authSuccess())
      })
      .catch((error) => {
        console.log(error.message)

        dispatch(authFailure(error), error)
      })
  }
}
//signUp
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const data = {
      fName: newUser.fName,
      lName: newUser.lName,
      createdAt: new Date(),
    }
    dispatch(signUpRequest())
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set(data)
      })
      .then((res) => {
        console.log(res)
        dispatch(signUpSuccess())
      })
      .catch((error) => {
        console.log(error.message)
        console.log("SignUp failure")
        dispatch(signUpFailure(error), error)
      })
  }
}
