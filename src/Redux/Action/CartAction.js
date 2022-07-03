import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  PLUS_QUANTITY,
  SAVE_SHIPPING_INFO,
} from "../Constants/CartConstant";

export const addToCart =
  (id, { quantity, isUpdate } = {}) =>
  async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        item: {
          product: data.product._id,
          name: data.product.name,
          product_url: data.product.product_url,
          price: data.product.price,

          stock: data.product.stock,
          quantity,
        },
        isUpdate,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const plusQuantity = (qty) => async (dispatch) => {
  dispatch({
    type: PLUS_QUANTITY,
    payload: qty,
  });
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
