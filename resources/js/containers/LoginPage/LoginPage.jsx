import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../actions/auth";

function LoginPage() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            // get return url from location state or default to home page
            //  const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(email, password));
        }
    }

    console.log("login", login);

    return (
        <div className="gray-layout">
            <div className="container">
                <div className="row align-item-center">
                    <div className="col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2 text-center">
                        <div className="content-box mt-5">
                            <h1 className="text-center">
                                Log In

                            </h1>
                            {login.error && (
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {login.error}
                                </div>
                            )}
                            <div className="row align-item-center">
                                <div className="col-sm-10 col-sm-offset-1">
                                    <form
                                        className="new_user"
                                        id="new_user"
                                        name="form"
                                        onSubmit={handleSubmit}
                                    >

                                        <div className="form-group">
                                            <label
                                                className="control-label"
                                                htmlFor="user_email"
                                            >
                                                Username
                                            </label>
                                            <div className="control-input">
                                                <input
                                                    value={email}
                                                    className={
                                                        "form-control input-hg" +
                                                        (submitted && !email
                                                            ? " is-invalid"
                                                            : "")
                                                    }
                                                    type="email"
                                                    name="email"
                                                    id="user_email"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label
                                                className="control-label"
                                                htmlFor="user_password"
                                            >
                                                Password
                                            </label>
                                            <div className="control-input">
                                                <input
                                                    autoComplete="off"
                                                    className="form-control input-hg"
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={handleChange}
                                                    id="user_password"
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div
                                            className="g-recaptcha-v3"
                                            data-action="login"
                                        />
                                        <div className="form-group text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                {login.loading && (
                                                    <span className="spinner-border spinner-border-sm mr-1"></span>
                                                )}
                                                Sign In
                                            </button>
                                        </div>
                                        <br />
                                        <center>
                                            <Link to="/forgot-password">
                                                {" "}
                                                <a
                                                    className="link-below-button"
                                                    href=""
                                                >
                                                    Forgot your Password?
                                                </a>
                                            </Link>
                                        </center>
                                        <center>
                                            <Link to="/register">
                                                {" "}
                                                <a
                                                    className="link-below-button"
                                                    href=""
                                                >
                                                    Create Account
                                                </a>
                                            </Link>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
