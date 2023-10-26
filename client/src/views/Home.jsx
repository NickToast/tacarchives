import React from "react";
// import { useContext } from "react"
// import { UserContext } from "../../context/userContext"
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturedItems from "../components/FeaturedItems";
import Footer from "../components/Footer";

const Home = () => {

    


    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <FeaturedItems/>
            <Footer/>
        </div>
    )
}

export default Home;