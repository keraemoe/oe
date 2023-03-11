import React, { useState } from "react";
import s from "./Registration.module.scss";
import RegisterBackground from "../../Assets/registrBackground.png";
import { AUTHAPI, REGISTERAPI } from "../../Constants/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Home/HomeComponents/Header/Header";
import { message } from 'antd';


const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/auth");
  };

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This username is already taked',
      style: {
        marginTop: '100px',
      }
    });
  };

  const AuthUsers = async () => {
    try {
      const response = await axios.post(AUTHAPI, {
        username,
        password,
      });
      if (response.status === 200 || 201) {
        const access = response.data.access;
        const refresh = response.data.refresh;

        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        navigate("/");
      } else if (!response.status) {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postUsers = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTERAPI, {
        username,
        password,
        email,
      });
      if (response.status === 200 || 201) {
        // console.log("Success:", response.data);
        // navigate("/auth");
        AuthUsers()
      }
    } catch (e) {
      error()
    }
  };


  return (
    <>
      <Header />
      <main id={s.registrationContainer}>
        <div className={s.registrWrapper}>
          <div className={s.registrImg}>
            <img src={RegisterBackground} alt="img" />
          </div>
          <div className={s.registerForm}>
            <h1>Добро пожаловать!</h1>
            <div className={s.registerRoute}>
              <h3 onClick={handleAuth}>Вход</h3>
              <h3>Регистрация</h3>
            </div>
            <form onSubmit={postUsers}>
              <input
                type="text"
                value={username}
                placeholder="Имя пользователя"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="mail"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Пароль*"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <input
                type="password"
                placeholder="Повторить пароль*"
                value={password_confirm}
                onChange={(e) => setPassword_confirm(e.target.value)}
              />
              <input
                type="number"
                placeholder="Телефон"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              /> */}
              {contextHolder}
              <button type="submit" >Регистрация</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registration;
