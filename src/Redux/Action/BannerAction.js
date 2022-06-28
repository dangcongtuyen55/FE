import axios from "axios";
import {
  BANNER_LIST_FAIL,
  BANNER_LIST_REQUEST,
  BANNER_LIST_SUCCESS,
} from "./../Constants/BannerConstant";

export const listBanner = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER_LIST_REQUEST });
    const { data } = await axios.get("/api/v1/banners");
    dispatch({ type: BANNER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BANNER_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
