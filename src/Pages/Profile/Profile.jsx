import React, { useState, useEffect } from 'react';
import { Descriptions, Avatar, Breadcrumb } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import s from './Profile.module.scss'
import Header from '../Home/HomeComponents/Header/Header';
import axios from 'axios';
import { PROFILE } from "../../Constants/api"

const Profile = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const [profile, setProfile] = useState([])

    const getProfile = async () => {
        const res = await axios.get(PROFILE)
        setProfile(res.data)
    }

    useEffect(() => {
        getProfile()
    }, [])





    return (
        <>
            <Header />
            {profile.map((prof) => (
                <div className={s.container} key={prof.id}>
                    <div className={s.user}>
                        <Avatar className={s.ava} size={64} >
                            <img src={prof.photo} alt="adfad" />
                        </Avatar>
                        <Descriptions title={`${prof.first_name} ${prof.last_name}`}>
                            <Descriptions.Item label="Имя пользователя">{prof.user}</Descriptions.Item>
                            <Descriptions.Item label="Сфера">{prof.sphere}</Descriptions.Item>
                            <Descriptions.Item label="Аддрес">
                                Kyrgyzstan, Bishkek, Ibraimova 115/1 .str
                            </Descriptions.Item>
                            <Descriptions.Item label="Контактная информация">
                                {prof.contact_info}
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;