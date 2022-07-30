import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Prodlist = () => {
  useEffect(() => {
    getProds();
  }, []);

  let [prod, setprod] = useState([]);

  const getProds = async () => {
    let res = await fetch("http://localhost:3500", {
      method: "get",

      headers: {
        "Content-Type": "application/json",
      },
    });
    let x = await res.json();
    setprod(x);
    // console.log(prod);
  };

  let j = 0;

  return (
    <div className="prodlist">
      <h2>Products List</h2>
      <ul>
        <li className="h">S.No</li>
        <li className="h name">Name</li>
        <li className="h">Brand</li>
        <li className="h">Price</li>
        <li className="h">Category</li>
        <li className="h">Operation</li>
      </ul>
      {/* {prod.map(() => {
        <li>{console.warn(prod[0].name)}</li>;
      })} */}
      <ul>
        <li>1</li>
        <li className="name">{prod[j].name}</li>
        <li>{prod[j].brand}</li>
        <li>{prod[j].price}</li>
        <li>{prod[j].category}</li>
        <li className="upd">
          <Link to={"/update/" + prod[0]._id + "/" + prod[0].name}>update</Link>
        </li>{" "}
      </ul>
      <ul>
        <li>2</li>
        <li className="name">{prod[1].name}</li>
        <li>{prod[1].brand}</li>
        <li>{prod[1].price}</li>
        <li>{prod[1].category}</li>
        <li className="upd">
          <Link to={"/update/" + prod[1]._id + "/" + prod[1].name}>update</Link>
        </li>{" "}
      </ul>
      <ul>
        <li>3</li>
        <li className="name">{prod[2].name}</li>
        <li>{prod[2].brand}</li>
        <li>{prod[2].price}</li>
        <li>{prod[2].category}</li>
        <li className="upd">
          <Link to={"/update/" + prod[2]._id + "/" + prod[2].name}>update</Link>
        </li>{" "}
      </ul>
      {prod.length > 3 && (
        <ul>
          <li>4</li>
          <li className="name">{prod[3].name}</li>
          <li>{prod[3].brand}</li>
          <li>{prod[3].price}</li>
          <li>{prod[3].category}</li>
          <li className="upd">
            <Link to={"/update/" + prod[3]._id + "/" + prod[3].name}>
              update
            </Link>
          </li>{" "}
        </ul>
      )}

      {prod.length > 4 && (
        <ul>
          <li>5</li>
          <li className="name">{prod[4].name}</li>
          <li>{prod[4].brand}</li>
          <li>{prod[4].price}</li>
          <li>{prod[4].category}</li>
          <li className="upd">
            <Link to={"/update/" + prod[4]._id + "/" + prod[4].name}>
              update
            </Link>
          </li>{" "}
        </ul>
      )}
    </div>
  );
};

export default Prodlist;
