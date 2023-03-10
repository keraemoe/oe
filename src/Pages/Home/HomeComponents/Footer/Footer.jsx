import s from './Footer.module.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import line1 from '../../../../Assets/Line 3.png'
import line2 from '../../../../Assets/Line 4.png'
import line3 from '../../../../Assets/Line 5.png'
import social1 from '../../../../Assets/social1.png'
import social2 from '../../../../Assets/social2.png'
import social3 from '../../../../Assets/social3.png'


const logo = [
    {
        id: 1,
        img: line1
    },
    {
        id: 2,
        img: line2
    },
    {
        id: 3,
        img: line3
    },

]

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rnkeocu', 'template_cxwrf3v', form.current, 'rVxs1omlSkc0Q3S1P')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
            style: {
                marginTop: '100px',
            }
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Loaded!',
                duration: 2,
                style: {
                    marginTop: '100px',
                }
            });
        }, 1000);
    };
    return (
        <>
            <div id='about'>
                <div className={s.main_footer}>
                    <div className={s.footer}>
                        <div className={s.left}>
                            <div className={s.logo}>
                                {logo.map((logs) => (
                                    <img src={logs.img} alt="" />
                                ))}
                                <h1>FarmVest</h1>
                            </div>
                            <p>High level experience in web design <br /> and development knowledge, <br /> producing quality work.</p>
                        </div>
                        <div className={s.center}>
                            <p>Subscribe to stay tuned for new web design <br /> and latest updates. Let's do it!</p>
                            <form ref={form} onSubmit={sendEmail} className={s.btn}  >
                                <input type="email" name="user_email" placeholder='Enter your email' />
                                {contextHolder}
                                <button value="send" type='submit' onClick={openMessage}>
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className={s.right}>
                            <div className={s.icons}>
                                <h1>Follow us</h1>
                                <div className={s.soc}>
                                    <img src={social1} alt="" />
                                    <img src={social2} alt="" />
                                    <img src={social3} alt="" />
                                </div>
                            </div>
                            <div className={s.number}>
                                <h1>Call us</h1>
                                <span>+2349123456789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;