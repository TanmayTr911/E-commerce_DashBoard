import { Navigate, Outlet } from "react-router-dom";

const PrivComp = () => {
  const a = localStorage.getItem("user");
  return a ? <Outlet></Outlet> : <Navigate to="/log"></Navigate>;
};

export default PrivComp;
