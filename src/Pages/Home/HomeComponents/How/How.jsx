import React from 'react';
import s from './How.module.scss';
import icon1 from '../../../../Assets/icon1.png'
import icon2 from '../../../../Assets/icon2.png'
import icon3 from '../../../../Assets/icon3.png'
import icon4 from '../../../../Assets/icon4.png'
import banner from '../../../../Assets/banner.png'


const How = () => {
    return (
        <>
            <div id='how'>
                <div id='container' className={s.how}>
                    <div className={s.first}>
                        <h1>How invest Works</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac <br /> etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, <br /> consectetur </p>
                        <div className={s.info}>
                            <div className={s.first_info}>
                                <img src={icon1} alt="" />
                                <div className={s.txt}>
                                    <h1>Download Invest</h1>
                                    <p>Start by downloading FarmVest app <br />
                                        on your Android or IOS</p>
                                </div>
                            </div>
                            <div className={s.second_info}>
                                <img src={icon2} alt="" />
                                <div className={s.txt}>
                                    <h1>Create account</h1>
                                    <p>Start by downloading FarmVest app <br />
                                        on your Android or IOS</p>
                                </div>
                            </div>
                            <div className={s.third_info}>
                                <img src={icon3} alt="" />
                                <div className={s.txt}>
                                    <h1>Link your bank account</h1>
                                    <p>Start by downloading FarmVest app <br />
                                        on your Android or IOS</p>
                                </div>
                            </div>
                            <div className={s.fourth_info}>
                                <img src={icon4} alt="" />
                                <div className={s.txt}>
                                    <h1>Start Investing</h1>
                                    <p>Start by downloading FarmVest app <br />
                                        on your Android or IOS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.second}>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default How;