import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoute, PrivetRoute } from '../utils/grantPermisson';
import {connect} from 'react-redux';
import { loginUser } from "../actions/authenticate";

import Login from "../containers/view/auth/login";
import Results from "../containers/view/pages/results";

const RouterCompass = (props) => {
  
  return (
    <Router basename={"/"}>
      <Routes>
          <Route element={<PrivetRoute {...props}/>}>
            <Route path="/" exact element={<Results />} />
          </Route>

          <Route element={<PublicRoute {...props}/>}>
              <Route path="/login" element={<Login />} />
          </Route>
      </Routes>
    </Router>
  );
};


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, {
  loginUser
})(RouterCompass);

