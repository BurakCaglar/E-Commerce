import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/useCartContext";
import { Link } from "react-router-dom";
import { ButtonV2 } from "../Buttons/Button";

const CartTotals = () => {
  const { totalPrice } = useCartContext();
  return (
    <Wrapper>
      <div className="cart-totals">
        <input type="text" placeholder="Promo Code" />
        <h5>
          <span style={{ marginRight: "3rem" }}>Total cost:</span> $
          {totalPrice.toFixed(2)}
        </h5>
        <Link to="/checkout">
          <ButtonV2 buttonName={"CHECKOUT"}></ButtonV2>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-totals {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 1000px) {
      display: grid;
      justify-items: center;
      margin-left: 2rem;
    }

    h5 {
      margin: 0 7.5rem;
    }
    input {
      padding: 1.5rem 3rem;
      border-radius: 5rem;
      border: 1px solid var(--light-grey);
      @media only screen and (max-width: 1000px) {
        padding: 0.75rem 1.5rem;
        margin: 2rem 0;
      }
    }
  }
`;

export default CartTotals;
