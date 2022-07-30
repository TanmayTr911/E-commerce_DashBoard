import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [imgpath, setFile] = useState("");
  const navi = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("user");
    if (a) {
      navi("/");
    }
  });
  const signin = async () => {
    console.warn(name, email, pass, imgpath);

    //hcsbcj
    let r = await fetch("http://localhost:3500/login", {
      method: "post",
      body: JSON.stringify({ email, pass }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    r = await r.json();

    console.warn(r);

    if (r.name) {
      alert("User Alreday Exist");
    } else {
      let result = await fetch("http://localhost:3500/reg", {
        method: "post",
        body: JSON.stringify({ name, email, pass, imgpath }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        navi("/");
      }
    }
    //hjchjdwhc
  };
  return (
    <div className="regform">
      <h2>Registeration Form</h2>
      <input
        placeholder="Enter Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
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

      <input
        type="file"
        value={imgpath}
        onChange={(e) => setFile(e.target.value)}
      />

      <button type="button" onClick={signin}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
