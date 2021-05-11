import Auth from "./components/Auth"
import './App.css';
import {Provider} from "react-redux"

import {store} from "./redux/store/store"
function App() {
  return (
    <div className="App">
      <Provider store={store}>

     <Auth/>
      </Provider>
    </div>
  );
}

export default App;
