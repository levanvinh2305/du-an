import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import CleanCodeSaturday from "./CleanCodeSaturday";
import Footer from "./Footer";
import Header from "./Header";
import Scroll from "./Scroll";
import HomePage from "../containers/HomePage/HomePage";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./../helpers/store";
import CoursesPage from "../containers/CoursesPage/CoursesPage";
import './App.scss';
import TeamPage from "../containers/TeamPage/TeamPage";
import ContactPage from "../containers/ContactPage/ContactPage";
import BlogPage from "../containers/BlogPage/BlogPage";
import LoginPage from "../containers/LoginPage/LoginPage";
import { PrivateRoute } from "./PrivateRouter";
import RegisterPage from "../containers/RegisterPage/RegisterPage";
import ResetPasswordPage from "../containers/ResetPasswordPage/ResetPasswordPage";
import ForgotPassWordPage from "../containers/ForgotPassWordPage/ForgotPassWordPage";
import LoginPageAdmin from "../admin/LoginPage/LoginPageAdmin";

function App() {

    return (
        <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>

            <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/team" component={TeamPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/admin" component={LoginPageAdmin} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/reset-password" component={ResetPasswordPage} />
                <Route path="/forgot-password" component={ForgotPassWordPage} />
            </Switch>
            <Scroll showBelow={250}></Scroll>
        </BrowserRouter>
        </Suspense>
    );
}

export default App;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
