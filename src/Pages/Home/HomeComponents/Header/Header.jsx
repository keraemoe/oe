import React from "react";
import s from "./Header.module.scss";
import busket from "../../../../Assets/busket.png";
import registrImg from "../../../../Assets/registrAndAuth.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registration");
  };

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/registration");
  };

  return (
    <>
      <div id="container">
        <div className={s.header}>
          <nav>
            <ul>
              <li>
                <Link>О нас</Link>
              </li>
              <li>
                <Link to="/products">Продукция</Link>
              </li>
              <li>
                <Link>Полезные статьи</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className={s.busket}>
            <Link to="/basket">
              <img src={busket} alt="busket" />

            </Link>

            {token ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <img src={registrImg} alt="img" onClick={handleRegister} />
            )}
            {/* <img src={languageImg} alt="language" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
