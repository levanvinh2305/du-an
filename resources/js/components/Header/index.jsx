import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <Logo/>
                    <NavBar/>
                </div>
            </div>
        </header>
    );
}

export default Header;
