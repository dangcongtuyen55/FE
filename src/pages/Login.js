import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { clearErrors, login } from "../Redux/Action/UserAction";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "notistack";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user } = userLogin;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = useState("");
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(login(email, password, role));
  };
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (user) {
      navigate(redirect);
    }
  }, [dispatch, user, navigate, error, redirect, enqueueSnackbar]);

  return (
    // <div className="flex justify-center h-[800px] bg-pink-300">
    //   <div className="flex-col">
    //     <h1 className="flex justify-center font-bold text-4xl mt-8">
    //       Đăng Nhập
    //     </h1>
    //     <form action="" className="mt-20" onSubmit={onSubmitHandle}>
    //       <div className="flex flex-col gap-y-4">
    //         {/* {errorMessage && (
    //           <div className="error-message">Error:{errorMessage}</div>
    //         )} */}
    //         <label htmlFor="name" className="font-bold">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
    //           placeholder="Nhập email"
    //           id=""
    //           required
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <label htmlFor="name" className="font-bold">
    //           Mật khẩu
    //         </label>
    //         <input
    //           type="password"
    //           name="password"
    //           className="w-[500px] bg-slate-100 p-3 rounded-lg  focus:bg-white outline-cyan-500"
    //           placeholder="Nhập mật khẩu"
    //           id=""
    //           required
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <button
    //           className="rounded-full border border-slate-300 hover:border-pink-700"
    //           type="submit"
    //         >
    //           Đăng nhập
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="  flex flex-col justify-center  sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        /> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Đăng nhập
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmitHandle}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "350px" }}
            />
            <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Mật Khẩu
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Bạn chưa có tài khoản ?
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to={"/register"}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Đăng ký ngay
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
