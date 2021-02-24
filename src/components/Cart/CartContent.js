import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/useCartContext";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";
import CartItem from "./CartItem";

const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="container container-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div>
        <Link to="/products">continue shopping</Link>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default CartContent;
