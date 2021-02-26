import React from "react";
import Social from "../Social";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <Social></Social>
                        <div className="copyright">
                            COPYRIGHT © 2020 LEO TECH ALL RIGHTS RESERVED
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
