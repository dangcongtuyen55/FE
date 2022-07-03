import axios from "axios";
import { CART_CLEAR_ITEMS } from "../Constants/CartConstant";
import {
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../Constants/OrderConstant";

// export const createOrder = (order) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: ORDER_CREATE_REQUEST });
//     const {
//       userLogin: { user },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${user.token}`,
//       },
//     };
//     const { data } = await axios.post("/api/v1/order/new", order, config);

//     dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
//     // dispatch({ type: CART_CLEAR_ITEMS, payload: data });
//     // localStorage.removeItem("cartItems");
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({
//       type: ORDER_CREATE_FAIL,
//       payload: message,
//     });
//   }
// };

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// export const myOrders = () => async (dispatch) => {
//   try {
//     dispatch({ type: MY_ORDERS_REQUEST });

//     const { data } = await axios.get("/api/v1/orders/me");

//     dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
//   } catch (error) {
//     dispatch({
//       type: MY_ORDERS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

export const myOrders = (orders) => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get("/api/v1/orders/me", config);

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/order/${id}`, config);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    });
  }
};
