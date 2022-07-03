import {
  ExclamationCircleOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { StatusShipping } from "./StatusShipping";
import { createOrder } from "../../Redux/Action/OrderAction";
import { ORDER_CREATE_RESET } from "../../Redux/Constants/OrderConstant";

export const Order = () => {
  const dispatch = useDispatch();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  const navigate = useNavigate();
  const Subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const [promotionCode, setPromotionCode] = useState("");
  const taxCode5 = Subtotal * 0.5;
  const taxCode10 = Subtotal * 0.1;

  const shippingFee = Subtotal > 25000 ? 0 : 32000;

  const Amount = Subtotal + shippingFee;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  useEffect(() => {
    if (success) {
      navigate("/success");
      // dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [navigate, dispatch, success, order]);

  const submitPayment = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingInfo: shippingInfo,
        Subtotal,
        shippingFee,
        Amount,
      })
    );
  };

  return (
    <div>
      <StatusShipping activeStep={1} />

      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto bg-white">
        {/* <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #13432</h1>
                <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
            </div> */}
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p> */}

              {cartItems.map((item) => (
                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-[80px] h-[80px] hidden md:block"
                      src={item.product_url}
                      alt="product_url"
                    />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                        {item.name}
                      </h3>
                      {/* <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Size: </span> Small
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p>
                                    </div> */}
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        {`₫${item.price}`}
                      </p>

                      <p className="text-base xl:text-lg leading-6 text-gray-800">
                        {item.quantity}
                      </p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        {item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Thành tiền
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      {Subtotal}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Mã giảm giá
                    </p>
                    <input
                      value={promotionCode}
                      onChange={(e) => setPromotionCode(e.target.value)}
                      className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-[200px] h-[50px]"
                      type="text"
                      placeholder="Nhập mã giảm giá"
                    />
                    {/* <button onClick={() =>CheckPromotionCode()}>
                                            check
                                        </button> */}
                    <p className="text-base leading-4 text-gray-600">
                      {(() => {
                        switch (promotionCode) {
                          case "5%SALE":
                            return taxCode5;
                          case "10%SALE":
                            return taxCode10;
                          // case "":  return 0;
                          default:
                            return 0;
                        }
                      })()}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Phí ship
                      <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-red-600">
                        (Nếu thành tiền từ 250.000₫ thì miễn phí ship)
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      {shippingFee}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Tổng tiền thanh toán
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    {Amount}
                  </p>
                </div>
              </div>
              {/* <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800 align-center"><ExclamationCircleOutlined />Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div class="w-8 h-8">
                                            <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 font-semibold text-gray-800">
                                                DPD Delivery
                                                <br />
                                                <span className="font-normal">Delivery with 24 Hours</span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Thông tin của {user.userName}
            </h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  {/* <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" /> */}
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      {user.userName}
                    </p>
                    {/* <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p> */}
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4  w-full">
                  <MailOutlined />
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {user.email}
                  </p>
                </div>
                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <PhoneOutlined />
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {shippingInfo.phone}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Địa chỉ giao hàng:
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {shippingInfo.address}
                    </p>
                    {/* <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {order.paidAt}
                    </p> */}
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button
                    onClick={submitPayment}
                    className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800"
                  >
                    Thanh Toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
