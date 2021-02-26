import React from "react";
import web from "../../../../public/img/Services/web.jpg";
import mobile from "../../../../public/img/Services/mobile.jpg";
import ercems from "../../../../public/img/Services/erp-cms.jpg";

function Service(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2>Our Services</h2>
                    <p>We provide are outsourcing and production services for
                        Web, Mobile, ERP and CMS Development to Small and
                        medium-sized enterprises (SME).
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                        <div className="content">
                            <img src={web} className="card-img-top" alt="Web" />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">
                                    Web development is the work involved in
                                    developing a website for the Internet or an
                                    intranet. Web development can range from
                                    developing a simple single static page of
                                    plain text to complex web-based internet
                                    applications, electronic businesses, and
                                    social network services.
                                </p>
                            </div>
                        </div>
                </div>
                <div className="col-md-4">
                    <div className="content">
                        <img
                            src={mobile}
                            className="card-img-top"
                            alt="Mobile"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Mobile App Development
                            </h5>
                            <p className="card-text">
                                Mobile app development is the act or process by
                                which a mobile app is developed for mobile
                                devices, such as personal digital assistants,
                                enterprise digital assistants or mobile phones.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                        <div className="content">
                            <img
                                src={ercems}
                                className="card-img-top"
                                alt="ERP and CMS"
                            />
                            <div className="card-body">
                                <h5 className="card-title">ERP and CMS</h5>
                                <p className="card-text">
                                    Enterprise resource planning is the
                                    integrated management of main business
                                    processes, often in real time and mediated
                                    by software and technology.
                                    <br />A content management system is a
                                    software application that can be used to
                                    manage the creation and modification of
                                    digital content. CMSs are typically used for
                                    enterprise content management and web
                                    content management.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
