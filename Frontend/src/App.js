import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foot from "./components/footer";
import Signup from "./components/signup";
import Login from "./components/login";
import PrivComp from "./components/privatecomp";
import AddProd from "./components/addProduct";
import Prodlist from "./components/Prodlist";
import UpProd from "./components/updateprod";
import Prof from "./components/profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p className="head">E-commerce DashBoard</p>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivComp></PrivComp>}>
            <Route path="/" element={<Prodlist />} />
            <Route path="/add" element={<AddProd></AddProd>} />
            <Route path="/update/:id/:name" element={<UpProd />} />
            <Route path="/prof" element={<Prof></Prof>} />
            {/* <Route path="/out" element={<h1>Logout User</h1>} /> */}
          </Route>
          <Route path="/register" element={<Signup></Signup>} />
          <Route path="/log" element={<Login></Login>} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
