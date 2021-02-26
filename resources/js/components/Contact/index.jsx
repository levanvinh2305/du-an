import React from "react";
import Social from "../Social";

Contact.propTypes = {};

function Contact(props) {
    return (
        <div className="page contact-page">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h2>Get in Touch</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="clean-code">
                            <h3>I’d love to chat with you about tech or potential business, shot me an email.</h3>
                            <p><i className="fa fa-envelope" aria-hidden="true" /> helloleotech@gmail.com</p>
                            <p><i className="fa fa-volume-control-phone" aria-hidden="true" /> 094 494 7786</p>
                        </div>
                        <Social/>
                    </div>
                    <div className="col-6">
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit Here</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
