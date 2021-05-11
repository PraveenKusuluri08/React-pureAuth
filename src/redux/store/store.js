import rootReducer from "../reducers/index"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { reduxFirestore} from "redux-firestore"
import { composeWithDevTools } from "redux-devtools-extension"

import fbConfig from "../../config/fbConfig"

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase})),
      reactReduxFirebase(fbConfig, {
        attachAuthIsReady: true,
      }),
      reduxFirestore(fbConfig)
    )
  )
)
