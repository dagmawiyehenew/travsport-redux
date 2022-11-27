import React, { useState, useEffect } from "react";
import { rootURL } from "../utils/config";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const LoginForm = (props) => {
  const [Loadning, setLoaded] = useState(true);
  const [Errors, setErrors] = useState([]);

  const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Please provide your email"),
    password: Yup.string().required("Please provide a password"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return !Loadning ? (
    "Loading"
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            type="email"
            name="email"
            id="inputemail"
            autoComplete="off"
            className="form-control"
            title="from email"
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field
            type="password"
            name="password"
            id="inputpassword"
            className="form-control"
            title=" from password"
          />
          {errors.email && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
