export default function reducer(state, action) {
  switch (action.type) {
    case "CURRENT_USER":
      return { ...state, user: action.payload };
    case "GET_ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id
            ? { ...product, ...action.payload }
            : product
        ),
      };
    case "GET_ALL_BANNERS":
      return { ...state, banners: action.payload };
    case "CREATE_ONE_PRODUCTS":
      return { ...state, products: [...state.products, action.payload] };
    case "UPDATE_ONE_PRODUCTS":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id
            ? { ...product, ...action.payload }
            : product
        ),
      };
    case "DELETE_ONE_PRODUCTS":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
}
