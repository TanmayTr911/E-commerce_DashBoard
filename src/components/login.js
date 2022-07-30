import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  const navi = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("user");
    if (a) {
      navi("/");
    }
  }, []);
  const signin = async () => {
    //console.warn( email, pass);

    let result = await fetch("http://localhost:3500/login", {
      method: "post",
      body: JSON.stringify({ email, pass }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    console.warn(result);

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        navi("/");
      }
    } else {
      alert("Enter Correct USerNAme PAssWord");
      setEmail("");
      setPass("");
    }
  };

  const reg = () => {
    navi("/register");
  };
  return (
    <div className="regform">
      <h2>Login Page</h2>
      <input
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="Enter Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      ></input>
      <button type="button" onClick={signin}>
        Login
      </button>
      <button type="button" onClick={reg} className="regbut">
        Register
      </button>
    </div>
  );
};

export default Login;
