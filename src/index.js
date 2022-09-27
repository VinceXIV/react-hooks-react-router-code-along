// .src/index.js

import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);