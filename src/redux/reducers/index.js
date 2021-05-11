import {reducers } from "./reducers"
import {combineReducers} from "redux"
import { firebaseReducer } from "react-redux-firebase"
const rootReducer = combineReducers({
  auth :reducers,
  firebase : firebaseReducer
})
export default rootReducer