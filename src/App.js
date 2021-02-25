import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, Products, SingleProduct, Cart, Checkout, Error } from "./pages";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Navbar />
          <Cart />
        </Route>
        <Route exact path="/products">
          <Navbar />
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <Navbar />
          <SingleProduct />
        </Route>
        <Route exact path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
        <Route path="*">
          <Navbar />
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
