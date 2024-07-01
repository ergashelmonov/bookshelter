// import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Private = ({ children }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    navigate("/home");
  }else{
    navigate('/login')
  }
  return <>{children}</>;
};

// Private.PropTypes = {
//   children: PropTypes.node,
// };
export default Private;
