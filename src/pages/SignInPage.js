import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./../components/AppContext/AppContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../Redux/Action/UserAction";

const SignInPage = () => {
  // const { dispatch } = useContext(AppContext);
  // const [userInput, setUserInput] = useState({ email: "", password: "" });
  // const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  // const onChangeHandle = (e) => {
  //   setUserInput({ ...userInput, [e.target.name]: e.target.value });
  // };
  // const onSubmitHandle = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const options = {
  //       method: "POST",
  //       url: "api/v1/auth/login",
  //       data: userInput,
  //     };
  //     const response = await axios(options);
  //     const { token, userName, role } = response.data.data;
  //     localStorage.setItem("token", token);
  //     dispatch({ type: "CURRENT_USER", payload: { userName, role } });

  //     if (role === "admin") {
  //       navigate("*");
  //     } else {
  //       navigate("/");
  //     }
  //   } catch (error) {}
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const redirect = useLocation.search ? location.search.split("=")[1] : "/"

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user } = userLogin;
  useEffect(() => {
    // if (user) {
    //   navigate("*");
    // } else {
    //   navigate("/");
    // }
  });
  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };
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

export default SignInPage;
