//BANNER LIST
import { CLEAR_ERRORS } from "../Constants/OrderConstant";
import {
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_RESET,
  USER_DETAIL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/UserConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { ...state, loading: true };
    case USER_DETAIL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAIL_RESET:
      return { user: {} };
    default:
      return state;
  }
};

// export const profileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_PROFILE_REQUEST:
//     case UPDATE_PASSWORD_REQUEST:
//       // case UPDATE_USER_REQUEST:
//       // case DELETE_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case UPDATE_PROFILE_SUCCESS:
//       // case UPDATE_PASSWORD_SUCCESS:
//       // case UPDATE_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isUpdated: action.payload,
//       };

//     // case DELETE_USER_SUCCESS:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     isDeleted: action.payload.success,
//     //     message: action.payload.message,
//     //   };

//     case UPDATE_PROFILE_FAIL:
//     case UPDATE_PASSWORD_FAIL:
//       // case UPDATE_USER_FAIL:
//       // case DELETE_USER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     case UPDATE_PROFILE_RESET:
//     case UPDATE_PASSWORD_RESET:
//       // case UPDATE_USER_RESET:
//       return {
//         ...state,
//         isUpdated: false,
//       };

//     // case DELETE_USER_RESET:
//     //   return {
//     //     ...state,
//     //     isDeleted: false,
//     //   };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

// export const updateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_PROFILE_REQUEST:
//       return { loading: true };
//     case UPDATE_PROFILE_SUCCESS:
//       return { loading: false, userInfo: action.payload, success: true };
//     case UPDATE_PROFILE_FAIL:
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

export const profileReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };

    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_PROFILE_RESET:
    case UPDATE_PASSWORD_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
