import axios from "axios";
import {
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  USER_CURRENT,
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

// export const userCurrent = () => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("user");
//     const options = {
//       method: "GET",
//       url: "/api/v1/auth/",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await axios(options);
//     if (response.data.user) {
//       const { userName } = response.data.user;
//       dispatch({ type: USER_CURRENT, payload: { userName } });
//     }
//     console.log(response.data.userName);
//   } catch (error) {
//     // console.log(error);
//   }
// };

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
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/auth/me/${id}`, config);
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

export const loadUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST });
    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/auth/me`, config);

    dispatch({ type: USER_DETAIL_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: USER_DETAIL_FAIL, payload: error.response.data.message });
  }
};

// export const updateProfile = (userData) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: UPDATE_PROFILE_REQUEST });

//     const {
//       userLogin: { user },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     const { data } = await axios.put(
//       `/api/v1/auth/me/update/profile`,
//       userData,
//       config
//     );

//     localStorage.setItem("user", JSON.stringify(data));

//     dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
//     // localStorage.setItem("userLogin", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PROFILE_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
export const updateProfile = (name, email) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { user },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/v1/auth/me/update/profile`,
      { name, email },
      config
    );
    // console.log("TCL: updateProfile -> userData", userData);
    console.log("TCL: updateProfile -> data", data);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
    console.log("TCL: updateProfile -> data.userData", data.userData);
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });
      const {
        userLogin: { user },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/v1/auth/password/update`,
        oldPassword,
        newPassword,
        confirmPassword,
        config
      );
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: message,
      });
    }
  };

// export const updatePassword = (passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PASSWORD_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/password/update`,
//       passwords,
//       config
//     );

//     dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
