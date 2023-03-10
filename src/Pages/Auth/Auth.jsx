import React, { useState } from "react";
import s from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { AUTHAPI } from "../../Constants/api";
import axios from "axios";
import RegisterBackground from "../../Assets/registrBackground.png";
import Header from "../Home/HomeComponents/Header/Header";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getRegister = () => {
    navigate("/registration");
  };

  const postUsers = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(AUTHAPI, {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.status === 200 || 201) {
        return navigate("/");
      } else if (!response.status) {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main id={s.authContainer}>
        <div id="container" className={s.authWrapper}>
          <div className={s.authImg}>
            <img src={RegisterBackground} alt="img" />
          </div>
          <div className={s.authForm}>
            <h1>Добро пожаловать!</h1>
            <div className={s.authRoute}>
              <h3>Вход</h3>
              <h3 onClick={getRegister}>Регистрация</h3>
            </div>
            <form onSubmit={postUsers}>
              <input
                type="text"
                value={username}
                placeholder="Имя пользователя"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Пароль*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Войти</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Auth;
