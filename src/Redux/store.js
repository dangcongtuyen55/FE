import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReviewReducer,
  productDetailReducer,
  productListInSildeReducer,
  productListReducer,
} from "./Reducers/ProductReducer";
import { bannerListReducer } from "./Reducers/BannerReducer";
import {
  profileReducer,
  updatePasswordReducer,
  updateProfileReducer,
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./Reducers/UserReducer";
import { cartReducer } from "./Reducers/CartReducer";
import {
  myOrdersReducer,
  orderCreateReducer,
  orderDetailsReducer,
} from "./Reducers/OrderReducer";
import { categoryListReducer } from "./Reducers/CategoryReducer";
import { favoriteReducer } from "./Reducers/FavoriteReducer";
const persistConfig = {
  key: "reducer",
  storage: storage,
  whitelist: ["userLogin"],
};
const reducer = combineReducers({
  productList: productListReducer,
  allProducts: productListInSildeReducer,
  productDetails: productDetailReducer,
  categoryList: categoryListReducer,
  createReview: productCreateReviewReducer,
  bannerList: bannerListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  profile: profileReducer,
  updatePassword: updatePasswordReducer,
  // updateProfile: updateProfileReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  myOrder: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  favorite: favoriteReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const favoriteItemFromLocalStorage = localStorage.getItem("favoriteItems")
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [];
const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const shippingInfoFromLocalStorage = localStorage.getItem("shippingInfo")
  ? JSON.parse(localStorage.getItem("shippingInfo"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingInfo: shippingInfoFromLocalStorage,
  },
  favorite: {
    favoriteItems: favoriteItemFromLocalStorage,
  },

  userLogin: { user: userFromLocalStorage },
};

const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
const presistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  presistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { persistor, store };
