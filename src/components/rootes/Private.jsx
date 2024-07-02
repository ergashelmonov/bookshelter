import { useNavigate } from "react-router-dom";

const Private = ({ children }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    navigate("/home");
  } else {
    navigate("/login");
  }
  return <>{children}</>;
};

export default Private;
