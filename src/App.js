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
import ScrollIntoView from "./utils/ScrollIntoView";

const App = () => {
  return (
    <Router>
      <ScrollIntoView>
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
      </ScrollIntoView>
    </Router>
  );
};

export default App;
