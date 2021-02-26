import React from "react";
import PropTypes from "prop-types";

Social.propTypes = {};

function Social(props) {
    return (
        <div className="follow">
            <a href="https://www.facebook.com/helloleotech/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/helloleotech">
                <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/helloleotech/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/helloleotech/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCBdv9O5dJI8WKxjoRPo9_lw?view_as=subscriber">
                <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
        </div>
    );
}

export default Social;
