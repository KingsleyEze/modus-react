import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import UserList from "./routes/UserList";
import UserDetail from "./routes/UserDetail";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:userId" component={UserDetail} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
