import React from 'react'
import LayoutAuth from '../../layout/auth';
import LoginFrom from '../../../components/LoginForm'
const Login = (props) => {
  return (
   <LayoutAuth> 
      <LoginFrom {...props}/>
   </LayoutAuth>
  )
}

export default Login;