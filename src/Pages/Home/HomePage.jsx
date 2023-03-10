import React from 'react';
import Header from '../Home/HomeComponents/Header/Header';
import Company from './HomeComponents/Company/Company';
import Features from './HomeComponents/Features/Features';
import Hero from './HomeComponents/Hero/Hero';
import How from './HomeComponents/How/How';


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Company />
            <How />
            <Features />
        </>
    );
};

export default HomePage;