import { useState } from "react";

const logo2 = require("../components/src/userimg.png");
const Prof = () => {
  let [pass, setpass] = useState("");

  const update = async () => {
    console.log(pass);
    if (pass.length < 8) {
      alert("Enter Correct PAssword");
      return false;
    }
    let id = JSON.parse(localStorage.getItem("user"))._id;
    let res = await fetch("http://localhost:3500/prof", {
      method: "put",

      body: JSON.stringify({ pass, id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    if (res) {
      setpass("");
    }
    console.warn(res);
  };
  return (
    <body className="back">
      <div className="user">
        <h2 className="x">User Profile</h2>
        <img src={logo2} className="useri"></img>
        <h3>Name:&nbsp;{JSON.parse(localStorage.getItem("user")).name}</h3>
        <h3>Email: &nbsp;{JSON.parse(localStorage.getItem("user")).email}</h3>
        <h3>Id: &nbsp;{JSON.parse(localStorage.getItem("user"))._id}</h3>
        <input
          placeholder="Enter New Pass"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        ></input>
        <button onClick={update}>Change Password</button>
      </div>
    </body>
  );
};
// let userId = JSON.parse(localStorage.getItem("user"))._id;

export default Prof;
