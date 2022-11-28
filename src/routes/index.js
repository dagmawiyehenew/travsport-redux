import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoute, PrivetRoute } from '../utils/grantPermisson';
import Login from "../containers/view/auth/login";
import Results from "../containers/view/pages/results"
const RouterCompass = () => {
  return (
    <Router basename={"/"}>
      <Routes>
        
          <Route element={<PublicRoute />}>
              <Route path="/login" exact element={<Login />} />
          </Route>

          <Route element={<PrivetRoute />}>
            <Route path="/" exact element={<Results />} />
          </Route>
      </Routes>
    </Router>
  );
};

export default RouterCompass;
