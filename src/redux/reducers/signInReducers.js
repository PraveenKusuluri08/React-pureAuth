import initialState from "./initialState"
import ACTIONS from "../actions/actionTypes"
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_REQUEST:
      console.log("Login request")
      return {
        ...state,
        authStatus: "Requesting",
        authError: false,
      }
    case ACTIONS.AUTH_SUCCESS:
      console.log("login Success")
      return {
        ...state,
        authStatus: "Login Success",
        authError: false,
      }
    case ACTIONS.AUTH_FAILURE:
      console.log("login Failure")

      return {
        ...state,
        authStatus: action.payload,
        authError: true,
      }

    case ACTIONS.AUTH_SIGNOUT_REQUEST:
      return {
        ...state,
        authStatus: "Signout Request",
      }
    case ACTIONS.AUTH_SIGNOUT_SUCCESS:
      return {
        ...state,
        authError: false,
        authStatus: "Signout Success",
      }
    case ACTIONS.AUTH_SIGNOUT_FAILURE:
      return {
        ...state,
        authError: true,
        authStatus: action.payload,
      }
    default:
      return state
  }
}
