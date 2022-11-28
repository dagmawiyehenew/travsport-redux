import React from 'react'
import LayoutAuth from '../../layout/auth';
import LoginFrom from '../../../components/loginForm'
const Login = (props) => {
  return (
   <LayoutAuth> 
      <LoginFrom {...props}/>
   </LayoutAuth>
  )
}

export default Login;