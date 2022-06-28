import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import { createOrder } from '../../Redux/Action/OrderAction';


export const Payment = () => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const dispatch = useDispatch();
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);
    const navigate = useNavigate();

    const order = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice,
      };

      const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(createOrder(order))
        navigate("/success")
    
    }
  return (
    <button onClick={submitHandler}>click</button>
  )
}
