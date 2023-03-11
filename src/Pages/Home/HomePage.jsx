import React from 'react';
import Header from '../Home/HomeComponents/Header/Header';
import Company from './HomeComponents/Company/Company';
import Features from './HomeComponents/Features/Features';
import Footer from './HomeComponents/Footer/Footer';
import Hero from './HomeComponents/Hero/Hero';
import How from './HomeComponents/How/How';
import { UpOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Company />
            <How />
            <Features />
            <Footer />
            <a href="#">
                <FloatButton
                    shape="circle"
                    type="primary"
                    style={{
                        backgroundColor: '#008000',
                        right: 20,
                    }}
                    icon={<UpOutlined />}
                />
            </a>
        </>
    );
};

export default HomePage;