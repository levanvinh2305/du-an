import React from "react";
import PropTypes from "prop-types";

RegisterPage.propTypes = {};

function RegisterPage(props) {
    return (
        <div className="view-school">
        <div className="gray-layout">
          <div className="container on-a-school-layout">
            <div className="row align-item-center">
              <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center mt-5">
                <div className="content-box content-box-school-signup">
                  <h1>
                   Register
                  </h1>
                  <div className="row align-item-center">
                    <div className="col-sm-10 col-sm-offset-1">
                      <form className="new_user" id="new_user" action="/secure/357209/users?flow_school_id=357209" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="IzTpmO4nL3GA1NdFslXTYLxgj7gkC7nPckuViGlLCY3aPqkq+KEBp99Vm/0IU1TGfEmEZ5ms8d4Ul7YJ+yxDoQ==" />
                        <input defaultValue={357209} type="hidden" name="user[school_id]" id="user_school_id" />
                        <div className="form-group">
                          <div className="control-input">
                            <input defaultValue={357209} type="hidden" name="user[school_id]" id="user_school_id" />
                            <label className="control-label" htmlFor="user_name">Full Name</label>
                            <input autofocus="autofocus" className="form-control input-hg" type="text" name="user[name]" id="user_name" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label" htmlFor="user_email">Email Address</label>
                          <div className="control-input">
                            <input className="form-control input-hg" type="email" name="user[email]" id="user_email" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <label className="control-label" htmlFor="user_password">Password</label>
                            <div className="control-input form-group">
                              <input autoComplete="off" className="form-control input-hg" type="password" name="user[password]" id="user_password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <label className="control-label" htmlFor="user_password_confirmation">Confirm Password</label>
                            <div className="control-input form-group">
                              <input autoComplete="off" className="form-control input-hg" type="password" name="user[password_confirmation]" id="user_password_confirmation" />
                            </div>
                          </div>
                        </div>
                        <div className="g-recaptcha-v3" data-sitekey-v3="6Le9jOUUAAAAAMKU_R7rTbi4JFAi6FXIhG5aBRHx" data-action="signup" />
                        <div className="form-group text-left">
                          <label className="control-label agree-to-terms">
                            <input name="user[unsubscribe_from_marketing_emails]" type="hidden" defaultValue="true" /><input type="checkbox" defaultValue="false" name="user[unsubscribe_from_marketing_emails]" id="user_unsubscribe_from_marketing_emails" />
                            &nbsp;&nbsp;I agree to receive instructional and promotional emails
                          </label>
                        </div>
                        <div className="form-group text-left">
                          <label className="control-label agree-to-terms">
                            <input name="user[agreed_to_terms]" type="hidden" defaultValue="false" /><input default="default" type="checkbox" defaultValue="true" name="user[agreed_to_terms]" id="user_agreed_to_terms" />
                            &nbsp;&nbsp;
                            I agree to <strong>LeoTech's</strong> <a target="_blank" href="https://teachable.com/terms-of-service/" rel="noopener">Terms of Use</a> &amp; <a target="_blank" href="https://teachable.com/privacy-policy/" rel="noopener">Privacy Policy</a><br /> and <strong>Mastering Programming Courses's</strong> <a href="https://developedbyed.com/p/terms" target="_blank" rel="noopener">Terms of Use</a> &amp; <a href="https://developedbyed.com/p/privacy" target="_blank" rel="noopener">Privacy Policy</a>
                          </label>
                        </div>
                        <center>
                        <div className="form-group text-center">
                      <button type="submit" class="btn btn-primary">Sign Up</button>
                         </div>
                        </center>
                      </form></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RegisterPage;
