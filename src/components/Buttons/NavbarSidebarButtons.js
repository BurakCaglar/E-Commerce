import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../../context/useProductsContext";
import { useCartContext } from "../../context/useCartContext";

const NavbarSidebarButtons = ({ buttonColor }) => {
  const { closeSidebar } = useProductsContext();
  const { totalProducts } = useCartContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={() => closeSidebar()}>
        <div className="cart-container" style={{ color: `${buttonColor}` }}>
          <AiOutlineShoppingCart />
          <span className="cart-value">{totalProducts}</span>
        </div>
      </Link>
      <button
        type="button"
        style={{ color: `${buttonColor}` }}
        className="login-btn"
      >
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
    margin-right: 2.5rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      position: relative;
      font-size: 3rem;
      &:hover {
        color: black;
      }
    }
    &:hover {
      color: black;
    }
  }
  .cart-value {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -1rem;
    right: -1.5rem;
    width: 1rem;
    height: 1rem;
    font-size: 1.5rem;
    color: white;
    padding: 11px;
    background-color: #dd1e31;
    border-radius: 5rem;
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
      font-size: 3rem;
      &:hover {
        color: black;
      }
    }
    &:hover {
      color: black;
    }
  }
`;
export default NavbarSidebarButtons;
