import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, Contact, SampleProducts } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  LoginPage,
} from "./pages";

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
          <Contact />
        </Route>
        <Route exact path="/products/:id">
          <Navbar />
          <SingleProduct />
          <SampleProducts />
          <Contact />
        </Route>
        <Route exact path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <LoginPage />
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
