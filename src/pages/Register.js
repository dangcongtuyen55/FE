import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearErrors, register } from "../Redux/Action/UserAction";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useLocation } from "react-router-dom";
import { useSnackbar } from "notistack";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, user } = userRegister;
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
  const redirect = useLocation.search ? location.search.split("=")[1] : "/";
  // useEffect(() => {
  //   if (user) {
  //     navigate("redirect");
  //   }
  // }, [user, navigate, redirect]);
  const onSubmitRegisterHandle = (e) => {
    e.preventDefault();

    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    } else {
      dispatch(register(name, email, password));
      navigate("/login");
    }
  };
  return (
    // <div className="flex justify-center h-[800px] bg-pink-300">
    //   <div className="flex-col">
    //     <h1 className="flex justify-center font-bold text-4xl mt-8">????ng K??</h1>
    //     <form action="" className="mt-20" onSubmit={onSubmitRegisterHandle}>
    //       <div className="flex flex-col gap-y-4">
    //         {/* {errorMessage &&
    //             (Array.isArray(errorMessage) ? (
    //               errorMessage.map((err) => (
    //                 <div className="error-message">Error:{err}</div>
    //               ))
    //             ) : (
    //               <div className="error-message">Error:{errorMessage}</div>
    //             ))} */}

    //         <label htmlFor="name" className="font-bold">
    //           H??? & t??n
    //         </label>
    //         <input
    //           type="name"
    //           name="name"
    //           className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
    //           placeholder="Nh???p H??? & t??n"
    //           id=""
    //           required
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />

    //         <label htmlFor="name" className="font-bold">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
    //           placeholder="Nh???p email"
    //           id=""
    //           required
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />

    //         <label htmlFor="name" className="font-bold">
    //           M???t kh???u
    //         </label>
    //         <input
    //           type="password"
    //           name="password"
    //           className="w-[500px] bg-slate-100 p-3 rounded-lg  focus:bg-white outline-cyan-500"
    //           placeholder="Nh???p m???t kh???u"
    //           id=""
    //           required
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <button
    //           className="rounded-full border border-slate-300 hover:border-pink-700"
    //           type="submit"
    //         >
    //           ????ng k??
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
          ????ng k??
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmitRegisterHandle}>
            <TextField
              label="H??? v?? t??n"
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "350px" }}
            />
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
                M???t Kh???u
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

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ????ng k??
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
