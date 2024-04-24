import React from "react";
import Navbar from "../Navbar";
import HeroBanner from "../HeroBanner";
import FeaturedProducts from "../FeaturedProducts";
import Footer from "../Footer";
const Home = () => {
    
    return (
        <>
            <Navbar />
            <HeroBanner />
            <FeaturedProducts/>
            <Footer/>
        </>


    )
}
export default Home;