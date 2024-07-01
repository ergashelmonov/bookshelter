import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Login from "../login/Login";
import Private from "./Private";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <Private>
              <HomePage />
            </Private>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Private>
              <Login />
            </Private>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Routers;
