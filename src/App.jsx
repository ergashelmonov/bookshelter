import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Routers from "./components/rootes/Routers";
import "./style/main.css";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.getItem("token")?.length
      ? navigate(pathname == "/login" ? "/" : { pathname })
      : navigate("/login");
  }, []);

  return (
    <>
      <Routers />
    </>
  );
};

export default App;
