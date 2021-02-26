import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ContactPage() {
    return (
        <main className="main">
            <Header/>
            <Contact/>
            <Footer/>
        </main>
    );
}

export default ContactPage;
