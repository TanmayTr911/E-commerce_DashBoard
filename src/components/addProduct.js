import { useState } from "react";

let AddProd = () => {
  let [name, setname] = useState("");
  let [price, setprice] = useState("");
  let [category, setcategory] = useState("");
  let [brand, setbrand] = useState("");
  let [err, seterr] = useState(false);

  const add = async () => {
    if (!name || !price || !brand || !category) {
      seterr(true);
      return false;
    }

    let userId = JSON.parse(localStorage.getItem("user"))._id;
    let res = await fetch("http://localhost:3500/add-prod", {
      method: "post",
      body: JSON.stringify({ name, price, category, brand, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setbrand("");
    setname("");
    setprice("");
    setcategory("");

    res = await res.json();

    if (!res) {
      alert("enter correct data");
    }

    console.warn(res);
  };
  return (
    <div className="regform">
      <h1 className="he">Add Product</h1>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      ></input>
      {err && !name && <span className="err">Enter Valid Name</span>}
      <input
        placeholder="Enter Price"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      ></input>
      {(err && !price && <span className="err">Enter Valid Price</span>) ||
        (isNaN(price) && <span className="err">Enter Valid Price</span>)}
      <input
        placeholder="Enter Category"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      ></input>
      {err && !category && <span className="err">Enter Valid Category</span>}
      <input
        placeholder="Enter Brand"
        value={brand}
        onChange={(e) => {
          setbrand(e.target.value);
        }}
      ></input>
      {err && !brand && <span className="err">Enter Valid Brand</span>}
      <button type="button" onClick={add}>
        Add Product
      </button>
    </div>
  );
};

export default AddProd;
