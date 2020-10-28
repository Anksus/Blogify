import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import { Router, Link } from "@reach/router";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
