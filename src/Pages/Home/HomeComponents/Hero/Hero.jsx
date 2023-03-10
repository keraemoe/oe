import s from './Hero.module.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, message } from 'antd';

const Hero = () => {
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
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Loaded!',
                duration: 2,
            });
        }, 1000);
    };
    return (
        <>
            <div id='home'>
                <div id='container'>
                    <div className={s.hero}>
                        <h1>The easiest and fastest <br /> way to Invest in <br /> Agriculture</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean <br /> sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem <br /> ipsum dolor sit amet, consectetur </p>
                        <form ref={form} onSubmit={sendEmail} className={s.btn}  >
                            <input type="email" name="user_email" placeholder='Enter your email' />
                            {contextHolder}
                            <button value="send" type='submit' onClick={openMessage}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;