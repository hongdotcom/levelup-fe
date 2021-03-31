import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Reducers/index";
import Context from "./Hooks/Context";
const store = createStore(rootReducer);
ReactDOM.render(
  <React.Fragment>
    <Context>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Context>
  </React.Fragment>,
  document.getElementById("root")
);
