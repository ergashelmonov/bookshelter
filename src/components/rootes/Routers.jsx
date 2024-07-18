import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Login from "../login/Login";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routers;
