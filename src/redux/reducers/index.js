import {reducers } from "./reducers"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
  auth :reducers,
  authError :reducers,
})
export default rootReducer