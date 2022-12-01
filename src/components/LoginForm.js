import React, { useState, useEffect } from "react";
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
    email: "dagmawi@screenwork.se",
    password: "lTgAYaLP9jRs",
  };

  const onSubmit = async (values) => {
    await props.loginUser(values).then((res)=> {
        console.log(res);
    });
   
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);

    return () => clearTimeout(timer);
  }, []);

  console.log(props);

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
            id="inputEmail"
            autoComplete="off"
            className="form-control"
            title="Email"
            value={initialValues.email}
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field
            type="password"
            name="password"
            id="inputPassword"
            className="form-control"
            title="Password"
            value={initialValues.password}
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
