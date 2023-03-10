import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layouts = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layouts;