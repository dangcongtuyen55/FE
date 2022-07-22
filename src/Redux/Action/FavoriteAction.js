import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "../Constants/FavoriteConstant";
import axios from "axios";

export const addFavoriteItemsToCart =
  (id, { quantity } = {}) =>
  async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: ADD_TO_FAVOURITE,

      payload: {
        product: data.product._id,
        name: data.product.name,
        product_url: data.product.product_url,
        price: data.product.price,
        numOfReviews: data.product.numOfReviews,
        rating: data.product.rating,
        stock: data.product.stock,
        quantity,
      },
    });

    // localStorage.setItem(
    //   "favoriteItems",
    //   JSON.stringify(getState().favorite.favoriteItems)
    // );
    localStorage.setItem(
      "favoriteItems",
      JSON.stringify(getState().favorite.favoriteItems)
    );
  };

// Delete from favourites
export const deleteFavoriteItemsToCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAVOURITE,
    payload: id,
  });

  localStorage.setItem(
    "favoriteItems",
    JSON.stringify(getState().favorite.favoriteItems)
  );
};
