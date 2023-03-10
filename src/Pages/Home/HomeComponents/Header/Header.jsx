import React from "react";
import s from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/registration");
  };
  const handleAuth = () => {
    navigate("/auth");
  };

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/registration");
  };

  return (
    <>
      <div id={s.header_container}>
        <div className={s.main_header}>
          <div className={s.header}>
            <div>
              <h1>invest</h1>
            </div>
            <nav>
              <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Features</li></a>
                <a href="#how"><li>How it works</li></a>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
