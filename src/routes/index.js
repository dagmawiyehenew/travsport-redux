import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../containers/view/auth/login";
import Results from "../containers/view/pages/results"
const RouterCompass = () => {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default RouterCompass;
