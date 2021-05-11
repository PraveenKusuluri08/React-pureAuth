import ACTIONS from './actionTypes'

export const authRequest=()=>{
  return{
    type:ACTIONS.AUTH_REQUEST
  }
}
export const authSuccess=()=>{
  return {
    type:ACTIONS.AUTH_SUCCESS
  }
}
export const authFailure=()=>{
  return {
    type:ACTIONS.AUTH_FAILURE
  }
}                                                                                                     