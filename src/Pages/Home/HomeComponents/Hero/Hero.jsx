import s from './Hero.module.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';

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
            <div id='home'>
                <div id='container'>
                    <div className={s.hero}>
                        <h1>Инвестируйте в нас, чтобы <br /> улучшить свое будущее</h1>
                        <p>Кыргызская Республика традиционно преуспевает в сельскохозяйственном секторе. Однако есть и другие отрасли, которые обладают <br /> огромным потенциалом развития. Гидроэнергетика, туризм и обработка текстиля среди них.</p>
                        <form ref={form} onSubmit={sendEmail} className={s.btn}  >
                            <input type="email" name="user_email" placeholder='Введти свою почту' />
                            {contextHolder}
                            <button value="send" type='submit' onClick={openMessage}>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;