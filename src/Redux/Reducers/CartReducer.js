import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  PLUS_QUANTITY,
  SAVE_SHIPPING_INFO,
} from "../Constants/CartConstant";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const { item, isUpdate } = action.payload;

      const findIdx = state.cartItems.findIndex(
        (i) => i.product === item.product
      );

      if (findIdx > -1) {
        const newData = state.cartItems.map((i) => {
          if (i.product === item.product) {
            if (isUpdate) {
              return { ...i, quantity: i.quantity + item.quantity };
            } else {
              return item;
            }
          }
          return i;
        });
        return {
          ...state,
          cartItems: newData,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
