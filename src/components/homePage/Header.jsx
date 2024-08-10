import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/svg/logo2.svg";
import Sun from "../../assets/svg/sun.svg";

const Header = ({ search }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <header className="flex w-full justify-between px-10 py-[14px] gap-[56px] sticky top-0 z-40 bg-white min-w-[540px] max-[650px]:gap-5">
      <Logo />
      <form
        onSubmit={handleSubmit((data) => {
          search(data.search);
        })}
        className="bg-[#f8fafd] bg-[url(../assets/svg/search.svg)] bg-no-repeat bg-[top_20px_left_16px] shadow-[0_0_3px_0_rgba(0, 0, 0, 0.1)] w-[670px] rounded-[30px] py-[17px] pl-[48px] flex-grow mr-[49px]]"
      >
        <input
          onChange={handleSubmit((data) => {
            search(data.search);
          })}
          type="search"
          placeholder="Search books"
          className="outline-none bg-inherit"
          {...register("search")}
        />
      </form>
      <div className="flex items-center justify-center gap-[15px]">

        <button
          className="bg-[#0d75ff] rounded w-[99px] h-10 font-normal text-white"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};
Header.propTypes = {
  search: PropTypes.func,
};
export default Header;
