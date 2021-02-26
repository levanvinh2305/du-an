import React from 'react';
import PropTypes from 'prop-types';

ForgotPassWordPage.propTypes = {

};

function ForgotPassWordPage(props) {
    return (
        <div role="main" className="view-school">
        <div className="gray-layout">
          <div className="container on-a-school-layout">
            <div className="row align-item-center">
              <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center">
                <div className="content-box mt-5">
                  <h1>
                    Reset Your Password
                  </h1>
                  <p>We will send you an email to reset your password.</p>
                  <div className="row align-item-center ">
                    <div className="col-sm-10 col-sm-offset-1">
                      <form className="simple_form new_user" id="new_user" noValidate="novalidate" action="/secure/357209/users/password" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="pOquZtgIfVnsswJHwHcFmfaqUoXey6W6R1JjNTNYcJ5d4O7Uzo5Tj7MyTv96cYI/NoNZWmNs7ashjkC0oT86sg==" />
                        <div className="form-group">
                          <label className="control-label" htmlFor="user_email">Email Address</label>
                          <div className="control-input">
                            <div className="form-group email optional user_email"><input className="form-control string email optional" autofocus="autofocus" placeholder="name@example.com" type="email"  id="user_email" /></div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group text-center">
                            <button type="button" class="btn btn-primary">Submit</button>
                            <button type="button" class="btn btn-primary" onClick="/login">Cancel</button>
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

export default ForgotPassWordPage;
