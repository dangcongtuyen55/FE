import axios from "axios";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../Constants/CategoryConstant";

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get("/api/v1/category/all");
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: message,
    });
  }
};
