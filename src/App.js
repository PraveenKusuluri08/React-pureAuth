import SignIn from "./components/Auth/SignIn"
import './App.css';
import {Provider} from "react-redux"
import SignUp from "./components/Auth/SignUp"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {store} from "./store/store"
function App() {
  return (
    <div className="App">
      < BrowserRouter>

      <Provider store={store}>
    <Switch>
    <Route path="/signin" component={SignIn} />
    <Route exact path="/" component={SignUp}/>
     
     </Switch>
      </Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
