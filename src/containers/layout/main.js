import React, { Fragment, useEffect } from "react";
import Header from "../../common/header";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
function LayoutMain({ children }) {
  // events expected from user
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

  let userSession; // user session timer will be stored
  let history = useNavigate(); // user path to navigate the user

  useEffect(() => {
    // if user action not involves one of the events we specified we take as inactive user
    // Te user will be logged out
    Object.values(events).forEach((event) => {
      window.addEventListener(event, () => {
        resetSession();
        session();
      });
    });
  });

  const resetSession = () => {
    // clear the current user session time
    if (userSession) clearTimeout(userSession);
  };

  const session = () => {
    // Set or update user session time
    userSession = setTimeout(() => {
      resetSession(); // clear session
      Object.values(events).forEach((event) => {
        window.addEventListener(event, resetSession);
      });
      logoutUser(); // logout user
    }, 5 * 60 * 1000);
  };

  const logoutUser = () => {
    // clear stored data and send this user to login page
    localStorage.clear();
    history("/login");
  };

  return (
    <MDBContainer fluid >
    <Header logoutUser={logoutUser}/>
    <MDBContainer className="mt-5"> <Fragment>{children}</Fragment></MDBContainer>
   
    </MDBContainer>
  );
}

export default LayoutMain;
