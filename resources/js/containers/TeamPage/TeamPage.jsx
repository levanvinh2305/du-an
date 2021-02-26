
import React from "react";
import CleanCodeSaturday from "../../components/CleanCodeSaturday";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Team from "../../components/Team";

function TeamPage() {

    return (
        <main className="main">
            <Header/>
            <Team/>
            <Footer/>
            <CleanCodeSaturday/>
        </main>
    );
}

export default TeamPage;
