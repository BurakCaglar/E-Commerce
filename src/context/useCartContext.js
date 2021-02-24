import React, { useEffect, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

/* GET DATA FROM LOCAL STORAGE */
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

/* INITIAL STATE FOR USEREDUCER START */

const initialState = {
  cart: getLocalStorage(),
  totalProducts: 0,
  totalPrice: 0,
};

/* INITIAL STATE FOR USEREDUCER END */

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  /* ADD TO CART */
  const addToCart = (id, singleProduct, number) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, number, singleProduct },
    });
  };

  /* REMOVE ITEM */
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  /* NUMBER OF ITEMS */
  const toggleNumber = (newID, value) => {
    console.log(newID, value);
    dispatch({ type: "TOGGLE_CART_ITEM_NUMBER", payload: { newID, value } });
  };

  /* useEffect START */
  useEffect(() => {
    dispatch({ type: "CART_TOTALS_COUNT" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  /* useEffect END */

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
