import {reducers } from "./signInReducers"
import {combineReducers} from "redux"
import signUpReducers from "./signUpReducers"
const rootReducer = combineReducers({
  auth :reducers,
  authError :reducers,
  authSignUp :signUpReducers,
  signUp:signUpReducers
})
export default rootReducer