import {combineReducers} from "redux"

import { firebaseReducer } from "react-redux-firebase"

import rootReducer from "../../redux/reducers/index"

const reducerRoot =combineReducers({
  authenticate :rootReducer,
  authError :rootReducer,
  firebase :firebaseReducer,
})
export default reducerRoot