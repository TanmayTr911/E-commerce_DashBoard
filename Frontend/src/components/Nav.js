import React from "react";
import { Link, useNavigate } from "react-router-dom";
const logo = require("../components/src/userimg.png");
const logo2 = require("../components/src/log2.png");

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    navigate("/log");
    localStorage.clear();
  };
  return (
    <div>
      <ul className="nav">
        <img src={logo2} alt="hello" className="logimg2" />
        {auth ? (
          <>
            <img src={logo} alt="hello" className="logimg" />
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>

            <li>
              <Link to="/prof">User Profile</Link>
            </li>
            <li>
              <Link to="/log" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/log">Login</Link>
            </li>
            {/* <li>
              <Link to="/register">Signup</Link>
            </li> */}
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
