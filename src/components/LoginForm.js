import React, { useState, useEffect } from "react";
import { rootURL } from "../utils/config";
const LoginForm = (props) => {
  const [Loadning, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return !Loadning ? "Loading" : <div>LoginForm</div>;
};

export default LoginForm;
