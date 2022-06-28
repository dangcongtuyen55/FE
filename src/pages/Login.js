import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { login } from "../Redux/Action/UserAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const redirect = useLocation.search ? location.search.split("=")[1] : "/"

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user } = userLogin;

  const onSubmitHandle = (e) => {
    e.preventDefault();

    dispatch(login(email, password, role));
  };
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [dispatch, navigate, user]);

  return (
    <div className="flex justify-center h-[800px] bg-pink-300">
      <div className="flex-col">
        <h1 className="flex justify-center font-bold text-4xl mt-8">
          Đăng Nhập
        </h1>
        <form action="" className="mt-20" onSubmit={onSubmitHandle}>
          <div className="flex flex-col gap-y-4">
            {/* {errorMessage && (
              <div className="error-message">Error:{errorMessage}</div>
            )} */}
            <label htmlFor="name" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
              placeholder="Nhập email"
              id=""
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name" className="font-bold">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              className="w-[500px] bg-slate-100 p-3 rounded-lg  focus:bg-white outline-cyan-500"
              placeholder="Nhập mật khẩu"
              id=""
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="rounded-full border border-slate-300 hover:border-pink-700"
              type="submit"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
