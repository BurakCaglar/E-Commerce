import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/useCartContext";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
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

      <div className="cart-footer">
        <div className="continue-shopping">
          <AiOutlineArrowLeft />
          <Link to="/products">
            <p>continue shopping</p>
          </Link>
        </div>
        <CartTotals />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .cart-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .continue-shopping {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    @media only screen and (max-width: 1000px) {
      margin: auto;
    }
  }
`;
export default CartContent;
