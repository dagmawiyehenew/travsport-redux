import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBInput, MDBBadge } from "mdb-react-ui-kit";
const LoginForm = (props) => {
  let redirectTo = useNavigate();
  const intialValues = { email: "", password: "" };
  const [Loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [serverErrors, setServerErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormValues({ ...formValues, [name]: value });

    setFormErrors({});
    
    setServerErrors([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    response();
    
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 8 characters";
    }
    return errors;
  };


  const response = async () => {
    await props.loginUser(formValues).then((res) => {
      if (!res.error) {
        redirectTo("/");
        return;
      }
      setServerErrors(res.error);
    });
  };


  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);


    if (
      Object.keys(formErrors).length <= 0 &&
      isSubmitting &&
      serverErrors.length === 0
    ) {
      // response();
    }
    return () => clearTimeout(timer);
  }, [formErrors, isSubmitting, formValues, serverErrors]);

 

  return !Loading ? (
    "Loading"
  ) : (
    <>
      <div className="text-center">
        <img
          src="https://www.travsport.se/siteassets/bilder/svensktravsport-logo-ejtext-frilagd.png?center=0.5,0.5&width=300"
          style={{ width: "185px" }}
          alt="logo"
        />
        <h4 className="mt-1 mb-5 pb-1">Welcome to Travsport</h4>
      </div>

      <p>Please login to your account</p>

      {/* Form */}
      <form id="formAuthentication" onSubmit={handleSubmit} noValidate>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          name="email"
          onChange={handleChange}
        />
        {formErrors.email ? formErrors.email : ''}
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          name="password"
          onChange={handleChange}
        />
        {formErrors.password ? formErrors.password : ''}
        <div className="text-center pt-1 mb-5 pb-1">
          <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
          <a className="text-muted" href="#!">
            <MDBBadge pill className='mx-2' color='danger' light>
                {serverErrors ? serverErrors : ''}
            </MDBBadge>
            
          </a>
        </div>
      </form>

      {/* / form */}
    </>
  );
};

export default LoginForm;
