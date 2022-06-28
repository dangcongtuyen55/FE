//BANNER LIST
import {
  BANNER_LIST_FAIL,
  BANNER_LIST_REQUEST,
  BANNER_LIST_SUCCESS,
} from "./../Constants/BannerConstant";
export const bannerListReducer = (state = { banners: [] }, action) => {
  switch (action.type) {
    case BANNER_LIST_REQUEST:
      return { loading: true, banners: [] };
    case BANNER_LIST_SUCCESS:
      return { loading: false, banners: action.payload.banners };
    case BANNER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
