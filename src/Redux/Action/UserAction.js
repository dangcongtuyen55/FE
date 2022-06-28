import axios from "axios";
import {
  USER_CURRENT,
  USER_CURRENT_FAIL,
  USER_CURRENT_REQUEST,
  USER_CURRENT_SUCCESS,
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/UserConstant";

export const login = (email, password, role) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/v1/auth/login`,
      { email, password, role },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const userCurrent = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("user");
    const options = {
      method: "GET",
      url: "/api/v1/auth/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios(options);
    if (response.data.user) {
      const { userName } = response.data.user;
      dispatch({ type: USER_CURRENT, payload: { userName } });
    }
    console.log(response.data.userName);
  } catch (error) {
    // console.log(error);
  }
};

// LOGOUT

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/";
};

//REGISTER

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/v1/auth/register`,
      { name, email, password },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/v1/auth/me/`);
    dispatch({ type: USER_DETAIL_SUCCESS, payload: data.user });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_DETAIL_FAIL,
      payload: message,
    });
  }
};
