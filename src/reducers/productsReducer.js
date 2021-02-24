const productsReducer = (state, action) => {
  switch (action.type) {
    case "SIDEBAR_OPEN":
      return { ...state, isSidebarOpen: true };
    case "SIDEBAR_CLOSE":
      return { ...state, isSidebarOpen: false };
    case "FETCH_PRODUCTS_START":
      return { ...state, productsLoading: true };
    case "FETCH_PRODUCTS_SUCCES":
      const getSampleProducts = action.payload.slice(0, 4).map((product) => {
        return product;
      });
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
        sampleProducts: getSampleProducts,
      };
    case "FETCH_PRODUCTS_ERROR":
      return { ...state, productsLoading: false, productsError: true };
    case "FETCH_SINGLE_PRODUCT_START":
      return {
        ...state,
        singleProductLoading: true,
        singleProductError: false,
      };
    case "FETCH_SINGLE_PRODUCT_SUCCES":
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    case "FETCH_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };
    default:
      return state;
  }
};

export default productsReducer;
