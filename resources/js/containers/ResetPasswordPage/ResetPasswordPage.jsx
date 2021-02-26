import React from 'react';
import PropTypes from 'prop-types';

ResetPasswordPage.propTypes = {

};

function ResetPasswordPage(props) {
    return (
        <div role="main" className="view-school">
        <div className="gray-layout">
          <div className="container on-a-school-layout">
            <div className="row align-item-center">
              <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center">
                <div className="content-box mt-5">
                  <h1>
                    Reset Password
                  </h1>
                  <div className="row align-item-center ">
                    <div className="col-sm-10 col-sm-offset-1">
                      <form className="simple_form new_user" id="new_user" noValidate="novalidate" action="/secure/357209/users/password" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="pOquZtgIfVnsswJHwHcFmfaqUoXey6W6R1JjNTNYcJ5d4O7Uzo5Tj7MyTv96cYI/NoNZWmNs7ashjkC0oT86sg==" />
                      <div className="form-group">
                    <label className="control-label" htmlFor="user_password">New Password</label>
                    <div className="control-input">
                      <input autoComplete="off" className="form-control input-hg" type="password" name="user[password]" id="user_password" />
                    </div>
                     </div>
                        <br />
                        <div className="form-group">
                    <label className="control-label" htmlFor="user_password">Confirm Password</label>
                    <div className="control-input">
                      <input autoComplete="off" className="form-control input-hg" type="password" name="user[password]" id="user_password" />
                    </div>
                     </div>
                        <div className="form-group text-center">
                      <button type="button" class="btn btn-primary">Reset</button>
                      </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ResetPasswordPage;
