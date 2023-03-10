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
      <div id="container">
        <div className={s.header}>
          <div>
            <h1>invest</h1>
          </div>
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/About">
                <li>About</li>
              </Link>
              <Link to="/Features">
                <li>Features</li>
              </Link>
              <Link to="/How">
                <li>How it works</li>
              </Link>
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
    </>
  );
};

export default Header;
