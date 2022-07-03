import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails } from "../../Redux/Action/OrderAction";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./OrderDetail.scss";
// import Moment from "react-moment";
import moment from "moment";
import "moment/locale/vi";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";

export const OrderDetail = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const date = order && order.createdAt;

  const { id } = useParams();
  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Danh sách sản phẩm
            </p>
            {order &&
              order.orderItems.map((item) => (
                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-[80px] hidden md:block"
                      src={item.product_url}
                      alt="dress"
                    />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xs  font-semibold leading-6 text-gray-800">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        {`₫ ${item.price}`}
                      </p>
                      <p className="text-base xl:text-lg leading-6 text-gray-800">
                        SL: {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-start item-start space-y-2 flex-col bg-white w-full ">
            <span className="text-xs  font-semibold leading-7 lg:leading-9  text-gray-800 ml-5">
              Đơn hàng #{order && order._id}
            </span>
            <p className="text-xs font-medium leading-6 text-gray-600 ml-5">
              Đặt ngày {moment(date).format("lll")}
            </p>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Tổng tiền ({order && order.orderItems.length} sản phẩm)
                  </p>
                  <p className="text-base leading-4 text-gray-600">
                    {`${order && order.Subtotal} ₫`}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Phí vận chuyển
                  </p>
                  <p className="text-base leading-4 text-gray-600">
                    {`${order && order.shippingFee} ₫`}
                  </p>
                </div>
                {/* <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">$8.00</p>
                </div> */}
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Tổng cộng
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  {`${order && order.Amount} ₫`}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Thông tin của {user.userName}
              </h3>
              <div className="flex justify-between  w-full">
                <div className="flex justify-center items-center space-x-4 ">
                  <div className="flex flex-col justify-start">
                    <span className="font-normal mb-1">
                      <HomeIcon sx={{ fontSize: 30, color: "red" }} />{" "}
                      {order && order.shippingInfo.address}
                    </span>
                    <br />
                    <span className="font-normal ">
                      <PhoneIcon sx={{ fontSize: 30, color: "red" }} />{" "}
                      {order && order.shippingInfo.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
