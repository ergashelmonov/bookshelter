import { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const userData = {
    email: email,
    password: password,
  };

  const onSubmit = (data) => {
    setEmail(data.email);
    setPassword(data.password);
  };
  const submit = async () => {
    const req = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(userData),
    });
    const data = await req.json();
    if (req.ok) {
      localStorage.setItem("token", data.token);
      navigate("/");
      setErr("");
    } else {
      setErr(data.error);
    }
  };
  return (
    <div className="w-full h-screen bg-[url(../assets/login.jpg)] bg-no-repeat bg-cover flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[43px]"
      >
        <Logo />
        <div className="flex flex-col gap-5">
          <span className="text-red-600 text-center">{err}</span>
          <input
            type="email"
            className="bg-transparent bg-[url(../assets/svg/user.svg)] bg-no-repeat bg-[top_13px_left_12px] rounded border-[#fff] border-[1px] border-solid w-[300px] h-[45px] p-[13px_51px] text-white placeholder:text-white placeholder:uppercase font-light text-sm leading-[143%] outline-none"
            placeholder="Username"
            value="eve.holt@reqres.in"
            {...register("email")}
          />
          <input
            type="password"
            className="bg-transparent bg-[url(../assets/svg/password.svg)] bg-no-repeat bg-[top_13px_left_12px]  rounded border-[#fff] border-[1px] border-solid w-[300px] h-[45px] p-[13px_51px] text-white   placeholder:text-white placeholder:uppercase font-light text-sm leading-[143%] outline-none"
            placeholder="password"
            value="cityicka"
            {...register("password")}
          />
        </div>
        <div className="flex flex-col gap-[11px] items-end">
          <button
            onClick={submit}
            className="bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.3)] rounded  w-[300px] h-[45px] text-[#0d75ff] uppercase font-semibold text-base leading-[125%]"
          >
            Login
          </button>
          <a href="#!" className="font-medium text-base text-white">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
