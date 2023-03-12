import React, { useState, useEffect } from 'react';
import {
    Input,
    Descriptions,
    Avatar,
    Button,
    Modal,
    Select,
    Space,
    Switch,
    Cascader,
    DatePicker,
    Form,
    InputNumber,
    Radio,
    TreeSelect,
    Upload,
} from 'antd';
import {
    CheckOutlined, InboxOutlined, UploadOutlined
} from '@ant-design/icons';
import s from './Profile.module.scss'
import Header from '../Home/HomeComponents/Header/Header';
import axios from 'axios';
import { PROFILE } from "../../Constants/api"

const { Option } = Select;

const Profile = () => {

    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState();
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
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

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 14,
        },
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
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
                            <Descriptions.Item label="Контактная информация">
                                {prof.contact_info}
                            </Descriptions.Item>
                        </Descriptions>
                        <Button type="primary" onClick={showModal}>
                            Редактировать
                        </Button>
                        <Modal
                            className={s.modal}
                            zIndex={9000}
                            title="Профиль"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <Form
                                labelCol={{
                                    span: 4,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}
                                size={componentSize}
                                style={{
                                    maxWidth: 600,
                                }}
                            >
                                <Form.Item label="Фото">
                                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                        <Upload.Dragger name="files" action="/upload.do">
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Нажмите или перетащите файл в эту область, чтобы загрузить</p>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item label="Имя">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Фамилия">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="О себе">
                                    <TextArea rows={5} />
                                </Form.Item>
                                <Form.Item label="Актив" valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;