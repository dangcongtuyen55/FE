import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactLocation } from "react-location";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addToCart,
  removeItemsFromCart,
} from "./../../Redux/Action/CartAction";
import "./cart.scss";
import CartItems from "./CartItems";
import CartQuantity from "./CartQuantity";
import TotalCart from "./TotalCart";
import {
  MinusOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addToCart(id, { quantity: newQty }));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addToCart(id, { quantity: newQty }));
  };
  const deleteItemFromCart = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkOutHandle = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">
              {cartItems.length} sản phẩm
            </h2>
          </div>

          {cartItems.length === 0 ? (
            <div className="grid grid-rows-2  gap-4 justify-center ">
              <img
                className="w-40 h-40"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/287671197_551713576415498_1035634150097210047_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BWGeJDDtd2IAX-box6C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIx9qaffd6EnlMT6_24BKHoM0a68MK0JDmtlwA82m3huw&oe=62D7129A"
                alt=""
              />
              <h1 className="ml-8">Giỏ hàng trống</h1>&#160;
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <CartItems
                    item={item}
                    deleteItemFromCart={deleteItemFromCart}
                  />
                  <div className="flex justify-center w-1/5">
                    <div className="group-input flex">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.product, item.quantity)
                        }
                        className="btn-minus border border-gray bg-white hover:bg-slate-100 rounded-l-lg  text-center"
                      >
                        <MinusOutlined
                          style={{
                            width: "20px",
                            height: "20px",
                            marginBottom: "5px",
                          }}
                        />
                      </button>
                      <div className="border border-gray">
                        <input
                          className="input w-[40px] h-[25px] text-center focus:outline-none mt-1 ml-1"
                          readOnly
                          type="number"
                          value={item.quantity}
                        />
                      </div>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock
                          )
                        }
                        className="btn-plus border border-gray bg-white hover:bg-slate-100 rounded-r-lg  text-center"
                      >
                        <PlusOutlined
                          style={{
                            width: "20px",
                            height: "20px",
                            marginBottom: "5px",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="text-center w-1/5 font-semibold text-sm">
                    {item.price}
                  </div>
                  <div className="text-center w-1/5 font-semibold text-sm">
                    {item.quantity * item.price}
                  </div>
                </div>
              ))}
            </div>
          )}
          <Link
            to={"/"}
            className="flex font-semibold text-black text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-black w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Mua hàng ngay
          </Link>
          <div className="border-t mt-8">
            {cartItems.length === 0 ? (
              ""
            ) : (
              <span>Tổng {cartItems.length} sản phẩm</span>
            )}
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng tiền thanh toán</span>
              <span>
                {`₫${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}

                {/* {
                  (cartItems.current_price === 0 || cartItems.current_price ==="")?(subTotalNoPromotion):(subTotalHavePromotion)
                } */}
              </span>
            </div>
            <button
              onClick={checkOutHandle}
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
