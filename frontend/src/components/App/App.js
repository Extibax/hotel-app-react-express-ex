/* Modules */
import { Component } from "react";
import { Provider } from "react-redux";

/* Store */
import store from "../../redux/store";

/* Styles */
import "./App.css";

/* Components */
import AppRouter from "../../index.routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
