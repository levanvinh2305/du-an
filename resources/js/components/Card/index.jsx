import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

Card.propTypes = {
    image: PropTypes.any,
    to: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    textbottom: PropTypes.string,
    textleft: PropTypes.string,
    textright: PropTypes.string,
    onClick: PropTypes.func
};
Card.defaultProps = {
    image: "",
    to: "",
    title: "",
    onClick: () => {}
};
function Card(props) {
    const {
        onClick,
        textleft,
        textright,
        image,
        to,
        title,
        description
    } = props;

    return (
        <div className="card" >
            <Link to={to}>
                <img className="card-img-top" src={image} alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </Link>
            <div className="card-body">
                <a href="#" className="card-link float-left">{textleft}</a>
                <a href="#" className="card-link float-right">{textright}</a>
            </div>
        </div>
    );
}

export default Card;
