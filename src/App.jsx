import { Navigate } from "react-router-dom";
import Routers from "./components/rootes/Routers";
import "./style/main.css";

const App = () => {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Navigate to="/home" />
      ) : (
        <Navigate to="/login" />
      )}

      <Routers />
    </>
  );
};

export default App;
