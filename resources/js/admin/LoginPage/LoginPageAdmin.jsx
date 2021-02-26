import React from 'react';
import PropTypes from 'prop-types';

LoginPageAdmin.propTypes = {

};

function LoginPageAdmin(props) {
    return (
        <div className="gray-layout">
        <div className="container">
        <div className="row align-item-center">
    <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center">
      <div className="content-box mt-5">
        <h1 className="text-center">
           Login
        </h1>
        <div className="row align-item-center">
          <div className="col-sm-10 col-sm-offset-1">
            <form className="new_user" id="new_user" >
              <div className="form-group">
                <label className="control-label" htmlFor="user_email">Email Address</label>
                <div className="control-input">
                  <input autofocus="autofocus" className="form-control input-hg" type="email"  name="user[email]" id="user_email" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="user_password">Password</label>
                <div className="control-input">
                  <input autoComplete="off" className="form-control input-hg" type="password" name="user[password]" id="user_password" />
                </div>
              </div>
              <br />
              <div className="g-recaptcha-v3" />
              <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary admin-btn"
                    onClick={()=> {
                        auth.login(()=> {props.history.push("/team")})
                    }}
                  >Sign In</button>
              </div>
              <br />
              <center>
                <a className="link-below-button" href="">Forgot Password?</a>
              </center>
            </form></div>
        </div>
      </div>
    </div>
  </div>

    </div>
   </div>
    );
}

export default LoginPageAdmin;
