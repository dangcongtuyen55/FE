import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { getUserDetail, updateProfile } from "../Redux/Action/UserAction";
import { UPDATE_PROFILE_RESET } from "../Redux/Constants/UserConstant";

export const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userLogin);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const updateProfileHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    if (error) {
      alert("error");
    }
    if (isUpdated) {
      dispatch(getUserDetail());
      // navigate("/");
      alert("Updated profile");
      // dispatch({ type: UPDATE_PROFILE_RESET });
    }
  }, [dispatch, isUpdated, error, user, navigate]);
  return (
    <div className="flex justify-center h-[800px] bg-pink-300">
      <div className="flex-col">
        <h1 className="flex justify-center font-bold text-4xl mt-8">
          Cập nhật thông tin
        </h1>
        <form action="" className="mt-20" onSubmit={updateProfileHandler}>
          <div className="flex flex-col gap-y-4">
            {/* {errorMessage && (
              <div className="error-message">Error:{errorMessage}</div>
            )} */}
            <label htmlFor="email" className="font-bold">
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
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              className="w-[500px] bg-slate-100 p-3 rounded-lg  focus:bg-white outline-cyan-500"
              placeholder="Nhập mật khẩu"
              id=""
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
