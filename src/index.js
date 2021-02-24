import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import { ProductsProvider } from "./context/useProductsContext";
import { FilteredProvider } from "./context/useFilteredContext";
import { CartProvider } from "./context/useCartContext";

ReactDOM.render(
  <ProductsProvider>
    <FilteredProvider>
      <CartProvider>
        <GlobalStyle />
        <App />
      </CartProvider>
    </FilteredProvider>
  </ProductsProvider>,

  document.getElementById("root")
);
