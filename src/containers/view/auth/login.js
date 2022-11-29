import React from 'react'
import LayoutAuth from '../../layout/auth';
import LoginFrom from '../../../components/loginForm'
import { connect } from 'react-redux';
import {loginUser} from '../../../actions/authenticate';
const Login = (props) => {
  
  return (
   <LayoutAuth> 
      <LoginFrom {...props}/>
   </LayoutAuth>
  )
}
function mapStateToProps(state) {
  return {
      auth : state.auth
  };
};

export default connect(mapStateToProps,{
  loginUser
}  
)(Login);