import { authRequest, authSuccess, authFailure } from "../actions/actionCreators"


export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch(authRequest())
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch(authSuccess())
      })
      .catch((error) => {
        console.log(error.message)
        dispatch(authFailure(),error)
      })
  }
}
