import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Components/Main";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
