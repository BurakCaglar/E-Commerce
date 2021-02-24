import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productsReducer from "../reducers/productsReducer";

/* INITIAL STATE FOR USEREDUCER START */

const initialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  sampleProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

/* INITIAL STATE FOR USEREDUCER END */

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  /* SIDEBAR START */

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  /* SIDEBAR END */

  /* FETCH START */

  const fetchStoreProducts = async () => {
    dispatch({
      type: "FETCH_PRODUCTS_START",
    });

    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const products = await res.data;
      dispatch({ type: "FETCH_PRODUCTS_SUCCES", payload: products });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_ERROR",
      });
    }
  };

  const fetchStoreSingleProduct = async (id) => {
    dispatch({
      type: "FETCH_SINGLE_PRODUCT_START",
    });
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const product = await res.data;

      dispatch({
        type: "FETCH_SINGLE_PRODUCT_SUCCES",
        payload: product,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_SINGLE_PRODUCT_ERROR",
      });
    }
  };

  /* FETCH END */

  /* useEffect START */

  useEffect(() => {
    fetchStoreProducts();
  }, []);

  /* useEffect END */

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchStoreSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
