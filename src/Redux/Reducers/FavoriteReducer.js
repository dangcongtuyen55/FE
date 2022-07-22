import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "../Constants/FavoriteConstant";

export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      // const item = action.payload;

      // const isItemExist = state.favoriteItems.find(
      //   (i) => i.product === item.product
      // );

      // if (isItemExist) {
      //   return {
      //     ...state,
      //     favoriteItems: state.favoriteItems.map((i) =>
      //       i.product === isItemExist.product ? item : i
      //     ),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     favoriteItems: [...state.favoriteItems, item],
      //   };
      // }
      const item = action.payload;
      const isItemExist = state.favoriteItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item],
        };
      }

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (i) => i.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
