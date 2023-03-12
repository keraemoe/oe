import React, { useState } from "react";
import s from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registration");
  };
  const handleAuth = () => {
    navigate("/auth");
  };

  const handleHome = () => {
    navigate("/")
  }

  const token = localStorage.getItem("access");

  const logout = () => {
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    navigate("/registration");
  };
  const [showNav, setShowNav] = useState(false);

  const avatar = [
    {
      id: 1,
      img: ''
    }
  ]
  return (
    <>
      <div id={s.header_container}>
        <div className={s.main_header}>
          <div className={s.header}>
            <div>
              <h1 onClick={handleHome}>InvestInUs</h1>
            </div>
            <nav>
              <ul>
                <a href="#"><li>Home</li></a>
                <a href="#how"><li>How it works</li></a>
                <a href="#features"><li>Features</li></a>
                <a href="#about"><li>About</li></a>
              </ul>
            </nav>
            <div className={s.busket}>
              {token ? (
                <span onClick={logout}>Log Out</span>
              ) : (
                <button onClick={handleAuth}>Sign In</button>
              )}
              {token ? (
                <></>
              ) : (
                <button onClick={handleRegister}>Sign Up</button>
              )}
              {token ? (
                <Link to='/profile'>
                  {avatar.map((ava) => (
                    // <img src={ava.img} alt="profile" />
                    <Avatar className={s.ava} icon={<UserOutlined />} />
                  ))}
                </Link>
              ) : (
                <></>
              )}
            </div>
            <div className={s.burger}>
              <label className={s.label} htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  className={s.check}
                  onClick={() => setShowNav(!showNav)}
                />
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
