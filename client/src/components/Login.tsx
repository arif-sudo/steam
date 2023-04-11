import React, { useState } from 'react'

const Login = () => {
  // const [pages, setPages] = useState("register");

  // const isLogin = pages == "login"
  // const isRegister = pages == "register"
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
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="login_button">
              <button>Sign in</button>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login