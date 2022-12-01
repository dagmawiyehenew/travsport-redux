import React from "react";
import LayoutAuth from "../../layout/auth";
import LoginFrom from "../../../components/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authenticate";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Login = (props) => {
  return (
    <LayoutAuth>
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol className="mb-5 mx-auto col-sm-4">
            <div className="d-flex flex-column ms-5">
              <LoginFrom {...props} />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </LayoutAuth>
  );
};
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, {
  loginUser,
})(Login);
