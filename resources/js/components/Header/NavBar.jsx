import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNabarList } from "../../services/navbar";

export default function NavBar() {
    const dispatch = useDispatch();
    const navbarList = useSelector(state => state.navbarList.navbar);

    useEffect(() => {
        dispatch(getNabarList());
    }, [dispatch]);

    const getPath = value => {
        let path = "/";
        switch (value) {
            case "Home":
                path = "/";
                break;
            case "Team":
                path = "/team";
                break;
            case "Blog":
                path = "/blog";
                break;
            case "Courses":
                path = "/courses";
                break;
            case "Contact":
                path = "/contact";
                break;
            default:
                path = "/";
                break;
        }
        return path;
    };

    return (
        <div className="col-9">
            <nav id="navbar-leo"
                className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {navbarList.map(navbar => (
                            <li className="nav-item active" key={navbar.id}>
                                <Link className="nav-link" to={getPath(navbar.name)}>
                                    {navbar.name}
                                </Link>
                                <span className="sr-only">(current)</span>
                            </li>
                        ))}
                        <li className="nav-item ">  <Link to="/login" className="nav-link">Account</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
