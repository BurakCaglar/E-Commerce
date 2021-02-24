import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../../context/useProductsContext";
import { useCartContext } from "../../context/useCartContext";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalProducts } = useCartContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={() => closeSidebar()}>
        <span className="cart-container">
          <AiOutlineShoppingCart />
          <span className="cart-value">{totalProducts}</span>
        </span>
      </Link>
      <button type="button" className="login-btn">
        <AiOutlineUserAdd />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .cart-btn {
    color: var(--grey);
    font-size: 2.2rem;
    letter-spacing: var(--spacing);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 2.2rem;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -19px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: orange;
    padding: 12px;
  }
  .login-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--grey);
    letter-spacing: var(--spacing);
    svg {
      font-size: 2.2rem;
    }
  }
`;
export default CartButtons;
