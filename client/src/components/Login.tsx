import React, { useState } from 'react'
import { useAppDispatch } from '../store'

import { login, registration } from '../slice/store'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useAppDispatch()

  return (
    <div id='login'>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="header_form">
            <div className="header">
              <div className="d-flex">
                <i className="fa-brands fa-steam icon"></i><h1>Steam</h1>
              </div>
              <p>sign in with account name</p>
            </div>
            <div id='form_info'>
              <div className="form-floating mb-3 ">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="login_button">
                <button onClick={() => dispatch(login({ email, password }))
                  .unwrap()
                  .then((user: any) => {
                    // Handle successful login
                    console.log('Login successful:', user);
                    // history.push('/dashboard');
                  })
                  .catch((error: any) => {
                    // Handle login error
                    console.log('Login error:', error);
                  })} className='mx-3' >Sign in</button>
                <button onClick={() => dispatch(registration({ email, password })).unwrap()
                  .then((user: any) => {
                    // Handle successful login
                    console.log('Login successful:', user);
                    // history.push('/dashboard');
                  })
                  .catch((error: any) => {
                    // Handle login error
                    console.log('Register error:', error)
                  })} className='mx-3' > Register</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Login