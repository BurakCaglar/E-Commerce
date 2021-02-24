import React, { useEffect, useContext, useReducer } from "react";
import filteredReducer from "../reducers/filteredReducer";
import { useProductsContext } from "./useProductsContext";

/* INITIAL STATE FOR USEREDUCER START */

const initialState = {
  all: [],
  filtered: [],
  sort: "price-lowest",
  filters: {
    text: "",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    category: "all",
  },
};

/* INITIAL STATE FOR USEREDUCER END */

const FilteredContext = React.createContext();

export const FilteredProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filteredReducer, initialState);

  /* useEffect START */
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({
      type: "FILTER_PRODUCTS",
    });
    dispatch({ type: "SORT" });
  }, [products, state.sort, state.filters]);

  /* useEffect END */

  /* SORT BY PRICE, NAME START */

  const changeSort = (event) => {
    const value = event.target.value;
    dispatch({
      type: "CHANGE_SORT",
      payload: value,
    });
  };

  /* SORT BY PRICE, NAME END */

  /* FILTER (CATEGORY, SEARCH) START */

  const changeFilters = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "category") {
      value = event.target.value;
    }
    if (name === "price") {
      value = Number(value);
    }
    dispatch({
      type: "CHANGE_FILTERS",
      payload: { name, value },
    });
  };

  /* FILTER (CATEGORY, SEARCH) END */

  return (
    <FilteredContext.Provider value={{ ...state, changeSort, changeFilters }}>
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilteredContext = () => {
  return useContext(FilteredContext);
};
