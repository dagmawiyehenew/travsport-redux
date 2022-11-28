import React from "react";
import {
    Outlet,
    Navigate,
} from "react-router-dom";


export function PublicRoute(props)  {
        const {isAuthenticated} = props.auth;

        return (
          // restricted = false meaning public route
          // restricted = true meaning restricted route
          !isAuthenticated ?  <Outlet /> : <Navigate to={"/"} />
        );
};


export function PrivetRoute(props) {
  const {isAuthenticated} = props.auth;

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route

    isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />
  );
};