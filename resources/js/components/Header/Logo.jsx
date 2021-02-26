import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogoItem } from "../../services/logo";

function Logo() {
    const dispatch = useDispatch();
    const logoItem = useSelector(state => state.logo.logo);

    useEffect(() => {
        dispatch(getLogoItem());
    }, [dispatch]);
    return (
        <div className="col-3">
            <div className="logo">
                <Link to ="/">
                   {logoItem.map(logo => ( <img key={logo.image} src={logo.image} />))}
                </Link>
            </div>
        </div>
    );
}

export default Logo;
