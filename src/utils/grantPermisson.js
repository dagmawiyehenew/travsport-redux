import React from "react";
import {
    Outlet,
    Navigate,
} from "react-router-dom";

export function PublicRoute(props)  {
        return (
          // restricted = false meaning public route
          // restricted = true meaning restricted route
          !props.isAuthenticated ?  <Outlet /> : <Navigate to={"/"} />
        );
};


export function PrivetRoute(props) {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    props.isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />
  );
};