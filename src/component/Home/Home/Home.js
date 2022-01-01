import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Services />
            <Feature />
            <Footer />

        </div>
    );
};

export default Home;