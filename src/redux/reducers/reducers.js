import initialState from "./initialState"
import ACTIONS from "../actions/actionTypes"
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_REQUEST:
      console.log("Login request")
      return {
        ...state,
        authStatus:"Requesting",
        authError :true
      }
    case ACTIONS.AUTH_SUCCESS:
      console.log("login Success")
      return {
        ...state,
        authStatus:"Login Success",
        authError :true
      }
    case ACTIONS.AUTH_FAILURE:
      console.log("login Failure")

      return {
        ...state,
        authStatus :action.payload,
        authError :false
      }
      default :
      return state;
  }
}
