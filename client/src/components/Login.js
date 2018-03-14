import React from 'react'
import {login} from '../fakeAuth'

const Login = ({history}) => (
  <button onClick={() => {login(); history.push('/dashboard')}}>Hell Yeah Boi</button>
)

export default Login
