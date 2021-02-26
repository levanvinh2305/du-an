import React from "react";
import startup from "../../../../public/img/business/startup.jpg";
import business from "../../../../public/img/business/business.jpg";

function Business() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title">
                        <h2>For All Business Inquiries Contact</h2>
                        <p>We are ready to help you build the information you need to start, run or grow your business.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="content">
                        <img src={startup} className="card-img-top" alt="Startup Business Ideas That Can Make You Money"/>
                        <div className="card-body">
                            <h5 className="card-title">Startup</h5>
                            <p className="card-text"> Startup Business Ideas That Can Make You Money.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content">
                        <img src={business} className="card-img-top" alt="I’d love to chat with you about tech or potential business, shot me an email"/>
                        <div className="card-body">
                            <h5 className="card-title">Business</h5>
                            <p className="card-text">I’d love to chat with you about tech or
                                potential business, shot me an email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;
