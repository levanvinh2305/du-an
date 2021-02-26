import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerList } from "../../services/banner";
import banner from "../../../../public/img/banner/business.jpg";

function Banner() {
    const dispatch = useDispatch();
    const bannerList = useSelector(state => state.bannerList.banner);

    useEffect(() => {
        dispatch(getBannerList());
    }, [dispatch]);

    return (
      <div className="banner">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner carousel-inner-slider">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={banner} alt={bannerList.name} />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>{bannerList.name} Good People. Good Doing. Perfect</h5>
                    <p>{bannerList.description} Applying Technology To Life</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Banner;
