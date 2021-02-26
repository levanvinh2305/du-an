import React, { useEffect } from "react";
import Social from "../Social";
import { useDispatch, useSelector } from "react-redux";
import { getSliderList } from "../../services/slider";

export default function Slider() {
    const dispatch = useDispatch();
    const sliderList = useSelector(state => state.sliderList.slider);

    useEffect(() => {
        dispatch(getSliderList());
    }, [dispatch]);
    return (
        <div id="carouselId" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
            {sliderList.map(slider => (
                <div key={slider.id} className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="content">
                                    <h2>{slider.name}</h2>
                                    <p>{slider.description}</p>
                                </div>
                                <Social></Social>
                            </div>
                            <div className="col-md-5">
                                <div className="content">
                                    <img src={slider.image} className="card-img-top" alt={slider.name}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
