import React from "react";
import AIMachineLearning from "../../components/AIMachineLearning";
import Business from "../../components/Business";
import CleanCodeSaturday from "../../components/CleanCodeSaturday";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Service from "../../components/Services";
import Slider from "../../components/Slider";
function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <main className="main">
                <div className="box about-us">
                    <Slider/>
                </div>
                <div className="box business">
                    <Business/>
                </div>
                <div className="box services">
                    <Service/>
                </div>
                <div className="box ai-machine-learning">
                    <AIMachineLearning/>
                </div>
            </main>
            <Footer/>
            <CleanCodeSaturday/>
        </div>
    );
}

export default HomePage;
