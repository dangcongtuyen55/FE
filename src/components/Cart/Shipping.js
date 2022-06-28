import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../Redux/Action/CartAction";
import { useNavigate } from "react-router";
import { StatusShipping } from "./StatusShipping";

export const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart);
  const [name, setName] = useState(shippingInfo.name);
  const [email, setEmail] = useState(shippingInfo.email);
  const [address, setAddress] = useState(shippingInfo.address);
  const [phone, setPhone] = useState(shippingInfo.phone);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shippingSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingInfo({ address, phone }));
    navigate("/order");
  };
  return (
    <Fragment>
      <StatusShipping activeStep={0} />
      <div className="flex justify-center h-[800px] bg-white">
        <div className="flex-col">
          {/* <h1 className="flex justify-center font-bold text-4xl mt-8">
            Đăng Nhập
          </h1> */}
          <form action="" className="mt-20" onSubmit={shippingSubmit}>
            <div className="flex flex-col gap-y-4">
              {/* {errorMessage && (
              <div className="error-message">Error:{errorMessage}</div>
            )} */}
              {/* <label htmlFor="name" className="font-bold">
                Họ và Tên
              </label>
              <input
                type="text"
                name="name"
                className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
                placeholder="Nhập họ và tên"
                id=""
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> */}
              {/* <label htmlFor="email" className="font-bold">
                Họ và Tên
              </label>
              <input
                type="email"
                name="email"
                className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
                placeholder="Nhập Email"
                id=""
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> */}
              <label htmlFor="address" className="font-bold">
                Địa chỉ
              </label>
              <input
                type="text"
                name="address"
                className="w-[500px] bg-slate-100 p-3 rounded-lg focus:bg-white outline-cyan-500"
                placeholder="Nhập Địa chỉ"
                id=""
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="name" className="font-bold">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                className="w-[500px] bg-slate-100 p-3 rounded-lg  focus:bg-white outline-cyan-500"
                placeholder="Nhập số điện thoại"
                id=""
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
    </Fragment>
  );
};
