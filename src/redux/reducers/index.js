import {reducers } from "./reducers"
import {combineReducers} from "redux"
import signUpReducers from "./signUpReducers"
const rootReducer = combineReducers({
  auth :reducers,
  authError :reducers,
  authSignUp :signUpReducers,
  signUp:signUpReducers
})
export default rootReducer