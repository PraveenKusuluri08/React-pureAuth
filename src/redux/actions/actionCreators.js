import ACTIONS from './actionTypes'

export const authRequest=()=>{
  return{
    type:ACTIONS.AUTH_REQUEST
  }
}
export const authSuccess=()=>{
  return {
    type:ACTIONS.AUTH_SUCCESS,
  }
}
export const authFailure=(error)=>{
  return {
    type:ACTIONS.AUTH_FAILURE,
   payload:error.message
 
  }
}

//SIGNUP actions creators
export const signUpRequest=()=>{
  return{
    type:ACTIONS.AUTH_SIGNUP_REQUEST
  }
}
export const signUpSuccess=()=>{
  return{
    type:ACTIONS.AUTH_SIGNUP_SUCCESS,

  }
}
export const signUpFailure=(error)=>{
  return{
    type:ACTIONS.AUTH_SIGNUP_FAILURE,
    payload : error.code
  }
}

export const signOutRequest=()=>{
  return {
    type:ACTIONS.AUTH_SIGNOUT_REQUEST,
  }
}

export const signOutSuccess =()=>{
  console.log("Signout success")
  return {
    type:ACTIONS.AUTH_SIGNOUT_SUCCESS
  }
}

export const signOutFaliure=(payload)=>{
  return {
    type:ACTIONS.AUTH_SIGNOUT_FAILURE,
    payload
  }
}