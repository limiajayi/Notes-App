import React from "react";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
    </Routes>
  </Router>
);

const App = () => {
    return (
      <div>
        im app
        {routes}
      </div>
    )
}

export default App