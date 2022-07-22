import React from "react";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const Success = () => {
  const { order } = useSelector((state) => state.orderCreate);

  console.log("TCL: Success -> order", order);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex justify-center max-w-3xl mx-auto mt-6 bg-white rounded-lg text-center">
        <figure className=" p-8 dark:bg-slate-800">
          <div className="w-24 h-24 mx-auto">
            <CheckCircleIcon style={{ fontSize: "100px", color: "green" }} />
          </div>
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Mã đơn hàng của bạn là: {order && order.orders._id}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="">
                Bạn có thể xem chi tiết trong
                <span className="text-sky-500">
                  <Link to="/orders"> đơn hàng của tôi</Link>
                </span>
              </div>
              <div className="">
                <Button variant="outlined" size="large">
                  <Link to="/">
                    <AddShoppingCartIcon /> Tiếp tục mua sắm
                  </Link>
                </Button>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};
