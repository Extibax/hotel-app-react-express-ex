/* Modules */
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Containers */
import Main from "./containers/Main/Main";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRouter;
