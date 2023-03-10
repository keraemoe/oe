import React from 'react';
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <>
            <div id='container'>
                <div className={s.hero}>
                    <h1>The easiest and fastest <br /> way to Invest in <br /> Agriculture</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean <br /> sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem <br /> ipsum dolor sit amet, consectetur </p>
                    <div className={s.btn}>
                        <input type="text" name="text" placeholder='Enter your email' id="" />
                        <button type='button'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;