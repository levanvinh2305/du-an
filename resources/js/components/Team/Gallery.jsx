import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import leo from "../../../../public/img/gallery/teamwork.jpg";

function Gallery() {
    return (
        <div className="gallery">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Gallery Photo</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={leo} alt="Card image" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={leo} alt="Card image" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={leo} alt="Card image" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={leo} alt="Card image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
