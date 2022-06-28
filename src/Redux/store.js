import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./Reducers/ProductReducer";
import { bannerListReducer } from "./Reducers/BannerReducer";
import {
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./Reducers/UserReducer";
import { cartReducer } from "./Reducers/CartReducer";
import { orderCreateReducer } from "./Reducers/OrderReducer";
const persistConfig = {
  key: "reducer",
  storage: storage,
  whitelist: ["userLogin"],
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  bannerList: bannerListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  cart: cartReducer,
  orderCreate : orderCreateReducer
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
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
