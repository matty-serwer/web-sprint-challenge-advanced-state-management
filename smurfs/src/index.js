// libraries
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// stylesheets
import "./index.css";

// redux helpers
import { smurfsReducer } from "./reducers";

//components
import App from "./components/App";

// function reducer() {
//   return {
//     test: "test reducer",
//   };
// }

const store = createStore(smurfsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
